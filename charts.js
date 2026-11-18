/* Renders practice-project charts (data from data/practice.js) on case study pages. */
window.renderPractice = function (el, data) {
  if (!data) return;
  const C = { rose: "#B76E79", roseDark: "#8E4B57", peach: "#E3B5A4", soft: "#F2D9D1", grey: "#B9ADB1", ink: "#2A1F22", muted: "#74636A", line: "#EEDDD7" };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const hasChart = typeof Chart !== "undefined";
  if (hasChart) {
    Chart.defaults.font.family = "Montserrat, system-ui, sans-serif";
    Chart.defaults.color = C.muted;
    Chart.defaults.plugins.legend.labels.usePointStyle = true;
    Chart.defaults.plugins.legend.labels.boxWidth = 8;
    Chart.defaults.plugins.tooltip.backgroundColor = C.ink;
    Chart.defaults.plugins.tooltip.padding = 10;
  }
  const grid = { color: C.line, drawTicks: false };
  const axis = (title, extra) => ({ grid, border: { display: false }, ticks: { padding: 8 }, title: title ? { display: true, text: title } : undefined, ...extra });

  let html = '<div class="pkpis">' + data.kpis.map((k) => `<div><strong class="grad-text">${esc(k.value)}</strong><span>${esc(k.label)}</span></div>`).join("") + "</div>";
  data.charts.forEach((ch, i) => {
    html += `<figure class="pfig"><figcaption><b>${esc(ch.title)}</b></figcaption>`;
    if (["line", "pareto", "bars-line", "projection"].includes(ch.kind)) html += `<div class="pcanvas"><canvas id="pc${i}"></canvas></div>`;
    if (ch.kind === "table") {
      html += '<div class="ptable-wrap"><table class="ptable"><thead><tr>' + ch.columns.map((c) => `<th>${esc(c)}</th>`).join("") + "</tr></thead><tbody>" +
        ch.rows.map((r) => "<tr>" + r.map((v) => {
          const s = String(v);
          const cls = /Shortage|Expedite/.test(s) ? "bad" : /Reorder|Chase|Lock/.test(s) ? "warn" : "";
          return `<td${cls ? ` class="${cls}"` : ""}>${esc(s)}</td>`;
        }).join("") + "</tr>").join("") + "</tbody></table></div>";
    }
    if (ch.kind === "heatmap") {
      const col = (v) => v > 100 ? C.roseDark : v >= 90 ? C.rose : v >= 75 ? C.peach : C.soft;
      html += '<div class="ptable-wrap"><table class="pheat"><thead><tr><th></th>' + ch.cols.map((c) => `<th>${esc(c)}</th>`).join("") + "</tr></thead><tbody>" +
        ch.rows.map((r, ri) => `<tr><th>${esc(r)}</th>` + ch.values[ri].map((v) =>
          `<td style="background:${col(v)};color:${v >= 90 ? "#fff" : C.ink}" title="${esc(r)}: ${v}%">${v}</td>`).join("") + "</tr>").join("") +
        '</tbody></table></div><div class="plegend"><span><i style="background:' + C.soft + '"></i>&lt; 75%</span><span><i style="background:' + C.peach + '"></i>75–89%</span><span><i style="background:' + C.rose + '"></i>90–100%</span><span><i style="background:' + C.roseDark + '"></i>&gt; 100% over capacity</span></div>';
    }
    if (ch.kind === "matrix") {
      const max = Math.max(...ch.values.flat());
      html += '<div class="pmatrix"><span></span>' + ch.cols.map((c) => `<span class="mh">${esc(c)}</span>`).join("") +
        ch.rows.map((r, ri) => `<span class="mh mr">${esc(r)}</span>` + ch.values[ri].map((v, ci) => {
          const a = 0.12 + 0.88 * (v / max);
          return `<div class="mcell" style="background:rgba(183,110,121,${a.toFixed(2)});color:${a > 0.55 ? "#fff" : C.ink}"><strong>${ch.counts[ri][ci]}</strong><span>parts · ${v.toLocaleString("en")}k €</span></div>`;
        }).join("")).join("") + "</div>";
    }
    html += `<p class="pcap">${esc(ch.caption)}</p></figure>`;
  });
  el.innerHTML = html;
  if (!hasChart) return;

  data.charts.forEach((ch, i) => {
    const ctx = document.getElementById("pc" + i);
    if (!ctx) return;
    const base = { responsive: true, maintainAspectRatio: false, interaction: { mode: "index", intersect: false }, plugins: { legend: { position: "bottom" } } };
    if (ch.kind === "line") {
      new Chart(ctx, { type: "line", data: { labels: ch.labels, datasets: [
        ...ch.series.map((s, k) => ({ label: s.name, data: s.values, borderColor: k ? C.peach : C.rose, backgroundColor: k ? C.peach : C.rose, borderWidth: 3, tension: .35, pointRadius: 3 })),
        { label: `Target ${ch.target}%`, data: ch.labels.map(() => ch.target), borderColor: C.grey, borderDash: [6, 5], borderWidth: 1.5, pointRadius: 0 }
      ] }, options: { ...base, scales: { y: axis("%", { min: 40, max: 100 }), x: axis(null, { grid: { display: false } }) } } });
    }
    if (ch.kind === "pareto") {
      new Chart(ctx, { data: { labels: ch.labels, datasets: [
        { type: "bar", label: "Delay days", data: ch.values, backgroundColor: ch.values.map((_, k) => k < 2 ? C.rose : C.peach), borderRadius: 8, yAxisID: "y" },
        { type: "line", label: "Cumulative %", data: ch.cumulative, borderColor: C.roseDark, backgroundColor: C.roseDark, borderWidth: 2, pointRadius: 4, yAxisID: "y1" }
      ] }, options: { ...base, scales: { y: axis("delay days"), y1: axis("cumulative %", { position: "right", min: 0, max: 100, grid: { display: false } }), x: axis(null, { grid: { display: false } }) } } });
    }
    if (ch.kind === "bars-line") {
      new Chart(ctx, { data: { labels: ch.labels, datasets: [
        { type: "line", label: ch.line.name, data: ch.line.values, borderColor: C.ink, backgroundColor: C.ink, borderWidth: 2, stepped: "middle", pointRadius: 0, order: 0 },
        ...ch.bars.map((b, k) => ({ type: "bar", label: b.name, data: b.values, backgroundColor: k ? C.peach : C.rose, borderRadius: 6, order: 1 }))
      ] }, options: { ...base, scales: { y: axis("hours"), x: axis(null, { grid: { display: false } }) } } });
    }
    if (ch.kind === "projection") {
      new Chart(ctx, { type: "line", data: { labels: ch.labels, datasets: [
        { label: "Projected stock", data: ch.values, borderColor: C.rose, backgroundColor: "rgba(183,110,121,.12)", fill: "origin", borderWidth: 3, tension: .2, pointRadius: 2 },
        { label: `Reorder point (${ch.rop})`, data: ch.labels.map(() => ch.rop), borderColor: C.peach, borderDash: [6, 5], borderWidth: 2, pointRadius: 0 },
        { label: `Safety stock (${ch.safety})`, data: ch.labels.map(() => ch.safety), borderColor: C.roseDark, borderDash: [2, 4], borderWidth: 2, pointRadius: 0 }
      ] }, options: { ...base, scales: { y: axis("pieces"), x: axis(null, { grid: { display: false } }) } } });
    }
  });
};
