import { html } from "https://unpkg.com/lit-html@3.3.3?module";

// Logo per technology/concept name, shared by the skill chips and the project tags.
// Devicon brand logos ("colored" = official brand color) where one exists, Font Awesome
// pictograms for concepts. GitHub and MariaDB brand colors are near-black, so they inherit
// the chip text color instead to stay readable in dark mode. FR and EN tag spellings both map.
export const TECH_LOGOS = {
  // ML & statistics
  "Régression": "fa-solid fa-chart-line",
  Classification: "fa-solid fa-tags",
  Clustering: "fa-solid fa-circle-nodes",
  "Évaluation de modèles": "fa-solid fa-gauge-high",
  "Fine-tuning": "fa-solid fa-sliders",
  "Deep Learning": "fa-solid fa-brain",
  "Object Detection": "fa-solid fa-crosshairs",
  "Computer Vision": "fa-solid fa-eye",
  "mAP@IoU 0.5": "fa-solid fa-bullseye",
  "CNN–BiLSTM": "fa-solid fa-network-wired",
  Librosa: "fa-solid fa-wave-square",
  "Data augmentation": "fa-solid fa-clone",

  // Deep learning
  PyTorch: "devicon-pytorch-original colored",
  TensorFlow: "devicon-tensorflow-original colored",
  Keras: "devicon-keras-plain colored",
  CNN: "fa-solid fa-table-cells",
  RNN: "fa-solid fa-rotate",
  LSTM: "fa-solid fa-memory",
  Transformers: "fa-solid fa-shuffle",

  // Generative AI
  LLM: "fa-solid fa-comments",
  LLMs: "fa-solid fa-comments",
  RAG: "fa-solid fa-magnifying-glass-chart",
  LangChain: "fa-solid fa-link",
  LangGraph: "fa-solid fa-diagram-project",
  GraphRAG: "fa-solid fa-share-nodes",
  Ollama: "fa-solid fa-microchip",
  Embeddings: "fa-solid fa-vector-square",
  OCR: "fa-solid fa-file-lines",

  // Data engineering / cloud
  Python: "devicon-python-plain colored",
  SQL: "fa-solid fa-database",
  Git: "devicon-git-plain colored",
  FastAPI: "devicon-fastapi-plain colored",
  GCP: "devicon-googlecloud-plain colored",
  "CI/CD": "devicon-githubactions-plain colored",
  Orchestration: "fa-solid fa-gears",
  Kubernetes: "devicon-kubernetes-plain colored",
  Terraform: "devicon-terraform-plain colored",
  RabbitMQ: "devicon-rabbitmq-original colored",
  Microservices: "fa-solid fa-cubes",

  // Programming & databases
  Kotlin: "devicon-kotlin-plain colored",
  Swift: "devicon-swift-plain colored",
  Android: "devicon-android-plain colored",
  Mobile: "fa-solid fa-mobile-screen",
  "HTML/CSS": "devicon-html5-plain colored",
  HTML: "devicon-html5-plain colored",
  CSS: "devicon-css3-plain colored",
  PHP: "devicon-php-plain colored",
  JavaScript: "devicon-javascript-plain colored",
  React: "devicon-react-original colored",
  "Temps réel": "fa-solid fa-bolt",
  "Real-time": "fa-solid fa-bolt",
  Asynchrone: "fa-solid fa-arrows-left-right",
  Asynchronous: "fa-solid fa-arrows-left-right",
  PostgreSQL: "devicon-postgresql-plain colored",
  SQLite: "devicon-sqlite-plain colored",
  NoSQL: "fa-solid fa-layer-group",
  Redis: "devicon-redis-plain colored",
  MariaDB: "devicon-mariadb-original",

  // Project management
  Agile: "fa-solid fa-arrows-spin",
  Scrum: "fa-solid fa-people-group",
  Kanban: "fa-solid fa-table-columns",
  Trello: "devicon-trello-plain colored",
  GitHub: "devicon-github-original",
};

/** Logo icon for a technology name, or nothing when there's no mapping. */
export const techLogo = (name) =>
  TECH_LOGOS[name] ? html`<i class="tech-logo ${TECH_LOGOS[name]}" aria-hidden="true"></i>` : "";
