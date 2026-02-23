#!/usr/bin/env python3
"""
SmartTravel Climate API — FastAPI edition
=========================================

Running
-------
    pip install fastapi uvicorn[standard] httpx cachetools

    # Development
    uvicorn climate_api_fastapi:app --reload --port 5000

    # Production (2-core droplet, 100 concurrent users)
    gunicorn climate_api_fastapi:app \
        -w 4 -k uvicorn.workers.UvicornWorker \
        --bind 0.0.0.0:5000 \
        --timeout 30 --keep-alive 5
"""

import asyncio
import base64
import csv
import json
import logging
import math
import sys
import time
import traceback
from contextlib import asynccontextmanager
from pathlib import Path
from typing import Any, Optional
from concurrent.futures import ThreadPoolExecutor

import httpx
from cachetools import TTLCache
from fastapi import FastAPI, Query, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from fastapi.responses import JSONResponse

# ── logging ───────────────────────────────────────────────────────────────────
logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
log = logging.getLogger("smarttravel")

# ── climate data (CPU-bound, uses rasterio) ───────────────────────────────────
from get_climate_data import get_climate_data_for_location, get_global_climate_grid

# ── paths ─────────────────────────────────────────────────────────────────────
_DATASETS             = Path(__file__).resolve().parent.parent / "datasets"
AIRPORT_CSV           = _DATASETS / "airport_data_coords_cleaned.csv"
TRAVEL_ADVISORIES_JSON= _DATASETS / "travel_advisories.json"
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

# ── in-process caches (loaded at startup) ────────────────────────────────────
_airports_cache:        Optional[list]  = None
_heritage_cache:        Optional[list]  = None
_advisories_cache:      Optional[dict]  = None
_plug_voltage_cache:    Optional[dict]  = None
_countries_cache:       Optional[list]  = None
_passports_visas_cache: Optional[dict]  = None
_lgbtq_cache:           Optional[list]  = None
_flags_raw_cache:       Optional[dict]  = None   # {lower_key: {country, country_code, bytes}}
_driving_side_cache:    Optional[dict]  = None
_currency_cache:        Optional[dict]  = None
_languages_cache:       Optional[dict]  = None
_religion_cache:        Optional[dict]  = None

# ── TTL response cache for /climate ──────────────────────────────────────────
# Key: (lat_r, lon_r, country, place, nationality)  — lat/lon rounded to 2 dp
# 2 000 entries × ~2 KB each ≈ 4 MB max RAM
_climate_response_cache: TTLCache = TTLCache(maxsize=2_000, ttl=3600)

# ── exchange-rate in-memory cache (1 h TTL) ──────────────────────────────────
_exchange_rate_cache: TTLCache = TTLCache(maxsize=300, ttl=3600)

# ── shared async HTTP client (created at startup) ────────────────────────────
_http: Optional[httpx.AsyncClient] = None

# ── thread pool for CPU-bound climate reads ───────────────────────────────────
_cpu_pool = ThreadPoolExecutor(max_workers=4, thread_name_prefix="climate")

# ── HTTP URLs ─────────────────────────────────────────────────────────────────
_FRANKFURTER_URL      = "https://api.frankfurter.dev/v1/latest"
_EXCHANGERATE_API_URL = "https://api.exchangerate-api.com/v4/latest"
NOMINATIM_URL         = "https://nominatim.openstreetmap.org/search"
NOMINATIM_HEADERS     = {
    "Accept": "application/json",
    # Force English responses (Nominatim may otherwise localize by region/client defaults)
    "Accept-Language": "en",
    "User-Agent": "SmartTravel/1.0 (travel planner)",
}

# ── geography constants ───────────────────────────────────────────────────────
_KM_PER_DEG_LAT = 111.32

_RELIGION_COLS = [
    "Buddhists", "Christians", "Folk Religions", "Hindus", "Jews",
    "Muslims", "Other Religions", "Unaffiliated",
]

# ═══════════════════════════════════════════════════════════════════════════════
#  Lifespan — startup / shutdown
# ═══════════════════════════════════════════════════════════════════════════════

@asynccontextmanager
async def lifespan(app: FastAPI):
    """Preload all datasets and open the shared HTTP client at startup."""
    global _http

    # Shared async HTTP client with connection pooling
    _http = httpx.AsyncClient(
        timeout=httpx.Timeout(10.0, connect=5.0),
        limits=httpx.Limits(max_connections=50, max_keepalive_connections=20),
        follow_redirects=True,
    )

    # Preload all datasets in a background thread so startup is fast
    # and the first real request never pays the cold-start penalty
    log.info("Preloading datasets …")
    loop = asyncio.get_event_loop()
    await loop.run_in_executor(None, _preload_all_datasets)
    log.info("Datasets ready.")

    yield  # ── app runs here ──

    await _http.aclose()
    _cpu_pool.shutdown(wait=False)


