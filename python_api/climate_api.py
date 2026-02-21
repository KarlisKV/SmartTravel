#!/usr/bin/env python3
"""
Flask API to get climate data for a location (lat, lon).
Returns JSON with 4 arrays: temperature_day, temperature_night, precipitation, cloud_cover,
and nearest_airports (top 5 by distance in km).

Run from SmartTravel or airport_project (so python_api is on path):
  cd SmartTravel/python_api && pip install flask && python climate_api.py
  # or: cd airport_project && python SmartTravel/python_api/climate_api.py

Then open http://127.0.0.1:5000/climate?lat=40.7128&lon=-74.0060
"""

import base64
import csv
import json
import math
from pathlib import Path

import pandas as pd
from flask import Flask, request, jsonify

# Uses climatemaps from GitHub (see get_climate_data.py); install: pip install git+https://github.com/KarlisKV/climatemaps.git
from get_climate_data import get_climate_data_for_location, get_global_climate_grid

app = Flask(__name__)

# Paths relative to python_api/ (parent = SmartTravel/python_api, parent.parent = SmartTravel)
_DATASETS = Path(__file__).resolve().parent.parent / "datasets"
AIRPORT_CSV = _DATASETS / "airport_data_coords_cleaned.csv"
TRAVEL_ADVISORIES_JSON = _DATASETS / "travel_advisories.json"
PLUG_VOLTAGE_CSV = _DATASETS / "world_plug_voltage_table.csv"
LGBTQ_CSV = _DATASETS / "lgbtq_data.csv"
COUNTRIES_CSV = _DATASETS / "countries.csv"
PASSPORTS_VISAS_CSV = _DATASETS / "passports_visas_cleaned.csv"
HERITAGE_CSV = _DATASETS / "world_heritage_sites.csv"
FLAGS_PARQUET = _DATASETS / "flags.parquet"
TAIWAN_FLAG_PNG = _DATASETS / "taiwan.png"
PALESTINE_FLAG_PNG = _DATASETS / "palestine.png"
DRIVING_SIDE_CSV = _DATASETS / "driving_side_cleaned.csv"
CURRENCY_CSV = _DATASETS / "currency_list.csv"
LANGUAGES_CSV = _DATASETS / "languages.csv"
RELIGION_CSV = _DATASETS / "religion_data_2030.csv"
_airports_cache = None
_heritage_cache = None
_travel_advisories_cache = None
_plug_voltage_cache = None
_countries_cache = None
_passports_visas_cache = None
_lgbtq_cache = None
_flags_cache = None
_driving_side_cache = None
_currency_cache = None
_languages_cache = None
_religion_cache = None


# Approx degrees for 20 km: 1° lat ≈ 111.32 km
_KM20_DEG_LAT = 20 / 111.32


def _km20_dlon(lat: float) -> float:
    """Longitude degrees for 20 km at given latitude."""
    return 20 / (111.32 * math.cos(math.radians(lat)))


def _has_valid(arr) -> bool:
    """True if array has at least one non-NaN value."""
    if arr is None:
        return False
    return any((x is not None and x == x) for x in arr)


def _climate_with_fallback(lat: float, lon: float):
    """
    Get climate data for (lat, lon). If temperature, cloud cover, or rainy days
    are missing (e.g. sea grid), try 20 km N, E, S, W and return the first result
    that has valid temperature, cloud cover, and rainy days (same approach as temp).
    Returns (temp_day, temp_night, precip, cloud, rainy_days) from the best point.
    """
    candidates = [
        (lat, lon),
        (lat + _KM20_DEG_LAT, lon),
        (lat, lon + _km20_dlon(lat)),
        (lat - _KM20_DEG_LAT, lon),
        (lat, lon - _km20_dlon(lat)),
    ]
    for try_lat, try_lon in candidates:
        if not (-90 <= try_lat <= 90) or not (-180 <= try_lon <= 180):
            continue
        try:
            temp_day, temp_night, precip, cloud, rainy_days = get_climate_data_for_location(
                try_lat, try_lon
            )
            if (
                _has_valid(temp_day) or _has_valid(temp_night)
            ) and _has_valid(cloud) and _has_valid(rainy_days):
                return temp_day, temp_night, precip, cloud, rainy_days
        except Exception:
            continue
    return get_climate_data_for_location(lat, lon)


def haversine_km(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
    """Return great-circle distance in km between (lat1, lon1) and (lat2, lon2)."""
    R = 6371  # Earth radius in km
    phi1 = math.radians(lat1)
    phi2 = math.radians(lat2)
    dphi = math.radians(lat2 - lat1)
    dlam = math.radians(lon2 - lon1)
    a = math.sin(dphi / 2) ** 2 + math.cos(phi1) * math.cos(phi2) * math.sin(dlam / 2) ** 2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    return R * c


def load_airports():
    """Load airport CSV and return list of dicts with lat/lon and key fields."""
    global _airports_cache
    if _airports_cache is not None:
        return _airports_cache
    if not AIRPORT_CSV.exists():
        _airports_cache = []
        return _airports_cache
    import csv
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
                "lat": lat,
                "lon": lon,
                "iata_code": row.get("IATA Code", "").strip(),
                "airport_name": row.get("Airport Name", "").strip(),
                "city": row.get("City", "").strip(),
                "country": row.get("Country", "").strip(),
            })
    _airports_cache = rows
    return _airports_cache


def nearest_airports(lat: float, lon: float, top_n: int = 5):
    """Return top_n nearest airports with distance_km (Haversine)."""
    airports = load_airports()
    if not airports:
        return []
    with_dist = []
    for a in airports:
        d = haversine_km(lat, lon, a["lat"], a["lon"])
        with_dist.append({
            "iata_code": a["iata_code"],
            "airport_name": a["airport_name"],
            "city": a["city"],
            "country": a["country"],
            "distance_km": round(d, 2),
            "latitude": a["lat"],
            "longitude": a["lon"],
        })
    with_dist.sort(key=lambda x: x["distance_km"])
    return with_dist[:top_n]


