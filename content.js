/*
  ============================================================
  ALL SITE CONTENT LIVES HERE.

  Versions (send the matching link per application):
    https://vukhanhlinh2310.github.io/                -> general
    https://vukhanhlinh2310.github.io/?for=analyst    -> Supply Chain / Data Analyst
    https://vukhanhlinh2310.github.io/?for=planner    -> Demand / Spare Parts / Material Planner
    https://vukhanhlinh2310.github.io/?for=trainee    -> Operations / Logistics Trainee

  Preview mode (version switcher + missing-info markers; never send this):
    https://vukhanhlinh2310.github.io/?preview=1

  Text containing "TODO" is hidden on the public site (only the part
  before TODO is shown) and highlighted in preview mode.

  Logos: put the official logo file in assets/logos/ and write its
  path in "logo". Empty "logo" -> a clean name badge is shown instead.
  ============================================================
*/

const SITE = {
  name: "Linh Vu",
  title: "Supply Chain · Operations · Analytics",
  location: "Darmstadt, Germany",
  email: "vklinh231001@gmail.com",
  availability: "Available from January 2027",
  photo: "", // e.g. "assets/photo.jpg"
  quote: "I turn supply chain data into decisions that save money.",

  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/linh-vu-khanh-23102001" },
    { label: "GitHub", url: "https://github.com/vukhanhlinh2310" },
    { label: "Email", url: "mailto:vklinh231001@gmail.com" },
    { label: "Resume", url: "" } // e.g. "assets/Linh_Vu_CV.pdf"
  ],

  /* ---------- Organizations (logo strip) ---------- */
  organizations: [
    { name: "TU Darmstadt", short: "TU", kind: "MSc", logo: "" },
    { name: "Foreign Trade University", short: "FTU", kind: "Bachelor", logo: "" },
    { name: "VietinBank", short: "VTB", kind: "Germany Branch", logo: "" },
    { name: "Crystal International", short: "CI", kind: "Crystal Martin VN", logo: "" },
    { name: "Honda Vietnam", short: "H", kind: "Parts SCM Center", logo: "" },
    { name: "FIATA", short: "FIATA", kind: "Higher Diploma", logo: "" }
  ],

  /* ---------- Versions ---------- */
  profiles: {
    default: {
      label: "General",
      about: [
        "I am finishing my MSc in Logistics & Supply Chain Management at TU Darmstadt (thesis submission December 2026), after a bachelor's in International Business at Foreign Trade University in Hanoi.",
        "I started on the operations side: spare parts inventory control at Honda's Part Supply Chain Management Center, then a management trainee program at Crystal International. Since 2024 I have worked at VietinBank's Germany branch, where I added data analysis, partner management and German work culture to my toolkit.",
        "I enjoy problems where operations meet numbers: why stock sits in the wrong place, where cost leaks out of a process, and how to explain the fix so people act on it."
      ],
      metrics: ["cost", "sam", "launch", "langs"],
      projects: ["honda-network", "forecasting", "binding-tape", "product-launch", "outsourcing", "queuing"],
      skillTab: "expertise"
    },
    analyst: {
      label: "Supply Chain Analyst",
      about: [
        "I analyse inventory, demand and cost data to find where a supply chain loses money, and I present the answer so decision-makers can act on it.",
        "My MSc at TU Darmstadt gave me forecasting and modelling methods; Honda, Crystal International and VietinBank gave me the business context: SAP data, shop-floor reality, financial reporting and stakeholders who need clear recommendations.",
        "Forecasting, KPI reporting and process analysis are where I do my best work."
      ],
      metrics: ["cost", "sam", "reports", "langs"],
      projects: ["honda-network", "forecasting", "product-launch", "outsourcing", "queuing", "ai-risk"],
      skillTab: "software"
    },
    planner: {
      label: "Planner",
      about: [
        "Right part, right place, right time, at the lowest possible stock. That is the problem I first worked on at Honda's Part Supply Chain Management Center, handling back-orders and cross-warehouse allocation in SAP.",
        "My master's at TU Darmstadt added demand forecasting methods; my role at VietinBank added supplier and stakeholder management in a German organisation.",
        "I bring planning, data and communication together."
      ],
      metrics: ["cost", "reports", "sam", "langs"],
      projects: ["honda-network", "forecasting", "binding-tape", "outsourcing", "product-launch", "queuing"],
      skillTab: "expertise"
    },
    trainee: {
      label: "Operations Trainee",
      about: [
        "I have already completed a management trainee program at Crystal International, rotating through procurement, merchandising, production planning, warehousing and quality.",
        "I led shop-floor improvement projects, introduced 5S, and learned that good operations are built on structure, data and people.",
        "Now I bring a German master's degree and two years of German work-culture experience, ready to take responsibility in a team."
      ],
      metrics: ["sam", "cost", "rotations", "langs"],
      projects: ["binding-tape", "quick-changeover", "honda-network", "queuing", "digital-workshop", "product-launch"],
      skillTab: "expertise"
    }
  },

  /* ---------- Headline numbers ---------- */
  metrics: {
    cost: { value: "8.8%", label: "logistics cost cut in a back-order release process" },
    sam: { value: "21%", label: "fewer standard minutes on critical operations" },
    launch: { value: "1", label: "financial product taken from concept to launch" },
    reports: { value: "Daily", label: "inventory & back-order reporting in SAP and Power BI" },
    rotations: { value: "5", label: "functions rotated through as a management trainee" },
    langs: { value: "3", label: "working languages: VI, EN (IELTS 7.5), DE (B1+)" }
  },

  /* ---------- My story ---------- */
  story: {
    title: "Why a supply chain person joined a bank",
    intro: "People sometimes ask why someone with a logistics background works at a bank. The short answer: it was the best classroom I could have found.",
    chapters: [
      {
        kicker: "01 · A fresh start",
        title: "Starting from zero in Germany",
        text: "Moving to Germany for my master's meant a new language, a new system and no network. I decided early to treasure every opportunity I got, and to treat each one as a chance to learn rather than a detour."
      },
      {
        kicker: "02 · Not as far as it looks",
        title: "Banking was always within reach",
        text: "My bachelor's was in International Business, where finance, trade and banking were core subjects. Banking was a field I could work in; I simply had not done it yet. VietinBank's Germany branch offered something rare: an international organisation operating fully inside the German system."
      },
      {
        kicker: "03 · What it gave me",
        title: "German, culture and a lot more data",
        text: "I use German every day and have improved it steadily. I learned how German organisations work: clear processes, careful documentation, direct communication. And I got far more analytics than I expected: market and customer reports, financial figures at scale, partner evaluations."
      },
      {
        kicker: "04 · Back to supply chain",
        title: "Same problems, different industry",
        text: "I am currently working on a project about outsourcing, which is supplier selection and vendor management in another form. Alongside work, I build my own data projects to keep my supply chain analytics sharp. TODO: one line on the outsourcing project scope you can share publicly."
      }
    ],
    takeaways: ["German work culture", "Financial data analysis", "Vendor & partner management", "Stakeholder alignment", "German language, daily"]
  },

  /* ---------- Case studies ---------- */
  projects: [
    {
      id: "honda-network",
      title: "Redesigning cross-warehouse back-order release",
      org: "Honda Vietnam · Part Supply Chain Management Center",
      period: "2023",
      type: "Work",
      hue: 0,
      role: "Inventory Control Intern",
      tools: ["SAP MM/SD", "Excel", "Power BI"],
      result: { value: "-8.8%", label: "logistics cost of the process" },
      problem:
        "Urgent spare-part orders were held as back-orders while stock sat in other warehouses, and releasing them across locations was costly.",
      approach:
        "Analysed inventory and back-order data from SAP, mapped the flow between storage locations and proposed a new distribution network for cross-warehouse releases.",
      outcome:
        "The proposed network cut the logistics cost of the back-order release process by 8.8%. TODO: Was it implemented? How many parts/orders per month?",
      recommendations: [
        "Route cross-warehouse releases through the proposed network instead of ad-hoc transfers.",
        "Track back-order age and release cost as standing KPIs in the weekly report."
      ],
      reflection:
        "Small routing decisions add up: most of the saving came from reorganising flows that people had stopped questioning.",
      next: ["TODO: what you would do next, e.g. safety stock review per location"]
    },
    {
      id: "forecasting",
      title: "Forecasting methods for anticipatory shipping",
      org: "TU Darmstadt · Master's project",
      period: "2025",
      type: "Academic",
      hue: 1,
      role: "TODO: solo or team role",
      tools: ["TODO: Python / Excel"],
      result: { value: "TODO: X%", label: "TODO: accuracy gain of best method" },
      problem:
        "Anticipatory shipping only pays off if retailers can predict demand before the order is placed. Which forecasting method is accurate enough?",
      approach:
        "Compared several forecasting methods on retail demand data. TODO: methods (e.g. ARIMA, exponential smoothing, ML), dataset size, error metrics (MAPE/RMSE).",
      outcome: "TODO: Which method performed best, by how much, and what it means for shipping decisions.",
      recommendations: ["TODO"],
      reflection: "TODO",
      next: ["TODO"]
    },
    {
      id: "binding-tape",
      title: "Material optimization on critical operations",
      org: "Crystal Martin Vietnam · Crystal International Group",
      period: "2023–2024",
      type: "Work",
      hue: 2,
      role: "Management Trainee, project lead",
      tools: ["Industrial Engineering", "Time study", "5S"],
      result: { value: "-21%", label: "standard allowed minutes" },
      problem:
        "Binding-tape usage on critical sewing operations was inefficient, slowing output and adding material cost.",
      approach:
        "Studied the operations on the floor, re-engineered how binding tape was used and standardised the new method. TODO: method used (time study, trials).",
      outcome:
        "Reduced the standard allowed minutes (SAM) of critical operations by 21%. TODO: effect on output or cost.",
      recommendations: ["Roll the standardised method out to similar operations on other lines."],
      reflection: "Operators knew where the waste was; the project worked because the fix was designed with them, not for them.",
      next: ["TODO"]
    },
    {
      id: "product-launch",
      title: "Launching a new financial product end to end",
      org: "VietinBank Germany Branch",
      period: "2025",
      type: "Work",
      hue: 3,
      role: "Working Student, product lead",
      tools: ["HubSpot CRM", "Excel", "Jira / Asana"],
      result: { value: "New", label: "recurring revenue stream" },
      problem:
        "The bank wanted a new solution for its customer segment but had no validated demand, partner setup or launch process.",
      approach:
        "Ran demand and feasibility analysis, sourced and evaluated external partners, aligned Compliance, Operations and IT, then piloted before launch.",
      outcome:
        "Launched to market and established a new, sustainable revenue stream. TODO: customers or timeline you can share publicly.",
      recommendations: ["Keep a single owner across partner, compliance and IT workstreams for future launches."],
      reflection: "A launch is a supply chain of decisions: every hand-off between teams is where delays hide.",
      next: ["TODO"]
    },
    {
      id: "outsourcing",
      title: "Outsourcing evaluation project",
      org: "VietinBank Germany Branch",
      period: "2026 · ongoing",
      type: "Work",
      hue: 4,
      role: "TODO: your role",
      tools: ["TODO: tools"],
      result: { value: "Ongoing", label: "make-or-buy & vendor analysis" },
      problem: "TODO: what is being considered for outsourcing and why (keep it general, no confidential details).",
      approach: "TODO: how options and providers are evaluated (criteria, cost comparison, risk).",
      outcome: "TODO: status or first results you can share.",
      recommendations: ["TODO"],
      reflection: "TODO",
      next: ["TODO"]
    },
    {
      id: "queuing",
      title: "Queuing theory applied to order picking",
      org: "TU Darmstadt · Master's project",
      period: "2025",
      type: "Academic",
      hue: 5,
      role: "TODO: solo or team role",
      tools: ["TODO: tools"],
      result: { value: "TODO", label: "TODO: key result" },
      problem: "Order picking is the most labour-intensive warehouse process. Where do waiting times build up and how many pickers are needed?",
      approach: "Modelled the picking system as a queuing network. TODO: model type, parameters, simulation or analytical.",
      outcome: "TODO: findings (utilisation, waiting time, optimal capacity).",
      recommendations: ["TODO"],
      reflection: "TODO",
      next: ["TODO"]
    },
    {
      id: "quick-changeover",
      title: "Quick changeover and problem escalation",
      org: "Crystal Martin Vietnam",
      period: "2023–2024",
      type: "Work",
      hue: 1,
      role: "Management Trainee",
      tools: ["SMED", "Process mapping"],
      result: { value: "TODO", label: "TODO: changeover time saved" },
      problem: "Line changeovers and unclear escalation paths caused avoidable downtime.",
      approach: "Measured the effectiveness of quick-changeover activities and designed a new problem escalation map for the floor.",
      outcome: "TODO: what improved after the new escalation map.",
      recommendations: ["TODO"],
      reflection: "TODO",
      next: ["TODO"]
    },
    {
      id: "ai-risk",
      title: "AI support in project risk management",
      org: "TU Darmstadt · Master's project",
      period: "2025",
      type: "Academic",
      hue: 3,
      role: "TODO",
      tools: ["TODO: tools"],
      result: { value: "AI", label: "applied to risk identification" },
      problem: "Project risks are often spotted too late. How can AI tools support identification and assessment?",
      approach: "TODO: literature review, framework or prototype?",
      outcome: "TODO: main findings.",
      recommendations: ["TODO"],
      reflection: "TODO",
      next: ["TODO"]
    },
    {
      id: "digital-workshop",
      title: "Digitalization workshop for daily operations",
      org: "Crystal Martin Vietnam",
      period: "2024",
      type: "Work",
      hue: 2,
      role: "Workshop designer & host",
      tools: ["Microsoft 365", "Automation"],
      result: { value: "TODO", label: "TODO: participants" },
      problem: "Many daily reporting tasks were manual and repetitive.",
      approach: "Designed and ran an introductory workshop on automating everyday work with the Microsoft ecosystem. TODO: tools shown.",
      outcome: "TODO: participants and what they automated.",
      recommendations: ["TODO"],
      reflection: "TODO",
      next: ["TODO"]
    }
  ],

  /* ---------- Skills (tabs) ---------- */
  skills: {
    software: {
      label: "Software",
      items: ["SAP (MM, SD)", "Power BI", "Excel", "Python (basic)", "AI tools", "FastReactPlan", "HubSpot CRM", "Jira", "Asana", "MS Project", "PowerPoint", "Adobe Illustrator (basic)"]
    },
    expertise: {
      label: "Expertise",
      items: ["Inventory control", "Demand forecasting", "Back-order management", "Production & capacity planning", "Process optimization", "Data analysis & KPI reporting", "Supplier & partner management", "Product launch", "5S & industrial engineering", "Stakeholder management"]
    },
    languages: {
      label: "Languages",
      items: ["Vietnamese · Native", "English · Professional (IELTS 7.5)", "German · B1+, daily at work"]
    }
  },

  /* ---------- Experience ---------- */
  experience: [
    {
      role: "Working Student, Retail Banking",
      org: "VietinBank Germany Branch",
      place: "Frankfurt am Main",
      period: "Dec 2024 – today",
      points: [
        "Led a new product from concept and feasibility analysis to market launch.",
        "Sourced, evaluated and managed strategic partners.",
        "Reports on market trends and customer data for cost and growth decisions.",
        "First contact between Compliance, Operations, IT and external partners."
      ]
    },
    {
      role: "Production Associate, Management Trainee Program",
      org: "Crystal Martin Vietnam · Crystal International Group",
      place: "Vietnam",
      period: "Jun 2023 – May 2024",
      points: [
        "Rotations across procurement, merchandising, production planning, warehousing and QA/QC.",
        "Production planning, layout evaluation and capacity optimisation.",
        "Managed daily on-site production against output and quality targets.",
        "Introduced 5S standards on the floor."
      ]
    },
    {
      role: "Inventory Control Intern",
      org: "Honda Vietnam · Part Supply Chain Management Center",
      place: "Vietnam",
      period: "Feb 2023 – Jun 2023",
      points: [
        "Analysed inventory data and allocated goods across storage locations in SAP.",
        "Daily inventory and weekly/monthly back-order reports in PowerPoint and Power BI.",
        "Standardised training on inventory and back-order control for newcomers."
      ]
    }
  ],

  education: [
    { degree: "MSc Logistics & Supply Chain Management", org: "Technische Universität Darmstadt", period: "Oct 2024 – Dec 2026", note: "Thesis: TODO: topic" },
    { degree: "BA International Business", org: "Foreign Trade University, Vietnam", period: "2019 – 2023", note: "FIATA Higher Diploma in Supply Chain Management" }
  ]
};
