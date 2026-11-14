"""
Demo version of a weekly KPI dashboard for a bank-account product.

ALL NUMBERS ARE SIMULATED. The structure mirrors the original Excel tool
(database -> monthly pivot -> dashboard with year/week selectors -> yearly
overview), but no real bank data is used.

Run: python3 build_demo.py  ->  KPI_Dashboard_DEMO_simulated_data.xlsx
"""
from datetime import date, timedelta

import numpy as np
from openpyxl import Workbook
from openpyxl.chart import BarChart, LineChart, Reference
from openpyxl.formatting.rule import CellIsRule
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.datavalidation import DataValidation

rng = np.random.default_rng(2024)
OUT = "KPI_Dashboard_DEMO_simulated_data.xlsx"

ROSE, ROSE_D, ROSE_L, CREAM, INK = "B76E79", "8E4B57", "F7E6E0", "FFFBF9", "2A1F22"
H = Font(name="Calibri", bold=True, color="FFFFFF")
B = Font(name="Calibri", bold=True, color=INK)
T = Font(name="Calibri", bold=True, size=16, color=ROSE_D)
NOTE = Font(name="Calibri", italic=True, size=9, color="A8323E")
FILL_H = PatternFill("solid", fgColor=ROSE)
FILL_L = PatternFill("solid", fgColor=ROSE_L)
FILL_C = PatternFill("solid", fgColor=CREAM)
FILL_SEL = PatternFill("solid", fgColor="FFF1B8")
thin = Side(style="thin", color="E8D3CC")
BOX = Border(left=thin, right=thin, top=thin, bottom=thin)
CENTER = Alignment(horizontal="center", vertical="center", wrap_text=True)
SIM = "SIMULATED DATA – demo only, not real bank figures"


def header(ws, row, labels, col=1):
    for i, lab in enumerate(labels):
        c = ws.cell(row=row, column=col + i, value=lab)
        c.font, c.fill, c.alignment, c.border = H, FILL_H, CENTER, BOX


def fit_page(ws, area=None):
    ws.page_setup.orientation = "landscape"
    ws.sheet_properties.pageSetUpPr.fitToPage = True
    ws.page_setup.fitToWidth, ws.page_setup.fitToHeight = 1, 1
    if area:
        ws.print_area = area


wb = Workbook()

# ------------------------------------------------------------------ Database
db = wb.active
db.title = "Database"
db["A1"], db["A1"].font = "Weekly database (paste new export rows here)", T
db["A2"], db["A2"].font = SIM, NOTE
cols = ["No.", "Year", "Quarter", "Month", "Week", "Week dates", "YEAR_WEEK", "New opened", "Opened amount (€)",
        "Closed", "Current accounts", "Blocked accounts", "Blocked amount (€)", "Partner channel new", "Partner channel closed", "Savings deposits (€)"]
header(db, 4, cols)
season = {1: .75, 2: .85, 3: 1.0, 4: 1.1, 5: 1.25, 6: 1.4, 7: 1.5, 8: 1.45, 9: 1.1, 10: .9, 11: .8, 12: .6}
start = date(2024, 1, 1)
rows = []
d = start
while d <= date(2026, 1, 19):
    iso = d.isocalendar()
    yr, wk, m = iso[0], iso[1], d.month
    growth = {2024: 1.0, 2025: 1.18, 2026: 1.3}[yr]
    new = int(max(3, rng.normal(22 * season[m] * growth, 4)))
    blocked = int(round(new * rng.uniform(.72, .85)))
    current = new - blocked
    closed = int(max(1, rng.normal(new * .55, 3)))
    bal = rng.normal(11_600, 450)
    partner_new = int(max(0, rng.normal(new * .3, 2)))
    rows.append([len(rows) + 1, yr, (m - 1) // 3 + 1, m, wk,
                 f"{d:%d.%m.%Y} - {(d + timedelta(days=6)):%d.%m.%Y}", int(f"{yr}{wk:02d}"),
                 new, round(new * bal, -2), closed, current, blocked, round(blocked * bal, -2),
                 partner_new, int(max(0, rng.normal(partner_new * .5, 1))), round(rng.normal(38_000, 9_000) * growth, -2)])
    d += timedelta(days=7)
for r in rows:
    db.append(r)
last = 4 + len(rows)
for row in db.iter_rows(min_row=5, max_row=last):
    for c in row:
        c.border = BOX
        if c.column in (9, 13, 16):
            c.number_format = '#,##0 "€"'
db.freeze_panes = "A5"
for i, w in enumerate([5, 6, 7, 6, 6, 22, 11, 10, 15, 8, 10, 10, 15, 11, 11, 15], 1):
    db.column_dimensions[get_column_letter(i)].width = w
