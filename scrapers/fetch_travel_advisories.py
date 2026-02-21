#!/usr/bin/env python3
"""
Fetch US State Department Travel Advisories and save to travel_advisories.json.
Run from airport_project: python fetch_travel_advisories.py

Data source: https://travel.state.gov/en/international-travel/travel-advisories.html
Map: https://travelmaps.state.gov/TSGMap/
"""

import json
import re
from pathlib import Path

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    print("Install: pip install requests beautifulsoup4")
    raise

URL = "https://travel.state.gov/en/international-travel/travel-advisories.html"
OUTPUT = Path(__file__).resolve().parent.parent / "SmartTravel" / "datasets" / "travel_advisories.json"
MAP_URL = "https://travelmaps.state.gov/TSGMap/"
BASE_URL = "https://travel.state.gov"


def parse_level(text):
    """Return (level_number 1-4, level_text)."""
    if not text:
        return None, ""
    text = text.strip()
    if "Level 4" in text or "Do not travel" in text:
        return 4, "Do not travel"
    if "Level 3" in text or "Reconsider travel" in text:
        return 3, "Reconsider travel"
    if "Level 2" in text or "Exercise increased caution" in text:
        return 2, "Exercise increased caution"
    if "Level 1" in text or "Exercise normal precautions" in text:
        return 1, "Exercise normal precautions"
    return None, text


def fetch_and_parse():
    r = requests.get(URL, timeout=15, headers={"User-Agent": "SmartTravel/1.0"})
    r.raise_for_status()
    soup = BeautifulSoup(r.text, "html.parser")

    advisories = []

    # Find table with headers: Destination, Level, Risk Indicators, Date Issued
    for table in soup.find_all("table"):
        rows = table.find_all("tr")
        if not rows:
            continue
        header_cells = rows[0].find_all(["th", "td"])
        header_text = " ".join(c.get_text(strip=True) for c in header_cells)
        if "Destination" not in header_text or "Level" not in header_text:
            continue
        for row in rows[1:]:
            cells = row.find_all(["td", "th"])
            if len(cells) < 4:
                continue
            # State Dept table order: Destination (th), Level, Risk Indicators, Date Issued (td)
            dest_cell = cells[0]
            link = dest_cell.find("a", href=True)
            level_num, level_text = parse_level(cells[1].get_text())
            risk_raw = cells[2].get_text(strip=True)
            date_issued = cells[3].get_text(strip=True)
            name = (link.get_text(strip=True) if link else dest_cell.get_text(strip=True)).strip()
            if not name or len(name) > 100:
                continue
            href = link["href"] if link else ""
            if not href.startswith("http"):
                href = (BASE_URL + href) if href.startswith("/") else (BASE_URL + "/" + href) if href else ""

            # Risk: split on multiple spaces or keep tokens like "CRIME (C)"
            risk_list = re.split(r"\s{2,}", risk_raw)
            risk_list = [s.strip() for s in risk_list if s.strip()]
            if not risk_list and risk_raw:
                risk_list = [risk_raw]

            advisories.append({
                "name": name,
                "level": level_num if level_num is not None else 1,
                "level_text": level_text or "Exercise normal precautions",
                "risk_indicators": risk_list,
                "date_issued": date_issued,
                "url": href or BASE_URL,
            })
        if advisories:
            return advisories

    return advisories


def build_country_aliases():
    """Map common names (e.g. from Nominatim) to State Dept destination names."""
    return {
        "United Kingdom": "United Kingdom of Great Britain and Northern Ireland",
        "UK": "United Kingdom of Great Britain and Northern Ireland",
        "Great Britain": "United Kingdom of Great Britain and Northern Ireland",
        "England": "United Kingdom of Great Britain and Northern Ireland",
        "Scotland": "United Kingdom of Great Britain and Northern Ireland",
        "Wales": "United Kingdom of Great Britain and Northern Ireland",
        "Northern Ireland": "United Kingdom of Great Britain and Northern Ireland",
        "USA": "United States",
        "United States": "United States",
        "U.S.": "United States",
        "US": "United States",
        "Ivory Coast": "Côte d'Ivoire (Ivory-Coast)",
        "Cote d'Ivoire": "Côte d'Ivoire (Ivory-Coast)",
        "Republic of North Macedonia": "Republic of North Macedonia",
        "North Macedonia": "Republic of North Macedonia",
        "Macedonia": "Republic of North Macedonia",
        "DRC": "Democratic Republic of the Congo (D.R.C.)",
        "Democratic Republic of Congo": "Democratic Republic of the Congo (D.R.C.)",
        "Congo (Kinshasa)": "Democratic Republic of the Congo (D.R.C.)",
        "Congo (Brazzaville)": "Republic of the Congo",
        "Myanmar": "Burma (Myanmar)",
        "Burma": "Burma (Myanmar)",
        "Swaziland": "Eswatini (Swaziland)",
        "Eswatini": "Eswatini (Swaziland)",
        "Cape Verde": "Cabo Verde",
        "Vatican": "Vatican City (Holy See)",
        "Holy See": "Vatican City (Holy See)",
        "South Korea": "South Korea",
        "Korea": "South Korea",
        "North Korea": "North Korea (Democratic People's Republic of Korea)",
        "Taiwan": "Taiwan",
        "Hong Kong": "Hong Kong",
        "Macau": "Macau",
        "Macao": "Macau",
        "Palestine": "West Bank",  # or Gaza depending; West Bank is Level 3
        "Czech Republic": "Czechia",
        "Czech Republic": "Czechia",
        "Turks and Caicos": "Turks and Caicos Islands",
        "Saint Martin": "Saint Martin (French West Indies)",
        "St. Martin": "Saint Martin (French West Indies)",
        "Saint Barthelemy": "Saint Barthélemy (French West Indies)",
        "St. Barthélemy": "Saint Barthélemy (French West Indies)",
        "Sint Eustatius": "Sint Eustatius",
        "Saba": "Saba",
        "Bonaire": "Bonaire, Sint Eustatius, and Saba",
        "The Gambia": "The Gambia",
        "Gambia": "The Gambia",
        "Tanzania": "Tanzania",
        "Micronesia": "Federated States of Micronesia",
        "FSM": "Federated States of Micronesia",
    }