def _preload_all_datasets():
    """Load every dataset into its global cache. Called once at startup."""
    load_airports()
    load_heritage_sites()
    load_travel_advisories()
    load_plug_voltage_table()
    load_countries()
    load_passports_visas()
    load_lgbtq_table()
    load_flags_raw()
    load_driving_side_table()
    load_currency_table()
    load_languages_table()
    load_religion_table()


# ═══════════════════════════════════════════════════════════════════════════════
#  App
# ═══════════════════════════════════════════════════════════════════════════════

app = FastAPI(title="SmartTravel API", version="2.0.0", lifespan=lifespan)

app.add_middleware(GZipMiddleware, minimum_size=1000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["GET", "OPTIONS"],
    allow_headers=["Content-Type"],
)

# ═══════════════════════════════════════════════════════════════════════════════
#  Geometry helpers
# ═══════════════════════════════════════════════════════════════════════════════

def _bbox_deg(lat: float, lon: float, radius_km: float):
    dlat = radius_km / _KM_PER_DEG_LAT
    dlon = (radius_km / (_KM_PER_DEG_LAT * math.cos(math.radians(lat)))
            if abs(lat) < 89.9 else 360.0)
    return lat - dlat, lat + dlat, lon - dlon, lon + dlon


def haversine_km(lat1, lon1, lat2, lon2) -> float:
    R = 6371.0
    p1, p2 = math.radians(lat1), math.radians(lat2)
    dp = math.radians(lat2 - lat1)
    dl = math.radians(lon2 - lon1)
    a = math.sin(dp / 2)**2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2)**2
    return R * 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))


def _has_valid(arr) -> bool:
    return arr is not None and any(x is not None and x == x for x in arr)


# ═══════════════════════════════════════════════════════════════════════════════
#  Dataset loaders  (all synchronous — called once at startup)
# ═══════════════════════════════════════════════════════════════════════════════

def load_airports() -> list:
    global _airports_cache
    if _airports_cache is not None:
        return _airports_cache
    rows = []
    if AIRPORT_CSV.exists():
        with open(AIRPORT_CSV, newline="", encoding="utf-8") as f:
            for row in csv.DictReader(f):
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
    return rows


def load_heritage_sites() -> list:
    global _heritage_cache
    if _heritage_cache is not None:
        return _heritage_cache
    rows = []
    if HERITAGE_CSV.exists():
        with open(HERITAGE_CSV, newline="", encoding="utf-8", errors="replace") as f:
            for row in csv.DictReader(f):
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
    return rows


def load_travel_advisories() -> dict:
    global _advisories_cache
    if _advisories_cache is not None:
        return _advisories_cache
    if not TRAVEL_ADVISORIES_JSON.exists():
        _advisories_cache = {"advisories": [], "aliases": {}, "map_url": ""}
        return _advisories_cache
    raw = json.loads(TRAVEL_ADVISORIES_JSON.read_text(encoding="utf-8"))
    _advisories_cache = {
        "advisories": raw.get("advisories", []),
        "aliases":    raw.get("aliases", {}),
        "map_url":    raw.get("map_url", "https://travelmaps.state.gov/TSGMap/"),
    }
    return _advisories_cache


def load_plug_voltage_table() -> dict:
    global _plug_voltage_cache
    if _plug_voltage_cache is not None:
        return _plug_voltage_cache
    table: dict = {}
    if PLUG_VOLTAGE_CSV.exists():
        with open(PLUG_VOLTAGE_CSV, newline="", encoding="utf-8", errors="replace") as f:
            reader = csv.reader(f, delimiter=";")
            next(reader, None)
            for row in reader:
                if len(row) < 4:
                    continue
                location   = row[0].strip().replace("\n", " ").replace("\r", " ")
                plug_str   = row[1].strip().strip('"').replace('""', '"')
                plug_types = [p.strip() for p in plug_str.split(",") if p.strip()]
                table[location.lower()] = {
                    "location_name": location,
                    "plug_types":    plug_types,
                    "voltage":       row[2].strip(),
                    "frequency":     row[3].strip(),
                }
    _plug_voltage_cache = table
    return table