db.auto_filter.ref = f"A4:P{last}"
fit_page(db, "A1:P34")
R = lambda col: f"Database!${col}$5:${col}${last}"  # noqa: E731

# ------------------------------------------------------------------ Monthly pivot
pv = wb.create_sheet("Monthly")
pv["A1"], pv["A1"].font = "Monthly summary (SUMIFS on the database)", T
pv["A2"], pv["A2"].font = SIM, NOTE
header(pv, 4, ["Month", "Opened 2024", "Opened 2025", "Δ %", "Closed 2024", "Closed 2025", "Net 2025", "Blocked amount 2025 (€)"])
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
for i, mname in enumerate(months, 1):
    r = 4 + i
    pv.cell(r, 1, mname)
    pv.cell(r, 2, f"=SUMIFS({R('H')},{R('B')},2024,{R('D')},{i})")
    pv.cell(r, 3, f"=SUMIFS({R('H')},{R('B')},2025,{R('D')},{i})")
    pv.cell(r, 4, f"=IF(B{r}=0,\"\",C{r}/B{r}-1)").number_format = "+0%;-0%"
    pv.cell(r, 5, f"=SUMIFS({R('J')},{R('B')},2024,{R('D')},{i})")
    pv.cell(r, 6, f"=SUMIFS({R('J')},{R('B')},2025,{R('D')},{i})")
    pv.cell(r, 7, f"=C{r}-F{r}")
    pv.cell(r, 8, f"=SUMIFS({R('M')},{R('B')},2025,{R('D')},{i})").number_format = '#,##0 "€"'
pv.cell(17, 1, "Total").font = B
for c in "BCEFGH":
    pv[f"{c}17"] = f"=SUM({c}5:{c}16)"
    pv[f"{c}17"].font = B
pv["D17"] = "=C17/B17-1"
pv["D17"].number_format = "+0%;-0%"
pv["H17"].number_format = '#,##0 "€"'
for row in pv.iter_rows(min_row=5, max_row=17, max_col=8):
    for c in row:
        c.border = BOX
for c in pv[17]:
    if c.column <= 8:
        c.fill = FILL_L
for i, w in enumerate([8, 12, 12, 8, 12, 12, 10, 22], 1):
    pv.column_dimensions[get_column_letter(i)].width = w
ch = BarChart()
ch.title, ch.y_axis.title = "Accounts opened per month: 2024 vs 2025", "accounts"
ch.add_data(Reference(pv, min_col=2, max_col=3, min_row=4, max_row=16), titles_from_data=True)
ch.set_categories(Reference(pv, min_col=1, min_row=5, max_row=16))
ch.height, ch.width = 8, 16
for s, col in zip(ch.series, ["E3B5A4", ROSE]):
    s.graphicalProperties.solidFill = col
pv.add_chart(ch, "J4")
fit_page(pv, "A1:T22")

# ------------------------------------------------------------------ Dashboard
ds = wb.create_sheet("Dashboard", 0)
ds.sheet_view.showGridLines = False
for col, w in zip("ABCDEFGHIJKLMNOP", [2, 22, 13, 13, 11, 3, 22, 13, 13, 11, 3, 3, 3, 3, 3, 3]):
    ds.column_dimensions[col].width = w
ds.merge_cells("B1:J1")
ds["B1"], ds["B1"].font = "WEEKLY KPI REPORT · Blocked-account product", Font(bold=True, size=18, color=ROSE_D)
ds.merge_cells("B2:J2")
ds["B2"], ds["B2"].font = SIM, NOTE

ds["B4"], ds["B5"] = "Select year ▼", "Select week ▼"
ds["C4"], ds["C5"] = 2025, 36
for ref in ("B4", "B5"):
    ds[ref].font = B
for ref in ("C4", "C5"):
    ds[ref].fill, ds[ref].border, ds[ref].font, ds[ref].alignment = FILL_SEL, BOX, Font(bold=True, size=13), CENTER
dv_y = DataValidation(type="list", formula1='"2024,2025,2026"')
dv_w = DataValidation(type="whole", operator="between", formula1="1", formula2="52")
ds.add_data_validation(dv_y)
ds.add_data_validation(dv_w)
dv_y.add("C4")
dv_w.add("C5")
ds["G4"], ds["H4"] = "Week dates", f'=IFERROR(INDEX({R("F")},MATCH(C4*100+C5,{R("G")},0)),"")'
ds["G5"], ds["H5"] = "Month of week", f'=IFERROR(INDEX({R("D")},MATCH(C4*100+C5,{R("G")},0)),"")'
ds["G4"].font = ds["G5"].font = B
ds.merge_cells("H4:J4")


