# Kalman Filter Smoother

![Python](https://img.shields.io/badge/Python-3.x-3776AB?logo=python&logoColor=white)

Kalman Filter Smoother smooths noisy measurements with a 1D Kalman filter.

## Quick start

```bash
python -m kalman_filter_smoother.server --port 5173
```

Open http://localhost:5173

## API

- POST `/api/filter` `{ "series": [1,2,3], "process": 1, "measure": 4 }`