def load_countries() -> list:
    global _countries_cache
    if _countries_cache is not None:
        return _countries_cache
    names = []
    if COUNTRIES_CSV.exists():
        with open(COUNTRIES_CSV, encoding="utf-8", errors="replace") as f:
            for line in f:
                name = line.strip()
                if name:
                    names.append(name)
    _countries_cache = sorted(names)
    return _countries_cache


def load_passports_visas() -> dict:
    global _passports_visas_cache
    if _passports_visas_cache is not None:
        return _passports_visas_cache
    table: dict = {}
    if PASSPORTS_VISAS_CSV.exists():
        with open(PASSPORTS_VISAS_CSV, newline="", encoding="utf-8", errors="replace") as f:
            for row in csv.DictReader(f):
                origin = (row.get("Origin") or "").strip()
                dest   = (row.get("Destination") or "").strip()
                req    = (row.get("Requirement") or "").strip()
                if origin and dest and dest != "Destination":
                    table[(origin.lower(), dest.lower())] = (req, origin, dest)
    _passports_visas_cache = table
    return table


def load_lgbtq_table() -> list:
    global _lgbtq_cache
    if _lgbtq_cache is not None:
        return _lgbtq_cache
    rows = []
    if LGBTQ_CSV.exists():
        with open(LGBTQ_CSV, newline="", encoding="utf-8", errors="replace") as f:
            for row in csv.DictReader(f):
                cleaned = {(k or "").strip(): v.strip() if isinstance(v, str) else v
                           for k, v in row.items()}
                if cleaned.get("Location"):
                    rows.append(cleaned)
    _lgbtq_cache = rows
    return rows


def load_flags_raw() -> dict:
    """Raw PNG bytes per country. Base64-encode only at request time."""
    global _flags_raw_cache
    if _flags_raw_cache is not None:
        return _flags_raw_cache
    flags: dict = {}
    if FLAGS_PARQUET.exists():
        try:
            import pandas as pd
            df = pd.read_parquet(FLAGS_PARQUET)
            for _, row in df.iterrows():
                label        = str(row.get("label", "")).strip()
                country_code = str(row.get("country_code", "")).strip()
                img          = row.get("image")
                if not label or img is None:
                    continue
                if isinstance(img, dict) and "bytes" in img:
                    img = img["bytes"]
                if not isinstance(img, bytes):
                    continue
                entry = {"country": label, "country_code": country_code, "bytes": img}
                flags[label.lower()] = entry
                if country_code:
                    flags[country_code.lower()] = entry
        except Exception as e:
            log.error("flags.parquet load error: %s", e)
    for png_path, cname, ccode in [
        (TAIWAN_FLAG_PNG,    "Taiwan",    "tw"),
        (PALESTINE_FLAG_PNG, "Palestine", "ps"),
    ]:
        if png_path.exists():
            try:
                img_bytes = png_path.read_bytes()
                entry = {"country": cname, "country_code": ccode, "bytes": img_bytes}
                flags[cname.lower()] = entry
                flags[ccode.lower()] = entry
            except Exception as e:
                log.error("%s flag load error: %s", cname, e)
    _flags_raw_cache = flags
    return flags


def load_driving_side_table() -> dict:
    global _driving_side_cache
    if _driving_side_cache is not None:
        return _driving_side_cache
    table: dict = {}
    if DRIVING_SIDE_CSV.exists():
        with open(DRIVING_SIDE_CSV, newline="", encoding="utf-8", errors="replace") as f:
            for row in csv.DictReader(f):
                territory = (row.get("Territory") or "").strip()
                side       = (row.get("Side") or "").strip()
                if territory and side:
                    table[territory.lower()] = {"territory": territory, "side": side}
    _driving_side_cache = table
    return table


def load_currency_table() -> dict:
    global _currency_cache
    if _currency_cache is not None:
        return _currency_cache
    table: dict = {}
    if CURRENCY_CSV.exists():
        with open(CURRENCY_CSV, newline="", encoding="utf-8", errors="replace") as f:
            for row in csv.DictReader(f):
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
    return table


_LANGUAGE_ALIASES = {
    "uk": "United Kingdom", "united kingdom": "United Kingdom",
    "usa": "United States", "us": "United States",
    "u.s.": "United States", "u.s.a.": "United States",
    "united states of america": "United States",
    "russia": "Russia", "russian federation": "Russia",
    "south korea": "South Korea", "korea": "South Korea",
    "north korea": "North Korea",
    "czech republic": "Czech Republic", "czechia": "Czech Republic",
    "vietnam": "Vietnam", "viet nam": "Vietnam",
}


