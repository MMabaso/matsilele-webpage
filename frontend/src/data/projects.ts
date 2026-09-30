export interface Project {
  title: string;
  company: string;
  category: string;
  description: string;
  result?: string;
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: "Production ML deployment platform",
    company: "Hulamin",
    category: "MLOps",
    description:
      "An end-to-end path from trained model to hosted application: a Django REST Framework backend, a React/TypeScript front end, Docker containers and GitHub Actions CI/CD. Images go through Azure Container Registry to Azure Kubernetes Service, and trained .pkl artifacts are stored in Azure Blob Storage for inference.",
    tags: ["Django REST", "React", "TypeScript", "Docker", "GitHub Actions", "Azure ACR", "AKS", "Blob Storage"],
  },
  {
    title: "GenAI chatbot with RAG for knowledge retrieval",
    company: "Hulamin",
    category: "Generative AI",
    description:
      "An enterprise chatbot that pairs a private LLM with retrieval, so staff can ask plain-language questions about engineering manuals, SOPs and reports. Document embeddings and a vector database power the semantic search.",
    result: "Reduced support requests by 40%",
    tags: ["LLM", "RAG", "FAISS", "ChromaDB", "Embeddings"],
  },
  {
    title: "Product quality prediction",
    company: "Hulamin",
    category: "Machine learning",
    description:
      "A regression model that predicts product quality from process parameters and shows which variables drive yield consistency, so operators can adjust early instead of after the fact.",
    tags: ["Regression", "Process data", "Manufacturing"],
  },
  {
    title: "Time series forecasting API",
    company: "Sasol",
    category: "Forecasting",
    description:
      "A forecasting service that combines ARIMA with machine learning models, delivered as a Django API with a React front end, to improve demand planning.",
    result: "Cut inventory variance by 18%",
    tags: ["ARIMA", "Machine learning", "Django", "React"],
  },
  {
    title: "Predictive dialling algorithm",
    company: "Consumer Profile Bureau",
    category: "Optimisation",
    description:
      "A model that matches agent availability to call volume in real time, making contact centre calls flow more efficiently.",
    result: "Reduced agent idle time by 25%",
    tags: ["Predictive modelling", "Real-time"],
  },
];
