# SmartTravel Python API – production image
# Build from SmartTravel directory: docker build -t smarttravel-api .
# Run: docker run -p 5000:5000 -e PORT=5000 smarttravel-api
# Optional: mount climatemaps data for temperature/precipitation: -v /path/to/climatemaps:/app/climatemaps_data

FROM python:3.12-slim

ENV PYTHONUNBUFFERED=1 \
    PORT=5000

WORKDIR /app

# Install system deps for rasterio (GDAL)
RUN apt-get update && apt-get install -y --no-install-recommends \
    libgdal-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy API code and datasets (API expects sibling: /app/python_api, /app/datasets)
COPY python_api /app/python_api
COPY datasets /app/datasets

# Create directory for climatemaps data (optional: mount a volume at run time)
RUN mkdir -p /app/climatemaps_data/data/raw
ENV CLIMATEMAPS_DATA_DIR=/app/climatemaps_data

# Install Python dependencies
COPY python_api/requirements.txt /app/python_api/requirements.txt
RUN pip install --no-cache-dir -r /app/python_api/requirements.txt

WORKDIR /app/python_api

EXPOSE ${PORT}

CMD ["sh", "-c", "gunicorn --bind 0.0.0.0:${PORT} --workers 1 --threads 4 climate_api:app"]