def load_plug_voltage_table():
    """Load world plug/voltage CSV (Location;PlugTypes;Voltage;Frequency) into a lookup dict."""
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
            plug_str = row[1].strip().strip('"').replace('""', '"')
            plug_types = [p.strip() for p in plug_str.split(",") if p.strip()]
            voltage = row[2].strip()
            frequency = row[3].strip()
            key = location.lower()
            table[key] = {
                "location_name": location,
                "plug_types": plug_types,
                "voltage": voltage,
                "frequency": frequency,
            }
    _plug_voltage_cache = table
    return _plug_voltage_cache


def get_plug_voltage(country: str, place: str | None = None):
    """
    Resolve to plug/voltage info. Tries place parts first (e.g. French Guiana), then country.
    Returns dict with plug_types, voltage, frequency, location_name or None.
    """
    data = load_plug_voltage_table()
    if not data:
        return None

    def lookup_one(name: str):
        if not name or not name.strip():
            return None
        name = name.strip().replace("\n", " ")
        key = name.lower()
        if key in data:
            return data[key]
        for k, v in data.items():
            if key in k or k in key:
                return v
        return None

    if place and place.strip():
        for part in [p.strip() for p in place.split(",") if p.strip()]:
            match = lookup_one(part)
            if match:
                return match
    if country and country.strip():
        return lookup_one(country.strip())
    return None


def load_driving_side_table():
    """Load driving_side_cleaned.csv (Territory,Side) into a lookup dict."""
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
            side = (row.get("Side") or "").strip()
            if not territory or not side:
                continue
            key = territory.lower()
            table[key] = {
                "territory": territory,
                "side": side,
            }
    _driving_side_cache = table
    return _driving_side_cache


def get_driving_side(country: str, place: str | None = None):
    """
    Resolve to driving side info. Tries place parts first (e.g. French Guiana, St. Martin, Greenland),
    then country. Returns dict with territory, side or None.
    """
    data = load_driving_side_table()
    if not data:
        return None

    def lookup_one(name: str):
        if not name or not name.strip():
            return None
        name = name.strip().replace("\n", " ")
        key = name.lower()
        if key in data:
            return data[key]
        for k, v in data.items():
            if key in k or k in key:
                return v
        return None

    # Try place parts first (for territories like French Guiana, St. Martin, Greenland)
    if place and place.strip():
        for part in [p.strip() for p in place.split(",") if p.strip()]:
            match = lookup_one(part)
            if match:
                return match
    # Fall back to country
    if country and country.strip():
        return lookup_one(country.strip())
    return None


def load_currency_table():
    """Load currency_list.csv (Territory,Currency,Symbol_or_Abbrev,ISO_code,...) into a lookup dict."""
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
            currency = (row.get("Currency") or "").strip()
            symbol = (row.get("Symbol_or_Abbrev") or "").strip()
            iso_code = (row.get("ISO_code") or "").strip()
            if not territory or not currency or not iso_code:
                continue
            key = territory.lower()
            table[key] = {
                "territory": territory,
                "currency": currency,
                "symbol": symbol,
                "iso_code": iso_code,
            }
    _currency_cache = table
    return _currency_cache


def get_currency(country: str, place: str | None = None):
    """
    Resolve to currency info. Tries place parts first, then country.
    Returns dict with territory, currency, symbol, iso_code or None.
    """
    data = load_currency_table()
    if not data:
        return None

    def lookup_one(name: str):
        if not name or not name.strip():
            return None
        name = name.strip().replace("\n", " ")
        key = name.lower()
        if key in data:
            return data[key]
        for k, v in data.items():
            if key in k or k in key:
                return v
        return None

    # Try place parts first (for territories)
    if place and place.strip():
        for part in [p.strip() for p in place.split(",") if p.strip()]:
            match = lookup_one(part)
            if match:
                return match
    # Fall back to country
    if country and country.strip():
        return lookup_one(country.strip())
    return None


