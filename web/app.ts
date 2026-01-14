const output = document.getElementById("output") as HTMLDivElement;
const filterButton = document.getElementById("filterButton") as HTMLButtonElement;

function render(filtered: number[]): void {
  output.textContent = filtered.length ? filtered.join(", ") : "No data.";
}

filterButton.addEventListener("click", () => {
  const series = (document.getElementById("seriesInput") as HTMLInputElement).value;
  const process = parseFloat((document.getElementById("processInput") as HTMLInputElement).value);
  const measure = parseFloat((document.getElementById("measureInput") as HTMLInputElement).value);
  fetch("/api/filter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ series, process, measure }),
  })
    .then((res) => res.json())
    .then((data) => render(data.filtered || []));
});
