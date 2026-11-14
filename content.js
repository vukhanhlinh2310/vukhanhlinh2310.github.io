/*
  ============================================================
  ALL SITE CONTENT LIVES HERE. Edit text in quotes and commit.

  Text containing "TODO" is hidden on the public site (only the part
  before TODO is shown). Open  ?preview=1  to see TODOs highlighted.
  Projects whose story is mostly TODO stay hidden until filled in.
  ============================================================
*/

const SITE = {
  name: "Linh Vu",
  headline: "Linh Vu – Supply Chain Analyst",
  coverTitle: "Supply Chain · Operations · Analytics",
  quote: "I turn supply chain data into decisions that save money.",
  location: "Darmstadt, Germany",
  availability: "Available from January 2027",
  photo: "assets/photos/avatar.jpg",
  resume: "", // e.g. "assets/Linh_Vu_CV.pdf" -> adds a Resume button

  contacts: [
    { label: "LinkedIn", text: "linkedin.com/in/linh-vu-khanh-23102001", url: "https://www.linkedin.com/in/linh-vu-khanh-23102001", icon: "assets/icons/linkedin.png" },
    { label: "Email", text: "vklinh231001@gmail.com", url: "mailto:vklinh231001@gmail.com", icon: "assets/icons/gmail.png" },
    { label: "GitHub", text: "github.com/vukhanhlinh2310", url: "https://github.com/vukhanhlinh2310", icon: "assets/icons/github.png" }
  ],

  about: [
    "I am finishing my MSc in Logistics & Supply Chain Management at TU Darmstadt (thesis submission December 2026), after a bachelor's in International Business at Foreign Trade University in Vietnam.",
    "I started on the operations side: spare parts inventory control at Honda's Part Supply Chain Management Center, then a management trainee program at Crystal International. Since 2024 I have worked at VietinBank's Germany branch, where I added data analysis, partner management and German work culture to my toolkit.",
    "I enjoy problems where operations meet numbers: why stock sits in the wrong place, where cost leaks out of a process, and how to explain the fix so people act on it."
  ],

  /* Logo strip on Overview: name -> official website, sub -> section on this site */
  organizations: [
    { name: "TU Darmstadt", url: "https://www.tu-darmstadt.de", logo: "assets/logos/tu-darmstadt.png", sub: "MSc Logistics & SCM", link: "#projects/academic" },
    { name: "Foreign Trade University", url: "https://ftu.edu.vn", logo: "assets/logos/ftu.png", sub: "BA International Business", link: "#education/ftu" },
    { name: "VietinBank", url: "https://www.vietinbank.de", logo: "assets/logos/vietinbank.png", sub: "Working Student", link: "#experience/vietinbank" },
    { name: "Crystal International", url: "https://www.crystalgroup.com", logo: "assets/logos/crystal.png", sub: "Management Trainee", link: "#experience/crystal" },
    { name: "Honda Vietnam", url: "https://www.honda.com.vn", logo: "assets/logos/honda.png", sub: "Inventory Control Intern", link: "#experience/honda" }
  ],

  featured: ["honda-network", "sop-capacity", "material-availability"],

  /* ---------- Education (from CV) ---------- */
  education: [
    {
      id: "tud", org: "Technische Universität Darmstadt", logo: "assets/logos/tu-darmstadt.png", url: "https://www.tu-darmstadt.de",
      degree: "MSc Logistics & Supply Chain Management", period: "Oct 2024 – Dec 2026", place: "Darmstadt, Germany",
      details: ["Master's thesis submission in December 2026. TODO: thesis topic"],
      projects: [
        { text: "AI support in Project Risk Management", link: "ai-risk" },
        { text: "Applications of Queuing Theory to Order Picking Systems", link: "queuing" },
        { text: "Intelligent Freight Wagon: How Data Collection Supports Sustainable Rail Transport", link: "freight-wagon" },
        { text: "Optimizing Anticipatory Shipping: A Comparative Analysis of Forecasting Methods in Retail Supply Chains", link: "forecasting" }
      ]
    },
    {
      id: "ftu", org: "Foreign Trade University", logo: "assets/logos/ftu.png", url: "https://ftu.edu.vn",
      degree: "Bachelor of International Business", period: "2019 – 2023", place: "Vietnam",
      details: ["FIATA Higher Diploma in Supply Chain Management"],
      projects: []
    }
  ],
  certificates: [
    { name: "FIATA Higher Diploma in Supply Chain Management", note: "International Federation of Freight Forwarders Associations" },
    { name: "IELTS 7.5", note: "Professional working English" },
    { name: "German B1+", note: "Improving daily at work" }
  ],
  languages: [
    { name: "Vietnamese", level: "Native", pct: 100 },
    { name: "English", level: "Professional · IELTS 7.5", pct: 90 },
    { name: "German", level: "B1+", pct: 55 }
  ],

  /* ---------- Experience (full CV bullets) ---------- */
  experience: [
    {
      id: "vietinbank", logo: "assets/logos/vietinbank.png", url: "https://www.vietinbank.de",
      role: "Working Student, Retail Banking", org: "VietinBank Germany Branch",
      orgNote: "The first and only Vietnamese bank operating in Europe", place: "Frankfurt am Main, Germany", period: "Dec 2024 – today",
      points: [
        { title: "Customer Operations", text: "Manage end-to-end customer onboarding and handle customer requests and complaints." },
        { title: "New Product Development and Launching", text: "Led the entire product lifecycle for a new financial solution, from concept formulation, demand and feasibility analysis and trial run to market launch, establishing a new, sustainable revenue stream for the bank while improving the overall customer experience." },
        { title: "Data & Market Analysis", text: "Create reports and analyse market trends and customer insights to drive cost restructuring and expansion strategies." },
        { title: "Partner Management", text: "Sourced, evaluated and managed strategic partnerships to improve operational and financial viability." },
        { title: "Compliance and Process Alignment", text: "Coordinated with internal departments to ensure all marketing and product activities met local financial regulations." },
        { title: "Cross-functional Alignment", text: "Acted as first contact, connecting internal stakeholders (Compliance, Operations, IT) and external partners." }
      ],
      projects: [
        { text: "Weekly KPI dashboard for the blocked-account product (Excel)", link: "kpi-dashboard" },
        { text: "New financial product launch", link: "product-launch" },
        { text: "Outsourcing project (ongoing)", link: "outsourcing" }
      ]
    },
    {
      id: "crystal", logo: "assets/logos/crystal.png", url: "https://www.crystalgroup.com",
      role: "Production Associate, Management Trainee Program", org: "Crystal Martin Vietnam",
      orgNote: "Crystal International Group, a global leader in apparel manufacturing", place: "Vietnam", period: "Jun 2023 – May 2024",
      points: [
        { title: "Production Optimization", text: "Production planning, industrial engineering, layout evaluation and capacity optimisation to drive operational efficiency." },
        { title: "Onsite Management", text: "Managed day-to-day onsite production, ensuring alignment with strict output and quality targets." },
        { title: "Supply Chain Control", text: "Optimised material flow and end-to-end supply chain visibility, from raw material intake and logistics activities to packaging." },
        { title: "Rotation Training", text: "Completed cross-functional rotations across Procurement, Merchandising, Production Planning, Warehousing and QA/QC." },
        { title: "Operational Excellence", text: "Implemented 5S management standards to foster an organised, efficient and safe workplace." }
      ],
      projects: [
        { text: "Digitalization Transformation Project: introductory workshop on automating daily work with the Microsoft ecosystem", link: "digital-workshop" },
        { text: "Measuring the effectiveness of quick-changeover activities and proposing a new problem escalation map", link: "quick-changeover" },
        { text: "Material optimization: optimised binding-tape usage, reducing the SAM of critical operations by 21%", link: "binding-tape" }
      ]
    },
    {
      id: "honda", logo: "assets/logos/honda.png", url: "https://www.honda.com.vn",
      role: "Inventory Control Intern", org: "Honda Vietnam · Part Supply Chain Management Center",
      orgNote: "", place: "Vietnam", period: "Feb 2023 – Jun 2023",
      points: [
        { title: "SAP System", text: "Extracted and analysed inventory data and allocated goods among storage locations to fulfil urgent orders." },
        { title: "Reporting", text: "Prepared daily inventory management documents and weekly and monthly back-order reports in PowerPoint and Power BI." },
        { title: "Back-order Control", text: "Controlled back-orders and managed cross-warehouse back-order release." },
        { title: "Stock-taking", text: "Took part in the annual stock-taking." }
      ],
      projects: [
        { text: "Cross-warehouse back-order release optimization: proposed a new distribution network and cut the process's logistics cost by 8.8%", link: "honda-network" },
        { text: "Standardised the training process on inventory management and back-order control for newcomers", link: "" }
      ]
    }
  ],

  /* ---------- Skills (sidebar in Projects) ---------- */
  skills: [
    { id: "excel", name: "Excel", icon: "assets/icons/excel.png" },
    { id: "powerbi", name: "Power BI", icon: "assets/icons/powerbi.png" },
    { id: "powerpoint", name: "PowerPoint", icon: "assets/icons/powerpoint.png" },
    { id: "sap", name: "SAP (MM, SD)", badge: "SAP" },
    { id: "python", name: "Python", badge: "Py" },
    { id: "ai", name: "AI tools", badge: "AI" },
    { id: "data", name: "Data analysis & KPIs", badge: "D" },
    { id: "forecasting", name: "Demand forecasting", badge: "F" },
    { id: "inventory", name: "Inventory management", badge: "I" },
    { id: "capacity", name: "Capacity planning & S&OP", badge: "C" },
    { id: "production", name: "Production planning", badge: "P" },
    { id: "process", name: "Process optimization", badge: "O" },
    { id: "lean", name: "Lean & 5S", badge: "5S" },
    { id: "partner", name: "Supplier & partner management", badge: "S" },
    { id: "stakeholder", name: "Stakeholder management", badge: "St" },
    { id: "pm", name: "Project management", badge: "PM" }
  ],

  /* ---------- About me ---------- */
  hobbies: [
    { title: "Indoor plants", text: "My flat is slowly turning into a jungle: monstera, calathea, peace lily, snake plant and more. Keeping them happy is my daily reset, and a good lesson in patience and routine.", photos: ["assets/photos/plants-shelf.jpg", "assets/photos/plants-desk.jpg"] },
    { title: "Running", text: "I ran two seasons of the J.P. Morgan Corporate Challenge in Frankfurt with my VietinBank colleagues. Few things build a team like crossing a finish line together.", photos: ["assets/photos/running.jpg"] },
    { title: "Tennis", text: "My favourite way to switch off after a day of numbers: red clay, a pink racket and a lot of balls to collect.", photos: ["assets/photos/tennis.jpg"] },
    { title: "Analog photography", text: "I shoot film on a vintage Olympus. With only 36 frames per roll, every shot has to count, which is not that different from planning.", photos: ["assets/photos/analog.jpg"] }
  ],

  story: {
    title: "From the shop floor to data, and from Vietnam to Germany",
    intro: "My path has not been a straight line, and that is exactly what shaped how I work.",
    chapters: [
      {
        kicker: "01 · An early start",
        title: "Management trainee right after my bachelor's",
        text: "Straight after my bachelor's in International Business, I joined the management trainee program at Crystal International. I rotated through procurement, merchandising, production planning, warehousing and quality, managed daily production on site and led improvement projects. It was the best possible crash course in how operations really work."
      },
      {
        kicker: "02 · Knowing what I was missing",
        title: "Seeing the problem is not the same as solving it",
        text: "On the floor I could spot where things went wrong, but I lacked the technical and quantitative tools to model problems and prove solutions. Instead of ignoring that gap, I decided to close it, and chose a master's in Logistics & Supply Chain Management at TU Darmstadt for its strong quantitative focus."
      },
      {
        kicker: "03 · A fresh start in Germany",
        title: "Treasuring every opportunity",
        text: "Moving to Germany meant a new language, a new system and no network. I decided to treasure every opportunity I got. Banking was within reach thanks to my International Business background, and VietinBank's Germany branch offered something rare: an international organisation working fully inside the German system."
      },
      {
        kicker: "04 · What the bank gave me",
        title: "German, culture and a lot more data",
        text: "I use German every day and have improved it steadily. I learned how German organisations work: clear processes, careful documentation, direct communication. I worked with far more data than I expected, managed partners, launched a product, and I am now working on a project about outsourcing, which is vendor management in another form."
      },
      {
        kicker: "05 · Running together",
        title: "Two seasons of the J.P. Morgan Run",
        text: "One of my favourite memories is running the J.P. Morgan Corporate Challenge in Frankfurt with my colleagues, two seasons in a row. It showed me the team behind the work, and why I love being part of one."
      }
    ],
    takeaways: ["Operations know-how", "Quantitative methods", "German work culture", "Financial data analysis", "Vendor & partner management", "Team spirit"]
  },

  projects: [
    {
      "id": "schedule-adherence",
      "title": "Engine build schedule adherence & order prioritisation",
      "org": "Personal project · simulated large-engine plant",
      "period": "2026",
      "type": "Personal project",
      "hue": 0,
      "role": "Self-directed analysis",
      "tools": [
        "Python (pandas)",
        "KPI design",
        "Pareto analysis"
      ],
      "code": "https://github.com/vukhanhlinh2310/vukhanhlinh2310.github.io/tree/main/projects/practice",
      "result": {
        "value": "73%",
        "label": "RTS adherence vs. 90% target"
      },
      "problem": "A plant building large engines plans every order with a Start-of-Line (SOL) and a Ready-to-Ship (RTS) date. Management needs to know how reliable these dates are, why orders slip, and which open orders to protect first.",
      "approach": "Built a simulated order book of 150 engine orders across four engine families, measured SOL and RTS adherence with a ±2-day tolerance, ran a Pareto analysis of delay days by root cause, and designed a transparent priority score for the next 8 weeks of open orders.",
      "outcome": "RTS adherence averages 73% against a 90% target and is lowest in June. Material shortages and engineering changes cause 64% of all delay days, so fixing these two levers recovers most of the lost time.",
      "recommendations": [
        "Check material readiness for every order 6 weeks before SOL.",
        "Freeze engineering changes after SOL unless planning approves them.",
        "Use the priority score in the daily planning meeting to decide expediting and test-bench slots."
      ],
      "reflection": "A KPI only helps when it points to a cause. Pairing adherence with a Pareto of delay days turned a red number into two concrete levers.",
      "next": [
        "Connect the score to live ERP data (order status, material availability).",
        "Track adherence per engine family and customer segment."
      ],
      "skills": [
        "production",
        "data",
        "python"
      ]
    },
    {
      "id": "sop-capacity",
      "title": "S&OP rough-cut capacity check for 2027",
      "org": "Personal project · simulated large-engine plant",
      "period": "2026",
      "type": "Personal project",
      "hue": 4,
      "role": "Self-directed analysis",
      "tools": [
        "Python (pandas)",
        "Capacity planning",
        "Scenario analysis"
      ],
      "code": "https://github.com/vukhanhlinh2310/vukhanhlinh2310.github.io/tree/main/projects/practice",
      "result": {
        "value": "96%",
        "label": "peak test-bench load, no buffer left"
      },
      "problem": "S&OP needs an early answer to one question: can the plant build the demand plan? If not, where is the bottleneck and how big is the gap?",
      "approach": "Translated a 12-month demand plan for four engine families into work-centre hours using standard hours per engine, compared them with available capacity (working days, shifts, resources, efficiency) and tested a +15% demand scenario.",
      "outcome": "Machining, assembly and painting stay at or below 81% utilisation. The test bench is the bottleneck: it already runs at 92–96% from April to June and October to December, and goes over capacity in seven months if demand rises by 15%, a gap of about 750 test-bench hours.",
      "recommendations": [
        "Prepare an extra test-bench shift for April–June and September–December if the upside scenario firms up.",
        "Pull tests of 12- and 16-cylinder engines forward into July and August, when load is lower.",
        "Review test cycle times of the largest engines, which use the most bench hours."
      ],
      "reflection": "Rough-cut planning is simple maths, but it moves the capacity conversation months earlier, while options are still cheap.",
      "next": [
        "Add long-lead material constraints to the capacity check.",
        "Build a scenario slider in Excel for the S&OP meeting."
      ],
      "skills": [
        "capacity",
        "production",
        "data",
        "python"
      ]
    },
    {
      "id": "material-availability",
      "title": "Material availability: ABC/XYZ and safety stock",
      "org": "Personal project · simulated engine parts",
      "period": "2026",
      "type": "Personal project",
      "hue": 2,
      "role": "Self-directed analysis",
      "tools": [
        "Python (pandas)",
        "Inventory policy",
        "ABC/XYZ"
      ],
      "code": "https://github.com/vukhanhlinh2310/vukhanhlinh2310.github.io/tree/main/projects/practice",
      "result": {
        "value": "21",
        "label": "parts need action now"
      },
      "problem": "An engine build stops when a single part is missing, but too much stock ties up capital. Which parts need tighter control, how much safety stock is right, and what needs action today?",
      "approach": "Simulated 52 weeks of demand for 60 critical engine parts, classified them by value (ABC) and demand variability (XYZ), calculated safety stock and reorder points per service level, and checked current stock against them.",
      "outcome": "26 parts make up 80% of material value. 19 parts are below their reorder point and 2 are already below safety stock. A gasket kit with a 16-week lead time would run out in week 8 without expediting.",
      "recommendations": [
        "Release orders for the 19 parts below reorder point and expedite the 2 below safety stock.",
        "Dual-source or hold strategic stock for erratic (Z) parts with long lead times.",
        "Review safety stock quarterly as demand variability changes."
      ],
      "reflection": "Safety stock is a policy decision, not just a formula: the service level per class is where business priorities enter the numbers.",
      "next": [
        "Add open purchase orders to the projection.",
        "Show stock coverage in a weekly planner dashboard."
      ],
      "skills": [
        "inventory",
        "data",
        "python"
      ]
    },
    {
      "id": "honda-network",
      "title": "Redesigning cross-warehouse back-order release",
      "org": "Honda Vietnam · Part Supply Chain Management Center",
      "period": "2023",
      "type": "Work",
      "hue": 0,
      "role": "Inventory Control Intern",
      "tools": [
        "SAP MM/SD",
        "Excel",
        "Power BI"
      ],
      "result": {
        "value": "-8.8%",
        "label": "logistics cost of the process"
      },
      "problem": "Urgent spare-part orders were held as back-orders while stock sat in other warehouses, and releasing them across locations was costly.",
      "approach": "Analysed inventory and back-order data from SAP, mapped the flow between storage locations and proposed a new distribution network for cross-warehouse releases.",
      "outcome": "The proposed network cut the logistics cost of the back-order release process by 8.8%. TODO: Was it implemented? How many parts/orders per month?",
      "recommendations": [
        "Route cross-warehouse releases through the proposed network instead of ad-hoc transfers.",
        "Track back-order age and release cost as standing KPIs in the weekly report."
      ],
      "reflection": "Small routing decisions add up: most of the saving came from reorganising flows that people had stopped questioning.",
      "next": [
        "TODO: what you would do next, e.g. safety stock review per location"
      ],
      "skills": [
        "sap",
        "inventory",
        "data",
        "powerbi",
        "excel",
        "process"
      ]
    },
    {
      "id": "forecasting",
      "title": "Forecasting methods for anticipatory shipping",
      "org": "TU Darmstadt · Master's project",
      "period": "2025",
      "type": "Academic",
      "hue": 1,
      "role": "TODO: solo or team role",
      "tools": [
        "TODO: Python / Excel"
      ],
      "result": {
        "value": "TODO: X%",
        "label": "TODO: accuracy gain of best method"
      },
      "problem": "Anticipatory shipping only pays off if retailers can predict demand before the order is placed. Which forecasting method is accurate enough?",
      "approach": "Compared several forecasting methods on retail demand data. TODO: methods (e.g. ARIMA, exponential smoothing, ML), dataset size, error metrics (MAPE/RMSE).",
      "outcome": "TODO: Which method performed best, by how much, and what it means for shipping decisions.",
      "recommendations": [
        "TODO"
      ],
      "reflection": "TODO",
      "next": [
        "TODO"
      ],
      "skills": [
        "forecasting",
        "data"
      ]
    },
    {
      "id": "binding-tape",
      "title": "Material optimization on critical operations",
      "org": "Crystal Martin Vietnam · Crystal International Group",
      "period": "2023–2024",
      "type": "Work",
      "hue": 2,
      "role": "Management Trainee, project lead",
      "tools": [
        "Industrial Engineering",
        "Time study",
        "5S"
      ],
      "result": {
        "value": "-21%",
        "label": "standard allowed minutes"
      },
      "problem": "Binding-tape usage on critical sewing operations was inefficient, slowing output and adding material cost.",
      "approach": "Studied the operations on the floor, re-engineered how binding tape was used and standardised the new method. TODO: method used (time study, trials).",
      "outcome": "Reduced the standard allowed minutes (SAM) of critical operations by 21%. TODO: effect on output or cost.",
      "recommendations": [
        "Roll the standardised method out to similar operations on other lines."
      ],
      "reflection": "Operators knew where the waste was; the project worked because the fix was designed with them, not for them.",
      "next": [
        "TODO"
      ],
      "skills": [
        "process",
        "lean",
        "production"
      ]
    },
    {
      "id": "kpi-dashboard",
      "title": "Weekly KPI dashboard for a banking product",
      "org": "VietinBank Germany Branch",
      "period": "2024–2026",
      "type": "Work",
      "hue": 3,
      "role": "Working Student, built and maintains the tool",
      "tools": [
        "Excel (SUMIFS, pivot tables, VBA)",
        "Charts",
        "Data validation"
      ],
      "result": {
        "value": "1 page",
        "label": "weekly report instead of manual counting"
      },
      "problem": "Account openings, closings and balances for a blocked-account product were counted manually from system exports, with formats changing from year to year and no quick way to compare periods.",
      "approach": "Built a macro-enabled Excel dashboard: a weekly database fed by the core-banking export since 2022, monthly and yearly summaries, and a one-page dashboard with year and week selectors, year-to-date comparison and around 20 charts.",
      "outcome": "One weekly report replaced ad-hoc counting. Management sees weekly, monthly and year-to-date trends and quarterly targets on one page, and new data only needs to be pasted in.",
      "recommendations": [
        "Keep one row per week as the single source of truth and build every view on top of it.",
        "Automate the export step next, so the database refreshes without copy-paste."
      ],
      "reflection": "The value was not the charts but the structure behind them: once the data had one clean format, every new question became a formula instead of a new manual count.",
      "next": [
        "Move the logic to Power BI for automatic refresh and sharing.",
        "Add a simple forecast of openings before the summer peak."
      ],
      "skills": [
        "excel",
        "data"
      ],
      "simulated": true,
      "gallery": [
        {
          "src": "assets/projects/kpi-dashboard/2-database.png",
          "title": "Step 1 · Database",
          "text": "One row per week from the core-banking export: openings, closings, account types and balances."
        },
        {
          "src": "assets/projects/kpi-dashboard/3-monthly.png",
          "title": "Step 2 · Monthly summary",
          "text": "SUMIFS formulas aggregate the database by month and compare the years side by side."
        },
        {
          "src": "assets/projects/kpi-dashboard/1-dashboard.png",
          "title": "Step 3 · Dashboard",
          "text": "Pick a year and a week in the yellow cells: the four KPI blocks and the weekly chart update automatically."
        },
        {
          "src": "assets/projects/kpi-dashboard/4-yearly-overview.png",
          "title": "Step 4 · Yearly overview",
          "text": "Openings by account type and year-on-year change for management meetings."
        }
      ],
      "download": "assets/projects/kpi-dashboard/KPI_Dashboard_DEMO_simulated_data.xlsx"
    },
    {
      "id": "product-launch",
      "title": "Launching a new financial product end to end",
      "org": "VietinBank Germany Branch",
      "period": "2025",
      "type": "Work",
      "hue": 3,
      "role": "Working Student, product lead",
      "tools": [
        "HubSpot CRM",
        "Excel",
        "Jira / Asana"
      ],
      "result": {
        "value": "New",
        "label": "recurring revenue stream"
      },
      "problem": "The bank wanted a new solution for its customer segment but had no validated demand, partner setup or launch process.",
      "approach": "Ran demand and feasibility analysis, sourced and evaluated external partners, aligned Compliance, Operations and IT, then piloted before launch.",
      "outcome": "Launched to market and established a new, sustainable revenue stream. TODO: customers or timeline you can share publicly.",
      "recommendations": [
        "Keep a single owner across partner, compliance and IT workstreams for future launches."
      ],
      "reflection": "A launch is a supply chain of decisions: every hand-off between teams is where delays hide.",
      "next": [
        "TODO"
      ],
      "skills": [
        "pm",
        "partner",
        "stakeholder",
        "data",
        "excel"
      ]
    },
    {
      "id": "outsourcing",
      "title": "Outsourcing evaluation project",
      "org": "VietinBank Germany Branch",
      "period": "2026 · ongoing",
      "type": "Work",
      "hue": 4,
      "role": "TODO: your role",
      "tools": [
        "TODO: tools"
      ],
      "result": {
        "value": "Ongoing",
        "label": "make-or-buy & vendor analysis"
      },
      "problem": "TODO: what is being considered for outsourcing and why (keep it general, no confidential details).",
      "approach": "TODO: how options and providers are evaluated (criteria, cost comparison, risk).",
      "outcome": "TODO: status or first results you can share.",
      "recommendations": [
        "TODO"
      ],
      "reflection": "TODO",
      "next": [
        "TODO"
      ],
      "skills": [
        "partner",
        "stakeholder",
        "data"
      ]
    },
    {
      "id": "queuing",
      "title": "Queuing theory applied to order picking",
      "org": "TU Darmstadt · Master's project",
      "period": "2025",
      "type": "Academic",
      "hue": 5,
      "role": "TODO: solo or team role",
      "tools": [
        "TODO: tools"
      ],
      "result": {
        "value": "TODO",
        "label": "TODO: key result"
      },
      "problem": "Order picking is the most labour-intensive warehouse process. Where do waiting times build up and how many pickers are needed?",
      "approach": "Modelled the picking system as a queuing network. TODO: model type, parameters, simulation or analytical.",
      "outcome": "TODO: findings (utilisation, waiting time, optimal capacity).",
      "recommendations": [
        "TODO"
      ],
      "reflection": "TODO",
      "next": [
        "TODO"
      ],
      "skills": [
        "process",
        "data"
      ]
    },
    {
      "id": "quick-changeover",
      "title": "Quick changeover and problem escalation",
      "org": "Crystal Martin Vietnam",
      "period": "2023–2024",
      "type": "Work",
      "hue": 1,
      "role": "Management Trainee",
      "tools": [
        "SMED",
        "Process mapping"
      ],
      "result": {
        "value": "TODO",
        "label": "TODO: changeover time saved"
      },
      "problem": "Line changeovers and unclear escalation paths caused avoidable downtime.",
      "approach": "Measured the effectiveness of quick-changeover activities and designed a new problem escalation map for the floor.",
      "outcome": "TODO: what improved after the new escalation map.",
      "recommendations": [
        "TODO"
      ],
      "reflection": "TODO",
      "next": [
        "TODO"
      ],
      "skills": [
        "lean",
        "process",
        "production"
      ]
    },
    {
      "id": "ai-risk",
      "title": "AI support in project risk management",
      "org": "TU Darmstadt · Master's project",
      "period": "2025",
      "type": "Academic",
      "hue": 3,
      "role": "TODO",
      "tools": [
        "TODO: tools"
      ],
      "result": {
        "value": "AI",
        "label": "applied to risk identification"
      },
      "problem": "Project risks are often spotted too late. How can AI tools support identification and assessment?",
      "approach": "TODO: literature review, framework or prototype?",
      "outcome": "TODO: main findings.",
      "recommendations": [
        "TODO"
      ],
      "reflection": "TODO",
      "next": [
        "TODO"
      ],
      "skills": [
        "pm",
        "ai"
      ]
    },
    {
      "id": "freight-wagon",
      "title": "Intelligent freight wagon: data for sustainable rail transport",
      "org": "TU Darmstadt · Master's project",
      "period": "2025",
      "type": "Academic",
      "hue": 5,
      "role": "TODO: your role",
      "tools": [
        "TODO: tools"
      ],
      "result": {
        "value": "TODO",
        "label": "TODO: key result"
      },
      "problem": "How can data collected from freight wagons (location, condition, load) support more sustainable and reliable rail freight?",
      "approach": "TODO: what you analysed or designed (data types, use cases, framework).",
      "outcome": "TODO: main findings.",
      "recommendations": [
        "TODO"
      ],
      "reflection": "TODO",
      "next": [
        "TODO"
      ],
      "skills": [
        "data"
      ]
    },
    {
      "id": "digital-workshop",
      "title": "Digitalization workshop for daily operations",
      "org": "Crystal Martin Vietnam",
      "period": "2024",
      "type": "Work",
      "hue": 2,
      "role": "Workshop designer & host",
      "tools": [
        "Microsoft 365",
        "Automation"
      ],
      "result": {
        "value": "TODO",
        "label": "TODO: participants"
      },
      "problem": "Many daily reporting tasks were manual and repetitive.",
      "approach": "Designed and ran an introductory workshop on automating everyday work with the Microsoft ecosystem. TODO: tools shown.",
      "outcome": "TODO: participants and what they automated.",
      "recommendations": [
        "TODO"
      ],
      "reflection": "TODO",
      "next": [
        "TODO"
      ],
      "skills": [
        "excel",
        "powerpoint",
        "ai"
      ]
    }
  ]
};