def get_exchange_rates(iso_code: str, timeout_seconds: int = 10):
    """
    Fetch current exchange rates for a currency (ISO code) vs EUR and USD using yfinance.
    Returns dict with eur_rate and usd_rate, or None on error.
    Uses timeout to prevent hanging.
    """
    if not iso_code:
        return None
    
    iso_upper = iso_code.upper()
    
    # For EUR/USD themselves, return 1.0
    if iso_upper == 'EUR':
        return {"eur_rate": 1.0, "usd_rate": None}
    if iso_upper == 'USD':
        return {"eur_rate": None, "usd_rate": 1.0}
    
    # Try yfinance first
    try:
        import yfinance as yf
        use_yfinance = True
    except ImportError:
        use_yfinance = False
        print(f"Warning: yfinance not installed. Install with: pip install yfinance")
    
    if not use_yfinance:
        # Fallback: try exchangerate-api.com (free, no key needed for basic usage)
        try:
            import requests
            # Get rates relative to the currency (e.g., JPY -> returns 1 JPY = X EUR, 1 JPY = X USD)
            res = requests.get(f"https://api.exchangerate-api.com/v4/latest/{iso_upper}", timeout=5)
            if res.status_code == 200:
                data = res.json()
                rates = data.get("rates", {})
                eur_rate = rates.get("EUR")  # 1 {ISO} = X EUR
                usd_rate = rates.get("USD")  # 1 {ISO} = X USD
                # Return dict even if one rate is None
                if eur_rate is not None or usd_rate is not None:
                    return {"eur_rate": eur_rate, "usd_rate": usd_rate}
            else:
                print(f"Warning: exchangerate-api returned status {res.status_code} for {iso_upper}")
        except ImportError:
            print(f"Warning: requests library not available for exchange rate fallback")
        except Exception as e:
            print(f"Error fetching rates from exchangerate-api for {iso_upper}: {e}")
        return None
    
    try:
        # Yahoo Finance uses format like EURUSD=X, EURGBP=X, etc.
        # For currency pairs, we need to construct the right ticker
        eur_rate = None
        usd_rate = None
        
        # Get EUR rate: {ISO}EUR=X means 1 {ISO} = X EUR
        try:
            eur_ticker = f"{iso_code.upper()}EUR=X"
            eur_data = yf.Ticker(eur_ticker)
            # Try info() first (faster, more reliable)
            try:
                eur_info_dict = eur_data.info
                if eur_info_dict and 'regularMarketPrice' in eur_info_dict:
                    eur_rate = float(eur_info_dict['regularMarketPrice'])
            except (KeyError, ValueError, TypeError):
                # Fallback to history
                eur_info = eur_data.history(period="1d", interval="1m")
                if not eur_info.empty:
                    eur_rate = float(eur_info['Close'].iloc[-1])
                else:
                    # Try longer period
                    eur_info = eur_data.history(period="5d")
                    if not eur_info.empty:
                        eur_rate = float(eur_info['Close'].iloc[-1])
        except Exception as e:
            print(f"Warning: Could not get EUR rate for {iso_code}: {e}")
        
        # Get USD rate: {ISO}USD=X means 1 {ISO} = X USD
        try:
            usd_ticker = f"{iso_code.upper()}USD=X"
            usd_data = yf.Ticker(usd_ticker)
            # Try info() first (faster, more reliable)
            try:
                usd_info_dict = usd_data.info
                if usd_info_dict and 'regularMarketPrice' in usd_info_dict:
                    usd_rate = float(usd_info_dict['regularMarketPrice'])
            except (KeyError, ValueError, TypeError):
                # Fallback to history
                usd_info = usd_data.history(period="1d", interval="1m")
                if not usd_info.empty:
                    usd_rate = float(usd_info['Close'].iloc[-1])
                else:
                    # Try longer period
                    usd_info = usd_data.history(period="5d")
                    if not usd_info.empty:
                        usd_rate = float(usd_info['Close'].iloc[-1])
        except Exception as e:
            print(f"Warning: Could not get USD rate for {iso_code}: {e}")
        
        # If direct pairs don't work, try inverse (EUR{ISO}=X, USD{ISO}=X)
        if eur_rate is None:
            try:
                eur_ticker_inv = f"EUR{iso_code.upper()}=X"
                eur_data_inv = yf.Ticker(eur_ticker_inv)
                try:
                    eur_info_dict_inv = eur_data_inv.info
                    if eur_info_dict_inv and 'regularMarketPrice' in eur_info_dict_inv:
                        inv_rate = float(eur_info_dict_inv['regularMarketPrice'])
                        eur_rate = 1.0 / inv_rate if inv_rate != 0 else None
                except (KeyError, ValueError, TypeError, ZeroDivisionError):
                    eur_info_inv = eur_data_inv.history(period="5d")
                    if not eur_info_inv.empty:
                        inv_rate = float(eur_info_inv['Close'].iloc[-1])
                        eur_rate = 1.0 / inv_rate if inv_rate != 0 else None
            except Exception as e:
                print(f"Warning: Could not get inverse EUR rate for {iso_code}: {e}")
        
        if usd_rate is None:
            try:
                usd_ticker_inv = f"USD{iso_code.upper()}=X"
                usd_data_inv = yf.Ticker(usd_ticker_inv)
                try:
                    usd_info_dict_inv = usd_data_inv.info
                    if usd_info_dict_inv and 'regularMarketPrice' in usd_info_dict_inv:
                        inv_rate = float(usd_info_dict_inv['regularMarketPrice'])
                        usd_rate = 1.0 / inv_rate if inv_rate != 0 else None
                except (KeyError, ValueError, TypeError, ZeroDivisionError):
                    usd_info_inv = usd_data_inv.history(period="5d")
                    if not usd_info_inv.empty:
                        inv_rate = float(usd_info_inv['Close'].iloc[-1])
                        usd_rate = 1.0 / inv_rate if inv_rate != 0 else None
            except Exception as e:
                print(f"Warning: Could not get inverse USD rate for {iso_code}: {e}")
        
        if eur_rate is None and usd_rate is None:
            print(f"Warning: No exchange rates found for {iso_code}, trying fallback API...")
            # Try fallback API before giving up
            try:
                import requests
                res = requests.get(f"https://api.exchangerate-api.com/v4/latest/{iso_upper}", timeout=5)
                if res.status_code == 200:
                    data = res.json()
                    rates = data.get("rates", {})
                    eur_rate = rates.get("EUR")
                    usd_rate = rates.get("USD")
                    if eur_rate is not None or usd_rate is not None:
                        return {"eur_rate": eur_rate, "usd_rate": usd_rate}
            except Exception as fallback_e:
                print(f"Fallback API also failed for {iso_code}: {fallback_e}")
            return None
        
        return {"eur_rate": eur_rate, "usd_rate": usd_rate}
    except Exception as e:
        print(f"Error fetching exchange rates for {iso_code}: {e}")
        import traceback
        traceback.print_exc()
        return None


def load_languages_table():
    """
    Load languages.csv and return a dict keyed by normalized country name.
    Returns dict like {"japan": {"country": "Japan", "languages": "Japanese"}, ...}
    """
    global _languages_cache
    if _languages_cache is not None:
        return _languages_cache
    
    table = {}
    if not LANGUAGES_CSV.exists():
        print(f"Warning: {LANGUAGES_CSV} not found")
        _languages_cache = {}
        return _languages_cache
    
    try:
        with open(LANGUAGES_CSV, 'r', encoding='utf-8-sig') as f:  # utf-8-sig handles BOM
            reader = csv.DictReader(f, delimiter=';')
            for row in reader:
                # Handle BOM in column name
                country = row.get('Country', '') or row.get('\ufeffCountry', '')
                country = country.strip()
                languages = row.get('Language in Use', '').strip()
                if country and languages:
                    key = country.lower()
                    table[key] = {
                        "country": country,
                        "languages": languages,
                    }
    except Exception as e:
        print(f"Error loading languages.csv: {e}")
        _languages_cache = {}
        return _languages_cache
    
    _languages_cache = table
    return _languages_cache