def load_languages_table() -> dict:
    global _languages_cache
    if _languages_cache is not None:
        return _languages_cache
    table: dict = {}
    if LANGUAGES_CSV.exists():
        try:
            with open(LANGUAGES_CSV, "r", encoding="utf-8-sig") as f:
                for row in csv.DictReader(f, delimiter=";"):
                    country   = (row.get("Country") or row.get("\ufeffCountry") or "").strip()
                    languages = (row.get("Language in Use") or "").strip()
                    if country and languages:
                        table[country.lower()] = {"country": country, "languages": languages}
        except Exception as e:
            log.error("languages.csv load error: %s", e)
    _languages_cache = table
    return table


_RELIGION_ALIASES = {
    "uk": "United Kingdom", "united kingdom": "United Kingdom",
    "usa": "United States", "us": "United States",
    "united states of america": "United States",
    "russia": "Russian Federation", "russian federation": "Russian Federation",
    "south korea": "South Korea", "korea": "South Korea",
    "north korea": "North Korea",
    "czech republic": "Czech Republic", "czechia": "Czech Republic",
    "vietnam": "Vietnam", "viet nam": "Vietnam",
    "myanmar": "Myanmar", "burma": "Myanmar",
}


def load_religion_table() -> dict:
    global _religion_cache
    if _religion_cache is not None:
        return _religion_cache
    table: dict = {}
    if RELIGION_CSV.exists():
        try:
            with open(RELIGION_CSV, "r", encoding="utf-8-sig") as f:
                for row in csv.DictReader(f):
                    country = (row.get("Country") or "").strip()
                    if not country:
                        continue
                    religions: dict = {}
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
            log.error("religion_data_2030.csv load error: %s", e)
    _religion_cache = table
    return table


# ═══════════════════════════════════════════════════════════════════════════════
#  Lookup helpers
# ═══════════════════════════════════════════════════════════════════════════════

def _lookup_table(data: dict, *names: str):
    """Exact match → fallback substring scan."""
    for name in names:
        if not name:
            continue
        key = name.strip().lower()
        if key in data:
            return data[key]
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


def _lookup_with_alias(data: dict, aliases: dict, country: str, place: Optional[str]):
    def resolve(name: str):
        if not name:
            return None
        key = name.strip().lower()
        normalized = aliases.get(key, name.strip())
        result = data.get(normalized.lower()) or data.get(key)
        if result:
            return result
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


# ── domain-specific lookups ───────────────────────────────────────────────────

def get_plug_voltage(country: str, place: Optional[str] = None):
    return _lookup_place_then_country(load_plug_voltage_table(), country, place)


def get_driving_side(country: str, place: Optional[str] = None):
    return _lookup_place_then_country(load_driving_side_table(), country, place)


def get_currency(country: str, place: Optional[str] = None):
    return _lookup_place_then_country(load_currency_table(), country, place)


def get_languages(country: str, place: Optional[str] = None):
    data = load_languages_table()
    return _lookup_with_alias(data, _LANGUAGE_ALIASES, country, place) if data else None


def get_religion(country: str, place: Optional[str] = None):
    data = load_religion_table()
    return _lookup_with_alias(data, _RELIGION_ALIASES, country, place) if data else None


# ── advisory lookup ───────────────────────────────────────────────────────────

def _advisory_response(a: dict, map_url: str) -> dict:
    return {
        "level":            a["level"],
        "level_text":       a["level_text"],
        "risk_indicators":  a.get("risk_indicators", []),
        "date_issued":      a.get("date_issued", ""),
        "url":              a.get("url", ""),
        "map_url":          map_url,
        "destination_name": a["name"],
    }


def _find_advisory(name: str, data: dict):
    if not name:
        return None
    aliases    = data["aliases"]
    advisories = data["advisories"]
    map_url    = data["map_url"]
    canonical  = aliases.get(name) or aliases.get(name.title())
    search     = (canonical or name).lower()
    for a in advisories:
        if a["name"].lower() == search:
            return _advisory_response(a, map_url)
    for a in advisories:
        aname = a["name"].lower()
        if search in aname or aname in search:
            return _advisory_response(a, map_url)
    return None


def get_travel_advisory(country: str, place: Optional[str] = None):
    data = load_travel_advisories()
    if place:
        for part in [p.strip() for p in place.split(",") if p.strip()]:
            r = _find_advisory(part, data)
            if r:
                return r
    return _find_advisory(country, data) if country else None


