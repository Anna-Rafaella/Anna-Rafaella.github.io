// English overrides for user-data/data.js — only the fields whose text needs translating.
// Anything not exported here (skills, contact) is shared with the French version.

export const bio = [
  "Computer science engineer specialized in Data Science & AI, I design decision-support solutions grounded in statistical analysis, machine learning and deep learning.",
  "I work across data preparation, modeling, evaluation and results delivery with a business-driven, client-focused mindset — from real-time computer vision to LLMs and RAG pipelines.",
  "Outside of code: basketball, table tennis, and plenty of R&B and Gospel.",
];

export const projects = [
  {
    title: "JobRadar — local AI agent for job-offer triage",
    description:
      "Fully local job-watch agent that collects offers every hour (France Travail API over OAuth2, LinkedIn, Indeed, HelloWork and APEC email alerts read over IMAP), deduplicates them across platforms, then ranks them through a cascade: business rules, semantic similarity (bge-m3 embeddings), and a Qwen2.5 7B LLM judge with JSON-constrained output that scores each offer and explains every decision. Resume parsed with PyMuPDF or vision-language OCR (Qwen2.5-VL), React interface, encrypted secrets and end-to-end tests.",
    tags: ["Python", "FastAPI", "React", "SQLite", "Ollama", "LLM", "Embeddings", "OCR"],
    icon: "fa-solid fa-satellite-dish",
  },
  {
    title: "Lacuna Malaria Detection Challenge — Zindi",
    description:
      "Zindi competition (Lacuna Fund, Makerere AI Health Lab, Google): multiclass object detection and classification model identifying malaria parasites (trophozoite stage) and distinguishing infected from uninfected cells in blood slide images, under resource constraints (< 20 h training on a single GPU). As a team (PolyD): ranked 126th of 1,347 participants, 0.58 mAP@0.5 on the private leaderboard — silver medal and certificate.",
    tags: ["Object Detection", "Computer Vision", "Deep Learning", "mAP@IoU 0.5", "Python"],
    icon: "fa-solid fa-microscope",
  },
  {
    title: "Speech Emotion Recognition (RAVDESS)",
    description:
      "Optimized a speech emotion classification pipeline: preprocessing, feature extraction (Librosa), data augmentation and a CNN–BiLSTM model. Gained 27.9 accuracy points (65% → 93.89%) by optimizing data processing and training.",
    tags: ["Deep Learning", "CNN–BiLSTM", "Librosa", "Data augmentation", "Python"],
    icon: "fa-solid fa-microphone-lines",
  },
  {
    title: "Cloud-native distributed computing app",
    description:
      "Containerized microservices architecture (frontend/backend/API) deployed on Kubernetes, with infrastructure provisioned through Terraform, autoscaling and load balancing. Distributed backend using Redis (cache/state) and RabbitMQ (async messaging) to decouple services and scale horizontally.",
    tags: ["Kubernetes", "Terraform", "GCP", "Redis", "RabbitMQ", "Microservices"],
    icon: "fa-solid fa-cloud",
  },
  {
    title: "Polynames — real-time multiplayer game",
    description:
      "Real-time multiplayer web game where each player has to guess their opponent's words, handling both synchronous and asynchronous exchanges between players.",
    tags: ["HTML", "CSS", "JavaScript", "Real-time", "Asynchronous"],
    icon: "fa-solid fa-gamepad",
  },
  {
    title: "Smart home app",
    description:
      "Mobile app to manage and control a connected home: turn lights on and off, open and close doors, and more.",
    tags: ["Kotlin", "Android", "Mobile"],
    icon: "fa-solid fa-house-signal",
  },
];