def get_languages(country: str, place: str | None = None):
    """
    Resolve to language info. Tries place parts first, then country.
    Returns dict with country, languages or None.
    """
    data = load_languages_table()
    if not data:
        return None

    # Normalize country names similar to other lookups
    LANGUAGE_ALIASES = {
        "uk": "United Kingdom",
        "united kingdom": "United Kingdom",
        "united states": "United States",
        "usa": "United States",
        "us": "United States",
        "u.s.": "United States",
        "u.s.a.": "United States",
        "united states of america": "United States",
        "russia": "Russia",
        "russian federation": "Russia",
        "south korea": "South Korea",
        "korea": "South Korea",
        "north korea": "North Korea",
        "czech republic": "Czech Republic",
        "czechia": "Czech Republic",
        "vietnam": "Vietnam",
        "viet nam": "Vietnam",
    }

    def lookup_one(name: str):
        if not name or not name.strip():
            return None
        name = name.strip().replace("\n", " ")
        # Try alias first
        normalized = LANGUAGE_ALIASES.get(name.lower(), name)
        key = normalized.lower()
        if key in data:
            return data[key]
        # Try original name
        key_orig = name.lower()
        if key_orig in data:
            return data[key_orig]
        # Try substring matching (but be more careful)
        for k, v in data.items():
            if key in k or k in key:
                # Avoid too short matches
                if len(key) >= 3 and len(k) >= 3:
                    return v
        return None

    # Try place parts first (for territories)
    if place and place.strip():
        for part in [p.strip() for p in place.split(",") if p.strip()]:
            match = lookup_one(part)
            if match:
                return match
    # Fall back to country
    if country and country.strip():
        return lookup_one(country.strip())
    return None


def load_religion_table():
    """
    Load religion_data_2030.csv and return a dict keyed by normalized country name.
    Returns dict like {"japan": {"Buddhists": 36.2, "Christians": 1.6, ...}, ...}
    """
    global _religion_cache
    if _religion_cache is not None:
        return _religion_cache
    
    table = {}
    if not RELIGION_CSV.exists():
        print(f"Warning: {RELIGION_CSV} not found")
        _religion_cache = {}
        return _religion_cache
    
    try:
        with open(RELIGION_CSV, 'r', encoding='utf-8-sig') as f:
            reader = csv.DictReader(f)
            for row in reader:
                country = row.get('Country', '').strip()
                if country:
                    key = country.lower()
                    # Extract all religion percentages, filtering out 1.0 values (likely "not applicable")
                    religions = {}
                    for col in ['Buddhists', 'Christians', 'Folk Religions', 'Hindus', 'Jews', 'Muslims', 'Other Religions', 'Unaffiliated']:
                        val = row.get(col, '').strip()
                        if val:
                            try:
                                pct = float(val)
                                # Only include if > 1.0 (1.0 seems to mean "not applicable" in this dataset)
                                if pct > 1.0:
                                    religions[col] = pct
                            except (ValueError, TypeError):
                                pass
                    if religions:
                        table[key] = {
                            "country": country,
                            **religions
                        }
    except Exception as e:
        print(f"Error loading religion_data_2030.csv: {e}")
        _religion_cache = {}
        return _religion_cache
    
    _religion_cache = table
    return _religion_cache


def get_religion(country: str, place: str | None = None):
    """
    Get religion data for a country. Tries place parts first, then country.
    Returns dict with religion percentages or None.
    """
    data = load_religion_table()
    if not data:
        return None
    
    # Normalize country names similar to other lookups
    RELIGION_ALIASES = {
        "uk": "United Kingdom",
        "united kingdom": "United Kingdom",
        "united states": "United States",
        "usa": "United States",
        "us": "United States",
        "u.s.": "United States",
        "u.s.a.": "United States",
        "united states of america": "United States",
        "russia": "Russian Federation",
        "russian federation": "Russian Federation",
        "south korea": "South Korea",
        "korea": "South Korea",
        "north korea": "North Korea",
        "czech republic": "Czech Republic",
        "czechia": "Czech Republic",
        "vietnam": "Vietnam",
        "viet nam": "Vietnam",
        "myanmar": "Myanmar",
        "burma": "Myanmar",
    }
    
    def lookup_one(name: str):
        if not name or not name.strip():
            return None
        name = name.strip().replace("\n", " ")
        # Try alias first
        normalized = RELIGION_ALIASES.get(name.lower(), name)
        key = normalized.lower()
        if key in data:
            return data[key]
        # Try original name
        key_orig = name.lower()
        if key_orig in data:
            return data[key_orig]
        # Try substring matching
        for k, v in data.items():
            if key in k or k in key:
                if len(key) >= 3 and len(k) >= 3:
                    return v
        return None
    
    # Try place parts first (for territories)
    if place and place.strip():
        for part in [p.strip() for p in place.split(",") if p.strip()]:
            match = lookup_one(part)
            if match:
                return match
    # Fall back to country
    if country and country.strip():
        return lookup_one(country.strip())
    return None


def load_lgbtq_table():
    """
    Load lgbtq_data.csv from website/ and return list of row dicts.
    Uses Python's csv.DictReader so quoting and commas are handled correctly.
    """
    global _lgbtq_cache
    if _lgbtq_cache is not None:
        return _lgbtq_cache
    if not LGBTQ_CSV.exists():
        _lgbtq_cache = []
        return _lgbtq_cache

    rows: list[dict] = []
    with open(LGBTQ_CSV, newline="", encoding="utf-8", errors="replace") as f:
        reader = csv.DictReader(f)
        for row in reader:
            # Normalize keys/values a bit (strip whitespace)
            cleaned = {}
            for k, v in row.items():
                key = (k or "").strip()
                val = v.strip() if isinstance(v, str) else v
                cleaned[key] = val
            # Skip if no Location
            if not cleaned.get("Location"):
                continue
            rows.append(cleaned)

    _lgbtq_cache = rows
    return _lgbtq_cache


@app.get("/lgbtq")
def api_lgbtq():
    """
    Return full LGBTQ+ dataset as JSON.
    """
    rows = load_lgbtq_table()
    return jsonify({"rows": rows, "count": len(rows)})


