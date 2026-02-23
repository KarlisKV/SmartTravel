# gunicorn.conf.py
# Production config for SmartTravel API
#
# Run with:
#   gunicorn -c gunicorn.conf.py climate_api_fastapi:app
#
# Works with a DigitalOcean Basic Droplet (2 vCPU / 2 GB RAM or better).

import multiprocessing

# ── workers ───────────────────────────────────────────────────────────────────
# UvicornWorker = async worker; each handles hundreds of concurrent connections.
# Formula: (2 × CPU cores) + 1  is the classic sync recommendation,
# but for async workers 2–4 is enough because each worker is non-blocking.
# 4 workers on a 2-core droplet hits the sweet spot: enough parallelism for
# CPU-bound climate reads without over-subscribing RAM.
worker_class  = "uvicorn.workers.UvicornWorker"
workers       = 4                        # increase to 6 on 4-core droplets
threads       = 1                        # async workers don't need multiple threads

# ── binding ───────────────────────────────────────────────────────────────────
bind          = "0.0.0.0:5000"
# If you're behind Nginx (recommended), bind to 127.0.0.1:5000 instead:
# bind        = "127.0.0.1:5000"

# ── timeouts ──────────────────────────────────────────────────────────────────
timeout       = 30   # kill workers that take > 30 s (climate fallback can be slow)
keepalive     = 5    # keep-alive seconds for connections from Nginx/CDN
graceful_timeout = 10

# ── process naming ────────────────────────────────────────────────────────────
proc_name     = "smarttravel-api"

# ── logging ───────────────────────────────────────────────────────────────────
accesslog     = "-"           # stdout (captured by systemd/supervisor)
errorlog      = "-"
loglevel      = "info"
access_log_format = '%(h)s "%(r)s" %(s)s %(b)s %(M)sms'

# ── RAM / stability ───────────────────────────────────────────────────────────
# Restart a worker after 1 000 requests to prevent slow memory growth
max_requests        = 1_000
max_requests_jitter = 100     # add randomness so workers don't all restart at once
