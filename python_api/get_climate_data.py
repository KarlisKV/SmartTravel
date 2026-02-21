#!/usr/bin/env python3
"""
Get climate data for a specific location (coordinates).

Uses the climatemaps package from https://github.com/KarlisKV/climatemaps
Install: pip install git+https://github.com/KarlisKV/climatemaps.git

Climate rasters are loaded from data/raw/ relative to a repo root directory.
Set CLIMATEMAPS_DATA_DIR to the path of a clone of that repo (containing data/raw/),
or clone it to SmartTravel/climatemaps so the default works.

Edit the coordinates in the main() function, then run:
    python get_climate_data.py

Returns 5 numpy arrays (one for each variable) with 12 monthly values:
- temperature_day: Temperature (Day/Max) in °C
- temperature_night: Temperature (Night/Min) in °C
- precipitation: Precipitation in mm/month
- cloud_cover: Cloud Cover in %
- rainy_days: Number of rainy (wet) days per month
"""

import os
import sys
import numpy as np
from pathlib import Path
from typing import List, Optional, Tuple

# Climatemaps package: install from GitHub (not a local path)
#   pip install git+https://github.com/KarlisKV/climatemaps.git
try:
    from climatemaps.datasets import (
        ClimateVarKey,
        DataFormat,
        HISTORIC_DATA_SETS,
        SpatialResolution,
    )
    from climatemaps.data import load_climate_data
    from climatemaps.download import ensure_data_available
except ImportError as e:
    print("Error: Missing climatemaps package.", file=sys.stderr)
    print("", file=sys.stderr)
    print("Install from GitHub:", file=sys.stderr)
    print("  pip install git+https://github.com/KarlisKV/climatemaps.git", file=sys.stderr)
    print("", file=sys.stderr)
    print("Then ensure climate data is available: clone the repo and set CLIMATEMAPS_DATA_DIR", file=sys.stderr)
    print("to the clone root (the directory that contains data/raw/), or clone to SmartTravel/climatemaps.", file=sys.stderr)
    print("", file=sys.stderr)
    print(f"Original error: {e}", file=sys.stderr)
    sys.exit(1)

# Data root: climatemaps uses relative paths data/raw/... so CWD must be the repo root
script_dir = Path(__file__).resolve().parent
_default_data_root = script_dir.parent.parent / "climatemaps"
_climatemaps_data_dir = Path(os.environ.get("CLIMATEMAPS_DATA_DIR", str(_default_data_root))).resolve()
if _climatemaps_data_dir.exists() and (_climatemaps_data_dir / "data" / "raw").exists():
    os.chdir(_climatemaps_data_dir)

try:
    import rasterio
    from rasterio.windows import Window
    _RASTERIO_AVAILABLE = True
except ImportError:
    _RASTERIO_AVAILABLE = False


def _read_value_at_point(config, month: int, lon: float, lat: float) -> Optional[float]:
    """
    Read a single pixel from the raster at (lon, lat) instead of loading the full grid.
    Uses ~KB per read instead of ~10–50 MB per full grid. Supports WORLDCLIM_HISTORY and CRU_TS.
    """
    if not _RASTERIO_AVAILABLE:
        return None
    ensure_data_available(config)
    base_path = config.filepath
    data_type = base_path.split("/")[-1]
    if config.format not in (DataFormat.GEOTIFF_WORLDCLIM_HISTORY, DataFormat.CRU_TS):
        return None
    # Prefer absolute path so we don't depend on CWD (e.g. after request context)
    path = _climatemaps_data_dir / base_path / f"{data_type}_{month:02d}.tif"
    if not path.is_file():
        return None
    try:
        with rasterio.open(path) as src:
            row, col = src.index(lon, lat)
            if row < 0 or col < 0 or row >= src.height or col >= src.width:
                return np.nan
            window = Window(col, row, 1, 1)  # type: ignore[call-arg]
            arr = src.read(1, window=window).astype(float)
            val = float(arr.flat[0])
    except Exception:
        return None
    if config.format == DataFormat.GEOTIFF_WORLDCLIM_HISTORY:
        if val == -32768 or val <= -300:
            return np.nan
    elif config.format == DataFormat.CRU_TS:
        if val == 254 or val <= -9000:
            return np.nan
    val = val * config.conversion_factor
    if config.conversion_function is not None:
        small = np.array([[val]], dtype=np.float64)
        val = config.conversion_function(small, month).flat[0]
    return val