# ── airports ──────────────────────────────────────────────────────────────────

def nearest_airports(lat: float, lon: float, top_n: int = 5) -> list:
    airports = load_airports()
    if not airports:
        return []
    candidates: list = []
    for radius_km in (500, 1500, 20_000):
        lat_min, lat_max, lon_min, lon_max = _bbox_deg(lat, lon, radius_km)
        candidates = [
            a for a in airports
            if lat_min <= a["lat"] <= lat_max and lon_min <= a["lon"] <= lon_max
        ]
        if len(candidates) >= top_n:
            break
    if not candidates:
        candidates = airports
    return sorted(
        ({"iata_code":    a["iata_code"],
          "airport_name": a["airport_name"],
          "city":         a["city"],
          "country":      a["country"],
          "distance_km":  round(haversine_km(lat, lon, a["lat"], a["lon"]), 2),
          "latitude":     a["lat"],
          "longitude":    a["lon"]}
         for a in candidates),
        key=lambda x: x["distance_km"],
    )[:top_n]


# ── heritage ──────────────────────────────────────────────────────────────────

def heritage_near(lat: float, lon: float, radius_km: float = 200) -> list:
    sites = load_heritage_sites()
    if not sites:
        return []
    lat_min, lat_max, lon_min, lon_max = _bbox_deg(lat, lon, radius_km)
    result = []
    for s in sites:
        if not (lat_min <= s["lat"] <= lat_max and lon_min <= s["lon"] <= lon_max):
            continue
        d = haversine_km(lat, lon, s["lat"], s["lon"])
        if d <= radius_km:
            result.append({**s, "distance_km": round(d, 2)})
    result.sort(key=lambda x: x["distance_km"])
    return result


# ── visa ──────────────────────────────────────════════════════════════════════

