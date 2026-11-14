# Practice projects – Supply Chain Analyst (large-engine manufacturing)

Three self-directed practice projects built on **simulated, reproducible data** (seeded NumPy).
They mirror the planning problems in a typical German Supply Chain Analyst role:

| Project | Question | Methods |
|---|---|---|
| Schedule adherence & prioritisation | How reliable are SOL / RTS dates, why do orders slip, which orders come first? | Adherence KPIs, Pareto, weighted priority score |
| S&OP rough-cut capacity 2027 | Can the plant build the demand plan? Where is the bottleneck? | Standard hours × demand, utilisation, +15% scenario |
| Material availability | Which parts need control, how much safety stock, what needs action today? | ABC/XYZ, safety stock, reorder point, stock projection |

Run `python3 build.py` (pandas, numpy). Outputs go to `data/` (CSV) and `../../data/practice.js` (charts on the website).
