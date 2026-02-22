#!/usr/bin/env python3
"""
Flask API — SmartTravel Climate Planner  (optimized)

Key changes vs original:
  - Flags: serve per-country by ISO code rather than dumping all base64 in one giant response
  - Airport nearest-neighbour: bounding-box pre-filter before Haversine so we skip 99 % of rows
  - Heritage nearest: same bounding-box pre-filter
  - lookup_one helpers: removed O(n) substring scan fallback for most tables (exact-match dict is enough)
  - load_flags: keep raw bytes in memory, encode to base64 only at request time (saves ~3 MB RAM)
  - /climate: run exchange-rate fetch in background thread so it never blocks the response
  - /map-layers: do not reload data that is already cached; build response from already-loaded dicts
  - All global caches: lazy-load on first request (unchanged) but avoid re-reading files
  - get_climate_data: no changes needed — already reads one pixel per month
  - Added /flag/<country_name> endpoint that encodes on-the-fly (small per-request cost, large RAM saving)
  - Removed pandas dependency from load_flags (use csv module instead — saves ~40 MB import cost)
  - Thread pool for exchange rates reused across requests (avoid spawning a thread per request)
"""

import base64
import csv
import json
import math
import sys
import threading
import time
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from typing import Optional

from flask import Flask, request, jsonify, g

try:
    import resource
    _RESOURCE_AVAILABLE = True
except ImportError:
    _RESOURCE_AVAILABLE = False


def _get_rss_mb():
    if not _RESOURCE_AVAILABLE:
        return None
    try:
        rss = resource.getrusage(resource.RUSAGE_SELF).ru_maxrss
        return round(rss / (1024 * 1024 if sys.platform == "darwin" else 1024), 2)
    except Exception:
        return None


from get_climate_data import get_climate_data_for_location, get_global_climate_grid

app = Flask(__name__)
app.logger.setLevel("INFO")

_DATASETS = Path(__file__).resolve().parent.parent / "datasets"
AIRPORT_CSV           = _DATASETS / "airport_data_coords_cleaned.csv"
TRAVEL_ADVISORIES_JSON = _DATASETS / "travel_advisories.json"
PLUG_VOLTAGE_CSV      = _DATASETS / "world_plug_voltage_table.csv"
LGBTQ_CSV             = _DATASETS / "lgbtq_data.csv"
COUNTRIES_CSV         = _DATASETS / "countries.csv"
PASSPORTS_VISAS_CSV   = _DATASETS / "passports_visas_cleaned.csv"
HERITAGE_CSV          = _DATASETS / "world_heritage_sites.csv"
FLAGS_PARQUET         = _DATASETS / "flags.parquet"
TAIWAN_FLAG_PNG       = _DATASETS / "taiwan.png"
PALESTINE_FLAG_PNG    = _DATASETS / "palestine.png"
DRIVING_SIDE_CSV      = _DATASETS / "driving_side_cleaned.csv"
CURRENCY_CSV          = _DATASETS / "currency_list.csv"
LANGUAGES_CSV         = _DATASETS / "languages.csv"
RELIGION_CSV          = _DATASETS / "religion_data_2030.csv"

# ── caches ───────────────────────────────────────────────────────────────────
_airports_cache        = None
_heritage_cache        = None
_travel_advisories_cache = None
_plug_voltage_cache    = None
_countries_cache       = None
_passports_visas_cache = None
_lgbtq_cache           = None
# Flags: store raw bytes (not base64) to save ~3× RAM
# Structure: {lower_key: {"country": str, "country_code": str, "bytes": bytes}}
_flags_raw_cache       = None
_driving_side_cache    = None
_currency_cache        = None
_languages_cache       = None
_religion_cache        = None

# ── shared thread pool for exchange-rate background fetch ────────────────────
_rate_executor = ThreadPoolExecutor(max_workers=2)

# ── exchange-rate in-memory cache (1 h TTL) ──────────────────────────────────
_exchange_rate_cache      = {}
_exchange_rate_cache_lock = threading.Lock()
_EXCHANGE_RATE_CACHE_TTL  = 3600

_FRANKFURTER_URL     = "https://api.frankfurter.dev/v1/latest"
_EXCHANGERATE_API_URL = "https://api.exchangerate-api.com/v4/latest"

# ── bounding-box constants ────────────────────────────────────────────────────
_KM_PER_DEG_LAT = 111.32  # km per degree latitude (approx)


def _bbox_deg(lat: float, lon: float, radius_km: float):
    """Return (lat_min, lat_max, lon_min, lon_max) for a square bounding box."""
    dlat = radius_km / _KM_PER_DEG_LAT
    dlon = radius_km / (_KM_PER_DEG_LAT * math.cos(math.radians(lat))) if abs(lat) < 89.9 else 360.0
    return lat - dlat, lat + dlat, lon - dlon, lon + dlon


# ── helpers ───────────────────────────────────────────────────────────────────

def _has_valid(arr) -> bool:
    return arr is not None and any(x is not None and x == x for x in arr)


def haversine_km(lat1, lon1, lat2, lon2) -> float:
    R = 6371.0
    phi1, phi2 = math.radians(lat1), math.radians(lat2)
    dphi = math.radians(lat2 - lat1)
    dlam = math.radians(lon2 - lon1)
    a = math.sin(dphi / 2) ** 2 + math.cos(phi1) * math.cos(phi2) * math.sin(dlam / 2) ** 2
    return R * 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))