_COUNTRY_ALIASES: dict = {
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


def _normalize_dest(name: str) -> str:
    return _COUNTRY_ALIASES.get(name.strip().lower(), name.strip()) if name else name


def get_visa_requirement(nationality: str, destination_country: str,
                         place: Optional[str] = None) -> Optional[dict]:
    table = load_passports_visas()
    if not table:
        return None
    nat_lower = (nationality or "").strip().lower()
    if not nat_lower:
        return None

    def lookup(orig: str, dest: str):
        o, d = orig.strip().lower(), dest.strip().lower()
        entry = table.get((o, d))
        if entry:
            req, o_d, d_d = entry
            return {"requirement": req, "nationality_name": o_d, "destination_name": d_d}
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
        dest_lower = dest.lower()
        for (o_low, d_low), (req, o_disp, d_disp) in table.items():
            if o_low == nat_lower and (dest_lower == d_low
                                       or dest_lower in d_low
                                       or d_low in dest_lower):
                return {"requirement": req,
                        "nationality_name": o_disp,
                        "destination_name": d_disp}
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


# ── flags ─────────────────────────────────────────────────────────────────────

def _entry_to_response(entry: dict) -> dict:
    b64 = base64.b64encode(entry["bytes"]).decode()
    return {
        "country":      entry["country"],
        "country_code": entry["country_code"],
        "flag":         f"data:image/png;base64,{b64}",
    }


# ── climate (CPU-bound, run in thread pool) ───────────────────────────────────

def _climate_with_fallback_sync(lat: float, lon: float):
    KM20_LAT  = 20 / _KM_PER_DEG_LAT
    km20_lon  = lambda la: 20 / (_KM_PER_DEG_LAT * math.cos(math.radians(la)))
    for try_lat, try_lon in [
        (lat, lon),
        (lat + KM20_LAT, lon),
        (lat, lon + km20_lon(lat)),
        (lat - KM20_LAT, lon),
        (lat, lon - km20_lon(lat)),
    ]:
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


async def _climate_async(lat: float, lon: float):
    """Run climate raster read in the CPU thread pool."""
    loop = asyncio.get_event_loop()
    return await loop.run_in_executor(_cpu_pool, _climate_with_fallback_sync, lat, lon)


# ── exchange rates (async) ────────────────────────────────────────────────────

async def _fetch_exchange_rates_async(iso_upper: str) -> Optional[dict]:
    """Try Frankfurter then exchangerate-api. Returns {eur_rate, usd_rate} or None."""
    if iso_upper in _exchange_rate_cache:
        return _exchange_rate_cache[iso_upper]

    result = None
    try:
        r = await _http.get(_FRANKFURTER_URL,
                            params={"base": iso_upper, "symbols": "EUR,USD"})
        if r.status_code == 200:
            rates = r.json().get("rates") or {}
            eur, usd = rates.get("EUR"), rates.get("USD")
            if eur or usd:
                result = {"eur_rate": eur, "usd_rate": usd}
    except Exception:
        pass

    if result is None:
        try:
            r = await _http.get(f"{_EXCHANGERATE_API_URL}/{iso_upper}")
            if r.status_code == 200:
                rates = r.json().get("rates") or {}
                eur, usd = rates.get("EUR"), rates.get("USD")
                if eur or usd:
                    result = {"eur_rate": eur, "usd_rate": usd}
        except Exception:
            pass

    if result:
        _exchange_rate_cache[iso_upper] = result
    return result


async def get_exchange_rates_async(iso_code: str) -> Optional[dict]:
    if not iso_code:
        return None
    iso_upper = iso_code.upper()
    if iso_upper == "EUR":
        return {"eur_rate": 1.0, "usd_rate": None}
    if iso_upper == "USD":
        return {"eur_rate": None, "usd_rate": 1.0}
    return await _fetch_exchange_rates_async(iso_upper)


# ═══════════════════════════════════════════════════════════════════════════════
#  Routes
# ═══════════════════════════════════════════════════════════════════════════════

@app.get("/health")
async def health():
    try:
        import resource as _res
        rss = _res.getrusage(_res.RUSAGE_SELF).ru_maxrss
        ram = round(rss / (1024*1024 if sys.platform == "darwin" else 1024), 1)
    except Exception:
        ram = None
    return {"status": "ok", "ram_mb": ram,
            "climate_cache_size": len(_climate_response_cache),
            "rate_cache_size":    len(_exchange_rate_cache)}


@app.get("/nationalities")
async def nationalities_list():
    return {"nationalities": load_countries()}


@app.get("/lgbtq")
async def api_lgbtq():
    rows = load_lgbtq_table()
    return {"rows": rows, "count": len(rows)}


@app.get("/flags")
async def api_flags():
    flags = load_flags_raw()
    seen, result = set(), []
    for entry in flags.values():
        c = entry["country"]
        if c.lower() not in seen:
            result.append(_entry_to_response(entry))
            seen.add(c.lower())
    return {"flags": result}


@app.get("/flag/{country_name}")
async def api_flag_by_country(country_name: str):
    flags = load_flags_raw()
    entry = flags.get(country_name.strip().lower())
    if entry:
        return _entry_to_response(entry)
    return JSONResponse({"error": "Flag not found"}, status_code=404)


@app.get("/heritage")
async def heritage(
    lat:       float = Query(...),
    lon:       float = Query(...),
    radius_km: float = Query(200),
):
    if not (-90 <= lat <= 90) or not (-180 <= lon <= 180):
        return JSONResponse({"error": "Coordinates out of range"}, status_code=400)
    sites = heritage_near(lat, lon, radius_km=radius_km)
    return {"sites": sites}


@app.get("/visa-by-nationality")
async def visa_by_nationality(nationality: str = Query(...)):
    nationality = nationality.strip()
    if not nationality:
        return JSONResponse({"error": "Missing nationality"}, status_code=400)
    table     = load_passports_visas()
    nat_lower = nationality.lower()
    seen, destinations = set(), []
    for (o_low, d_low), (req, o_disp, d_disp) in table.items():
        if o_low != nat_lower or d_low in seen:
            continue
        seen.add(d_low)
        destinations.append({"destination": d_disp, "requirement": req})
    return {"nationality": nationality, "destinations": destinations}


@app.get("/visa-requirement")
async def visa_requirement(
    nationality:  str = Query(...),
    destination:  str = Query(""),
    place:        str = Query(""),
):
    nationality = nationality.strip()
    destination = destination.strip()
    place       = place.strip()
    if not nationality:
        return JSONResponse({"error": "Missing nationality"}, status_code=400)
    if not destination and not place:
        return JSONResponse({"error": "Missing destination or place"}, status_code=400)
    result = get_visa_requirement(nationality, destination, place)
    if result is None:
        return {"requirement": None, "message": "No data for this combination."}
    return result


@app.get("/map-layers")
async def map_layers():
    try:
        driving       = load_driving_side_table()
        adv_data      = load_travel_advisories()
        lgbtq_rows    = load_lgbtq_table()
        heritage      = load_heritage_sites()
        airports      = load_airports()
        plug_table    = load_plug_voltage_table()
        religion_table = load_religion_table()

        return {
            "driving_side": [
                {"territory": v["territory"], "side": v["side"]}
                for v in driving.values()
            ],
            "travel_advisories": [
                {"name": a["name"], "level": a.get("level"),
                 "level_text": a.get("level_text", "")}
                for a in adv_data.get("advisories", [])
            ],
            "lgbtq": [
                {
                    "location": (row.get("Location") or "").strip(),
                    "friendliness": (
                        "illegal"
                        if "illegal" in (row.get("Same-sex sexual activity") or "").lower()
                        else "legal"
                    ),
                }
                for row in lgbtq_rows
                if (row.get("Location") or "").strip()
            ],
            "heritage_sites": [
                {"name_en": s["name_en"], "lat": s["lat"],
                 "lon": s["lon"], "category": s.get("category", "")}
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
                    "percentage": max(
                        (cd.get(r, 0) for r in _RELIGION_COLS), default=0
                    ),
                }
                for cd in religion_table.values()
                if any(cd.get(r) for r in _RELIGION_COLS)
            ],
            "plug_voltage": [
                {"location_name": v["location_name"],
                 "plug_types": v.get("plug_types", [])}
                for v in plug_table.values()
            ],
        }
    except Exception as e:
        log.error("map-layers error: %s", traceback.format_exc())
        return JSONResponse({"error": str(e)}, status_code=500)


