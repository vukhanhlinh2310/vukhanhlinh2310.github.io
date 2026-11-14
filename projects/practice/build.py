"""
Practice projects for a Supply Chain Analyst role in large-engine manufacturing.

All data is SIMULATED (seeded, reproducible). It mimics the planning problems
described in a typical German Supply Chain Analyst job posting:
  1. Schedule adherence (SOL / RTS dates) and order prioritisation
  2. S&OP rough-cut capacity planning: demand vs. work-centre capacity
  3. Material availability: ABC/XYZ, safety stock, reorder points, shortage risk

Run:  python3 build.py
Out:  data/*.csv (datasets + results) and ../../data/practice.js (chart data for the site)
"""
import json
from pathlib import Path

import numpy as np
import pandas as pd

rng = np.random.default_rng(42)
HERE = Path(__file__).parent
OUT = HERE / "data"
OUT.mkdir(exist_ok=True)
SITE_DATA = HERE.parent.parent / "data" / "practice.js"
SITE_DATA.parent.mkdir(exist_ok=True)

FAMILIES = {  # engine family: (build lead time SOL->RTS in working days, share of orders)
    "6-cyl inline": (28, 0.35),
    "8-cyl inline": (32, 0.30),
    "12-cyl V": (40, 0.22),
    "16-cyl V": (46, 0.13),
}
charts = {}

# ======================================================================
# 1) SOL / RTS schedule adherence + prioritisation of open orders
# ======================================================================
n = 150
fam = rng.choice(list(FAMILIES), n, p=[v[1] for v in FAMILIES.values()])
segment = rng.choice(["Marine", "Power generation", "Oil & Gas"], n, p=[0.55, 0.3, 0.15])
planned_sol = pd.to_datetime("2025-01-06") + pd.to_timedelta(rng.integers(0, 300, n), "D")
planned_rts = planned_sol + pd.to_timedelta([FAMILIES[f][0] * 7 / 5 for f in fam], "D")

# Delay causes (probabilities drift during the year: material issues peak mid-year)
causes = ["On time", "Material shortage", "Test bench capacity", "Engineering change", "Customer change", "Quality rework"]
month = planned_rts.month.values
p_ok = np.clip(0.80 - 0.18 * np.exp(-((month - 6.5) ** 2) / 6), 0.5, 0.9)
cause = []
for p in p_ok:
    rest = (1 - p) * np.array([0.38, 0.24, 0.16, 0.12, 0.10])
    cause.append(rng.choice(causes, p=[p, *rest]))
cause = np.array(cause)
mean_delay = {"On time": 0, "Material shortage": 9, "Test bench capacity": 6, "Engineering change": 11, "Customer change": 7, "Quality rework": 5}
delay = np.array([0 if c == "On time" else max(3, round(rng.gamma(2.2, mean_delay[c] / 2.2))) for c in cause])
sol_slip = np.where(np.isin(cause, ["Material shortage", "Engineering change"]), np.round(delay * 0.6), 0).astype(int)

orders = pd.DataFrame({
    "order_id": [f"EO-{25000 + i}" for i in range(n)],
    "engine_family": fam, "segment": segment,
    "planned_sol": planned_sol.date, "actual_sol": (planned_sol + pd.to_timedelta(sol_slip, "D")).date,
    "planned_rts": planned_rts.date, "actual_rts": (planned_rts + pd.to_timedelta(delay, "D")).date,
    "delay_days": delay, "delay_cause": cause,
})
TOL = 2  # days tolerance
orders["rts_on_time"] = orders.delay_days <= TOL
orders["sol_on_time"] = sol_slip <= TOL
orders.to_csv(OUT / "orders_2025.csv", index=False)

orders["rts_month"] = pd.to_datetime(orders.planned_rts).dt.to_period("M")
monthly = orders.groupby("rts_month").agg(rts=("rts_on_time", "mean"), sol=("sol_on_time", "mean"), n=("order_id", "count"))
pareto = orders[orders.delay_cause != "On time"].groupby("delay_cause").delay_days.sum().sort_values(ascending=False)
cum = (pareto.cumsum() / pareto.sum() * 100).round(1)

