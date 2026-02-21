#!/usr/bin/env python3
"""
Load airport_codes.csv, geocode City + Country to get latitude/longitude,
add Latitude and Longitude columns, remove empty columns, and overwrite the CSV.
Uses Nominatim (OpenStreetMap); respects 1 request/second rate limit.
"""

import csv
import time
import urllib.parse
import urllib.request

INPUT_CSV = "airport_codes.csv"
OUTPUT_CSV = "airport_codes.csv"
FAILED_CSV = "airport_codes_not_geocoded.csv"
USER_AGENT = "SmartTravelAirportCodes/1.0"
NOMINATIM_URL = "https://nominatim.openstreetmap.org/search"
DELAY_SECONDS = 1.1  # Nominatim rate limit

# Country name normalizations before geocoding
COUNTRY_NORMALIZE = {
    "republic of maldives": "Maldives",
}


def normalize_country(country: str) -> str:
    """Apply known country name fixes (e.g. Republic of Maldives -> Maldives)."""
    if not country:
        return country
    key = country.strip().lower()
    return COUNTRY_NORMALIZE.get(key, country.strip())


def geocode(city: str, country: str, cache: dict) -> tuple[float | None, float | None]:
    """Return (lat, lon) for city, country. Uses cache. Returns (None, None) on failure."""
    city = (city or "").strip()
    country = (country or "").strip()
    if not city and not country:
        return None, None
    key = f"{city}|{country}"
    if key in cache:
        return cache[key]
    query = f"{city}, {country}" if city and country else (city or country)
    params = urllib.parse.urlencode({"q": query, "format": "json", "limit": 1})
    req = urllib.request.Request(
        f"{NOMINATIM_URL}?{params}",
        headers={"User-Agent": USER_AGENT},
    )
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = resp.read().decode()
    except Exception:
        cache[key] = (None, None)
        return None, None
    try:
        import json
        results = json.loads(data)
        if results:
            lat = float(results[0]["lat"])
            lon = float(results[0]["lon"])
            cache[key] = (lat, lon)
            return lat, lon
    except (KeyError, TypeError, ValueError):
        pass
    cache[key] = (None, None)
    return None, None


def main():
    rows = []
    with open(INPUT_CSV, newline="", encoding="utf-8") as f:
        reader = csv.reader(f, delimiter=";")
        header = next(reader)
        # Keep only first 4 columns
        col_names = [h.strip() for h in header[:4]]
        rows.append(col_names + ["Latitude", "Longitude"])
        for row in reader:
            # Strip and take first 4; pad if short
            cells = [c.strip() for c in row[:4]]
            while len(cells) < 4:
                cells.append("")
            rows.append(cells)

    cache = {}
    total = len(rows) - 1
    failed_rows = []
    for i, row in enumerate(rows[1:], start=1):
        region, country, city, code = row[0], row[1], row[2], row[3]
        country = normalize_country(country)
        row[1] = country  # use normalized country in output
        lat, lon = geocode(city, country, cache)
        row.append(str(lat) if lat is not None else "")
        row.append(str(lon) if lon is not None else "")
        if lat is None or lon is None:
            failed_rows.append(row)
        print(f"[{i}/{total}] {city}, {country} -> {lat}, {lon}")
        time.sleep(DELAY_SECONDS)

    with open(OUTPUT_CSV, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f, delimiter=";")
        writer.writerows(rows)
    print(f"Wrote {OUTPUT_CSV} with {len(rows)-1} rows and columns: {rows[0]}")

    if failed_rows:
        with open(FAILED_CSV, "w", newline="", encoding="utf-8") as f:
            writer = csv.writer(f, delimiter=";")
            writer.writerow(rows[0])  # same header
            writer.writerows(failed_rows)
        print(f"Wrote {FAILED_CSV} with {len(failed_rows)} rows that could not be geocoded.")
    else:
        print("All rows were geocoded successfully.")


if __name__ == "__main__":
    main()
