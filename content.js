/*
  ============================================================
  ALL SITE CONTENT LIVES HERE. Edit text in quotes and commit.

  Text containing "TODO" is hidden on the public site (only the part
  before TODO is shown). Open  ?preview=1  to see TODOs highlighted.
  Projects whose story is mostly TODO stay hidden until filled in.
  ============================================================
*/

const SITE = {
  "name": "Linh Vu",
  "headline": "Linh Vu – Supply Chain Analyst",
  "coverTitle": "Supply Chain · Operations · Analytics",
  "quote": "I turn supply chain data into decisions that save money.",
  "location": "Darmstadt, Germany",
  "availability": "Available from January 2027",
  "photo": "assets/photos/avatar.jpg",
  "resume": "",
  "contacts": [
    {
      "label": "LinkedIn",
      "text": "linkedin.com/in/linh-vu-khanh-23102001",
      "url": "https://www.linkedin.com/in/linh-vu-khanh-23102001",
      "icon": "assets/icons/linkedin.png"
    },
    {
      "label": "Email",
      "text": "vklinh231001@gmail.com",
      "url": "mailto:vklinh231001@gmail.com",
      "icon": "assets/icons/gmail.png"
    },
    {
      "label": "GitHub",
      "text": "github.com/vukhanhlinh2310",
      "url": "https://github.com/vukhanhlinh2310",
      "icon": "assets/icons/github.png"
    }
  ],
  "about": [
    "I am finishing my MSc in Logistics & Supply Chain Management at TU Darmstadt (thesis submission December 2026), after a bachelor's in International Business at Foreign Trade University in Vietnam.",
    "I started on the operations side: spare parts inventory control at Honda's Part Supply Chain Management Center, then a management trainee program at Crystal International. Since 2024 I have worked at VietinBank's Germany branch, where I added data analysis, partner management and German work culture to my toolkit.",
    "I enjoy problems where operations meet numbers: why stock sits in the wrong place, where cost leaks out of a process, and how to explain the fix so people act on it."
  ],
  "organizations": [
    {
      "name": "TU Darmstadt",
      "url": "https://www.tu-darmstadt.de",
      "logo": "assets/logos/tu-darmstadt.png",
      "sub": "MSc Logistics & SCM",
      "link": "#projects/academic"
    },
    {
      "name": "Foreign Trade University",
      "url": "https://ftu.edu.vn",
      "logo": "assets/logos/ftu.png",
      "sub": "BA International Business",
      "link": "#education/ftu"
    },
    {
      "name": "VietinBank",
      "url": "https://www.vietinbank.de",
      "logo": "assets/logos/vietinbank.png",
      "sub": "Working Student",
      "link": "#experience/vietinbank"
    },
    {
      "name": "Crystal International",
      "url": "https://www.crystalgroup.com",
      "logo": "assets/logos/crystal.png",
      "sub": "Management Trainee",
      "link": "#experience/crystal"
    },
    {
      "name": "Honda Vietnam",
      "url": "https://www.honda.com.vn",
      "logo": "assets/logos/honda.png",
      "sub": "Inventory Control Intern",
      "link": "#experience/honda"
    },
    {
      "name": "Formula 1 Vietnam Grand Prix",
      "url": "",
      "logo": "assets/logos/f1-vietnam.png",
      "badge": "F1",
      "sub": "Operations Intern",
      "link": "#experience/f1"
    }
  ],
  "featured": [
    "honda-network",
    "quick-changeover",
    "ai-risk"
  ],
  "education": [
    {
      "id": "tud",
      "org": "Technische Universität Darmstadt",
      "logo": "assets/logos/tu-darmstadt.png",
      "url": "https://www.tu-darmstadt.de",
      "degree": "MSc Logistics & Supply Chain Management",
      "period": "Oct 2024 – Dec 2026",
      "place": "Darmstadt, Germany",
      "details": [
        "Master's thesis: Optimizing Anticipatory Shipping: A Comparative Analysis of Forecasting Methods in Retail Supply Chains (submission December 2026)."
      ],
      "projects": [
        {
          "text": "Master's thesis: Optimizing Anticipatory Shipping: A Comparative Analysis of Forecasting Methods in Retail Supply Chains",
          "link": "forecasting"
        },
        {
          "text": "AI support in Project Risk Management",
          "link": "ai-risk"
        },
        {
          "text": "Applications of Queuing Theory to Order Picking Systems",
          "link": "queuing"
        },
        {
          "text": "Intelligent Freight Wagon: How Data Collection Supports Sustainable Rail Transport",
          "link": "freight-wagon"
        }
      ]
    },
    {
      "id": "ftu",
      "org": "Foreign Trade University",
      "logo": "assets/logos/ftu.png",
      "url": "https://ftu.edu.vn",
      "degree": "Bachelor of International Business",
      "period": "2019 – 2023",
      "place": "Vietnam",
      "details": [
        "FIATA Higher Diploma in Supply Chain Management"
      ],
      "projects": [
        {
          "text": "Graduation thesis: Analysis of cross-warehouse back-order release at Honda Vietnam's Part Supply Chain Management Center",
          "link": "honda-network"
        }
      ]
    }
  ],
  "certificates": [
    {
      "name": "FIATA Higher Diploma in Supply Chain Management",
      "note": "International Federation of Freight Forwarders Associations"
    },
    {
      "name": "IELTS 7.5",
      "note": "Professional working English"
    },
    {
      "name": "German B1+",
      "note": "Improving daily at work"
    }
  ],
  "languages": [
    {
      "name": "Vietnamese",
      "level": "Native",
      "pct": 100
    },
    {
      "name": "English",
      "level": "Professional · IELTS 7.5",
      "pct": 90
    },
    {
      "name": "German",
      "level": "B1+",
      "pct": 55
    }
  ],
  "experience": [
    {
      "id": "vietinbank",
      "logo": "assets/logos/vietinbank.png",
      "url": "https://www.vietinbank.de",
      "role": "Working Student, Retail Banking",
      "org": "VietinBank Germany Branch",
      "orgNote": "The first and only Vietnamese bank operating in Europe",
      "place": "Frankfurt am Main, Germany",
      "period": "Dec 2024 – today",
      "points": [
        {
          "title": "Customer Operations",
          "text": "Manage end-to-end customer onboarding and handle customer requests and complaints."
        },
        {
          "title": "New Product Development and Launching",
          "text": "Led the entire product lifecycle for a new financial solution, from concept formulation, demand and feasibility analysis and trial run to market launch, establishing a new, sustainable revenue stream for the bank while improving the overall customer experience."
        },
        {
          "title": "Data & Market Analysis",
          "text": "Create reports and analyse market trends and customer insights to drive cost restructuring and expansion strategies."
        },
        {
          "title": "Partner Management",
          "text": "Sourced, evaluated and managed strategic partnerships to improve operational and financial viability."
        },
        {
          "title": "Compliance and Process Alignment",
          "text": "Coordinated with internal departments to ensure all marketing and product activities met local financial regulations."
        },
        {
          "title": "Cross-functional Alignment",
          "text": "Acted as first contact, connecting internal stakeholders (Compliance, Operations, IT) and external partners."
        }
      ],
      "projects": [
        {
          "text": "Weekly KPI dashboard for the blocked-account product (Excel)",
          "link": "kpi-dashboard"
        },
        {
          "text": "New financial product launch",
          "link": "product-launch"
        },
        {
          "text": "Outsourcing project (ongoing)",
          "link": "outsourcing"
        }
      ]
    },
    {
      "id": "crystal",
      "logo": "assets/logos/crystal.png",
      "url": "https://www.crystalgroup.com",
      "role": "Production Associate, Management Trainee Program",
      "org": "Crystal Martin Vietnam",
      "orgNote": "Crystal International Group, a global leader in apparel manufacturing",
      "place": "Vietnam",
      "period": "Jun 2023 – May 2024",
      "points": [
        {
          "title": "Production Optimization",
          "text": "Production planning, industrial engineering, layout evaluation and capacity optimisation to drive operational efficiency."
        },
        {
          "title": "Onsite Management",
          "text": "Managed day-to-day onsite production, ensuring alignment with strict output and quality targets."
        },
        {
          "title": "Supply Chain Control",
          "text": "Optimised material flow and end-to-end supply chain visibility, from raw material intake and logistics activities to packaging."
        },
        {
          "title": "Rotation Training",
          "text": "Completed cross-functional rotations across Procurement, Merchandising, Production Planning, Warehousing and QA/QC."
        },
        {
          "title": "Operational Excellence",
          "text": "Implemented 5S management standards to foster an organised, efficient and safe workplace."
        }
      ],
      "projects": [
        {
          "text": "Digitalization Transformation Project: introductory workshop on automating daily work with the Microsoft ecosystem",
          "link": "digital-workshop"
        },
        {
          "text": "Proposing quick changeover activities and a problem escalation map, inspired by Formula 1 pit stops",
          "link": "quick-changeover"
        },
        {
          "text": "Material optimization: optimised binding-tape usage, reducing the SAM of critical operations by 21%",
          "link": "binding-tape"
        }
      ]
    },
    {
      "id": "honda",
      "logo": "assets/logos/honda.png",
      "url": "https://www.honda.com.vn",
      "role": "Inventory Control Intern",
      "org": "Honda Vietnam · Part Supply Chain Management Center",
      "orgNote": "",
      "place": "Vietnam",
      "period": "Feb 2023 – Jun 2023",
      "points": [
        {
          "title": "SAP System",
          "text": "Extracted and analysed inventory data and allocated goods among storage locations to fulfil urgent orders."
        },
        {
          "title": "Reporting",
          "text": "Prepared daily inventory management documents and weekly and monthly back-order reports in PowerPoint and Power BI."
        },
        {
          "title": "Back-order Control",
          "text": "Controlled back-orders and managed cross-warehouse back-order release."
        },
        {
          "title": "Stock-taking",
          "text": "Took part in the annual stock-taking."
        }
      ],
      "projects": [
        {
          "text": "Cross-warehouse back-order release optimization: proposed a new distribution network, estimated to cut the process's logistics cost by 8.8%",
          "link": "honda-network"
        },
        {
          "text": "Standardised the training process on inventory management and back-order control for newcomers",
          "link": ""
        }
      ]
    },
    {
      "id": "f1",
      "logo": "assets/logos/f1-vietnam.png",
      "badge": "F1",
      "url": "",
      "role": "Operations Intern",
      "org": "Vietnam Grand Prix Corporation",
      "orgNote": "Organiser of the planned Formula 1 Vietnam Grand Prix",
      "place": "Hanoi, Vietnam",
      "period": "Jan 2020 – Apr 2020",
      "points": [
        {
          "title": "Translation",
          "text": "Translated documents and meetings between Vietnamese and English for the operations team."
        },
        {
          "title": "Research & Synthesis",
          "text": "Collected and synthesised information to support event preparation."
        },
        {
          "title": "Documentation",
          "text": "Compiled documents and papers based on the standards of previous Formula 1 events."
        },
        {
          "title": "Operations Support",
          "text": "Handled other operational tasks assigned by the manager."
        }
      ],
      "projects": []
    }
  ],
  "skills": [
    {
      "id": "excel",
      "name": "Excel",
      "icon": "assets/icons/excel.png"
    },
    {
      "id": "powerbi",
      "name": "Power BI",
      "icon": "assets/icons/powerbi.png"
    },
    {
      "id": "powerpoint",
      "name": "PowerPoint",
      "icon": "assets/icons/powerpoint.png"
    },
    {
      "id": "sap",
      "name": "SAP (MM, SD)",
      "badge": "SAP"
    },
    {
      "id": "python",
      "name": "Python",
      "badge": "Py"
    },
    {
      "id": "ai",
      "name": "AI tools",
      "badge": "AI"
    },
    {
      "id": "data",
      "name": "Data analysis & KPIs",
      "badge": "D"
    },
    {
      "id": "forecasting",
      "name": "Demand forecasting",
      "badge": "F"
    },
    {
      "id": "inventory",
      "name": "Inventory management",
      "badge": "I"
    },
    {
      "id": "capacity",
      "name": "Capacity planning & S&OP",
      "badge": "C"
    },
    {
      "id": "production",
      "name": "Production planning",
      "badge": "P"
    },
    {
      "id": "process",
      "name": "Process optimization",
      "badge": "O"
    },
    {
      "id": "lean",
      "name": "Lean & 5S",
      "badge": "5S"
    },
    {
      "id": "partner",
      "name": "Supplier & partner management",
      "badge": "S"
    },
    {
      "id": "stakeholder",
      "name": "Stakeholder management",
      "badge": "St"
    },
    {
      "id": "pm",
      "name": "Project management",
      "badge": "PM"
    }
  ],
  "hobbies": [
    {
      "title": "Indoor plants",
      "text": "My flat is slowly turning into a jungle: monstera, calathea, peace lily, snake plant and more. Keeping them happy is my daily reset, and a good lesson in patience and routine.",
      "photos": [
        "assets/photos/plants-shelf.jpg",
        "assets/photos/plants-desk.jpg"
      ]
    },
    {
      "title": "Running",
      "text": "I ran two seasons of the J.P. Morgan Corporate Challenge in Frankfurt with my VietinBank colleagues. Few things build a team like crossing a finish line together.",
      "photos": [
        "assets/photos/running.jpg"
      ]
    },
    {
      "title": "Tennis",
      "text": "My favourite way to switch off after a day of numbers: red clay, a pink racket and a lot of balls to collect.",
      "photos": [
        "assets/photos/tennis.jpg"
      ]
    },
    {
      "title": "Analog photography",
      "text": "I shoot film on a vintage Olympus. With only 36 frames per roll, every shot has to count, which is not that different from planning.",
      "photos": [
        "assets/photos/analog.jpg"
      ]
    }
  ],
  "story": {
    "title": "From the shop floor to data, and from Vietnam to Germany",
    "intro": "My path has not been a straight line, and that is exactly what shaped how I work.",
    "chapters": [
      {
        "kicker": "01 · An early start",
        "title": "Management trainee right after my bachelor's",
        "text": "Straight after my bachelor's in International Business, I joined the management trainee program at Crystal International. I rotated through procurement, merchandising, production planning, warehousing and quality, managed daily production on site and led improvement projects. It was the best possible crash course in how operations really work."
      },
      {
        "kicker": "02 · Knowing what I was missing",
        "title": "Seeing the problem is not the same as solving it",
        "text": "On the floor I could spot where things went wrong, but I lacked the technical and quantitative tools to model problems and prove solutions. Instead of ignoring that gap, I decided to close it, and chose a master's in Logistics & Supply Chain Management at TU Darmstadt for its strong quantitative focus."
      },
      {
        "kicker": "03 · A fresh start in Germany",
        "title": "Treasuring every opportunity",
        "text": "Moving to Germany meant a new language, a new system and no network. I decided to treasure every opportunity I got. Banking was within reach thanks to my International Business background, and VietinBank's Germany branch offered something rare: an international organisation working fully inside the German system."
      },
      {
        "kicker": "04 · What the bank gave me",
        "title": "German, culture and a lot more data",
        "text": "I use German every day and have improved it steadily. I learned how German organisations work: clear processes, careful documentation, direct communication. I worked with far more data than I expected, managed partners, launched a product, and I am now working on a project about outsourcing, which is vendor management in another form."
      },
      {
        "kicker": "05 · Running together",
        "title": "Two seasons of the J.P. Morgan Run",
        "text": "One of my favourite memories is running the J.P. Morgan Corporate Challenge in Frankfurt with my colleagues, two seasons in a row. It showed me the team behind the work, and why I love being part of one."
      }
    ],
    "takeaways": [
      "Operations know-how",
      "Quantitative methods",
      "German work culture",
      "Financial data analysis",
      "Vendor & partner management",
      "Team spirit"
    ]
  },
  "projects": [
    {
      "id": "forecasting",
      "title": "Optimizing anticipatory shipping: a comparative analysis of forecasting methods in retail supply chains",
      "org": "TU Darmstadt · Master's thesis",
      "period": "2026 · submission Dec 2026",
      "type": "Academic",
      "hue": 1,
      "role": "Master's thesis",
      "tools": [
        "Python (pandas, statsmodels, XGBoost)",
        "Google Colab",
        "Time-series forecasting",
        "Discrete-time simulation",
        "Sensitivity analysis"
      ],
      "result": {
        "value": "6 × 6",
        "label": "forecast-method combinations tested per network leg"
      },
      "problem": "Anticipatory shipping means sending stock towards customers before they order, based on a forecast. For perishable products such as dairy with a 14-day shelf life, a wrong forecast is expensive in both directions: too little stock means emergency shipments and lost sales, too much means waste that cannot be returned. Most companies choose the forecasting method with the best accuracy score. My thesis asks whether that is the right choice: in a short-shelf-life network, does the bias of a forecast (does it tend to over- or under-forecast?) matter more for cost than its accuracy?",
      "approach": "The setting is a national dairy distributor: central warehouse → distribution centre → a cluster of 10+ stores, with long lead times (3 days and 2 days) and two same-day rescue options, lateral transshipment between stores and emergency shipment from the distribution centre.\nRQ1, forecasting on real data: I built a Python pipeline on the public Favorita grocery dataset (dairy items, daily store-level sales, 2015–2017) and compared six methods: naive and moving-average baselines, Holt-Winters, SARIMA, a causal regression that includes promotions, and XGBoost. Beyond accuracy (MAE, RMSE), I measured the direction, size and structure of each method's bias, with actual sales kept strictly separate as ground truth.\nRQ2, simulation: I developed a discrete-time simulator of the network that ships stock by anticipatory shipping or pull, escalates shortages from transshipment to emergency shipment, and tracks holding, waste, stockout and shipping costs. Demand patterns come from the real data; prices, markdowns and deterioration come from literature and are tested with sensitivity analysis. I used it to test AS against pull on each leg of the network and to tune decision parameters such as allocation, placement and frequency.\nRQ3 and RQ4, evaluation and optimisation: each forecast method's bias is fed into the simulator to compare its accuracy ranking with its cost ranking, and a 6 × 6 grid tests every combination of methods on the two legs to find the best method per leg.",
      "outcome": "What the thesis delivers: (1) A bias profile of six forecasting methods on real daily perishable demand, not just an accuracy table. (2) A reusable Python simulator of anticipatory shipping with lateral transshipment and emergency shipment in a three-echelon network. (3) A test of where anticipatory shipping beats pull: on the pooled central-warehouse leg or on the store leg. (4) A per-leg recommendation of which forecasting method minimises total cost, and whether it is the most accurate one. Final results follow with the submission in December 2026.",
      "recommendations": [
        "Judge forecasting methods by the cost of their errors, not only by accuracy, when products are perishable and penalties are asymmetric.",
        "Choose the forecasting method per network leg instead of one method for the whole chain."
      ],
      "reflection": "I started this thesis with no Python experience. Building the pipeline step by step, from data cleaning to a full simulator, taught me as much about structured problem solving as about code.",
      "skills": [
        "python",
        "forecasting",
        "inventory",
        "data",
        "capacity"
      ],
      "gallery": [
        {
          "src": "assets/projects/thesis/1-network.png",
          "title": "The network",
          "text": "Anticipatory shipping (AS) or pull on each leg, with same-day rescue by lateral transshipment (LT) between stores and emergency shipment (ES) from the distribution centre."
        },
        {
          "src": "assets/projects/thesis/2-pipeline.png",
          "title": "The research pipeline",
          "text": "From real sales data to forecast bias, a shipping simulation, and finally the best forecasting method per network leg."
        }
      ],
      "galleryTitle": "Model & method",
      "summary": {
        "problem": "Retailers pick forecasting methods by accuracy, but for perishable products the direction of the error may cost more than its size.",
        "did": "Built a Python pipeline comparing six forecasting methods on real dairy sales, and a simulator of anticipatory shipping across a three-tier network.",
        "result": "A per-leg recommendation of which method minimises total cost. Final results with the submission in December 2026."
      }
    },
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
      "skills": [
        "production",
        "data",
        "python"
      ],
      "summary": {
        "problem": "A large-engine plant needs to know how reliable its start-of-line and ready-to-ship dates are, and which open orders to protect first.",
        "did": "Simulated 150 engine orders, measured adherence, ran a Pareto analysis of delay causes and built a priority score in Python.",
        "result": "RTS adherence of 73% against a 90% target; two causes drive 64% of all delay days."
      }
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
      "skills": [
        "capacity",
        "production",
        "data",
        "python"
      ],
      "summary": {
        "problem": "S&OP needs an early answer: can the plant build next year's demand plan, and where is the bottleneck?",
        "did": "Converted a 12-month demand plan into work-centre hours and tested a +15% demand scenario.",
        "result": "The test bench is the bottleneck: up to 96% loaded and over capacity in 7 months under the upside scenario."
      }
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
      "skills": [
        "inventory",
        "data",
        "python"
      ],
      "summary": {
        "problem": "One missing part stops an engine build, but extra stock ties up capital.",
        "did": "Classified 60 parts by ABC/XYZ, calculated safety stock and reorder points, and projected stock for critical parts.",
        "result": "21 parts need action now; one long-lead part would run out in week 8 without expediting."
      }
    },
    {
      "id": "honda-network",
      "title": "Redesigning cross-warehouse back-order release",
      "org": "Honda Vietnam · Part Supply Chain Management Center",
      "period": "2023",
      "type": "Work",
      "hue": 0,
      "role": "Inventory Control Intern · bachelor's thesis",
      "tools": [
        "SAP MM/SD",
        "Excel",
        "Power BI",
        "ABC analysis",
        "SWOT"
      ],
      "result": {
        "value": "-8.8%",
        "label": "estimated logistics cost of the process"
      },
      "problem": "Honda Vietnam supplies spare parts to dealers nationwide from two warehouses: Vinh Phuc in the north and Binh Duong in the south. When the local warehouse was out of stock, dealer orders became back-orders even if the part was available in the other warehouse. Releasing them across warehouses was slow and costly: orders were split into 7–10 SAP batches and shipped either slowly with periodic container moves or expensively by express.",
      "approach": "Analysed back-order and release data from 2020 to April 2023, ranked parts with an ABC analysis by sales, and mapped both release types: around 100 urgent orders per day released across both warehouses for all ranks, and 500–700 periodic stock orders per day released only for low-rank parts at Binh Duong. Assessed the internal and external factors behind back-orders (supplier performance, abnormal demand, limited capacity in Binh Duong, inaccurate forecasting, IT systems), evaluated the activity with a SWOT, and benchmarked distribution models from supply chain literature to redesign the north-to-south flow.",
      "outcome": "Proposed a \"direct shipping with milk runs\" model: each day's north-to-south releases are consolidated into one truck that serves several dealers in the south, instead of splitting urgent and stock orders. Express shipping stays for the small south-to-north flow. The proposal was estimated to cut the logistics cost of the back-order release process by 8.8%.",
      "recommendations": [
        "Forecast demand together with the sales and procurement teams instead of from history alone.",
        "Review safety stock per part instead of applying one standard per ABC rank.",
        "Synchronise SAP with the warehouse operator so back-orders release in one run instead of 7–10 batches.",
        "Negotiate long-term carrier terms for the milk-run route."
      ],
      "reflection": "Most of the saving came from questioning a routine that everyone accepted: splitting shipments by urgency looked logical order by order, but cost more across the whole network.",
      "skills": [
        "sap",
        "inventory",
        "data",
        "powerbi",
        "excel",
        "process"
      ],
      "gallery": [
        {
          "src": "assets/projects/honda/1-warehouse-map.png",
          "title": "Two warehouses, one network",
          "text": "Vinh Phuc (north, red) and Binh Duong (south, blue) serve their own regions; back-orders are released from the other warehouse when local stock runs out. Source: bachelor's thesis, based on company information."
        },
        {
          "src": "assets/projects/honda/2-milk-run-network.jpg",
          "title": "Proposed network: direct shipping with milk runs",
          "text": "One daily truck from Vinh Phuc collects the north-to-south releases and serves several dealers in the south in one route, instead of separate urgent and stock shipments. Model adapted from Chopra & Meindl, Supply Chain Management."
        }
      ],
      "galleryTitle": "Network & proposal",
      "galleryCols": 2,
      "summary": {
        "problem": "Spare-part back-orders were released between Honda's northern and southern warehouses in many small, slow or expensive shipments.",
        "did": "Analysed back-order and release data in SAP, mapped the process and redesigned the north-to-south distribution flow (bachelor's thesis).",
        "result": "Proposed a daily milk-run model, estimated to cut the logistics cost of the process by 8.8%."
      }
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
      "skills": [
        "process",
        "lean",
        "production"
      ],
      "summary": {
        "problem": "Binding-tape usage on critical sewing operations slowed output and wasted material.",
        "did": "Studied the operations on the floor and standardised a better working method.",
        "result": "Standard allowed minutes on critical operations reduced by 21%."
      }
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
      "download": "assets/projects/kpi-dashboard/KPI_Dashboard_DEMO_simulated_data.xlsx",
      "summary": {
        "problem": "Account openings and balances for a banking product were counted manually each week.",
        "did": "Built an Excel dashboard on a weekly database with year/week selectors, year-on-year comparison and charts.",
        "result": "One weekly report replaced manual counting. Screenshots use simulated data."
      }
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
      "skills": [
        "pm",
        "partner",
        "stakeholder",
        "data",
        "excel"
      ],
      "summary": {
        "problem": "The bank wanted a new solution for its customer segment without validated demand, partners or launch process.",
        "did": "Led demand and feasibility analysis, partner selection and alignment across Compliance, Operations and IT.",
        "result": "Launched to market as a new recurring revenue stream."
      }
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
      "skills": [
        "partner",
        "stakeholder",
        "data"
      ],
      "summary": {
        "problem": "TODO",
        "did": "TODO",
        "result": "TODO"
      }
    },
    {
      "id": "queuing",
      "title": "Queuing theory applied to order picking",
      "org": "TU Darmstadt · Master's project",
      "period": "2025",
      "type": "Academic",
      "hue": 5,
      "role": "",
      "tools": [
        "Systematic literature review",
        "PRISMA 2020",
        "Queuing models"
      ],
      "result": {
        "value": "24",
        "label": "studies reviewed"
      },
      "problem": "Order picking is the most labour- and cost-intensive warehouse process. Decisions such as how many pickers or robots to deploy, how to design stations and how to size internal transport are usually made with slow simulations or trial and error. Can queuing theory answer them faster?",
      "approach": "Systematic literature review following PRISMA 2020: 341 records from academic databases, screened down to 24 studies that apply queuing models to warehouse order picking, grouped into picker allocation and staffing, picking station design, and internal transport.",
      "outcome": "Main findings: (1) Staffing: queuing networks reveal a saturation point where extra pickers, robots or vehicles stop adding throughput and waiting lines take over, replacing trial and error with a clear threshold. (2) Station and layout design: analytical models evaluate thousands of buffer and zone configurations in seconds, giving simple rules such as keeping merge points below a utilisation limit and buffers small. (3) Transport and flow control: models give results close to simulation for fleet and buffer sizing at a fraction of the effort, enabling quick what-if analysis. (4) Research gap: most models assume constant demand, while real warehouses face peaks such as sales events and late cut-offs.",
      "recommendations": [
        "Use queuing models for fast first-cut capacity decisions, then simulation for detail.",
        "Plan staffing around the saturation point instead of adding people at peaks."
      ],
      "reflection": "Simple maths can answer big operational questions quickly, as long as you know where its assumptions break.",
      "skills": [
        "process",
        "data",
        "capacity"
      ],
      "summary": {
        "problem": "Staffing and layout decisions in order picking are often made by slow simulation or trial and error.",
        "did": "Systematic literature review of 24 studies applying queuing theory to warehouse order picking.",
        "result": "Queuing models give fast, clear rules for staffing, station design and transport sizing; time-varying demand is the main gap."
      }
    },
    {
      "id": "quick-changeover",
      "title": "Proposing quick changeover activities and a problem escalation map",
      "org": "Crystal Martin Vietnam",
      "period": "2023–2024",
      "type": "Work",
      "hue": 1,
      "role": "Management Trainee · designed and ran the workshop",
      "tools": [
        "SMED / QCO",
        "Process mapping",
        "Training design"
      ],
      "result": {
        "value": "F1",
        "label": "pit-stop logic applied to a sewing line"
      },
      "problem": "Every time a sewing line changed to a new style, production stopped while machines were adjusted, operators were trained and materials were prepared. Long changeovers meant lost output, a slow learning curve and late deliveries. The steps were owned by many departments with no shared plan, and when quality problems appeared after the change, nobody knew who had to act and how fast.",
      "approach": "The idea came from Formula 1. I had worked in operations for the Formula 1 Vietnam Grand Prix, and a pit stop is the perfect changeover: the car stops for only a few seconds because everything that can be prepared is done before it arrives, every crew member has one task, and the sequence is rehearsed.\nI first measured how effective the plant's existing quick-changeover activities were, then applied the pit-stop logic to the line. Everything that can be done while the old style is still running (external activities) was moved before the stop, and every step got an owner and a deadline: technical allocation and machine layout handover 7 days ahead, pre-set cut kits, operator training outside the line, machines adjusted and tested off-line, then threading, patterns, trims cards and packing method ready one day before. A QCO board tracks the status of each step.\nFor problems after the change, I proposed a new escalation map: QC checks the first bundle, a meeting with QC, production and maintenance names the operations that miss requirements, and the line leader retrains operators immediately while inline QC follows up. I packaged everything into a training workshop with F1 pit-stop videos, team games and a quiz.",
      "outcome": "The plant got one standard QCO process from style analysis to the first good piece, with clear owners and lead times for 9 preparation and 8 follow-up steps, a clear escalation path for quality issues, and ramp-up targets: 50% line efficiency within 3 days for bras and 2 days for panties.",
      "recommendations": [
        "Track changeover time and ramp-up efficiency per style on the QCO board.",
        "Review the steps that most often finish late and move them earlier.",
        "Use the escalation map for every first bundle, not only for critical styles."
      ],
      "reflection": "The best ideas sometimes come from far away. A pit crew and a sewing line look nothing alike, but both win by preparing outside the stop and giving everyone one clear job.",
      "skills": [
        "lean",
        "process",
        "production",
        "pm"
      ],
      "gallery": [
        {
          "src": "assets/projects/qco/0-f1-pit-stop.jpg",
          "title": "The idea: a Formula 1 pit stop",
          "text": "Everything is prepared before the car arrives, every crew member has one job, and the sequence is rehearsed. The same logic shapes the QCO process."
        },
        {
          "src": "assets/projects/qco/1-what-why-how.jpg",
          "title": "What, why, how",
          "text": "QCO is the time from the last good piece of one style to the first good piece of the next, and a lean problem-solving tool."
        },
        {
          "src": "assets/projects/qco/2-process-flow.jpg",
          "title": "The QCO process",
          "text": "Style analysis meeting → pre-production meeting → QCO meeting → changeover."
        },
        {
          "src": "assets/projects/qco/3-preparation.jpg",
          "title": "9 preparation steps",
          "text": "Each step has an owner and a lead time, like a pit crew: from technical allocation 7 days ahead to measurement readiness 1 day ahead."
        },
        {
          "src": "assets/projects/qco/4-follow-up.jpg",
          "title": "8 follow-up steps",
          "text": "The final checks one day before the changeover: patterns, trims cards, cut work, machine readiness, packing method."
        },
        {
          "src": "assets/projects/qco/5-targets.jpg",
          "title": "Targets",
          "text": "Ramp-up targets after the changeover by product type."
        }
      ],
      "galleryTitle": "From pit stop to sewing line",
      "galleryCols": 2,
      "summary": {
        "problem": "Style changeovers on sewing lines stopped production for too long, with no shared plan or escalation path.",
        "did": "Applied Formula 1 pit-stop logic: moved preparation before the stop, gave every step an owner and a deadline, and designed an escalation map and a training workshop.",
        "result": "One standard QCO process with 17 owned steps and clear ramp-up targets."
      }
    },
    {
      "id": "ai-risk",
      "title": "AI-augmented project risk management",
      "org": "TU Darmstadt · Master's project with a global pharmaceutical company",
      "period": "2025–2026",
      "type": "Academic",
      "hue": 3,
      "role": "",
      "tools": [
        "Microsoft 365",
        "SharePoint",
        "Power Automate",
        "Dataverse",
        "Copilot",
        "Power BI",
        "Prototyping"
      ],
      "result": {
        "value": "1",
        "label": "central database for risks & lessons learned"
      },
      "problem": "A global pharmaceutical company had a formal risk management process, but every project kept its risks in its own Excel file. With no central database, project managers relied on personal memory to find similar past projects, and lessons learned were rarely reused. Management also had concerns about AI: data quality, compliance, explainability and accountability.",
      "approach": "Interviewed company experts to map pain points, combined the findings with literature and case studies, and designed a framework on the Microsoft 365 tools the company already uses. We built wireframes and then high-fidelity prototypes so stakeholders could test the user experience before any development.",
      "outcome": "Main findings: (1) A unified, project-centric database is the precondition for AI: each project starts from structured descriptions (formulation, supplier, regulation, packaging, capacity), which link to risks, mitigations and lessons. (2) AI adds most value in retrieval: semantic search finds risks from similar past projects, for example the same supplier or country, and shows them in the familiar risk-register format. (3) AI should augment, not replace: a Copilot assistant and Power BI dashboards support analysis, while project managers stay accountable for decisions. (4) A phased rollout on existing tools keeps disruption, cost and compliance risk low.",
      "recommendations": [
        "Start with the central database and data-quality rules before adding AI features.",
        "Pilot with one project portfolio, then scale.",
        "Keep a human in the loop for every risk rating and mitigation."
      ],
      "reflection": "The hardest part of an AI project is not the AI: it is getting messy, scattered data into one structure people trust.",
      "skills": [
        "ai",
        "pm",
        "data",
        "stakeholder"
      ],
      "gallery": [
        {
          "src": "assets/projects/ai-risk/1-project-overview.png",
          "title": "1 · Project overview",
          "text": "Register a new project or upload an existing description."
        },
        {
          "src": "assets/projects/ai-risk/2-project-description.png",
          "title": "2 · Project description by category",
          "text": "Structured inputs per category, with an assistant that spots links to past projects."
        },
        {
          "src": "assets/projects/ai-risk/3-risk-assessment.png",
          "title": "3 · Matched historical risks",
          "text": "Risks from similar past projects, in the familiar risk-register format, ready to customise or add."
        },
        {
          "src": "assets/projects/ai-risk/4-risk-dashboard.png",
          "title": "4 · Risk dashboard",
          "text": "Overall risk, rating breakdown, heat map and risk by category."
        },
        {
          "src": "assets/projects/ai-risk/5-ai-assistant.png",
          "title": "5 · AI assistant",
          "text": "Ask questions such as \"Have we seen similar supplier risks before?\" and get answers from past projects."
        },
        {
          "src": "assets/projects/ai-risk/6-platform-flow.png",
          "title": "6 · Platform flow",
          "text": "Excel and Word files flow through SharePoint and Power Automate into the database, then to Copilot and Power BI."
        }
      ],
      "galleryTitle": "Prototype",
      "galleryNote": "Redesigned versions of the prototype screens from the project; the company name is replaced with a placeholder.",
      "galleryCols": 2,
      "summary": {
        "problem": "A global pharmaceutical company kept project risks in scattered Excel files, so past lessons were rarely reused.",
        "did": "Interviewed experts and designed an AI-augmented risk and lessons-learned platform on Microsoft 365, with prototypes.",
        "result": "A phased framework where AI retrieves similar past risks and project managers stay accountable."
      }
    },
    {
      "id": "freight-wagon",
      "title": "Intelligent freight wagons and sustainable rail transport",
      "org": "TU Darmstadt · Master's project",
      "period": "2025",
      "type": "Academic",
      "hue": 5,
      "role": "",
      "tools": [
        "Systematic literature review",
        "PRISMA 2020"
      ],
      "result": {
        "value": "27",
        "label": "studies reviewed"
      },
      "problem": "Rail is one of the greenest ways to move freight, but European rail freight still loses to road on reliability and cost. Sensors, telematics and data platforms can turn wagons into \"intelligent\" assets. How does that data contribute to sustainability, how can it scale in Europe, and how does it change maintenance?",
      "approach": "Systematic literature review following PRISMA 2020: 358 papers from Web of Science and Springer Nature, screened with clear inclusion criteria (2012–2025, Q1/Q2 journals) down to 27 studies, analysed along three research questions.",
      "outcome": "Main findings: (1) Wagon data improves all three sustainability dimensions: economically through real-time visibility, condition monitoring and lower maintenance cost; socially through fewer manual inspections and safer work; environmentally through energy-efficient operation and more reliable service that supports the shift from road to rail. (2) Four levers can scale it across Europe: retrofitting traction and energy-harvesting technology, telematics and on-board sensing, automated identification at yards and borders, and shared data platforms across the multimodal chain. (3) Data moves maintenance from fixed intervals to condition-based and predictive models, reducing downtime, waste and cost.",
      "recommendations": [
        "Railway operators: modernise existing fleets with modular retrofit kits (traction, braking, energy harvesting, on-board units) with standard interfaces, instead of replacing wagons, and feed the data into fleet and maintenance planning.",
        "Infrastructure managers and freight operators: invest in integrated telematics, train-integrity and condition-based maintenance, together with clear data governance (common standards, role-based access) so wagon data can be reused for capacity planning, costing and safety.",
        "Policymakers and EU programmes: link grants, tax incentives or track-access charges to intelligent wagon technologies, and align initiatives such as Europe's Rail on harmonised data standards to avoid incompatible solutions."
      ],
      "reflection": "Sustainability and efficiency usually point in the same direction once you have the data to see it.",
      "skills": [
        "data",
        "process"
      ],
      "summary": {
        "problem": "Can sensor and telematics data on freight wagons make European rail freight more sustainable?",
        "did": "Systematic literature review of 27 studies along three research questions.",
        "result": "Wagon data improves economic, social and environmental performance and enables predictive maintenance."
      }
    },
    {
      "id": "digital-workshop",
      "title": "Digital tools workshop for a garment plant",
      "org": "Crystal Martin Vietnam",
      "period": "2024",
      "type": "Work",
      "hue": 2,
      "role": "",
      "tools": [
        "Excel VBA",
        "Power Query",
        "Power BI",
        "Power Automate",
        "AI tools",
        "RPA / OCR"
      ],
      "result": {
        "value": "6",
        "label": "digital tools showcased"
      },
      "problem": "Many daily reports and planning tasks at the plant were manual and repetitive, and teams did not know which digital tools were already available to them.",
      "approach": "A half-day workshop as part of the plant's digitalisation project: an introduction to all tools, hands-on booths for Excel VBA & Power Query, Power BI, Power Automate, AI tools and an RPA/OCR vendor, a mini game, a cyber-security briefing and an open Q&A with experts.",
      "outcome": "Teams across planning and project functions saw how their own routine tasks could be automated with tools they already had, and identified first use cases to digitalise.",
      "recommendations": [
        "Follow up with small pilot automations per department."
      ],
      "reflection": "People adopt tools they have touched themselves; booths beat slides.",
      "skills": [
        "excel",
        "powerbi",
        "ai",
        "pm"
      ],
      "summary": {
        "problem": "Teams at the plant did many reports by hand and did not know which digital tools they already had.",
        "did": "Organised a hands-on workshop with booths for Excel VBA, Power Query, Power BI, Power Automate and AI tools.",
        "result": "Teams identified first tasks to automate with tools already available."
      }
    }
  ]
};