def block(top, left, title, rows_spec):
    c0 = ord(left) - 64
    ds.merge_cells(start_row=top, start_column=c0, end_row=top, end_column=c0 + 3)
    t = ds.cell(top, c0, title)
    t.font, t.fill, t.alignment = H, PatternFill("solid", fgColor=ROSE_D), Alignment(horizontal="left", indent=1)
    for i, lab in enumerate(["", "Current", "Comparison", "+/-"]):
        c = ds.cell(top + 1, c0 + i, lab)
        c.font, c.fill, c.border, c.alignment = B, FILL_L, BOX, CENTER
    for k, (lab, cur, cmp_, fmt) in enumerate(rows_spec):
        r = top + 2 + k
        ds.cell(r, c0, lab).font = B
        a = ds.cell(r, c0 + 1, cur)
        b = ds.cell(r, c0 + 2, cmp_)
        cl = get_column_letter(c0 + 1) + str(r)
        cm = get_column_letter(c0 + 2) + str(r)
        dlt = ds.cell(r, c0 + 3, f"=IF({cm}=0,\"\",{cl}/{cm}-1)")
        dlt.number_format = "+0%;-0%;0%"
        for c in (a, b):
            c.number_format = fmt
        for i in range(4):
            ds.cell(r, c0 + i).border = BOX
            ds.cell(r, c0 + i).fill = FILL_C if k % 2 else PatternFill()
        ds.conditional_formatting.add(get_column_letter(c0 + 3) + str(r), CellIsRule(operator="lessThan", formula=["0"], font=Font(color="A8323E", bold=True)))
        ds.conditional_formatting.add(get_column_letter(c0 + 3) + str(r), CellIsRule(operator="greaterThan", formula=["0"], font=Font(color="2E7D4F", bold=True)))


wk = lambda col, yr="$C$4", w="$C$5": f"SUMIFS({R(col)},{R('B')},{yr},{R('E')},{w})"  # noqa: E731
ytd = lambda col, yr: f"SUMIFS({R(col)},{R('B')},{yr},{R('E')},\"<=\"&$C$5)"  # noqa: E731
mon = lambda col, yr, mm: f"SUMIFS({R(col)},{R('B')},{yr},{R('D')},{mm})"  # noqa: E731

block(7, "B", "This week vs. previous week", [
    ("Accounts opened", "=" + wk("H"), "=" + wk("H", w="$C$5-1"), "0"),
    ("Accounts closed", "=" + wk("J"), "=" + wk("J", w="$C$5-1"), "0"),
    ("Blocked accounts", "=" + wk("L"), "=" + wk("L", w="$C$5-1"), "0"),
    ("Partner channel", "=" + wk("N"), "=" + wk("N", w="$C$5-1"), "0"),
    ("Savings deposits", "=" + wk("P"), "=" + wk("P", w="$C$5-1"), '#,##0 "€"'),
])
block(7, "G", "Year to date vs. last year", [
    ("Accounts opened", "=" + ytd("H", "$C$4"), "=" + ytd("H", "$C$4-1"), "0"),
    ("Accounts closed", "=" + ytd("J", "$C$4"), "=" + ytd("J", "$C$4-1"), "0"),
    ("Net new accounts", "=H9-H10", "=I9-I10", "0"),
    ("Blocked amount", "=" + ytd("M", "$C$4"), "=" + ytd("M", "$C$4-1"), '#,##0 "€"'),
    ("Savings deposits", "=" + ytd("P", "$C$4"), "=" + ytd("P", "$C$4-1"), '#,##0 "€"'),
])
block(15, "B", "This month vs. same month last year", [
    ("Accounts opened", "=" + mon("H", "$C$4", "$H$5"), "=" + mon("H", "$C$4-1", "$H$5"), "0"),
    ("Accounts closed", "=" + mon("J", "$C$4", "$H$5"), "=" + mon("J", "$C$4-1", "$H$5"), "0"),
    ("Blocked accounts", "=" + mon("L", "$C$4", "$H$5"), "=" + mon("L", "$C$4-1", "$H$5"), "0"),
])
block(15, "G", "Account mix this year", [
    ("Current accounts", "=SUMIFS(" + R("K") + "," + R("B") + ",$C$4)", "=SUMIFS(" + R("K") + "," + R("B") + ",$C$4-1)", "0"),
    ("Blocked accounts", "=SUMIFS(" + R("L") + "," + R("B") + ",$C$4)", "=SUMIFS(" + R("L") + "," + R("B") + ",$C$4-1)", "0"),
    ("Partner channel", "=SUMIFS(" + R("N") + "," + R("B") + ",$C$4)", "=SUMIFS(" + R("N") + "," + R("B") + ",$C$4-1)", "0"),
])