def main():
    print("Fetching", URL)
    try:
        advisories = fetch_and_parse()
    except Exception as e:
        print("Fetch failed:", e)
        advisories = []

    if not advisories:
        print("No advisories parsed. Loading fallback data.")
        advisories = load_fallback()

    # Dedupe by name (keep first)
    seen = set()
    unique = []
    for a in advisories:
        n = a["name"].strip()
        if n and n not in seen:
            seen.add(n)
            unique.append(a)

    data = {
        "source": URL,
        "map_url": MAP_URL,
        "advisories": unique,
        "aliases": build_country_aliases(),
    }
    OUTPUT.write_text(json.dumps(data, indent=2), encoding="utf-8")
    print(f"Wrote {len(unique)} advisories to {OUTPUT}")


def load_fallback():
    """Minimal fallback when fetch fails: a few countries so lookup still works."""
    return [
        {"name": "United Kingdom of Great Britain and Northern Ireland", "level": 2, "level_text": "Exercise increased caution", "risk_indicators": ["TERRORISM (T)", "UNREST (U)", "CRIME (C)"], "date_issued": "05/08/2025", "url": "https://travel.state.gov/en/international-travel/travel-advisories/united-kingdom.html"},
        {"name": "United States", "level": 1, "level_text": "Exercise normal precautions", "risk_indicators": [], "date_issued": "", "url": "https://travel.state.gov"},
        {"name": "France", "level": 2, "level_text": "Exercise increased caution", "risk_indicators": ["UNREST (U)", "TERRORISM (T)"], "date_issued": "05/28/2025", "url": "https://travel.state.gov/en/international-travel/travel-advisories/france.html"},
        {"name": "Germany", "level": 2, "level_text": "Exercise increased caution", "risk_indicators": ["TERRORISM (T)"], "date_issued": "05/13/2025", "url": "https://travel.state.gov/en/international-travel/travel-advisories/germany.html"},
        {"name": "Japan", "level": 1, "level_text": "Exercise normal precautions", "risk_indicators": [], "date_issued": "05/15/2025", "url": "https://travel.state.gov/en/international-travel/travel-advisories/japan.html"},
        {"name": "Canada", "level": 1, "level_text": "Exercise normal precautions", "risk_indicators": [], "date_issued": "06/11/2025", "url": "https://travel.state.gov/en/international-travel/travel-advisories/canada.html"},
        {"name": "Greenland", "level": 2, "level_text": "Exercise increased caution", "risk_indicators": ["NATURAL DISASTER (N)", "OTHER (O)"], "date_issued": "10/29/2024", "url": "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Greenland.html"},
        {"name": "Australia", "level": 1, "level_text": "Exercise normal precautions", "risk_indicators": [], "date_issued": "05/30/2025", "url": "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Australia.html"},
        {"name": "Mexico", "level": 2, "level_text": "Exercise increased caution", "risk_indicators": ["CRIME (C)", "KIDNAPPING OR HOSTAGE TAKING (K)", "TERRORISM (T)"], "date_issued": "08/12/2025", "url": "https://travel.state.gov/en/international-travel/travel-advisories/mexico.html"},
        {"name": "Italy", "level": 2, "level_text": "Exercise increased caution", "risk_indicators": ["TERRORISM (T)"], "date_issued": "05/23/2025", "url": "https://travel.state.gov/en/international-travel/travel-advisories/italy.html"},
        {"name": "Spain", "level": 2, "level_text": "Exercise increased caution", "risk_indicators": ["UNREST (U)", "TERRORISM (T)"], "date_issued": "05/12/2025", "url": "https://travel.state.gov/en/international-travel/travel-advisories/spain.html"},
        {"name": "Ireland", "level": 1, "level_text": "Exercise normal precautions", "risk_indicators": [], "date_issued": "08/28/2024", "url": "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Ireland.html"},
        {"name": "Denmark", "level": 2, "level_text": "Exercise increased caution", "risk_indicators": ["TERRORISM (T)"], "date_issued": "09/17/2024", "url": "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Denmark.html"},
        {"name": "Latvia", "level": 1, "level_text": "Exercise normal precautions", "risk_indicators": [], "date_issued": "08/26/2024", "url": "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Latvia.html"},
        {"name": "Lithuania", "level": 1, "level_text": "Exercise normal precautions", "risk_indicators": [], "date_issued": "08/09/2024", "url": "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Lithuania.html"},
        {"name": "Estonia", "level": 1, "level_text": "Exercise normal precautions", "risk_indicators": [], "date_issued": "07/23/2024", "url": "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Estonia.html"},
    ]


if __name__ == "__main__":
    main()