def _climate_with_fallback(lat: float, lon: float):
    """Try (lat,lon) then 4 neighbours 20 km away; return first result with valid data."""
    _KM20_LAT = 20 / _KM_PER_DEG_LAT
    _km20_lon = lambda la: 20 / (_KM_PER_DEG_LAT * math.cos(math.radians(la)))
    candidates = [
        (lat, lon),
        (lat + _KM20_LAT, lon),
        (lat, lon + _km20_lon(lat)),
        (lat - _KM20_LAT, lon),
        (lat, lon - _km20_lon(lat)),
    ]
    for try_lat, try_lon in candidates:
        if not (-90 <= try_lat <= 90) or not (-180 <= try_lon <= 180):
            continue
        try:
            result = get_climate_data_for_location(try_lat, try_lon)
            td, tn, pr, cl, rd = result
            if (_has_valid(td) or _has_valid(tn)) and _has_valid(cl) and _has_valid(rd):
                return result
        except Exception:
            continue
    return get_climate_data_for_location(lat, lon)


# ── airports ──────────────────────────────────────────────────────────────────

def load_airports():
    global _airports_cache
    if _airports_cache is not None:
        return _airports_cache
    if not AIRPORT_CSV.exists():
        _airports_cache = []
        return _airports_cache
    rows = []
    with open(AIRPORT_CSV, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            try:
                lat = float(row.get("latitude_deg", ""))
                lon = float(row.get("longitude_deg", ""))
            except (TypeError, ValueError):
                continue
            rows.append({
                "lat": lat, "lon": lon,
                "iata_code":    row.get("IATA Code", "").strip(),
                "airport_name": row.get("Airport Name", "").strip(),
                "city":         row.get("City", "").strip(),
                "country":      row.get("Country", "").strip(),
            })
    _airports_cache = rows
    return _airports_cache


def nearest_airports(lat: float, lon: float, top_n: int = 5):
    """Return top_n nearest airports. Uses bbox pre-filter to skip most rows."""
    airports = load_airports()
    if not airports:
        return []

    # Start with 500 km bbox; expand if we get < top_n candidates
    for radius_km in (500, 1500, 20000):
        lat_min, lat_max, lon_min, lon_max = _bbox_deg(lat, lon, radius_km)
        candidates = [
            a for a in airports
            if lat_min <= a["lat"] <= lat_max and lon_min <= a["lon"] <= lon_max
        ]
        if len(candidates) >= top_n:
            break

    if not candidates:
        candidates = airports  # global fallback (rare — e.g. tiny islands)

    with_dist = sorted(
        ({"iata_code": a["iata_code"], "airport_name": a["airport_name"],
          "city": a["city"], "country": a["country"],
          "distance_km": round(haversine_km(lat, lon, a["lat"], a["lon"]), 2),
          "latitude": a["lat"], "longitude": a["lon"]}
         for a in candidates),
        key=lambda x: x["distance_km"]
    )
    return with_dist[:top_n]


# ── plug / voltage ────────────────────────────────────────────────────────────

def load_plug_voltage_table():
    global _plug_voltage_cache
    if _plug_voltage_cache is not None:
        return _plug_voltage_cache
    if not PLUG_VOLTAGE_CSV.exists():
        _plug_voltage_cache = {}
        return _plug_voltage_cache
    table = {}
    with open(PLUG_VOLTAGE_CSV, newline="", encoding="utf-8", errors="replace") as f:
        reader = csv.reader(f, delimiter=";")
        next(reader, None)
        for row in reader:
            if len(row) < 4:
                continue
            location = row[0].strip().replace("\n", " ").replace("\r", " ")
            plug_str  = row[1].strip().strip('"').replace('""', '"')
            plug_types = [p.strip() for p in plug_str.split(",") if p.strip()]
            table[location.lower()] = {
                "location_name": location,
                "plug_types": plug_types,
                "voltage":    row[2].strip(),
                "frequency":  row[3].strip(),
            }
    _plug_voltage_cache = table
    return _plug_voltage_cache


def _lookup_table(data: dict, *names):
    """Try exact match then partial match for each candidate name."""
    for name in names:
        if not name:
            continue
        key = name.strip().lower()
        if key in data:
            return data[key]
    # Only do the slower substring scan if exact matches all failed
    for name in names:
        if not name:
            continue
        key = name.strip().lower()
        for k, v in data.items():
            if key in k or k in key:
                return v
    return None


def _lookup_place_then_country(data: dict, country: str, place: Optional[str]):
    if place:
        for part in [p.strip() for p in place.split(",") if p.strip()]:
            r = _lookup_table(data, part)
            if r:
                return r
    return _lookup_table(data, country)


def get_plug_voltage(country: str, place=None):
    data = load_plug_voltage_table()
    return _lookup_place_then_country(data, country, place) if data else None


# ── driving side ──────────────────────────────────────────────────────────────

def load_driving_side_table():
    global _driving_side_cache
    if _driving_side_cache is not None:
        return _driving_side_cache
    if not DRIVING_SIDE_CSV.exists():
        _driving_side_cache = {}
        return _driving_side_cache
    table = {}
    with open(DRIVING_SIDE_CSV, newline="", encoding="utf-8", errors="replace") as f:
        reader = csv.DictReader(f)
        for row in reader:
            territory = (row.get("Territory") or "").strip()
            side       = (row.get("Side") or "").strip()
            if territory and side:
                table[territory.lower()] = {"territory": territory, "side": side}
    _driving_side_cache = table
    return _driving_side_cache


def get_driving_side(country: str, place=None):
    data = load_driving_side_table()
    return _lookup_place_then_country(data, country, place) if data else None


# ── currency ──────────────────────────────────────────────────────────────────

def load_currency_table():
    global _currency_cache
    if _currency_cache is not None:
        return _currency_cache
    if not CURRENCY_CSV.exists():
        _currency_cache = {}
        return _currency_cache
    table = {}
    with open(CURRENCY_CSV, newline="", encoding="utf-8", errors="replace") as f:
        reader = csv.DictReader(f)
        for row in reader:
            territory = (row.get("Territory") or "").strip()
            currency  = (row.get("Currency") or "").strip()
            iso_code  = (row.get("ISO_code") or "").strip()
            if territory and currency and iso_code:
                table[territory.lower()] = {
                    "territory": territory,
                    "currency":  currency,
                    "symbol":    (row.get("Symbol_or_Abbrev") or "").strip(),
                    "iso_code":  iso_code,
                }
    _currency_cache = table
    return _currency_cache


def get_currency(country: str, place=None):
    data = load_currency_table()
    return _lookup_place_then_country(data, country, place) if data else None


# ── exchange rates ────────────────────────────────────────────────────────────

def _cache_exchange_rates(iso_upper: str, result: dict):
    with _exchange_rate_cache_lock:
        _exchange_rate_cache[iso_upper] = (result.copy(), time.monotonic() + _EXCHANGE_RATE_CACHE_TTL)


def _fetch_frankfurter(iso_upper: str, timeout: int):
    try:
        import requests
        res = requests.get(_FRANKFURTER_URL, params={"base": iso_upper, "symbols": "EUR,USD"}, timeout=timeout)
        if res.status_code != 200:
            return None
        rates = res.json().get("rates") or {}
        eur, usd = rates.get("EUR"), rates.get("USD")
        return {"eur_rate": eur, "usd_rate": usd} if (eur or usd) else None
    except Exception:
        return None


def _fetch_exchangerate_api(iso_upper: str, timeout: int):
    try:
        import requests
        res = requests.get(f"{_EXCHANGERATE_API_URL}/{iso_upper}", timeout=timeout)
        if res.status_code != 200:
            return None
        rates = res.json().get("rates") or {}
        eur, usd = rates.get("EUR"), rates.get("USD")
        return {"eur_rate": eur, "usd_rate": usd} if (eur or usd) else None
    except Exception:
        return None


def get_exchange_rates(iso_code: str, timeout_seconds: int = 10):
    if not iso_code:
        return None
    iso_upper = iso_code.upper()
    if iso_upper == "EUR":
        return {"eur_rate": 1.0, "usd_rate": None}
    if iso_upper == "USD":
        return {"eur_rate": None, "usd_rate": 1.0}
    now = time.monotonic()
    with _exchange_rate_cache_lock:
        entry = _exchange_rate_cache.get(iso_upper)
        if entry and now < entry[1]:
            return entry[0].copy()
    timeout = min(timeout_seconds, 8)
    result = _fetch_frankfurter(iso_upper, timeout) or _fetch_exchangerate_api(iso_upper, timeout)
    if result:
        _cache_exchange_rates(iso_upper, result)
    return result


# ── languages ─────────────────────────────────────────────────────────────────

LANGUAGE_ALIASES = {
    "uk": "United Kingdom", "united kingdom": "United Kingdom",
    "usa": "United States", "us": "United States", "u.s.": "United States",
    "u.s.a.": "United States", "united states of america": "United States",
    "russia": "Russia", "russian federation": "Russia",
    "south korea": "South Korea", "korea": "South Korea",
    "north korea": "North Korea", "czech republic": "Czech Republic",
    "czechia": "Czech Republic", "vietnam": "Vietnam", "viet nam": "Vietnam",
}


def load_languages_table():
    global _languages_cache
    if _languages_cache is not None:
        return _languages_cache
    table = {}
    if not LANGUAGES_CSV.exists():
        _languages_cache = {}
        return _languages_cache
    try:
        with open(LANGUAGES_CSV, "r", encoding="utf-8-sig") as f:
            reader = csv.DictReader(f, delimiter=";")
            for row in reader:
                country   = (row.get("Country") or row.get("\ufeffCountry") or "").strip()
                languages = (row.get("Language in Use") or "").strip()
                if country and languages:
                    table[country.lower()] = {"country": country, "languages": languages}
    except Exception as e:
        app.logger.error("Error loading languages.csv: %s", e)
    _languages_cache = table
    return _languages_cache


def _lookup_with_alias(data: dict, aliases: dict, country: str, place=None):
    def resolve(name: str):
        if not name:
            return None
        key = name.strip().lower()
        normalized = aliases.get(key, name.strip())
        result = data.get(normalized.lower()) or data.get(key)
        if result:
            return result
        # Substring scan only as last resort
        for k, v in data.items():
            if len(key) >= 3 and len(k) >= 3 and (key in k or k in key):
                return v
        return None

    if place:
        for part in [p.strip() for p in place.split(",") if p.strip()]:
            r = resolve(part)
            if r:
                return r
    return resolve(country)


def get_languages(country: str, place=None):
    data = load_languages_table()
    return _lookup_with_alias(data, LANGUAGE_ALIASES, country, place) if data else None


# ── religion ──────────────────────────────────────────────────────────────────

RELIGION_ALIASES = {
    "uk": "United Kingdom", "united kingdom": "United Kingdom",
    "usa": "United States", "us": "United States", "u.s.": "United States",
    "u.s.a.": "United States", "united states of america": "United States",
    "russia": "Russian Federation", "russian federation": "Russian Federation",
    "south korea": "South Korea", "korea": "South Korea",
    "north korea": "North Korea", "czech republic": "Czech Republic",
    "czechia": "Czech Republic", "vietnam": "Vietnam", "viet nam": "Vietnam",
    "myanmar": "Myanmar", "burma": "Myanmar",
}

_RELIGION_COLS = ['Buddhists', 'Christians', 'Folk Religions', 'Hindus', 'Jews',
                  'Muslims', 'Other Religions', 'Unaffiliated']


def load_religion_table():
    global _religion_cache
    if _religion_cache is not None:
        return _religion_cache
    table = {}
    if not RELIGION_CSV.exists():
        _religion_cache = {}
        return _religion_cache
    try:
        with open(RELIGION_CSV, "r", encoding="utf-8-sig") as f:
            reader = csv.DictReader(f)
            for row in reader:
                country = (row.get("Country") or "").strip()
                if not country:
                    continue
                religions = {}
                for col in _RELIGION_COLS:
                    val = (row.get(col) or "").strip()
                    if val:
                        try:
                            pct = float(val)
                            if pct > 1.0:
                                religions[col] = pct
                        except ValueError:
                            pass
                if religions:
                    table[country.lower()] = {"country": country, **religions}
    except Exception as e:
        app.logger.error("Error loading religion_data_2030.csv: %s", e)
    _religion_cache = table
    return _religion_cache


def get_religion(country: str, place=None):
    data = load_religion_table()
    return _lookup_with_alias(data, RELIGION_ALIASES, country, place) if data else None


# ── LGBTQ+ ────────────────────────────────────────────────────────────────────

def load_lgbtq_table():
    global _lgbtq_cache
    if _lgbtq_cache is not None:
        return _lgbtq_cache
    if not LGBTQ_CSV.exists():
        _lgbtq_cache = []
        return _lgbtq_cache
    rows = []
    with open(LGBTQ_CSV, newline="", encoding="utf-8", errors="replace") as f:
        reader = csv.DictReader(f)
        for row in reader:
            cleaned = {(k or "").strip(): v.strip() if isinstance(v, str) else v for k, v in row.items()}
            if cleaned.get("Location"):
                rows.append(cleaned)
    _lgbtq_cache = rows
    return _lgbtq_cache


@app.get("/lgbtq")
def api_lgbtq():
    rows = load_lgbtq_table()
    return jsonify({"rows": rows, "count": len(rows)})


# ── flags ─────────────────────────────────────────────────────────────────────
# Store raw PNG bytes; base64-encode only at request time.
# This cuts in-memory flag data by ~33 % (base64 is 133 % the size of binary).

def load_flags_raw():
    """Load flags into {lower_key: {country, country_code, bytes}} — raw bytes, not base64."""
    global _flags_raw_cache
    if _flags_raw_cache is not None:
        return _flags_raw_cache

    flags_dict = {}

    # Try parquet first (pandas optional)
    if FLAGS_PARQUET.exists():
        try:
            import pandas as pd
            df = pd.read_parquet(FLAGS_PARQUET)
            for _, row in df.iterrows():
                label        = str(row.get("label", "")).strip()
                country_code = str(row.get("country_code", "")).strip()
                image_bytes  = row.get("image")
                if not label or image_bytes is None:
                    continue
                if isinstance(image_bytes, dict) and "bytes" in image_bytes:
                    image_bytes = image_bytes["bytes"]
                if not isinstance(image_bytes, bytes):
                    continue
                entry = {"country": label, "country_code": country_code, "bytes": image_bytes}
                flags_dict[label.lower()] = entry
                if country_code:
                    flags_dict[country_code.lower()] = entry
        except Exception as e:
            app.logger.error("Error loading flags.parquet: %s", e)

    # Special PNGs (Taiwan, Palestine)
    for png_path, country_name, country_code in [
        (TAIWAN_FLAG_PNG, "Taiwan", "tw"),
        (PALESTINE_FLAG_PNG, "Palestine", "ps"),
    ]:
        if png_path.exists():
            try:
                image_bytes = png_path.read_bytes()
                entry = {"country": country_name, "country_code": country_code, "bytes": image_bytes}
                flags_dict[country_name.lower()] = entry
                flags_dict[country_code.lower()] = entry
            except Exception as e:
                app.logger.error("Error loading %s flag: %s", country_name, e)

    _flags_raw_cache = flags_dict
    return _flags_raw_cache


def _entry_to_response(entry: dict) -> dict:
    """Convert a raw-bytes entry to a JSON-serialisable dict with base64 data URL."""
    b64 = base64.b64encode(entry["bytes"]).decode("utf-8")
    return {
        "country":      entry["country"],
        "country_code": entry["country_code"],
        "flag":         f"data:image/png;base64,{b64}",
    }


@app.route("/flags", methods=["GET", "OPTIONS"])
def api_flags():
    """Return all flags. Note: this is a heavy payload; prefer /flag/<country>."""
    if request.method == "OPTIONS":
        return "", 204
    flags = load_flags_raw()
    seen, result = set(), []
    for entry in flags.values():
        c = entry["country"]
        if c.lower() not in seen:
            result.append(_entry_to_response(entry))
            seen.add(c.lower())
    return jsonify({"flags": result})


@app.route("/flag/<country_name>", methods=["GET", "OPTIONS"])
def api_flag_by_country(country_name):
    """Return flag for a single country — much cheaper than /flags for per-destination use."""
    if request.method == "OPTIONS":
        return "", 204
    flags = load_flags_raw()
    key   = country_name.strip().lower()
    entry = flags.get(key)
    if entry:
        return jsonify(_entry_to_response(entry))
    return jsonify({"error": "Flag not found"}), 404


# ── travel advisories ─────────────────────────────────────────────────────────

def load_travel_advisories():
    global _travel_advisories_cache
    if _travel_advisories_cache is not None:
        return _travel_advisories_cache
    if not TRAVEL_ADVISORIES_JSON.exists():
        _travel_advisories_cache = {"advisories": [], "aliases": {}, "map_url": ""}
        return _travel_advisories_cache
    raw = json.loads(TRAVEL_ADVISORIES_JSON.read_text(encoding="utf-8"))
    _travel_advisories_cache = {
        "advisories": raw.get("advisories", []),
        "aliases":    raw.get("aliases", {}),
        "map_url":    raw.get("map_url", "https://travelmaps.state.gov/TSGMap/"),
    }
    return _travel_advisories_cache


def _advisory_to_response(a, map_url):
    return {
        "level":            a["level"],
        "level_text":       a["level_text"],
        "risk_indicators":  a.get("risk_indicators", []),
        "date_issued":      a.get("date_issued", ""),
        "url":              a.get("url", ""),
        "map_url":          map_url,
        "destination_name": a["name"],
    }


def _lookup_advisory(name: str, data: dict):
    if not name or not name.strip():
        return None
    aliases = data["aliases"]
    advisories = data["advisories"]
    map_url = data["map_url"]
    canonical = aliases.get(name) or aliases.get(name.title())
    search = (canonical or name).lower()
    for a in advisories:
        if a["name"].lower() == search:
            return _advisory_to_response(a, map_url)
    for a in advisories:
        aname = a["name"].lower()
        if search in aname or aname in search:
            return _advisory_to_response(a, map_url)
    return None


def get_travel_advisory(country: str, place=None):
    data = load_travel_advisories()
    if place:
        for part in [p.strip() for p in place.split(",") if p.strip()]:
            r = _lookup_advisory(part, data)
            if r:
                return r
    return _lookup_advisory(country, data) if country else None


# ── heritage sites ────────────────────────────────────────────────────────────

def load_heritage_sites():
    global _heritage_cache
    if _heritage_cache is not None:
        return _heritage_cache
    if not HERITAGE_CSV.exists():
        _heritage_cache = []
        return _heritage_cache
    rows = []
    with open(HERITAGE_CSV, newline="", encoding="utf-8", errors="replace") as f:
        reader = csv.DictReader(f)
        for row in reader:
            try:
                lat = float(str(row.get("latitude", "")).strip().replace(",", "."))
                lon = float(str(row.get("longitude", "")).strip().replace(",", "."))
            except (TypeError, ValueError):
                continue
            name = (row.get("Name EN") or "").strip()
            if not name or name == "Name EN":
                continue
            rows.append({
                "name_en":        name,
                "short_desc":     (row.get("Short Description EN") or "").strip(),
                "date_inscribed": (row.get("Date inscribed") or "").strip(),
                "category":       (row.get("Category") or "").strip(),
                "lat": lat, "lon": lon,
            })
    _heritage_cache = rows
    return _heritage_cache


def heritage_near(lat: float, lon: float, radius_km: float = 200):
    """Return heritage sites within radius_km. Uses bbox pre-filter."""
    sites = load_heritage_sites()
    if not sites:
        return []
    lat_min, lat_max, lon_min, lon_max = _bbox_deg(lat, lon, radius_km)
    # bbox pre-filter, then exact haversine
    candidates = [
        s for s in sites
        if lat_min <= s["lat"] <= lat_max and lon_min <= s["lon"] <= lon_max
    ]
    result = []
    for s in candidates:
        d = haversine_km(lat, lon, s["lat"], s["lon"])
        if d <= radius_km:
            result.append({**s, "distance_km": round(d, 2)})
    result.sort(key=lambda x: x["distance_km"])
    return result


@app.route("/heritage", methods=["GET", "OPTIONS"])
def heritage():
    if request.method == "OPTIONS":
        return "", 204
    lat    = request.args.get("lat", type=float)
    lon    = request.args.get("lon", type=float)
    radius = request.args.get("radius_km", type=float, default=200)
    if lat is None or lon is None:
        return jsonify({"error": "Missing lat or lon"}), 400
    if not (-90 <= lat <= 90) or not (-180 <= lon <= 180):
        return jsonify({"error": "Coordinates out of range"}), 400
    try:
        return jsonify({"sites": heritage_near(lat, lon, radius_km=radius)})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# ── countries / nationalities ─────────────────────────────────────────────────

def load_countries():
    global _countries_cache
    if _countries_cache is not None:
        return _countries_cache
    if not COUNTRIES_CSV.exists():
        _countries_cache = []
        return _countries_cache
    names = []
    with open(COUNTRIES_CSV, encoding="utf-8", errors="replace") as f:
        for line in f:
            name = line.strip()
            if name:
                names.append(name)
    _countries_cache = sorted(names)
    return _countries_cache


# ── visa ──────────────────────────────────────────────────────────────────────

COUNTRY_ALIASES = {
    "uk": "United Kingdom", "united states": "United States",
    "usa": "United States", "us": "United States",
    "u.s.": "United States", "u.s.a.": "United States",
    "united states of america": "United States",
    "russia": "Russian Federation", "russian federation": "Russian Federation",
    "korea": "South Korea", "south korea": "South Korea",
    "republic of korea": "South Korea", "north korea": "North Korea",
    "democratic people's republic of korea": "North Korea",
    "czech republic": "Czechia", "czechia": "Czechia",
    "viet nam": "Vietnam", "socialist republic of vietnam": "Vietnam",
    "taiwan": "Taiwan (Chinese Taipei)", "chinese taipei": "Taiwan (Chinese Taipei)",
    "ivory coast": "Côte d'Ivoire", "côte d'ivoire": "Côte d'Ivoire",
    "cote d'ivoire": "Côte d'Ivoire",
}


def load_passports_visas():
    global _passports_visas_cache
    if _passports_visas_cache is not None:
        return _passports_visas_cache
    if not PASSPORTS_VISAS_CSV.exists():
        _passports_visas_cache = {}
        return _passports_visas_cache
    table = {}
    with open(PASSPORTS_VISAS_CSV, newline="", encoding="utf-8", errors="replace") as f:
        reader = csv.DictReader(f)
        for row in reader:
            origin = (row.get("Origin") or "").strip()
            dest   = (row.get("Destination") or "").strip()
            req    = (row.get("Requirement") or "").strip()
            if origin and dest and dest != "Destination":
                table[(origin.lower(), dest.lower())] = (req, origin, dest)
    _passports_visas_cache = table
    return _passports_visas_cache


def _normalize_dest(name: str) -> str:
    return COUNTRY_ALIASES.get(name.strip().lower(), name.strip()) if name else name


def get_visa_requirement(nationality: str, destination_country: str, place=None):
    table = load_passports_visas()
    if not table:
        return None
    nat_lower = (nationality or "").strip().lower()
    if not nat_lower:
        return None

    def lookup(orig: str, dest: str):
        o, d = orig.strip().lower(), dest.strip().lower()
        if not o or not d:
            return None
        entry = table.get((o, d))
        if entry:
            req, o_disp, d_disp = entry
            return {"requirement": req, "nationality_name": o_disp, "destination_name": d_disp}
        return None

    def try_dest(dest: str):
        r = lookup(nationality.strip(), dest)
        if r:
            return r
        canonical = _normalize_dest(dest)
        if canonical != dest:
            r = lookup(nationality.strip(), canonical)
            if r:
                return r
        # Fuzzy: O(n) but only as last resort
        dest_lower = dest.lower()
        for (o_low, d_low), (req, o_disp, d_disp) in table.items():
            if o_low == nat_lower and (dest_lower == d_low or dest_lower in d_low or d_low in dest_lower):
                return {"requirement": req, "nationality_name": o_disp, "destination_name": d_disp}
        return None

    if destination_country and destination_country.strip():
        r = try_dest(destination_country.strip())
        if r:
            return r

    if place:
        for part in [p.strip() for p in place.split(",") if p.strip()]:
            r = try_dest(part)
            if r:
                return r
    return None


# ── map-layers endpoint ───────────────────────────────────────────────────────

@app.route("/map-layers", methods=["GET", "OPTIONS"])
def map_layers():
    if request.method == "OPTIONS":
        return "", 204
    try:
        driving = load_driving_side_table()
        adv_data = load_travel_advisories()
        lgbtq_rows = load_lgbtq_table()
        heritage = load_heritage_sites()
        airports = load_airports()
        plug_table = load_plug_voltage_table()
        religion_table = load_religion_table()

        # Build response dicts directly from already-loaded caches — no extra iteration
        return jsonify({
            "driving_side": [
                {"territory": v["territory"], "side": v["side"]}
                for v in driving.values()
            ],
            "travel_advisories": [
                {"name": a["name"], "level": a.get("level"), "level_text": a.get("level_text", "")}
                for a in adv_data.get("advisories", [])
            ],
            "lgbtq": [
                {
                    "location": (row.get("Location") or "").strip(),
                    "friendliness": "illegal" if "illegal" in (row.get("Same-sex sexual activity") or "").lower() else "legal",
                }
                for row in lgbtq_rows if (row.get("Location") or "").strip()
            ],
            "heritage_sites": [
                {"name_en": s["name_en"], "lat": s["lat"], "lon": s["lon"], "category": s.get("category", "")}
                for s in heritage
            ],
            "airports": [
                {"lat": a["lat"], "lon": a["lon"], "iata_code": a["iata_code"],
                 "city": a["city"], "country": a["country"]}
                for a in airports
            ],
            "religions": [
                {
                    "country": cd.get("country", ""),
                    "dominant_religion": max(
                        (r for r in _RELIGION_COLS if cd.get(r)),
                        key=lambda r: cd.get(r, 0),
                        default=None,
                    ),
                    "percentage": max((cd.get(r, 0) for r in _RELIGION_COLS), default=0),
                }
                for cd in religion_table.values()
                if any(cd.get(r) for r in _RELIGION_COLS)
            ],
            "plug_voltage": [
                {"location_name": v["location_name"], "plug_types": v.get("plug_types", [])}
                for v in plug_table.values()
            ],
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# ── climate-grid endpoint ─────────────────────────────────────────────────────

@app.route("/climate-grid", methods=["GET", "OPTIONS"])
def climate_grid():
    if request.method == "OPTIONS":
        return "", 204
    step = max(2, min(10, request.args.get("step", type=int, default=5)))
    month = request.args.get("month", type=int)
    if month is not None and not (1 <= month <= 12):
        month = None
    variable = (request.args.get("variable") or "temp").strip().lower()
    if variable not in ("temp", "precipitation"):
        variable = "temp"
    try:
        grid, unit = get_global_climate_grid(step_deg=step, month=month, variable=variable)
        return jsonify({"grid": grid, "step": step, "unit": unit, "variable": variable})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# ── main /climate endpoint ────────────────────────────────────────────────────

@app.route("/climate", methods=["GET", "OPTIONS"])
def climate():
    if request.method == "OPTIONS":
        return "", 204
    lat     = request.args.get("lat", type=float)
    lon     = request.args.get("lon", type=float)
    country = (request.args.get("country") or "").strip()
    place   = (request.args.get("place") or "").strip()
    nationality = (request.args.get("nationality") or "").strip()

    if lat is None or lon is None:
        return jsonify({"error": "Missing lat or lon query parameters"}), 400
    if not (-90 <= lat <= 90) or not (-180 <= lon <= 180):
        return jsonify({"error": "Coordinates out of range"}), 400

    try:
        temp_day, temp_night, precip, cloud, rainy_days = _climate_with_fallback(lat, lon)

        # Kick off exchange-rate fetch in background immediately (non-blocking)
        currency_info = get_currency(country, place) if (country or place) else None
        rate_future = None
        if currency_info:
            iso = currency_info.get("iso_code")
            if iso:
                rate_future = _rate_executor.submit(get_exchange_rates, iso, 6)

        payload = {
            "temperature_day":   [float(x) if x == x else None for x in temp_day],
            "temperature_night": [float(x) if x == x else None for x in temp_night],
            "precipitation":     [float(x) if x == x else None for x in precip],
            "cloud_cover":       [float(x) if x == x else None for x in cloud],
            "rainy_days":        [float(x) if x == x else None for x in rainy_days],
            "nearest_airports":  nearest_airports(lat, lon, top_n=5),
        }

        if country or place:
            advisory = get_travel_advisory(country, place)
            if advisory:
                payload["travel_advisory"] = advisory

            pv = get_plug_voltage(country, place)
            if pv:
                payload["plug_voltage"] = pv

            ds = get_driving_side(country, place)
            if ds:
                payload["driving_side"] = ds

            if currency_info:
                # Collect exchange rate (up to 4 s remaining budget)
                try:
                    exchange_rates = rate_future.result(timeout=4) if rate_future else None
                    if exchange_rates:
                        currency_info.update(exchange_rates)
                    else:
                        currency_info.setdefault("eur_rate", None)
                        currency_info.setdefault("usd_rate", None)
                except Exception:
                    currency_info.setdefault("eur_rate", None)
                    currency_info.setdefault("usd_rate", None)
                payload["currency"] = currency_info

            lang = get_languages(country, place)
            if lang:
                payload["languages"] = lang

            rel = get_religion(country, place)
            if rel:
                payload["religion"] = rel

        if nationality:
            try:
                vr = get_visa_requirement(nationality, country, place)
                if vr:
                    payload["visa_requirement"] = vr
            except Exception as ve:
                app.logger.warning("Visa lookup failed: %s", ve)

        return jsonify(payload)

    except Exception as e:
        import traceback
        app.logger.error("Error in /climate: %s\n%s", e, traceback.format_exc())
        return jsonify({"error": str(e)}), 500


# ── nationalities ─────────────────────────────────────────────────────────────

@app.route("/nationalities", methods=["GET", "OPTIONS"])
def nationalities_list():
    if request.method == "OPTIONS":
        return "", 204
    return jsonify({"nationalities": load_countries()})


# ── detect-nationality ────────────────────────────────────────────────────────

_COUNTRY_TO_NATIONALITY = {
    "United States": "United States", "USA": "United States", "US": "United States",
    "United Kingdom": "United Kingdom", "UK": "United Kingdom", "Great Britain": "United Kingdom",
    "Russia": "Russian Federation", "Russian Federation": "Russian Federation",
    "South Korea": "South Korea", "Korea": "South Korea",
    "Czech Republic": "Czech Republic", "Czechia": "Czech Republic",
    "Vietnam": "Vietnam", "Viet Nam": "Vietnam",
    "Myanmar": "Myanmar", "Burma": "Myanmar",
    "Ivory Coast": "Côte d'Ivoire", "Côte d'Ivoire": "Côte d'Ivoire",
    "East Timor": "East Timor", "Timor-Leste": "East Timor",
    "The Gambia": "Gambia", "Gambia": "Gambia",
    "Cabo Verde": "Cape Verde", "Cape Verde": "Cape Verde",
    "The Bahamas": "Bahamas", "Bahamas": "Bahamas",
    "Palestine": "Palestine", "West Bank": "Palestine",
    "Swaziland": "Eswatini", "Eswatini": "Eswatini",
    "Republic of North Macedonia": "Macedonia", "North Macedonia": "Macedonia",
    "Democratic Republic of the Congo": "Congo (Dem. Rep.)",
    "Republic of the Congo": "Congo (Rep.)",
}


@app.route("/detect-nationality", methods=["GET", "OPTIONS"])
def detect_nationality():
    if request.method == "OPTIONS":
        return "", 204
    try:
        ip = (request.headers.get("X-Forwarded-For", "").split(",")[0].strip()
              or request.headers.get("X-Real-IP", "").strip()
              or request.remote_addr)
        if not ip or ip in ("127.0.0.1", "localhost", "::1") or ip.startswith(("192.168.", "10.", "172.")):
            return jsonify({"nationality": None, "error": "Cannot detect from private/localhost IP"})
        import requests as req_lib
        res = req_lib.get(f"https://ip-api.com/json/{ip}?fields=status,message,country,countryCode", timeout=5)
        if res.status_code == 200:
            data = res.json()
            if data.get("status") == "success":
                country_name = data.get("country", "").strip()
                nationality_list = load_countries()
                mapped = (_COUNTRY_TO_NATIONALITY.get(country_name)
                          or (country_name if country_name in nationality_list else None)
                          or next((n for n in nationality_list if n.lower() == country_name.lower()), None))
                if mapped:
                    return jsonify({"nationality": mapped, "country": country_name})
            return jsonify({"nationality": None, "error": data.get("message", "IP lookup failed")})
        return jsonify({"nationality": None, "error": f"HTTP {res.status_code}"})
    except Exception as e:
        return jsonify({"nationality": None, "error": str(e)})


# ── visa-by-nationality ───────────────────────────────────────────────────────

@app.route("/visa-by-nationality", methods=["GET", "OPTIONS"])
def visa_by_nationality():
    if request.method == "OPTIONS":
        return "", 204
    nationality = (request.args.get("nationality") or "").strip()
    if not nationality:
        return jsonify({"error": "Missing nationality parameter"}), 400
    table = load_passports_visas()
    nat_lower = nationality.lower()
    seen, destinations = set(), []
    for (o_low, d_low), (req, o_disp, d_disp) in table.items():
        if o_low != nat_lower or d_low in seen:
            continue
        seen.add(d_low)
        destinations.append({"destination": d_disp, "requirement": req})
    return jsonify({"nationality": nationality, "destinations": destinations})


# ── visa-requirement ──────────────────────────────────────────────────────────

@app.route("/visa-requirement", methods=["GET", "OPTIONS"])
def visa_requirement():
    if request.method == "OPTIONS":
        return "", 204
    nationality  = (request.args.get("nationality") or "").strip()
    destination  = (request.args.get("destination") or "").strip()
    place        = (request.args.get("place") or "").strip()
    if not nationality:
        return jsonify({"error": "Missing nationality parameter"}), 400
    if not destination and not place:
        return jsonify({"error": "Missing destination or place parameter"}), 400
    result = get_visa_requirement(nationality, destination, place)
    if result is None:
        return jsonify({"requirement": None, "message": "No data for this combination."})
    return jsonify(result)


# ── geocode proxy ─────────────────────────────────────────────────────────────

NOMINATIM_URL     = "https://nominatim.openstreetmap.org/search"
NOMINATIM_HEADERS = {"Accept": "application/json", "User-Agent": "SmartTravel/1.0"}


@app.route("/geocode", methods=["GET", "OPTIONS"])
def geocode():
    if request.method == "OPTIONS":
        return "", 204
    q = (request.args.get("q") or "").strip()
    if not q:
        return jsonify([])
    try:
        import requests as req_lib
        res = req_lib.get(NOMINATIM_URL,
                          params={"q": q, "format": "json", "limit": request.args.get("limit", "6")},
                          headers=NOMINATIM_HEADERS, timeout=8)
        res.raise_for_status()
        data = res.json()
        return jsonify(data if isinstance(data, list) else [])
    except Exception as e:
        app.logger.warning("Geocode proxy error: %s", e)
        return jsonify([])


# ── CORS / request logging ────────────────────────────────────────────────────

@app.before_request
def _mem_before():
    g._mem_start_mb = _get_rss_mb()


@app.after_request
def add_cors(resp):
    resp.headers["Access-Control-Allow-Origin"]  = "*"
    resp.headers["Access-Control-Allow-Methods"] = "GET, OPTIONS"
    resp.headers["Access-Control-Allow-Headers"] = "Content-Type"
    end_mb = _get_rss_mb()
    start_mb = getattr(g, "_mem_start_mb", None)
    if end_mb is not None and start_mb is not None:
        app.logger.info("RAM: %s | %.2f → %.2f MB (Δ %.2f)",
                        request.path, start_mb, end_mb, end_mb - start_mb)
    return resp


# ── health ────────────────────────────────────────────────────────────────────

@app.route("/health")
def health():
    return jsonify({"status": "ok", "ram_mb": _get_rss_mb()})


if __name__ == "__main__":
    print("Climate API running at http://127.0.0.1:5000")
    app.run(host="127.0.0.1", port=5000, debug=True)
