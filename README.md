# KalmanCruise

KalmanCruise smooths noisy measurements with a 1D Kalman filter.

## Quick start

```bash
python -m app.server --port 5173
```

Open http://localhost:5173

## API

- POST `/api/filter` `{ "series": [1,2,3], "process": 1, "measure": 4 }`