def get_climate_data_for_location(lat: float, lon: float) -> Tuple[np.ndarray, np.ndarray, np.ndarray, np.ndarray, np.ndarray]:
    """
    Get climate data for a specific location.
    
    Returns 5 numpy arrays (one for each variable) with 12 monthly values:
    - temperature_day: Temperature (Day/Max) in °C [12 values]
    - temperature_night: Temperature (Night/Min) in °C [12 values]
    - precipitation: Precipitation in mm/month [12 values]
    - cloud_cover: Cloud Cover in % [12 values]
    - rainy_days: Number of wet/rainy days per month [12 values]
    
    Each array contains values for months 1-12 (January-December).
    """
    # Filter for the data types we want (in specific order)
    desired_variables = [
        ClimateVarKey.T_MAX,       # Temperature (Day)
        ClimateVarKey.T_MIN,       # Temperature (Night)
        ClimateVarKey.PRECIPITATION,
        ClimateVarKey.CLOUD_COVER,
        ClimateVarKey.WET_DAYS,    # Rainy days per month
    ]
    
    # Initialize arrays to store results
    arrays = []

    for variable_type in desired_variables:
        # Find configs for this variable type
        configs = [cfg for cfg in HISTORIC_DATA_SETS if cfg.variable_type == variable_type]

        if not configs:
            print(f"Warning: No data found for {variable_type.name}, filling with NaN", file=sys.stderr)
            arrays.append(np.full(12, np.nan))
            continue

        # Prefer 10m resolution, fallback to 30m
        config = None
        for res in [SpatialResolution.MIN10, SpatialResolution.MIN30]:
            for cfg in configs:
                if cfg.resolution == res:
                    config = cfg
                    break
            if config:
                break

        if not config:
            config = configs[0]  # Use whatever is available

        variable_name = config.variable.display_name

        # Read one pixel per month (no full-grid load: ~KB instead of ~800 MB total)
        monthly_values = []
        for month in range(1, 13):
            try:
                value = _read_value_at_point(config, month, lon, lat)
                if value is None:
                    geo_grid = load_climate_data(config, month)
                    value = geo_grid.get_value_at_coordinate(lon, lat)
                monthly_values.append(value if value is not None and value == value else np.nan)
            except ValueError as e:
                print(f"Warning: {variable_name} month {month}: {e}", file=sys.stderr)
                monthly_values.append(np.nan)
            except Exception as e:
                print(f"Error: {variable_name} month {month}: {e}", file=sys.stderr)
                monthly_values.append(np.nan)
        arrays.append(np.array(monthly_values, dtype=np.float64))
    
    # Return as tuple: (temperature_day, temperature_night, precipitation, cloud_cover, rainy_days)
    return tuple(arrays)


def _get_global_climate_grid(
    step_deg: int,
    month: Optional[int],
    variable_type: ClimateVarKey,
) -> List[dict]:
    """Return global grid for one variable. Items: {"lat", "lon", "value"}."""
    configs = [c for c in HISTORIC_DATA_SETS if c.variable_type == variable_type]
    if not configs:
        return []
    for res in [SpatialResolution.MIN10, SpatialResolution.MIN30]:
        for c in configs:
            if c.resolution == res:
                config = c
                break
        else:
            continue
        break
    else:
        config = configs[0]

    cache = {}
    months = [month] if month is not None and 1 <= month <= 12 else list(range(1, 13))
    for m in months:
        try:
            cache[m] = load_climate_data(config, m)
        except Exception:
            cache[m] = None

    out = []
    for lat in range(-90, 91, step_deg):
        for lon in range(-180, 181, step_deg):
            vals = []
            for m in months:
                g = cache.get(m)
                if g is None:
                    continue
                try:
                    v = g.get_value_at_coordinate(float(lon), float(lat))
                    if v == v:  # not NaN
                        vals.append(float(v))
                except (ValueError, Exception):
                    pass
            if vals:
                out.append({"lat": lat, "lon": lon, "value": round(sum(vals) / len(vals), 2)})
    return out


def get_global_climate_grid(
    step_deg: int = 5,
    month: Optional[int] = None,
    variable: str = "temp",
) -> Tuple[List[dict], str]:
    """
    Return (grid, unit). Grid items: {"lat": int, "lon": int, "value": float}.
    variable: "temp" (T_MAX °C) or "precipitation" (mm/month).
    """
    if variable == "precipitation":
        grid = _get_global_climate_grid(step_deg, month, ClimateVarKey.PRECIPITATION)
        return grid, "mm"
    grid = _get_global_climate_grid(step_deg, month, ClimateVarKey.T_MAX)
    return grid, "°C"


def main():
    # Set your coordinates here
    lat = 40.7128  # Latitude (e.g., 40.7128 for New York City)
    lon = -74.0060  # Longitude (e.g., -74.0060 for New York City)
    
    # Validate coordinates
    if not (-90 <= lat <= 90):
        print("Error: Latitude must be between -90 and 90", file=sys.stderr)
        sys.exit(1)
    
    if not (-180 <= lon <= 180):
        print("Error: Longitude must be between -180 and 180", file=sys.stderr)
        sys.exit(1)
    
    print(f"Fetching climate data for coordinates: ({lat}, {lon})", file=sys.stderr)
    
    try:
        temperature_day, temperature_night, precipitation, cloud_cover, rainy_days = get_climate_data_for_location(lat, lon)
        
        # Print the arrays to stdout
        print("\n# Temperature (Day/Max) - °C")
        print(temperature_day)
        print("\n# Temperature (Night/Min) - °C")
        print(temperature_night)
        print("\n# Precipitation - mm/month")
        print(precipitation)
        print("\n# Cloud Cover - %")
        print(cloud_cover)
        print("\n# Rainy days (days/month)")
        print(rainy_days)
        
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        import traceback
        traceback.print_exc()
        sys.exit(1)


if __name__ == "__main__":
    main()