# Open orders for the next 8 weeks: priority score
m = 18
open_o = pd.DataFrame({
    "order_id": [f"EO-{26000 + i}" for i in range(m)],
    "engine_family": rng.choice(list(FAMILIES), m),
    "segment": rng.choice(["Marine", "Power generation", "Oil & Gas"], m, p=[0.55, 0.3, 0.15]),
    "days_to_rts": rng.integers(5, 56, m),
    "material_ready_pct": rng.choice([55, 70, 80, 90, 95, 100], m),
    "penalty_clause": rng.choice([True, False], m, p=[0.35, 0.65]),
    "customer_tier": rng.choice(["A", "B", "C"], m, p=[0.3, 0.45, 0.25]),
})
urgency = 1 - open_o.days_to_rts / 56
tier = open_o.customer_tier.map({"A": 1, "B": 0.6, "C": 0.3})
risk = 1 - open_o.material_ready_pct / 100
open_o["priority_score"] = (40 * urgency + 25 * tier + 20 * open_o.penalty_clause + 15 * risk * 2).round(0).clip(upper=100).astype(int)
open_o["action"] = np.select(
    [(open_o.material_ready_pct < 80) & (open_o.days_to_rts < 30), open_o.material_ready_pct < 80, open_o.days_to_rts < 15],
    ["Expedite missing parts now", "Chase supplier dates", "Lock test-bench slot"], "Monitor")
open_o = open_o.sort_values("priority_score", ascending=False)
open_o.to_csv(OUT / "open_orders_priority.csv", index=False)

rts_total = orders.rts_on_time.mean() * 100
worst = monthly.rts.idxmin()
charts["schedule-adherence"] = {
    "kpis": [
        {"value": f"{rts_total:.0f}%", "label": "RTS adherence 2025 (±2 days)"},
        {"value": f"{orders.sol_on_time.mean() * 100:.0f}%", "label": "SOL adherence 2025"},
        {"value": f"{orders.loc[~orders.rts_on_time, 'delay_days'].mean():.1f} d", "label": "avg delay of late orders"},
        {"value": f"{cum.iloc[1]:.0f}%", "label": f"of delay days from top 2 causes"},
    ],
    "charts": [
        {"kind": "line", "title": "RTS and SOL adherence by month", "unit": "%",
         "labels": [p.strftime("%b") for p in monthly.index],
         "series": [{"name": "RTS on time", "values": (monthly.rts * 100).round(0).tolist()},
                    {"name": "SOL on time", "values": (monthly.sol * 100).round(0).tolist()}],
         "target": 90,
         "caption": f"Adherence drops to its low in {worst.strftime('%B')} ({monthly.rts.min() * 100:.0f}% RTS), when material shortages peak."},
        {"kind": "pareto", "title": "Delay days by root cause", "unit": "days",
         "labels": pareto.index.tolist(), "values": pareto.tolist(), "cumulative": cum.tolist(),
         "caption": f"{pareto.index[0]} and {pareto.index[1].lower()} cause {cum.iloc[1]:.0f}% of all delay days."},
        {"kind": "table", "title": "Next 8 weeks: priority list (top 8 of 18 open orders)",
         "columns": ["Order", "Family", "Days to RTS", "Material ready", "Penalty", "Score", "Action"],
         "rows": [[r.order_id, r.engine_family, int(r.days_to_rts), f"{r.material_ready_pct}%", "Yes" if r.penalty_clause else "No", int(r.priority_score), r.action]
                  for r in open_o.head(8).itertuples()],
         "caption": "Score = 40% urgency + 25% customer tier + 20% penalty clause + 15% material risk."},
    ],
}

