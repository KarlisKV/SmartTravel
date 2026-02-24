# SmartTravel — Development Agent Instructions

## Cursor Cloud specific instructions

### Architecture overview

- **Backend**: FastAPI app in `python_api/climate_api_fastapi.py` serving climate data, geocoding, flags, visa info, LGBTQ+ data, heritage sites, airports, currency exchange, and map overlay layers.
- **Frontend**: Vanilla JS SPA at project root (`index.html`, `script.js`, `styles.css`) using Leaflet.js for maps and Chart.js for charts. All JS/CSS libraries loaded via CDN (no JS package manager).
- **Data**: All data is file-based (CSV, JSON, Parquet, GeoTIFF) under `datasets/` and `python_api/data/raw/`.
- **No database** required.

### System dependency

`libgdal-dev` is required for `rasterio` (GeoTIFF reading). It is installed as part of the VM environment setup.

### Running the backend (dev mode)

```bash
export PATH="$HOME/.local/bin:$PATH"
export CLIMATEMAPS_DATA_DIR=/workspace/python_api
cd /workspace/python_api
uvicorn climate_api_fastapi:app --reload --host 0.0.0.0 --port 5000
```

- `CLIMATEMAPS_DATA_DIR` must point to `python_api/` (the directory containing `data/raw/`).
- The `--reload` flag enables hot-reloading for development.
- The API docstring in `climate_api_fastapi.py` documents the dev and production run commands.

### Running the frontend

Serve the project root with any static HTTP server:

```bash
cd /workspace
python3 -m http.server 8080 --bind 0.0.0.0
```

**Important**: `script.js` line 6 sets `API_BASE` to a remote production server (`http://164.92.135.213/api`). For local development, change this to `http://127.0.0.1:5000` (no `/api` prefix — the FastAPI app serves endpoints at the root).

### Linting and testing

There are no automated test suites or linting configurations in the repository. Manual testing is done via:
- `curl` against the FastAPI endpoints (e.g., `curl http://127.0.0.1:5000/health`)
- Browser testing of the frontend

### Key endpoints for verification

- `GET /health` — health check with RAM and cache stats
- `GET /climate?lat=48.8566&lon=2.3522` — climate data for Paris
- `GET /airports?lat=48.8566&lon=2.3522&limit=3` — nearest airports
- `GET /flags?country=France` — country flag as base64 PNG
- `GET /travel-advisory?country=France` — travel advisory data

### Gotchas

- The `climatemaps` package is installed from GitHub (`pip install git+https://github.com/KarlisKV/climatemaps.git`) and is **not** listed in `requirements.txt` — it's only in a comment.
- `pip install` puts executables in `~/.local/bin`, which may not be on PATH. Always `export PATH="$HOME/.local/bin:$PATH"` before running `uvicorn` or `gunicorn`.
- The font warning `Failed to extract font properties from NotoColorEmoji.ttf` during startup is harmless and can be ignored.