# helper table for the chart (follows the year selector)
ds["R6"], ds["R6"].font = "Chart helper (follows selected year)", B
header(ds, 7, ["Week", "Selected year", "Previous year"], col=18)
for w in range(1, 53):
    r = 7 + w
    ds.cell(r, 18, w)
    ds.cell(r, 19, f"=SUMIFS({R('H')},{R('B')},$C$4,{R('E')},{w})")
    ds.cell(r, 20, f"=SUMIFS({R('H')},{R('B')},$C$4-1,{R('E')},{w})")
ln = LineChart()
ln.title, ln.y_axis.title, ln.x_axis.title = "Accounts opened per week: selected vs. previous year", "accounts", "week"
ln.add_data(Reference(ds, min_col=19, max_col=20, min_row=7, max_row=59), titles_from_data=True)
ln.set_categories(Reference(ds, min_col=18, min_row=8, max_row=59))
ln.height, ln.width = 8.5, 24
ln.series[0].graphicalProperties.line.solidFill, ln.series[0].graphicalProperties.line.width = ROSE, 28000
ln.series[1].graphicalProperties.line.solidFill, ln.series[1].graphicalProperties.line.dashStyle = "D9A79C", "dash"
for s in ln.series:
    s.smooth = False
ds.add_chart(ln, "B23")
fit_page(ds, "A1:K41")

# ------------------------------------------------------------------ Overview
ov = wb.create_sheet("Yearly overview")
ov["A1"], ov["A1"].font = "Yearly overview by account type", T
ov["A2"], ov["A2"].font = SIM, NOTE
header(ov, 4, ["Account type", "Opened 2024", "Opened 2025", "Δ %", "Closed 2024", "Closed 2025", "Amount 2025 (€)"])
spec = [("Current accounts", "K", None), ("Blocked accounts", "L", "M"), ("… of which via partner channel", "N", None)]
for i, (lab, col, amt) in enumerate(spec):
    r = 5 + i
    ov.cell(r, 1, lab).font = B
    ov.cell(r, 2, f"=SUMIFS({R(col)},{R('B')},2024)")
    ov.cell(r, 3, f"=SUMIFS({R(col)},{R('B')},2025)")
    ov.cell(r, 4, f"=C{r}/B{r}-1").number_format = "+0%;-0%"
ov["E8"], ov["F8"] = f"=SUMIFS({R('J')},{R('B')},2024)", f"=SUMIFS({R('J')},{R('B')},2025)"
ov["G8"] = "=G6"
ov["G8"].number_format = '#,##0 "€"'
ov["A9"], ov["A9"].font = "Total = current + blocked accounts. Partner-channel accounts are included in these; closings are tracked for all types together.", NOTE
ov["G6"] = f"=SUMIFS({R('M')},{R('B')},2025)"
ov["G6"].number_format = '#,##0 "€"'
ov["A8"], ov["A8"].font = "Total", B
for c in "BC":
    ov[f"{c}8"] = f"=SUM({c}5:{c}6)"
ov["D8"] = "=C8/B8-1"
ov["D8"].number_format = "+0%;-0%"
for row in ov.iter_rows(min_row=5, max_row=8, max_col=7):
    for c in row:
        c.border = BOX
for c in ov[8][:7]:
    c.fill, c.font = FILL_L, B
for i, w in enumerate([30, 12, 12, 8, 12, 12, 16], 1):
    ov.column_dimensions[get_column_letter(i)].width = w
bc = BarChart()
bc.type, bc.title = "bar", "Accounts opened by type"
bc.add_data(Reference(ov, min_col=2, max_col=3, min_row=4, max_row=7), titles_from_data=True)
bc.set_categories(Reference(ov, min_col=1, min_row=5, max_row=7))
bc.height, bc.width = 7, 15
for s, col in zip(bc.series, ["E3B5A4", ROSE]):
    s.graphicalProperties.solidFill = col
ov.add_chart(bc, "A12")
fit_page(ov, "A1:I27")

# ------------------------------------------------------------------ How it works
hw = wb.create_sheet("How it works")
hw.column_dimensions["A"].width = 4
hw.column_dimensions["B"].width = 95
hw["B1"], hw["B1"].font = "How this dashboard works", T
hw["B2"], hw["B2"].font = SIM, NOTE
steps = ["Export last week's accounts from the core banking system.",
         "Paste the rows at the bottom of the 'Database' sheet (one row per week).",
         "Pick the year and week in the yellow cells on 'Dashboard'.",
         "All KPI blocks and the weekly chart update through SUMIFS formulas; no manual counting.",
         "Use 'Monthly' and 'Yearly overview' for management meetings and year-on-year comparison.",
         "The original tool also uses macros and pivot tables; this demo keeps the logic in formulas."]
for i, s in enumerate(steps, 1):
    hw.cell(3 + i, 1, i).font = B
    hw.cell(3 + i, 2, s)

wb.save(OUT)
print("saved", OUT, "rows:", len(rows))