export const experience = [
  {
    title: "IVECO GROUP",
    duration: "09/2025 – 09/2026",
    subtitle: "AI Developer Analyst — Work-study · Vénissieux, France",
    details: [
      "Full-stack web application for AI-driven automated ergonomic analysis.",
      "Designed a computer vision pipeline built on pre-trained models (RTMLib Wholebody, MediaPipe Pose/Segmentation) combined with DeepLab for silhouette isolation: automated joint extraction and joint-angle computation through vector geometry on images and video streams.",
      "Built an ergonomic assessment engine comparing each angle against configurable per-joint thresholds (optimal / comfortable / not recommended), with contextual recommendations, real-time delivery through a FastAPI/SQLAlchemy API and a React interface, and automated PDF report export (ReportLab).",
    ],
    tags: ["Computer Vision", "MediaPipe", "DeepLab", "FastAPI", "SQLAlchemy", "React", "ReportLab"],
    icon: "truck",
  },
  {
    title: "HOME SOCCER",
    duration: "06/2025 – 08/2025",
    subtitle: "AI Developer — Internship · Dijon, France",
    details: [
      "Detection and tracking pipeline to analyze a mini soccer game with real-time automated scoring.",
      "Real-time Python video pipeline with a multi-threaded architecture (capture, inference, post-processing), fine-tuning YOLOv8 on a custom dataset (augmentation, scale, lighting and occlusion variation) and tuning confidence thresholds to reduce false positives.",
      "Integrated multi-object tracking (SORT/ByteTrack) and a homography to project image coordinates onto the pitch plane, enabling game-event computation (score, possession, zone interactions).",
    ],
    tags: ["Python", "YOLOv8", "SORT", "ByteTrack", "Homography", "Multi-threading"],
    icon: "futbol",
  },
  {
    title: "WISSBUY",
    duration: "07/2022 – 08/2022",
    subtitle: "Web Development and Data Analytics — Internship · Douala, Cameroon",
    details: [
      "Six-week internship at an e-commerce company.",
      "Fixed bugs on the website and added plugins to optimize its performance and features.",
      "Tracked the site's traffic statistics and analyzed its monitoring KPIs.",
    ],
    tags: ["WordPress", "CMS", "Google Analytics", "Databases", "Problem solving"],
    icon: "cart-shopping",
  },
];

export const education = [
  {
    title: "Engineering School — Software & AI major",
    duration: "09/2023 – 09/2026",
    subtitle: "Polytech Dijon · Dijon, France",
    details: [
      "Business intelligence, Statistics, Big Data, Artificial intelligence, CI/CD, Knowledge modeling.",
    ],
    tags: [],
    icon: "graduation-cap",
  },
  {
    title: "Preparatory Classes — Math/Physics track",
    duration: "09/2021 – 06/2023",
    subtitle: "IUC — Institut Universitaire de la Côte · Douala, Cameroon",
    details: ["Engineering science, Programming, Computer-aided design."],
    tags: [],
    icon: "school",
  },
];

export const adventures = [
  {
    title: "Certifications",
    icon: "fa-solid fa-certificate",
    accent: "gold",
    items: [
      {
        name: "CCNA I — Introduction to Cybersecurity",
        height: "Cybersecurity",
      },
      {
        name: "Endpoint Security",
        height: "Cybersecurity",
      },
      {
        name: "Statistics for Data Science and Business Analysis",
        height: "Udemy",
        duration: "365 Careers",
      },
      {
        name: "Data Analytics With AI",
        height: "Sololearn",
        duration: "Apr 2025",
      },
      {
        name: "Web Development — HTML5, CSS3, JavaScript",
        height: "Sololearn",
      },
      {
        name: "Lacuna Malaria Detection Challenge — silver medal",
        height: "Zindi",
        duration: "2024",
      },
    ],
  },
  {
    title: "Languages & Strengths",
    icon: "fa-solid fa-language",
    accent: "green",
    items: [
      {
        name: "French",
        height: "Native",
      },
      {
        name: "English",
        height: "Fluent",
        duration: "TOEIC 815",
      },
      {
        name: "Adaptability",
        height: "Strength",
      },
      {
        name: "Proactive, solution-oriented",
        height: "Strength",
      },
      {
        name: "Team spirit & leadership",
        height: "Strength",
      },
    ],
  },
  {
    title: "Volunteering & Hobbies",
    icon: "fa-solid fa-hand-holding-heart",
    accent: "pink",
    items: [
      {
        name: "Les Restos du Cœur — assistant, in-kind fundraising",
        height: "Volunteering",
        duration: "Mar 2024",
      },
      {
        name: "Basketball, table tennis",
        height: "Sport",
      },
      {
        name: "R&B, Gospel",
        height: "Music",
      },
    ],
  },
];

export const footer = [
  {
    label: "copyright-text",
    data: ["Anna Rafaella KAPANDE DENG · Data Science & AI Engineer"],
  },
];
