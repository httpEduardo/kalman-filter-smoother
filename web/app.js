"use strict";
const output = document.getElementById("output");
const filterButton = document.getElementById("filterButton");
function render(filtered) {
    output.textContent = filtered.length ? filtered.join(", ") : "No data.";
}
filterButton.addEventListener("click", () => {
    const series = document.getElementById("seriesInput").value;
    const process = parseFloat(document.getElementById("processInput").value);
    const measure = parseFloat(document.getElementById("measureInput").value);
    fetch("/api/filter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ series, process, measure }),
    })
        .then((res) => res.json())
        .then((data) => render(data.filtered || []));
});