def load_flags():
    """Load flags.parquet and return dict mapping country name -> base64 data URL."""
    global _flags_cache
    if _flags_cache is not None:
        return _flags_cache
    if not FLAGS_PARQUET.exists():
        _flags_cache = {}
        return _flags_cache
    
    flags_dict = {}
    try:
        df = pd.read_parquet(FLAGS_PARQUET)
        for _, row in df.iterrows():
            label = str(row.get("label", "")).strip()
            country_code = str(row.get("country_code", "")).strip()
            image_bytes = row.get("image")
            
            if not label or image_bytes is None:
                continue
            
            # Convert PNG bytes to base64 data URL
            if isinstance(image_bytes, dict) and "bytes" in image_bytes:
                image_bytes = image_bytes["bytes"]
            elif not isinstance(image_bytes, bytes):
                continue
            
            base64_str = base64.b64encode(image_bytes).decode("utf-8")
            data_url = f"data:image/png;base64,{base64_str}"
            
            # Store by country name (label) and also by country_code for lookup
            flags_dict[label.lower()] = {
                "country": label,
                "country_code": country_code,
                "flag": data_url
            }
            if country_code:
                flags_dict[country_code.lower()] = flags_dict[label.lower()]
        
        # Load Taiwan and Palestine flags from PNG files
        for png_path, country_name, country_code in [
            (TAIWAN_FLAG_PNG, "Taiwan", "tw"),
            (PALESTINE_FLAG_PNG, "Palestine", "ps")
        ]:
            if png_path.exists():
                try:
                    with open(png_path, "rb") as f:
                        image_bytes = f.read()
                    base64_str = base64.b64encode(image_bytes).decode("utf-8")
                    data_url = f"data:image/png;base64,{base64_str}"
                    flags_dict[country_name.lower()] = {
                        "country": country_name,
                        "country_code": country_code,
                        "flag": data_url
                    }
                    if country_code:
                        flags_dict[country_code.lower()] = flags_dict[country_name.lower()]
                except Exception as e:
                    print(f"Error loading {country_name} flag from {png_path}: {e}")
    except Exception as e:
        print(f"Error loading flags: {e}")
        _flags_cache = {}
        return _flags_cache
    
    _flags_cache = flags_dict
    return _flags_cache


@app.route("/flags", methods=["GET", "OPTIONS"])
def api_flags():
    """Return all flags as JSON (country name -> flag data URL)."""
    if request.method == "OPTIONS":
        return "", 204
    flags = load_flags()
    # Return as list of objects for easier frontend use
    flags_list = []
    seen = set()
    for key, value in flags.items():
        country = value["country"]
        if country.lower() not in seen:
            flags_list.append(value)
            seen.add(country.lower())
    return jsonify({"flags": flags_list})


@app.route("/flag/<country_name>", methods=["GET", "OPTIONS"])
def api_flag_by_country(country_name):
    """Return flag for a specific country name."""
    if request.method == "OPTIONS":
        return "", 204
    flags = load_flags()
    country_lower = country_name.strip().lower()
    flag_data = flags.get(country_lower)
    if flag_data:
        return jsonify(flag_data)
    return jsonify({"error": "Flag not found"}), 404


def load_travel_advisories():
    """Load travel advisories and aliases from JSON."""
    global _travel_advisories_cache
    if _travel_advisories_cache is not None:
        return _travel_advisories_cache
    if not TRAVEL_ADVISORIES_JSON.exists():
        _travel_advisories_cache = {"advisories": [], "aliases": {}, "map_url": ""}
        return _travel_advisories_cache
    raw = json.loads(TRAVEL_ADVISORIES_JSON.read_text(encoding="utf-8"))
    _travel_advisories_cache = {
        "advisories": raw.get("advisories", []),
        "aliases": raw.get("aliases", {}),
        "map_url": raw.get("map_url", "https://travelmaps.state.gov/TSGMap/"),
    }
    return _travel_advisories_cache


def _advisory_to_response(a, map_url: str):
    return {
        "level": a["level"],
        "level_text": a["level_text"],
        "risk_indicators": a.get("risk_indicators", []),
        "date_issued": a.get("date_issued", ""),
        "url": a.get("url", ""),
        "map_url": map_url,
        "destination_name": a["name"],
    }


def _lookup_one(name: str, data: dict):
    """Find advisory for a single name (exact or partial). Returns response dict or None."""
    if not name or not name.strip():
        return None
    name = name.strip()
    advisories = data["advisories"]
    aliases = data["aliases"]
    map_url = data["map_url"]
    canonical = aliases.get(name) or aliases.get(name.title())
    if canonical:
        name = canonical
    name_lower = name.lower()
    for a in advisories:
        if a["name"].lower() == name_lower:
            return _advisory_to_response(a, map_url)
    for a in advisories:
        if name_lower in a["name"].lower() or a["name"].lower() in name_lower:
            return _advisory_to_response(a, map_url)
    return None


def get_travel_advisory(country: str, place: str | None = None):
    """
    Resolve to US Travel Advisory. If place is given (e.g. "Cayenne, French Guiana, France"),
    try each part of place first so territories with their own advisory (e.g. French Guiana)
    are matched before the parent country (France). Otherwise use country.
    Returns dict with level, level_text, risk_indicators, date_issued, url, map_url, destination_name,
    or None if not found.
    """
    data = load_travel_advisories()
    if place and place.strip():
        parts = [p.strip() for p in place.split(",") if p.strip()]
        for part in parts:
            match = _lookup_one(part, data)
            if match:
                return match
    if country and country.strip():
        return _lookup_one(country.strip(), data)
    return None