@app.get("/climate-grid")
async def climate_grid(
    step:     int = Query(5),
    month:    Optional[int] = Query(None),
    variable: str = Query("temp"),
):
    step = max(2, min(10, step))
    if month is not None and not (1 <= month <= 12):
        month = None
    if variable not in ("temp", "precipitation"):
        variable = "temp"
    try:
        loop = asyncio.get_event_loop()
        grid, unit = await loop.run_in_executor(
            _cpu_pool,
            lambda: get_global_climate_grid(step_deg=step, month=month, variable=variable)
        )
        return {"grid": grid, "step": step, "unit": unit, "variable": variable}
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)


@app.get("/climate")
async def climate(
    lat:         float = Query(...),
    lon:         float = Query(...),
    country:     str   = Query(""),
    place:       str   = Query(""),
    nationality: str   = Query(""),
):
    country     = country.strip()
    place       = place.strip()
    nationality = nationality.strip()

    if not (-90 <= lat <= 90) or not (-180 <= lon <= 180):
        return JSONResponse({"error": "Coordinates out of range"}, status_code=400)

    # ── response cache ────────────────────────────────────────────────────────
    cache_key = (round(lat, 2), round(lon, 2), country, place, nationality)
    cached = _climate_response_cache.get(cache_key)
    if cached is not None:
        return JSONResponse(cached, headers={"X-Cache": "HIT"})

    try:
        # ── fan-out: run everything that can run in parallel ──────────────────
        # Climate data is CPU-bound (rasterio) → thread pool
        # Exchange rates are network-bound → async HTTP
        # All other lookups are pure dict lookups → near-instant, run inline

        currency_info = get_currency(country, place) if (country or place) else None
        iso_code      = (currency_info or {}).get("iso_code")

        # Kick off the two slow operations concurrently
        climate_task = asyncio.create_task(_climate_async(lat, lon))
        rate_task    = (asyncio.create_task(get_exchange_rates_async(iso_code))
                        if iso_code else None)

        # Do all fast dict lookups while waiting for the slow tasks
        advisory     = get_travel_advisory(country, place) if (country or place) else None
        plug_voltage = get_plug_voltage(country, place)    if (country or place) else None
        driving_side = get_driving_side(country, place)    if (country or place) else None
        languages    = get_languages(country, place)       if (country or place) else None
        religion     = get_religion(country, place)        if (country or place) else None
        visa_req     = get_visa_requirement(nationality, country, place) if nationality else None
        airports     = nearest_airports(lat, lon, top_n=5)

        # Now await the slow operations
        climate_result = await climate_task
        temp_day, temp_night, precip, cloud, rainy_days = climate_result

        exchange_rates = None
        if rate_task:
            try:
                exchange_rates = await asyncio.wait_for(rate_task, timeout=6.0)
            except (asyncio.TimeoutError, Exception):
                pass

        # ── assemble payload ──────────────────────────────────────────────────
        payload: dict[str, Any] = {
            "temperature_day":   [float(x) if x == x else None for x in temp_day],
            "temperature_night": [float(x) if x == x else None for x in temp_night],
            "precipitation":     [float(x) if x == x else None for x in precip],
            "cloud_cover":       [float(x) if x == x else None for x in cloud],
            "rainy_days":        [float(x) if x == x else None for x in rainy_days],
            "nearest_airports":  airports,
        }

        if advisory:
            payload["travel_advisory"] = advisory
        if plug_voltage:
            payload["plug_voltage"] = plug_voltage
        if driving_side:
            payload["driving_side"] = driving_side
        if languages:
            payload["languages"] = languages
        if religion:
            payload["religion"] = religion
        if visa_req:
            payload["visa_requirement"] = visa_req

        if currency_info:
            if exchange_rates:
                currency_info.update(exchange_rates)
            currency_info.setdefault("eur_rate", None)
            currency_info.setdefault("usd_rate", None)
            payload["currency"] = currency_info

        # Store in response cache
        _climate_response_cache[cache_key] = payload
        return JSONResponse(payload, headers={"X-Cache": "MISS"})

    except Exception as e:
        log.error("climate error: %s", traceback.format_exc())
        return JSONResponse({"error": str(e)}, status_code=500)