# ======================================================================
# 2) S&OP rough-cut capacity planning (RCCP), 2027
# ======================================================================
rng = np.random.default_rng(7)  # independent seed per project
months = pd.period_range("2027-01", "2027-12", freq="M")
season = np.array([0.85, 0.9, 1.0, 1.05, 1.1, 1.15, 0.8, 0.95, 1.15, 1.2, 1.1, 0.9])
base_units = {"6-cyl inline": 9, "8-cyl inline": 7, "12-cyl V": 5, "16-cyl V": 3}
demand = pd.DataFrame({f: np.round(u * season * rng.normal(1, 0.05, 12)).astype(int) for f, u in base_units.items()}, index=months)
demand.index.name = "month"
demand.to_csv(OUT / "demand_plan_2027.csv")

hours = pd.DataFrame({  # standard hours per engine per work centre
    "Machining":   {"6-cyl inline": 160, "8-cyl inline": 200, "12-cyl V": 300, "16-cyl V": 390},
    "Assembly":    {"6-cyl inline": 260, "8-cyl inline": 320, "12-cyl V": 470, "16-cyl V": 600},
    "Test bench":  {"6-cyl inline": 40, "8-cyl inline": 48, "12-cyl V": 66, "16-cyl V": 84},
    "Painting":    {"6-cyl inline": 22, "8-cyl inline": 26, "12-cyl V": 34, "16-cyl V": 42},
})
workdays = np.array([21, 20, 22, 20, 19, 21, 22, 21, 22, 21, 20, 17])
capacity = pd.DataFrame({  # available hours = days x shifts x hours x resources x efficiency
    "Machining": workdays * 2 * 8 * 27 * 0.85,
    "Assembly": workdays * 2 * 8 * 43 * 0.85,
    "Test bench": workdays * 2 * 8 * 5 * 0.90,
    "Painting": workdays * 1 * 8 * 7 * 0.85,
}, index=months)
load = demand @ hours
util = (load / capacity * 100).round(0)
util.to_csv(OUT / "utilisation_base.csv")
load_up = (demand * 1.15) @ hours
util_up = (load_up / capacity * 100).round(0)
over_base = util.columns[(util > 100).any()].tolist()
tb_over = [m.strftime("%b") for m in util.index[util["Test bench"] > 100]]
tb_over_up = [m.strftime("%b") for m in util.index[util_up["Test bench"] > 100]]
extra_shift = (load_up["Test bench"] - capacity["Test bench"]).clip(lower=0)

charts["sop-capacity"] = {
    "kpis": [
        {"value": f"{int(demand.values.sum())}", "label": "engines in the 2027 demand plan"},
        {"value": "Test bench", "label": "bottleneck work centre"},
        {"value": f"{int(util['Test bench'].max())}%", "label": f"peak test-bench load ({util['Test bench'].idxmax().strftime('%b')})"},
        {"value": f"{len(tb_over_up)} months", "label": "over capacity at +15% demand"},
    ],
    "charts": [
        {"kind": "heatmap", "title": "Capacity utilisation by work centre, base plan", "unit": "%",
         "rows": util.columns.tolist(), "cols": [m.strftime("%b") for m in util.index],
         "values": util.T.values.tolist(),
         "caption": "Above 100% = demand exceeds available hours. Assembly and machining keep a buffer; the test bench does not."},
        {"kind": "bars-line", "title": "Test bench: load vs. capacity", "unit": "hours",
         "labels": [m.strftime("%b") for m in months],
         "bars": [{"name": "Load, base plan", "values": load["Test bench"].round(0).tolist()},
                  {"name": "Load, +15% scenario", "values": load_up["Test bench"].round(0).tolist()}],
         "line": {"name": "Available capacity", "values": capacity["Test bench"].round(0).tolist()},
         "caption": (f"Base plan is over capacity in {', '.join(tb_over)}" if tb_over else
                     f"The base plan fits, but with almost no buffer (peak {int(util['Test bench'].max())}%)") + f"; at +15% demand it is over capacity in {', '.join(tb_over_up)}. "
                    f"Closing the gap needs about {int(extra_shift.sum())} extra test-bench hours across the year."},
    ],
    "_facts": {"tb_over": tb_over, "tb_over_up": tb_over_up, "extra_hours": int(extra_shift.sum())},
}