@app.route("/map-layers", methods=["GET", "OPTIONS"])
def map_layers():
    """Return all data needed for the Explore the World map layers."""
    if request.method == "OPTIONS":
        return "", 204
    try:
        driving = load_driving_side_table()
        driving_side = [{"territory": v["territory"], "side": v["side"]} for v in driving.values()]

        adv_data = load_travel_advisories()
        travel_advisories = [
            {"name": a["name"], "level": a.get("level"), "level_text": a.get("level_text", "")}
            for a in adv_data.get("advisories", [])
        ]

        lgbtq_rows = load_lgbtq_table()
        lgbtq = []
        for row in lgbtq_rows:
            location = (row.get("Location") or "").strip()
            if not location:
                continue
            activity = (row.get("Same-sex sexual activity") or "").strip().lower()
            # Red if same-sex sexual activity contains "illegal", else green
            friendliness = "illegal" if "illegal" in activity else "legal"
            lgbtq.append({"location": location, "friendliness": friendliness})

        heritage = load_heritage_sites()
        heritage_sites = [
            {"name_en": s["name_en"], "lat": s["lat"], "lon": s["lon"], "category": s.get("category", "")}
            for s in heritage
        ]

        airports = load_airports()
        airports_list = [
            {"lat": a["lat"], "lon": a["lon"], "iata_code": a["iata_code"], "city": a["city"], "country": a["country"]}
            for a in airports
        ]

        plug_table = load_plug_voltage_table()
        plug_voltage = [
            {"location_name": v["location_name"], "plug_types": v.get("plug_types", [])}
            for v in plug_table.values()
        ]

        # Load religion data
        religion_table = load_religion_table()
        religions = []
        for country_data in religion_table.values():
            country = country_data.get("country", "")
            if not country:
                continue
            # Find dominant religion (highest percentage)
            dominant_religion = None
            max_pct = 0
            for rel in ['Buddhists', 'Christians', 'Folk Religions', 'Hindus', 'Jews', 'Muslims', 'Other Religions', 'Unaffiliated']:
                pct = country_data.get(rel)
                if pct and pct > max_pct:
                    max_pct = pct
                    dominant_religion = rel
            if dominant_religion:
                religions.append({
                    "country": country,
                    "dominant_religion": dominant_religion,
                    "percentage": max_pct
                })

        return jsonify({
            "driving_side": driving_side,
            "travel_advisories": travel_advisories,
            "lgbtq": lgbtq,
            "heritage_sites": heritage_sites,
            "airports": airports_list,
            "religions": religions,
            "plug_voltage": plug_voltage,
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.after_request
def add_cors(resp):
    resp.headers["Access-Control-Allow-Origin"] = "*"
    resp.headers["Access-Control-Allow-Methods"] = "GET, OPTIONS"
    resp.headers["Access-Control-Allow-Headers"] = "Content-Type"
    return resp


def load_heritage_sites():
    """Load world_heritage_sites.csv. Returns list of dicts with name_en, short_desc, date_inscribed, category, lat, lon."""
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
                "name_en": name,
                "short_desc": (row.get("Short Description EN") or "").strip(),
                "date_inscribed": (row.get("Date inscribed") or "").strip(),
                "category": (row.get("Category") or "").strip(),
                "lat": lat,
                "lon": lon,
            })
    _heritage_cache = rows
    return _heritage_cache


def heritage_near(lat: float, lon: float, radius_km: float = 200):
    """Return heritage sites within radius_km of (lat, lon), sorted by distance."""
    sites = load_heritage_sites()
    out = []
    for s in sites:
        d = haversine_km(lat, lon, s["lat"], s["lon"])
        if d <= radius_km:
            out.append({**s, "distance_km": round(d, 2)})
    out.sort(key=lambda x: x["distance_km"])
    return out


@app.route("/heritage", methods=["GET", "OPTIONS"])
def heritage():
    if request.method == "OPTIONS":
        return "", 204
    lat = request.args.get("lat", type=float)
    lon = request.args.get("lon", type=float)
    radius = request.args.get("radius_km", type=float, default=200)
    if lat is None or lon is None:
        return jsonify({"error": "Missing lat or lon"}), 400
    if not (-90 <= lat <= 90):
        return jsonify({"error": "Latitude must be between -90 and 90"}), 400
    if not (-180 <= lon <= 180):
        return jsonify({"error": "Longitude must be between -180 and 180"}), 400
    try:
        sites = heritage_near(lat, lon, radius_km=radius)
        return jsonify({"sites": sites})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/climate-grid", methods=["GET", "OPTIONS"])
def climate_grid():
    if request.method == "OPTIONS":
        return "", 204
    step = request.args.get("step", type=int, default=5)
    step = max(2, min(10, step))
    month = request.args.get("month", type=int)
    if month is not None and (month < 1 or month > 12):
        month = None
    variable = (request.args.get("variable") or "temp").strip().lower()
    if variable not in ("temp", "precipitation"):
        variable = "temp"
    try:
        grid, unit = get_global_climate_grid(step_deg=step, month=month, variable=variable)
        return jsonify({"grid": grid, "step": step, "unit": unit, "variable": variable})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/climate", methods=["GET", "OPTIONS"])
def climate():
    if request.method == "OPTIONS":
        return "", 204
    lat = request.args.get("lat", type=float)
    lon = request.args.get("lon", type=float)
    country = (request.args.get("country") or "").strip()
    place = (request.args.get("place") or "").strip()
    nationality = (request.args.get("nationality") or "").strip()
    if lat is None or lon is None:
        return jsonify({"error": "Missing lat or lon query parameters"}), 400
    if not (-90 <= lat <= 90):
        return jsonify({"error": "Latitude must be between -90 and 90"}), 400
    if not (-180 <= lon <= 180):
        return jsonify({"error": "Longitude must be between -180 and 180"}), 400
    try:
        temp_day, temp_night, precip, cloud, rainy_days = _climate_with_fallback(lat, lon)
        nearest = nearest_airports(lat, lon, top_n=5)
        payload = {
            "temperature_day": [float(x) if x == x else None for x in temp_day],
            "temperature_night": [float(x) if x == x else None for x in temp_night],
            "precipitation": [float(x) if x == x else None for x in precip],
            "cloud_cover": [float(x) if x == x else None for x in cloud],
            "rainy_days": [float(x) if x == x else None for x in rainy_days],
            "nearest_airports": nearest,
        }
        if country or place:
            advisory = get_travel_advisory(country, place)
            if advisory:
                payload["travel_advisory"] = advisory
            plug_voltage = get_plug_voltage(country, place)
            if plug_voltage:
                payload["plug_voltage"] = plug_voltage
            driving_side = get_driving_side(country, place)
            if driving_side:
                payload["driving_side"] = driving_side
            currency_info = get_currency(country, place)
            if currency_info:
                # Fetch exchange rates with a short timeout so slow yfinance doesn't block the whole search
                try:
                    import concurrent.futures
                    with concurrent.futures.ThreadPoolExecutor(max_workers=1) as ex:
                        fut = ex.submit(get_exchange_rates, currency_info.get("iso_code"), 3)
                        exchange_rates = fut.result(timeout=4)  # 4s cap so search returns quickly
                    if exchange_rates:
                        currency_info.update(exchange_rates)
                    else:
                        currency_info["eur_rate"] = None
                        currency_info["usd_rate"] = None
                except Exception as rate_error:
                    print(f"Warning: Exchange rate fetch failed or timed out, continuing without rates: {rate_error}")
                    currency_info["eur_rate"] = None
                    currency_info["usd_rate"] = None
                if "eur_rate" not in currency_info:
                    currency_info["eur_rate"] = None
                if "usd_rate" not in currency_info:
                    currency_info["usd_rate"] = None
                payload["currency"] = currency_info
            languages_info = get_languages(country, place)
            if languages_info:
                payload["languages"] = languages_info
            religion_info = get_religion(country, place)
            if religion_info:
                payload["religion"] = religion_info
        if nationality:
            try:
                visa_req = get_visa_requirement(nationality, country, place)
                if visa_req:
                    payload["visa_requirement"] = visa_req
            except Exception as visa_error:
                print(f"Warning: Visa requirement fetch failed: {visa_error}")
                # Continue without visa requirement
        
        # Always return climate data, even if other parts failed
        return jsonify(payload)
    except Exception as e:
        # Log the full error for debugging
        import traceback
        print(f"Error in climate endpoint: {e}")
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500