@app.get("/geocode")
async def geocode(
    q:     str = Query(""),
    limit: str = Query("6"),
):
    q = q.strip()
    if not q:
        return []
    try:
        r = await _http.get(
            NOMINATIM_URL,
            params={"q": q, "format": "json", "limit": limit, "accept-language": "en"},
            headers=NOMINATIM_HEADERS,
        )
        r.raise_for_status()
        data = r.json()
        return data if isinstance(data, list) else []
    except Exception as e:
        log.warning("Geocode error: %s", e)
        return []


_COUNTRY_TO_NATIONALITY: dict = {
    "United States": "United States", "USA": "United States", "US": "United States",
    "United Kingdom": "United Kingdom", "UK": "United Kingdom",
    "Russia": "Russian Federation", "Russian Federation": "Russian Federation",
    "South Korea": "South Korea", "Korea": "South Korea",
    "Czech Republic": "Czech Republic", "Czechia": "Czech Republic",
    "Vietnam": "Vietnam", "Viet Nam": "Vietnam",
    "Myanmar": "Myanmar", "Burma": "Myanmar",
    "Ivory Coast": "Côte d'Ivoire", "Côte d'Ivoire": "Côte d'Ivoire",
    "East Timor": "East Timor", "Timor-Leste": "East Timor",
    "The Gambia": "Gambia", "Cabo Verde": "Cape Verde", "Cape Verde": "Cape Verde",
    "The Bahamas": "Bahamas", "Bahamas": "Bahamas",
    "Palestine": "Palestine", "West Bank": "Palestine",
    "Swaziland": "Eswatini", "Eswatini": "Eswatini",
    "Republic of North Macedonia": "Macedonia", "North Macedonia": "Macedonia",
    "Democratic Republic of the Congo": "Congo (Dem. Rep.)",
    "Republic of the Congo": "Congo (Rep.)",
}


@app.get("/detect-nationality")
async def detect_nationality(request: Request):
    ip = (request.headers.get("X-Forwarded-For", "").split(",")[0].strip()
          or request.headers.get("X-Real-IP", "").strip()
          or request.client.host)
    if (not ip or ip in ("127.0.0.1", "localhost", "::1")
            or ip.startswith(("192.168.", "10.", "172."))):
        return {"nationality": None, "error": "Cannot detect from private/localhost IP"}
    try:
        r = await _http.get(
            f"https://ip-api.com/json/{ip}",
            params={"fields": "status,message,country,countryCode"},
        )
        if r.status_code == 200:
            data = r.json()
            if data.get("status") == "success":
                country_name     = data.get("country", "").strip()
                nationality_list = load_countries()
                mapped = (
                    _COUNTRY_TO_NATIONALITY.get(country_name)
                    or (country_name if country_name in nationality_list else None)
                    or next((n for n in nationality_list
                             if n.lower() == country_name.lower()), None)
                )
                if mapped:
                    return {"nationality": mapped, "country": country_name}
            return {"nationality": None,
                    "error": data.get("message", "IP lookup failed")}
        return {"nationality": None, "error": f"HTTP {r.status_code}"}
    except Exception as e:
        return {"nationality": None, "error": str(e)}


# ═══════════════════════════════════════════════════════════════════════════════
#  Dev entry-point
# ═══════════════════════════════════════════════════════════════════════════════

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("climate_api_fastapi:app", host="127.0.0.1", port=5000, reload=True)
