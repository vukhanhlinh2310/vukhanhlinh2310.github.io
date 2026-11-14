/*
  ============================================================
  ALL SITE CONTENT LIVES HERE.
  Edit this file to change text, projects or versions.

  Versions (send the matching link per application):
    https://vukhanhlinh2310.github.io/                -> default
    https://vukhanhlinh2310.github.io/?for=analyst    -> Supply Chain / Data Analyst
    https://vukhanhlinh2310.github.io/?for=planner    -> Demand / Spare Parts / Material Planner
    https://vukhanhlinh2310.github.io/?for=trainee    -> Operations / Logistics Trainee

  Preview mode (shows a version switcher + missing-info markers,
  never send this link to recruiters):
    https://vukhanhlinh2310.github.io/?preview=1

  Any text starting with "TODO:" is hidden on the public site
  and only shown (highlighted) in preview mode.
  ============================================================
*/

const SITE = {
  name: "Linh Vu",
  location: "Darmstadt, Germany",
  email: "vklinh231001@gmail.com",
  linkedin: "https://www.linkedin.com/in/linh-vu-khanh-23102001",
  availability: "Available from January 2027",
  degree: "MSc Logistics & Supply Chain Management · TU Darmstadt",

  /* ---------- Versions ---------- */
  profiles: {
    default: {
      label: "General",
      eyebrow: "Supply Chain · Operations · Analytics",
      headline: "I turn messy supply chain data into decisions that save money.",
      summary:
        "MSc graduate in Logistics & Supply Chain Management from TU Darmstadt with hands-on experience at Honda, Crystal International and VietinBank. I combine shop-floor operations know-how with forecasting, data analysis and cross-functional project work.",
      metrics: ["cost", "sam", "launch", "langs"],
      projects: ["honda-network", "forecasting", "binding-tape", "product-launch", "queuing"],
      skills: ["planning", "analytics", "tools", "collab"]
    },
    analyst: {
      label: "Supply Chain Analyst",
      eyebrow: "Supply Chain Analytics",
      headline: "Data-driven supply chain analysis, from raw numbers to clear recommendations.",
      summary:
        "I analyse inventory, demand and cost data to find where a supply chain loses money, and I present the answer in a way decision-makers can act on. Forecasting, KPI reporting and process analysis are where I do my best work.",
      metrics: ["cost", "sam", "reports", "langs"],
      projects: ["honda-network", "forecasting", "product-launch", "queuing", "ai-risk"],
      skills: ["analytics", "tools", "planning", "collab"]
    },
    planner: {
      label: "Planner",
      eyebrow: "Demand & Inventory Planning",
      headline: "Right part, right place, right time, at the lowest possible stock.",
      summary:
        "I started in spare parts inventory control at Honda's Part Supply Chain Management Center, working in SAP on back-orders and cross-warehouse allocation. My master's added forecasting methods; my banking role added supplier and stakeholder management.",
      metrics: ["cost", "reports", "sam", "langs"],
      projects: ["honda-network", "forecasting", "binding-tape", "product-launch", "queuing"],
      skills: ["planning", "tools", "analytics", "collab"]
    },
    trainee: {
      label: "Operations Trainee",
      eyebrow: "Operations · Logistics · Continuous Improvement",
      headline: "Hands-on in operations, structured in improvement, ready for responsibility.",
      summary:
        "I have already completed a management trainee program with rotations across procurement, planning, warehousing and quality. I led shop-floor improvement projects, introduced 5S, and now bring a German master's degree and German work-culture experience.",
      metrics: ["sam", "cost", "rotations", "langs"],
      projects: ["binding-tape", "quick-changeover", "honda-network", "queuing", "digital-workshop"],
      skills: ["ops", "planning", "collab", "tools"]
    }
  },

  /* ---------- Headline numbers ---------- */
  metrics: {
    cost: { value: "8.8%", label: "logistics cost cut in a cross-warehouse back-order process (Honda)" },
    sam: { value: "21%", label: "fewer standard minutes on critical sewing operations (Crystal Martin)" },
    launch: { value: "1", label: "financial product taken from concept to market launch (VietinBank)" },
    reports: { value: "Daily", label: "inventory and back-order reporting in SAP & Power BI (Honda)" },
    rotations: { value: "5", label: "functions rotated through in a management trainee program" },
    langs: { value: "3", label: "working languages: Vietnamese, English (IELTS 7.5), German (B1+)" }
  },

  /* ---------- Case studies ---------- */
  projects: [
    {
      id: "honda-network",
      title: "Redesigning cross-warehouse back-order release",
      org: "Honda Vietnam · Part Supply Chain Management Center",
      period: "2023",
      type: "Work project",
      result: { value: "-8.8%", label: "logistics cost of the process" },
      problem:
        "Urgent spare-part orders were held as back-orders while stock sat in other warehouses, and releasing them across locations was costly.",
      approach:
        "Analysed inventory and back-order data from SAP, mapped the flow between storage locations and proposed a new distribution network for cross-warehouse releases.",
      outcome:
        "The proposed network cut the logistics cost of the back-order release process by 8.8%. TODO: Was it implemented? How many parts/orders per month?",
      tools: ["SAP MM/SD", "Excel", "Power BI"]
    },
    {
      id: "forecasting",
      title: "Forecasting methods for anticipatory shipping",
      org: "TU Darmstadt · Master's project",
      period: "2025",
      type: "Academic project",
      result: { value: "TODO: X%", label: "TODO: accuracy gain of best method" },
      problem:
        "Anticipatory shipping only pays off if retailers can predict demand before the order is placed. Which forecasting method is accurate enough?",
      approach:
        "Compared several forecasting methods on retail demand data. TODO: methods (e.g. ARIMA, exponential smoothing, ML), dataset size, error metrics (MAPE/RMSE).",
      outcome: "TODO: Which method performed best, by how much, and what it means for shipping decisions.",
      tools: ["TODO: Python / Excel"]
    },
    {
      id: "binding-tape",
      title: "Material optimization on critical operations",
      org: "Crystal Martin Vietnam · Crystal International Group",
      period: "2023–2024",
      type: "Work project",
      result: { value: "-21%", label: "standard allowed minutes" },
      problem:
        "Binding-tape usage on critical sewing operations was inefficient, slowing output and adding material cost.",
      approach:
        "Studied the operations on the floor, re-engineered how binding tape was used and standardised the new method. TODO: method used (time study, trials).",
      outcome:
        "Reduced the standard allowed minutes (SAM) of critical operations by 21%. TODO: effect on output or cost.",
      tools: ["Industrial Engineering", "Time study", "5S"]
    },
    {
      id: "product-launch",
      title: "Launching a new financial product end to end",
      org: "VietinBank Germany Branch",
      period: "2025",
      type: "Work project",
      result: { value: "New", label: "recurring revenue stream" },
      problem:
        "The bank wanted a new solution for its customer segment but had no validated demand, partner setup or launch process.",
      approach:
        "Ran demand and feasibility analysis, sourced and evaluated external partners, aligned Compliance, Operations and IT, then piloted before launch.",
      outcome:
        "Launched to market and established a new, sustainable revenue stream. TODO: customers or timeline you can share publicly.",
      tools: ["HubSpot CRM", "Excel", "Jira / Asana"]
    },
    {
      id: "queuing",
      title: "Queuing theory applied to order picking",
      org: "TU Darmstadt · Master's project",
      period: "2025",
      type: "Academic project",
      result: { value: "TODO", label: "TODO: key result" },
      problem: "Order picking is the most labour-intensive warehouse process. Where do waiting times build up and how many pickers are needed?",
      approach: "Modelled the picking system as a queuing network. TODO: model type, parameters, simulation or analytical.",
      outcome: "TODO: findings (utilisation, waiting time, optimal capacity).",
      tools: ["TODO: tools"]
    },
    {
      id: "quick-changeover",
      title: "Quick changeover and problem escalation",
      org: "Crystal Martin Vietnam",
      period: "2023–2024",
      type: "Work project",
      result: { value: "TODO", label: "TODO: changeover time saved" },
      problem: "Line changeovers and unclear escalation paths caused avoidable downtime.",
      approach: "Measured the effectiveness of quick-changeover activities and designed a new problem escalation map for the floor.",
      outcome: "TODO: what improved after the new escalation map.",
      tools: ["SMED", "Process mapping"]
    },
    {
      id: "ai-risk",
      title: "AI support in project risk management",
      org: "TU Darmstadt · Master's project",
      period: "2025",
      type: "Academic project",
      result: { value: "AI", label: "applied to risk identification" },
      problem: "Project risks are often spotted too late. How can AI tools support identification and assessment?",
      approach: "TODO: literature review, framework or prototype?",
      outcome: "TODO: main findings.",
      tools: ["TODO: tools"]
    },
    {
      id: "digital-workshop",
      title: "Digitalization workshop for daily operations",
      org: "Crystal Martin Vietnam",
      period: "2024",
      type: "Work project",
      result: { value: "TODO", label: "TODO: participants" },
      problem: "Many daily reporting tasks were manual and repetitive.",
      approach: "Designed and ran an introductory workshop on automating everyday work with the Microsoft ecosystem. TODO: tools shown.",
      outcome: "TODO: participants and what they automated.",
      tools: ["Microsoft 365", "Automation"]
    }
  ],

  /* ---------- Skills ---------- */
  skills: {
    planning: {
      name: "Planning & Inventory",
      items: ["Inventory control", "Demand forecasting", "Back-order management", "Replenishment", "Production & capacity planning", "Material flow"]
    },
    analytics: {
      name: "Analytics",
      items: ["Data analysis & interpretation", "KPI reporting", "Forecast comparison", "Queuing theory", "Market & customer analysis", "Data visualisation"]
    },
    tools: {
      name: "Systems & Tools",
      items: ["SAP (MM, SD)", "Power BI", "Excel", "Python (basic)", "AI tools", "FastReactPlan", "HubSpot CRM", "Jira · Asana · MS Project"]
    },
    collab: {
      name: "Collaboration",
      items: ["Supplier & partner management", "Stakeholder management", "Cross-functional projects", "Product launch", "Intercultural communication"]
    },
    ops: {
      name: "Operations",
      items: ["Shop-floor management", "5S", "Industrial engineering", "Quick changeover", "Warehousing", "QA / QC"]
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
    {
      degree: "MSc Logistics & Supply Chain Management",
      org: "Technische Universität Darmstadt",
      period: "Oct 2024 – Dec 2026",
      note: "Thesis: TODO: topic"
    },
    {
      degree: "BA International Business",
      org: "Foreign Trade University, Vietnam",
      period: "2019 – 2023",
      note: "FIATA Higher Diploma in Supply Chain Management"
    }
  ],

  languages: [
    { name: "Vietnamese", level: "Native", pct: 100 },
    { name: "English", level: "Professional · IELTS 7.5", pct: 90 },
    { name: "German", level: "B1+ · improving daily at work", pct: 55 }
  ]
};