def load_countries():
    """Load country names from countries.csv (one per line, for nationality dropdown)."""
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


# Normalize country names from Nominatim/UI to exact CSV Destination values in passports_visas_cleaned.csv
COUNTRY_ALIASES = {
    "uk": "United Kingdom",
    "united states": "United States",
    "usa": "United States",
    "us": "United States",
    "u.s.": "United States",
    "u.s.a.": "United States",
    "united states of america": "United States",
    "russia": "Russian Federation",
    "russian federation": "Russian Federation",
    "korea": "South Korea",
    "south korea": "South Korea",
    "republic of korea": "South Korea",
    "north korea": "North Korea",
    "democratic people's republic of korea": "North Korea",
    "czech republic": "Czechia",
    "czechia": "Czechia",
    "viet nam": "Vietnam",
    "socialist republic of vietnam": "Vietnam",
    "taiwan": "Taiwan (Chinese Taipei)",
    "chinese taipei": "Taiwan (Chinese Taipei)",
    "ivory coast": "Côte d'Ivoire",
    "côte d'ivoire": "Côte d'Ivoire",
    "cote d'ivoire": "Côte d'Ivoire",
}


def _normalize_destination_for_visa(name: str) -> str:
    """Return canonical destination name for CSV lookup, or original if no alias."""
    if not name or not name.strip():
        return name
    key = name.strip().lower()
    return COUNTRY_ALIASES.get(key) or name.strip()


def load_passports_visas():
    """
    Load passports_visas_cleaned.csv (Origin, Destination, Requirement).
    Returns dict: (origin_lower, destination_lower) -> (requirement, origin_display, destination_display).
    """
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
            dest = (row.get("Destination") or "").strip()
            req = (row.get("Requirement") or "").strip()
            if origin and dest and dest != "Destination":
                key = (origin.lower(), dest.lower())
                table[key] = (req, origin, dest)
    _passports_visas_cache = table
    return _passports_visas_cache


def get_visa_requirement(nationality: str, destination_country: str, place: str | None = None):
    """
    Look up visa requirement from passports_visas_cleaned.csv by Origin (nationality) and Destination.
    Matches typed destination to CSV Destination (tries destination country then place parts).
    Returns dict with requirement, nationality_name, destination_name or None.
    """
    table = load_passports_visas()
    if not table:
        return None
    nat_lower = (nationality or "").strip().lower()
    if not nat_lower:
        return None

    def lookup(orig: str, dest: str):
        o_low = orig.strip().lower()
        d_low = dest.strip().lower()
        if not o_low or not d_low:
            return None
        key = (o_low, d_low)
        if key in table:
            req, o_disp, d_disp = table[key]
            return {"requirement": req, "nationality_name": o_disp, "destination_name": d_disp}
        return None

    # Try destination country first (exact then normalized)
    if destination_country and destination_country.strip():
        dest = destination_country.strip()
        result = lookup(nationality.strip(), dest)
        if result:
            return result
        canonical = _normalize_destination_for_visa(dest)
        if canonical != dest:
            result = lookup(nationality.strip(), canonical)
            if result:
                return result
        # Fuzzy: find any (nat, dest) where dest contains or is contained in search
        dest_lower = dest.lower()
        for (o_low, d_low), (req, o_disp, d_disp) in table.items():
            if o_low == nat_lower and (dest_lower == d_low or dest_lower in d_low or d_low in dest_lower):
                return {"requirement": req, "nationality_name": o_disp, "destination_name": d_disp}

    # Try place parts (e.g. "French Guiana" from "Cayenne, French Guiana, France")
    if place and place.strip():
        for part in [p.strip() for p in place.split(",") if p.strip()]:
            result = lookup(nationality.strip(), part)
            if result:
                return result
            canonical = _normalize_destination_for_visa(part)
            if canonical != part:
                result = lookup(nationality.strip(), canonical)
                if result:
                    return result
        for part in [p.strip() for p in place.split(",") if p.strip()]:
            part_lower = part.lower()
            for (o_low, d_low), (req, o_disp, d_disp) in table.items():
                if o_low == nat_lower and (d_low == part_lower or part_lower in d_low or d_low in part_lower):
                    return {"requirement": req, "nationality_name": o_disp, "destination_name": d_disp}
    return None


@app.route("/nationalities", methods=["GET", "OPTIONS"])
def nationalities_list():
    """Return list of countries from countries.csv for nationality dropdown."""
    if request.method == "OPTIONS":
        return "", 204
    names = load_countries()
    return jsonify({"nationalities": names})


