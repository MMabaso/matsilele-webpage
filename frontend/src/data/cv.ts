export const CV_URL: string | null = "/Matsilele_Mabaso_CV.pdf";
export const EMAIL = "matsilele.aubrey@gmail.com";

export const experience = [
  {
    role: "Senior Data Scientist", org: "Hulamin, Pietermaritzburg", period: "Nov 2024 to present",
    points: [
      "Build and deploy production ML applications for manufacturing, from model to API, container, CI/CD and Azure (ACR and AKS) deployment.",
      "Develop PySpark and Databricks pipelines, and serve models through Django REST APIs to React/TypeScript front ends.",
      "Lead cross-functional ML initiatives and mentor analysts and engineers.",
    ],
  },
  {
    role: "Data Scientist", org: "Sasol, Sandton", period: "Jan 2022 to Oct 2024",
    points: [
      "Led end-to-end predictive modelling projects that improved operational efficiency.",
      "Built ML pipelines for predictive maintenance and process optimisation, with automated monitoring dashboards.",
      "Deployed a time-series forecasting API using Django and React.js.",
    ],
  },
  {
    role: "Machine Learning Engineer", org: "Consumer Profile Bureau, Bryanston", period: "Nov 2019 to Dec 2021",
    points: [
      "Developed credit scoring and risk models, improving predictive accuracy by 12%.",
      "Automated reporting with R Shiny dashboards, cutting manual reporting by 60%.",
    ],
  },
];

export const earlier =
  "Earlier: applied computer vision research at the CSIR from 2011 to 2019, including my Master's and PhD research, and part-time lecturing in mathematical statistics at Tshwane University of Technology in 2019.";

export const education = [
  ["2022", "Data Engineering", "Explore Data Science Academy"],
  ["2015 to 2019", "Doctor of Electrical Engineering (Computer Vision and Machine Learning)", "University of Johannesburg"],
  ["2012 to 2014", "Master of Electrical Engineering (Image Processing), Distinction", "University of Johannesburg"],
  ["2010", "Honours in Mathematical Statistics, Cum Laude", "University of Limpopo"],
  ["2007 to 2009", "BSc Mathematics and Statistics, Cum Laude", "University of Limpopo"],
];

export const awards = [
  ["2019", "Invited speaker", "Int. Conference on Soft Computing and Machine Learning, Wuhan, China"],
  ["2018", "Best Doctor of Engineering Student", "CSIR, Pretoria"],
  ["2018", "Paper selected for journal publication", "Int. Joint Conference on Biomedical Engineering Systems and Technologies, Madeira"],
  ["2017", "Best paper presentation", "ICAIECES, Madanapalle, India"],
  ["2014", "Best Master of Engineering Student", "CSIR, Pretoria"],
  ["2009", "Best BSc Student", "University of Limpopo"],
];

export const skills: [string, string[]][] = [
  ["Generative AI", ["LLMs", "RAG systems", "Embeddings", "FAISS and ChromaDB", "Semantic search", "Private LLM applications"]],
  ["Machine learning", ["Regression", "Classification", "Clustering", "Deep learning", "NLP", "Predictive analytics"]],
  ["MLOps and DevOps", ["MLflow", "Model deployment and monitoring", "Model governance", "Docker", "Kubernetes (AKS)", "Git, GitHub, GitLab", "GitHub Actions CI/CD"]],
  ["Azure and data platform", ["Azure", "Azure Kubernetes Service", "Azure Container Registry", "Azure Blob Storage", "Databricks", "Apache Spark (PySpark)", "Delta Lake"]],
  ["Programming", ["Python", "SQL", "R", "PyMC", "JavaScript", "TypeScript"]],
  ["Web and APIs", ["Django", "Django REST Framework", "React", "REST APIs", "Streamlit"]],
  ["BI and visualisation", ["Power BI", "Streamlit", "Matplotlib", "Seaborn", "ggplot"]],
  ["Databases", ["PostgreSQL", "MySQL", "MongoDB", "Vector search"]],
];