# ======================================================================
# 3) Material availability: ABC/XYZ, safety stock, reorder point
# ======================================================================
rng = np.random.default_rng(42)
k = 60
weeks = 52
parts = pd.DataFrame({
    "part_id": [f"P-{4100 + i}" for i in range(k)],
    "description": rng.choice(["Crankshaft bearing", "Cylinder liner", "Piston ring set", "Fuel injector", "Turbocharger seal",
                               "Valve set", "Gasket kit", "Cooling pump", "Sensor harness", "Camshaft bolt set"], k),
    "unit_cost_eur": np.round(rng.lognormal(5.2, 1.1, k), 0),
    "lead_time_weeks": rng.choice([2, 4, 6, 8, 12, 16], k, p=[0.15, 0.25, 0.25, 0.15, 0.12, 0.08]),
})
mean_d = rng.gamma(2.0, 6.0, k)
cv_true = rng.choice([0.15, 0.35, 0.8], k, p=[0.4, 0.35, 0.25])
hist = np.maximum(0, rng.normal(mean_d[:, None], (mean_d * cv_true)[:, None], (k, weeks))).round()
pd.DataFrame(hist.T, columns=parts.part_id).rename_axis("week").to_csv(OUT / "weekly_demand_52w.csv")

parts["avg_weekly_demand"] = hist.mean(1).round(1)
parts["std_weekly_demand"] = hist.std(1).round(1)
parts["cv"] = (parts.std_weekly_demand / parts.avg_weekly_demand.replace(0, np.nan)).fillna(9).round(2)
parts["annual_value_eur"] = (hist.sum(1) * parts.unit_cost_eur).round(0)
parts = parts.sort_values("annual_value_eur", ascending=False)
share = parts.annual_value_eur.cumsum() / parts.annual_value_eur.sum()
parts["abc"] = np.select([share <= 0.8, share <= 0.95], ["A", "B"], "C")
parts["xyz"] = np.select([parts.cv <= 0.25, parts.cv <= 0.5], ["X", "Y"], "Z")
service = {"A": 0.98, "B": 0.95, "C": 0.90}
z = {0.98: 2.05, 0.95: 1.65, 0.90: 1.28}
parts["service_level"] = parts.abc.map(service)
parts["safety_stock"] = np.ceil(parts.service_level.map(z) * parts.std_weekly_demand * np.sqrt(parts.lead_time_weeks)).astype(int)
parts["reorder_point"] = np.ceil(parts.avg_weekly_demand * parts.lead_time_weeks + parts.safety_stock).astype(int)
parts["on_hand"] = np.round(parts.reorder_point * rng.uniform(0.2, 2.2, k)).astype(int)
parts["coverage_weeks"] = (parts.on_hand / parts.avg_weekly_demand.replace(0, np.nan)).round(1)
parts["status"] = np.select(
    [parts.on_hand < parts.safety_stock, parts.on_hand < parts.reorder_point],
    ["Shortage risk", "Reorder now"], "OK")
parts.to_csv(OUT / "parts_safety_stock.csv", index=False)

matrix = parts.groupby(["abc", "xyz"]).size().unstack(fill_value=0).reindex(index=list("ABC"), columns=list("XYZ"), fill_value=0)
value_matrix = (parts.groupby(["abc", "xyz"]).annual_value_eur.sum().unstack(fill_value=0)
                .reindex(index=list("ABC"), columns=list("XYZ"), fill_value=0) / 1000).round(0)
risk_parts = parts[parts.status != "OK"].sort_values(["status", "coverage_weeks"], ascending=[False, True])