@app.route("/detect-nationality", methods=["GET", "OPTIONS"])
def detect_nationality():
    """Detect user's country based on IP address and return matching nationality."""
    if request.method == "OPTIONS":
        return "", 204
    
    # Map IP geolocation country names to nationality list names
    COUNTRY_TO_NATIONALITY = {
        "United States": "United States",
        "USA": "United States",
        "US": "United States",
        "United Kingdom": "United Kingdom",
        "UK": "United Kingdom",
        "Great Britain": "United Kingdom",
        "Russia": "Russian Federation",
        "Russian Federation": "Russian Federation",
        "South Korea": "South Korea",
        "Korea": "South Korea",
        "North Korea": "North Korea",
        "Czech Republic": "Czech Republic",
        "Czechia": "Czech Republic",
        "Vietnam": "Vietnam",
        "Viet Nam": "Vietnam",
        "Myanmar": "Myanmar",
        "Burma": "Myanmar",
        "Ivory Coast": "Côte d'Ivoire",
        "Côte d'Ivoire": "Côte d'Ivoire",
        "Cote d'Ivoire": "Côte d'Ivoire",
        "East Timor": "East Timor",
        "Timor-Leste": "East Timor",
        "The Gambia": "Gambia",
        "Gambia": "Gambia",
        "Guinea-Bissau": "Guinea-Bissau",
        "Guinea Bissau": "Guinea-Bissau",
        "Cabo Verde": "Cape Verde",
        "Cape Verde": "Cape Verde",
        "The Bahamas": "Bahamas",
        "Bahamas": "Bahamas",
        "Saint Lucia": "St. Lucia",
        "St. Lucia": "St. Lucia",
        "St Lucia": "St. Lucia",
        "Saint Vincent and the Grenadines": "St. Vincent and the Grenadines",
        "St. Vincent and the Grenadines": "St. Vincent and the Grenadines",
        "St Vincent and the Grenadines": "St. Vincent and the Grenadines",
        "Saint Kitts and Nevis": "St. Kitts and Nevis",
        "St. Kitts and Nevis": "St. Kitts and Nevis",
        "St Kitts and Nevis": "St. Kitts and Nevis",
        "São Tomé and Príncipe": "São Tomé and Príncipe",
        "Sao Tome and Principe": "São Tomé and Príncipe",
        "Palestine": "Palestine",
        "West Bank": "Palestine",
        "Gaza": "Palestine",
        "Swaziland": "Eswatini",
        "Eswatini": "Eswatini",
        "Republic of North Macedonia": "Macedonia",
        "North Macedonia": "Macedonia",
        "Macedonia": "Macedonia",
        "Democratic Republic of the Congo": "Congo (Dem. Rep.)",
        "DRC": "Congo (Dem. Rep.)",
        "Republic of the Congo": "Congo (Rep.)",
        "Congo": "Congo (Rep.)",
    }
    
    try:
        # Try to get IP from request
        # Check for forwarded IP (common in proxies/load balancers)
        ip = request.headers.get('X-Forwarded-For', '').split(',')[0].strip()
        if not ip:
            ip = request.headers.get('X-Real-IP', '').strip()
        if not ip:
            ip = request.remote_addr
        
        # Use free IP geolocation API (ip-api.com - no key needed, 45 req/min)
        # Skip if IP is localhost/private
        if ip in ('127.0.0.1', 'localhost', '::1') or ip.startswith('192.168.') or ip.startswith('10.') or ip.startswith('172.'):
            return jsonify({"nationality": None, "error": "Cannot detect location from localhost/private IP"})
        
        try:
            import requests
            # Use HTTPS endpoint (no key needed)
            res = requests.get(f"https://ip-api.com/json/{ip}?fields=status,message,country,countryCode", timeout=5)
            if res.status_code == 200:
                data = res.json()
                if data.get("status") == "success":
                    country_name = data.get("country", "").strip()
                    if country_name:
                        # Try direct match first
                        nationality_list = load_countries()
                        if country_name in nationality_list:
                            return jsonify({"nationality": country_name, "country": country_name})
                        
                        # Try alias mapping
                        mapped = COUNTRY_TO_NATIONALITY.get(country_name)
                        if mapped and mapped in nationality_list:
                            return jsonify({"nationality": mapped, "country": country_name})
                        
                        # Try case-insensitive match
                        country_lower = country_name.lower()
                        for nat in nationality_list:
                            if nat.lower() == country_lower:
                                return jsonify({"nationality": nat, "country": country_name})
                else:
                    error_msg = data.get("message", "Unknown error")
                    return jsonify({"nationality": None, "error": f"IP geolocation failed: {error_msg}"})
        except ImportError:
            return jsonify({"nationality": None, "error": "requests library not available for IP geolocation"})
        except requests.exceptions.Timeout:
            return jsonify({"nationality": None, "error": "IP geolocation request timed out"})
        except requests.exceptions.RequestException as e:
            return jsonify({"nationality": None, "error": f"IP geolocation request failed: {str(e)}"})
        except Exception as e:
            return jsonify({"nationality": None, "error": f"Error detecting nationality from IP: {str(e)}"})
        
        return jsonify({"nationality": None, "error": "Could not detect nationality"})
    except Exception as e:
        return jsonify({"nationality": None, "error": str(e)})


@app.route("/visa-by-nationality", methods=["GET", "OPTIONS"])
def visa_by_nationality():
    """Return all destinations and visa requirements for a given nationality (for map)."""
    if request.method == "OPTIONS":
        return "", 204
    nationality = (request.args.get("nationality") or "").strip()
    if not nationality:
        return jsonify({"error": "Missing nationality parameter"}), 400
    table = load_passports_visas()
    if not table:
        return jsonify({"nationality": nationality, "destinations": []})
    nat_lower = nationality.lower()
    destinations = []
    seen = set()
    for (o_low, d_low), (req, o_disp, d_disp) in table.items():
        if o_low != nat_lower:
            continue
        if d_low in seen:
            continue
        seen.add(d_low)
        destinations.append({"destination": d_disp, "requirement": req})
    return jsonify({"nationality": nationality, "destinations": destinations})


@app.route("/visa-requirement", methods=["GET", "OPTIONS"])
def visa_requirement():
    if request.method == "OPTIONS":
        return "", 204
    nationality = (request.args.get("nationality") or "").strip()
    destination = (request.args.get("destination") or "").strip()
    place = (request.args.get("place") or "").strip()
    if not nationality:
        return jsonify({"error": "Missing nationality parameter"}), 400
    if not destination and not place:
        return jsonify({"error": "Missing destination or place parameter"}), 400
    result = get_visa_requirement(nationality, destination, place)
    if result is None:
        return jsonify({"requirement": None, "message": "No data for this nationality/destination combination."})
    return jsonify(result)


@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"})


if __name__ == "__main__":
    print("Climate API running at http://127.0.0.1:5000")
    print("Test: http://127.0.0.1:5000/health")
    print("Climate: http://127.0.0.1:5000/climate?lat=40.71&lon=-74.00")
    app.run(host="127.0.0.1", port=5000, debug=True)
