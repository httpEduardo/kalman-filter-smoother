
def kalman_filter(series, process_var=1.0, measure_var=4.0):
    if not series:
        return []
    estimate = series[0]
    estimate_var = 1.0
    filtered = []

    for measurement in series:
        estimate_var += process_var
        kalman_gain = estimate_var / (estimate_var + measure_var)
        estimate = estimate + kalman_gain * (measurement - estimate)
        estimate_var = (1 - kalman_gain) * estimate_var
        filtered.append(round(estimate, 3))
    return filtered