# Projection for the most critical A-part at risk
crit = parts[(parts.abc == "A") & (parts.status != "OK")].sort_values("lead_time_weeks", ascending=False).head(1)
if crit.empty:
    crit = parts[parts.abc == "A"].sort_values("coverage_weeks").head(1)
c = crit.iloc[0]
proj_weeks = 20
stock, open_qty, lt = [], [], int(c.lead_time_weeks)
s = c.on_hand
order_q = int(np.ceil(c.avg_weekly_demand * 8))
arrivals = {}
for w in range(proj_weeks):
    s += arrivals.get(w, 0)
    s -= c.avg_weekly_demand
    if s + sum(v for kk, v in arrivals.items() if kk > w) < c.reorder_point:
        arrivals[w + lt] = arrivals.get(w + lt, 0) + order_q
    stock.append(round(s, 1))
first_neg = next((i for i, v in enumerate(stock) if v < 0), None)

charts["material-availability"] = {
    "kpis": [
        {"value": f"{k}", "label": "critical engine parts analysed"},
        {"value": f"{(parts.abc == 'A').sum()} parts", "label": "make up 80% of material value (class A)"},
        {"value": f"{(parts.status == 'Shortage risk').sum()}", "label": "parts already below safety stock"},
        {"value": f"{(parts.status == 'Reorder now').sum()}", "label": "parts below reorder point"},
    ],
    "charts": [
        {"kind": "matrix", "title": "ABC / XYZ matrix: number of parts and annual value", "unit": "k EUR",
         "rows": ["A · high value", "B", "C · low value"], "cols": ["X · stable", "Y · variable", "Z · erratic"],
         "counts": matrix.values.tolist(), "values": value_matrix.values.tolist(),
         "caption": "AX parts get tight, frequent replenishment; AZ parts need the most safety stock or a different sourcing strategy."},
        {"kind": "projection", "title": f"Stock projection: {c.part_id} {c.description} (class {c.abc}{c.xyz})", "unit": "pcs",
         "labels": [f"W{i + 1}" for i in range(proj_weeks)], "values": stock,
         "safety": int(c.safety_stock), "rop": int(c.reorder_point),
         "caption": (f"Assuming no open purchase order: with a {lt}-week lead time, an order placed today arrives too late, and stock goes negative in week {first_neg + 1}. "
                     "Expedite or use an alternative supplier." if first_neg is not None else
                     f"Reordering at {int(c.reorder_point)} pcs keeps stock above the {int(c.safety_stock)}-piece safety stock.")},
        {"kind": "table", "title": f"Action list: {len(risk_parts)} parts need attention (top 8)",
         "columns": ["Part", "Description", "Class", "On hand", "Reorder point", "Coverage", "Lead time", "Status"],
         "rows": [[r.part_id, r.description, r.abc + r.xyz, int(r.on_hand), int(r.reorder_point), f"{r.coverage_weeks} w", f"{int(r.lead_time_weeks)} w", r.status]
                  for r in risk_parts.head(8).itertuples()],
         "caption": "Reorder below the reorder point; below safety stock = expedite. Safety stock = z(service level) × σ weekly demand × √lead time. Service level 98% / 95% / 90% for A / B / C."},
    ],
}

# ---------- export for the website ----------
for v in charts.values():
    v.pop("_facts", None)
SITE_DATA.write_text("/* Generated by projects/practice/build.py - do not edit by hand */\nwindow.PRACTICE = "
                     + json.dumps(charts, ensure_ascii=False, indent=1, default=str) + ";\n")

print("RTS adherence:", round(rts_total, 1), "| worst month:", worst, "| pareto:", dict(pareto))
print("Test bench >100% base:", tb_over, "| +15%:", tb_over_up, "| extra h:", int(extra_shift.sum()))
print("Util max:\n", util.max())
print("ABC counts:", parts.abc.value_counts().to_dict(), "| status:", parts.status.value_counts().to_dict())
print("Critical part:", c.part_id, c.description, c.abc + c.xyz, "LT", lt, "first negative week:", first_neg)
