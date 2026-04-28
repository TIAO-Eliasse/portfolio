export const cvData = {
  name: "Eliasse TIAO",
  title: "M.Sc. in Artificial Intelligence | AI Researcher | Google DeepMind Scholar",
  location: "Cape Town, South Africa",
  phone: "(+27) 063 555 4285",
  email: "eliasse@aims.ac.za",
  linkedin: "https://linkedin.com/in/eliasse-tiao",
  github: "https://github.com/TIAO-Eliasse",
  summary: "M.Sc. student in Artificial Intelligence at AIMS (Stellenbosch University) and trained as a Statistician and Economic Engineer, with research interests in Explainable AI, Generative AI, and machine learning for decision-making systems. Currently work on applying Explainable AI methods to real-world decision-making problems. Co-author of a paper submitted to SemEval-2026 on fine-grained polarization detection using transformer-based large language models. Strong background in artificial intelligence and statistics.",
  
  education: [
    {
      degree: "M.Sc. in Artificial Intelligence",
      institution: "African Institute for Mathematical Sciences (AIMS) / Stellenbosch University",
      location: "South Africa",
      period: "Sep. 2025 – present",
      details: [
        "Relevant Coursework: Explainable AI (XAI), Responsible AI, Natural Language Processing & Large Language Models, Reinforcement Learning, Bayesian Inference, Machine Learning Operations (MLOps), Applied Machine Learning at Scale, Monte Carlo Methods for Machine Learning.",
        "Master's Research Project: Probabilistic Forecasting of Electricity Consumption and Solar PV Production with Explainable Uncertainty Attribution. Supervisors: Dr. Sabrina Amrouche & Amal Nammouchi.",
        "Main methods: Quantile Regression (LightGBM/XGBoost), Conformal Prediction, and SHAP-based explainable uncertainty attribution."
      ]
    },
    {
      degree: "Engineer in Statistics and Economics (ISE)",
      institution: "Sub-Regional Institute of Statistics and Applied Economics (ISSEA-CEMAC)",
      location: "Cameroon",
      period: "Sep. 2022 – Jul. 2025",
      details: [
        "Relevant Coursework: Machine Learning, Algorithms & Programming with Python, Advanced Econometrics, Panel Data Econometrics, Time Series Econometrics, Non-Parametric & Robust Statistics, Stochastic Processes, Survival Analysis (Duration Models), Impact Evaluation of Public Policies, Survey Theory & Practice, Introduction to Big Data & Cloud Computing.",
        "Engineering Thesis: Prediction of SME Survival in Cameroon: A Machine Learning Approach. Methods: Gradient boosting models (XGBoost, CatBoost), Random Survival Forest (C-index = 0.70), and SHAP-based explainability."
      ]
    },
    {
      degree: "CPGE – Mathematics, Physics & Engineering Sciences (MPSI/MP)",
      institution: "Polytechnic School of Ouagadougou (EPO)",
      location: "Burkina Faso",
      period: "Sep. 2020 – Jul. 2022",
      details: [
        "Intensive two-year programme in advanced Mathematics, Physics, and Computer Science preparing for competitive engineering schools."
      ]
    }
  ],

  publications: [
    {
      title: "Label-Wise Optimization with Adaptive Focal Loss for Polarization Manifestation Identification",
      authors: "TIAO, E., EDOU, J.R., GOHOUEDÉ, M.A.L.",
      year: "2026",
      status: "Submitted to SemEval-2026 (ACL Anthology) — Camera-Ready",
      results: "Ranked 6th (Hausa track) and 15th (English track)",
      code: "https://github.com/TIAO-Eliasse/nlp_project"
    }
  ],

  projects: [
    {
      title: "Probabilistic Forecasting of Electricity Consumption and Solar PV Production",
      period: "Jan. 2026 – Jun. 2026",
      institution: "AIMS South Africa",
      details: [
        "Developing a unified probabilistic forecasting framework jointly modeling electricity consumption and solar PV production.",
        "Implementing quantile regression (LightGBM/XGBoost), DeepVAR and conformal prediction for calibrated uncertainty intervals.",
        "Applying SHAP-based uncertainty attribution to identify drivers of forecast uncertainty."
      ]
    },
    {
      title: "NLP Competition: Fine-Grained Polarization Detection in Social Media",
      period: "Jan. 2026 – Mar. 2026",
      institution: "AIMS South Africa",
      details: [
        "Developed a multilingual NLP system for fine-grained identification of polarization manifestations in English and Hausa social media posts.",
        "Designed a One-vs-Rest framework combining transformer-based encoders (RoBERTa, Afro-XLM-R), Adaptive Focal Loss.",
        "Official results: Macro-F1 = 0.464 (English), 0.192 (Hausa); ranked 5th/Hausa, 14th/English."
      ]
    },
    {
      title: "Agentic AI System for Automated Statistical Reporting",
      period: "Dec. 2025",
      type: "Personal Project",
      details: [
        "Developed an end-to-end agentic AI pipeline using LangChain and LLMs to automate generation of structured statistical reports.",
        "Designed prompt engineering strategies and tool-use chains for interpretable, transparent outputs.",
        "Deployed as a Streamlit web application."
      ]
    },
    {
      title: "Predictive Maintenance System for Banking ATM Networks",
      period: "Apr. 2025 – Jun. 2025",
      institution: "Afriland First Bank / ISSEA Partnership",
      details: [
        "Designed an ML-based predictive maintenance framework to anticipate ATM hardware failures.",
        "Benchmarked multiple classifiers (Random Forest, XGBoost, LightGBM, LSTM) for failure prediction.",
        "Developed an availability monitoring dashboard."
      ]
    }
  ],

  experience: [
    {
      role: "Statistician and Economist Engineer (Internship)",
      company: "National Institute of Statistics (NIS)",
      location: "Cameroon",
      period: "Mar. 2025 – Jul. 2025",
      details: [
        "Data Engineering: Designed a longitudinal data pipeline integrating enterprise census and fiscal records (112 monthly waves).",
        "Impact Evaluation: Applied Propensity Score Matching; identified significant programme effects on SME performance (26.3% vs 13.3%).",
        "Survey Statistics: Contributed to MICS7 sampling design and estimated vaccination coverage.",
        "Decision Support Tool: Deployed an interactive Streamlit dashboard for real-time SME risk monitoring."
      ]
    },
    {
      role: "Field Officer / Quantitative Researcher",
      company: "Sub-Regional Institute of Statistics (ISSEA)",
      location: "Cameroon",
      period: "Jun. 2024",
      details: [
        "Supervised field data collection using CAPI tools (CSPro/ODK) for academic research projects.",
        "Conducted data quality control, consistency checks, and post-collection cleaning on survey microdata."
      ]
    }
  ],

  skills: {
    artificialIntelligence: [
      "Explainable AI (SHAP, feature attribution)", "Responsible AI", "Generative AI & LLMs (LangChain, prompt engineering)",
      "Agentic AI", "NLP (RoBERTa, XLM-R, transformers)", "Machine Learning (XGBoost, CatBoost, LightGBM, Random Forest)",
      "Deep Learning (PyTorch, LSTM)", "Uncertainty Quantification (Conformal Prediction, Quantile Regression)", "MLOps"
    ],
    statisticsCausalInference: [
      "Multivariate Analysis (PCA, MCA)", "Bayesian Inference", "Time Series (ARIMA, GARCH)", "Stochastic Processes", "Sampling Theory", "Propensity Score Matching", "Causal Inference"
    ],
    programmingTools: [
      "Python", "R", "SQL", "Stata", "PyTorch", "Streamlit", "LangChain", "Power BI", "ODK/CSPro", "LaTeX", "Excel"
    ],
    languages: [
      "French (Native)", "English (Academic proficiency)"
    ]
  },

  honors: [
    {
      title: "Google DeepMind Scholarship",
      institution: "AIMS / Stellenbosch University",
      period: "Sep. 2025 – present",
      description: "Highly competitive full scholarship awarded for the Master's in Artificial Intelligence at AIMS."
    },
    {
      title: "State Scholarship",
      institution: "Burkina Faso Ministry of Higher Education",
      period: "Sep. 2020 – Jul. 2022",
      description: "Merit-based national scholarship for outstanding academic performance."
    },
    {
      title: "Finalist — IndabaX Cameroon Hackathon",
      period: "Apr. 2025",
      description: "Selected as a finalist for developing an innovative AI solution in the Data Visualization track."
    },
    {
      title: "2nd Prize — Data Visualization Competition",
      institution: "ISSEA",
      period: "Dec. 2024",
      description: "Awarded for best data storytelling and interactive dashboard on Employment Statistics in Africa."
    }
  ],
  
  certifications: [
    "Kaggle Learn Certifications (2024): Machine Learning Explainability (SHAP), Feature Engineering, Time Series Analysis, Intermediate Machine Learning, Intro to Deep Learning, Geospatial Analysis, Data Visualization.",
    "Project Management: Certificate in Management and Project Monitoring (Groupe AFD, 2024)."
  ]
};
