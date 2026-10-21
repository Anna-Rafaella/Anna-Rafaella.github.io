export const bio = [
  "Ingénieure en informatique spécialisée en Data Science & IA, je conçois des solutions d'aide à la décision fondées sur l'analyse statistique, le machine learning et le deep learning.",
  "J'interviens sur la préparation des données, la modélisation, l'évaluation et la restitution des résultats dans une logique orientée métier et accompagnement client, allant de la vision par ordinateur temps réel aux LLMs et pipelines RAG.",
  "En dehors du code : basketball, tennis de table, et beaucoup de R&B et de Gospel.",
];

export const skills = [
  "Régression",
  "Classification",
  "Clustering",
  "Évaluation de modèles",
  "Fine-tuning",
  "PyTorch",
  "TensorFlow",
  "Keras",
  "CNN",
  "RNN",
  "LSTM",
  "Transformers",
  "LLMs",
  "RAG",
  "LangChain",
  "LangGraph",
  "GraphRAG",
  "Python",
  "SQL",
  "Git",
  "FastAPI",
  "GCP",
  "CI/CD",
  "Orchestration",
  "Kotlin",
  "Swift",
  "HTML/CSS",
  "PHP",
  "JavaScript",
  "PostgreSQL",
  "NoSQL",
  "Redis",
  "MariaDB",
  "Agile",
  "Scrum",
  "Kanban",
  "Trello",
  "GitHub",
];

export const projects = [
  {
    title: "JobRadar — agent IA local de tri d'offres d'emploi",
    description:
      "Agent de veille emploi 100 % local qui collecte chaque heure les offres (API France Travail en OAuth2, alertes e-mail LinkedIn, Indeed, HelloWork et APEC lues en IMAP), les dédoublonne entre plateformes puis les trie en cascade : règles métier, similarité sémantique (embeddings bge-m3), LLM juge Qwen2.5 7B à sortie JSON contrainte qui note chaque offre et justifie chaque décision. CV lu par PyMuPDF ou OCR vision-langage (Qwen2.5-VL), interface React, secrets chiffrés et tests de bout en bout.",
    tags: ["Python", "FastAPI", "React", "SQLite", "Ollama", "LLM", "Embeddings", "OCR"],
    icon: "fa-solid fa-satellite-dish",
  },
  {
    title: "Lacuna Malaria Detection Challenge — Zindi",
    description:
      "Compétition Zindi (Lacuna Fund, Makerere AI Health Lab, Google) : modèle de détection et de classification multiclasse d'objets identifiant les parasites du paludisme (stade trophozoïte) et distinguant cellules infectées et non infectées sur des images de frottis sanguins, sous contrainte de ressources (entraînement < 20 h sur un seul GPU). En équipe (PolyD) : 126e sur 1 347 inscrits, mAP@0,5 de 0,58 au classement privé — médaille d'argent et certificat.",
    tags: ["Object Detection", "Computer Vision", "Deep Learning", "mAP@IoU 0.5", "Python"],
    icon: "fa-solid fa-microscope",
  },
  {
    title: "Reconnaissance des émotions vocales (RAVDESS)",
    description:
      "Optimisation d'un pipeline de classification des émotions vocales : prétraitement, extraction de caractéristiques (Librosa), data augmentation et modèle CNN–BiLSTM. Gain de 27,9 points d'accuracy (65 % → 93,89 %) grâce à l'optimisation du traitement des données et de l'entraînement.",
    tags: ["Deep Learning", "CNN–BiLSTM", "Librosa", "Data augmentation", "Python"],
    icon: "fa-solid fa-microphone-lines",
  },
  {
    title: "Application de calcul distribuée cloud-native",
    description:
      "Architecture microservices (frontend/backend/API) conteneurisée et déployée sur Kubernetes, infrastructure provisionnée via Terraform, avec autoscaling et load balancing. Backend distribué intégrant Redis (cache/état) et RabbitMQ (asynchrone) pour le découplage des services et la scalabilité horizontale.",
    tags: ["Kubernetes", "Terraform", "GCP", "Redis", "RabbitMQ", "Microservices"],
    icon: "fa-solid fa-cloud",
  },
  {
    title: "Polynames — jeu multijoueur en temps réel",
    description:
      "Application web de jeu multijoueur en temps réel où chaque joueur doit deviner les mots de son adversaire, avec gestion des échanges synchrones et asynchrones entre les joueurs.",
    tags: ["HTML", "CSS", "JavaScript", "Temps réel", "Asynchrone"],
    icon: "fa-solid fa-gamepad",
  },
  {
    title: "Application de domotique",
    description:
      "Application mobile de gestion et de contrôle d'une maison connectée : allumer et éteindre les lumières, ouvrir et fermer les portes, etc.",
    tags: ["Kotlin", "Android", "Mobile"],
    icon: "fa-solid fa-house-signal",
  },
];

export const experience = [
  {
    title: "IVECO GROUP",
    duration: "09/2025 – 09/2026",
    subtitle: "Analyste Développeuse IA — Alternance · Vénissieux, France",
    details: [
      "Application web fullstack d'analyse ergonomique automatisée par IA.",
      "Conception d'un pipeline de vision par ordinateur exploitant des modèles pré-entraînés (RTMLib Wholebody, MediaPipe Pose/Segmentation) couplé à DeepLab pour l'isolation de silhouette : extraction automatisée des articulations et calcul d'angles articulaires par géométrie vectorielle sur images et flux vidéo.",
      "Développement d'un moteur d'évaluation ergonomique comparant chaque angle à des seuils paramétrables par articulation (optimal / confort / non recommandé), avec recommandations contextuelles, restitution temps réel via une API FastAPI/SQLAlchemy et une interface React, et export automatisé de rapports PDF (ReportLab).",
    ],
    tags: ["Computer Vision", "MediaPipe", "DeepLab", "FastAPI", "SQLAlchemy", "React", "ReportLab"],
    icon: "truck",
  },
  {
    title: "HOME SOCCER",
    duration: "06/2025 – 08/2025",
    subtitle: "Développeuse IA — Stage · Dijon, France",
    details: [
      "Pipeline de détection et de tracking pour l'analyse d'un mini-jeu de soccer avec scoring automatisé en temps réel.",
      "Pipeline vidéo temps réel en Python à architecture multi-thread (capture, inférence, post-processing), avec fine-tuning de YOLOv8 sur dataset custom (augmentation, variation d'échelle, luminosité, occlusion) et optimisation des seuils de confiance pour réduire les faux positifs.",
      "Intégration d'un tracking multi-objets (SORT/ByteTrack) et d'une homographie pour projeter les coordonnées image vers le plan terrain, permettant le calcul d'événements de jeu (score, possession, interactions avec les zones).",
    ],
    tags: ["Python", "YOLOv8", "SORT", "ByteTrack", "Homographie", "Multi-threading"],
    icon: "futbol",
  },
  {
    title: "WISSBUY",
    duration: "07/2022 – 08/2022",
    subtitle: "Datat Analytics • Développement Web — Stage · Douala, Cameroun",
    details: [
      "Stage d'un mois et demi au sein d'une entreprise de e-commerce.",
      "Correction de bugs sur le site et ajout de plugins pour optimiser ses performances et ses fonctionnalités.",
      "Suivi des statistiques de fréquentation du site et analyse des indicateurs de suivi.",
    ],
    tags: ["WordPress", "CMS", "Google Analytics", "Bases de données", "Problem solving"],
    icon: "cart-shopping",
  },
];

export const education = [
  {
    title: "École d'ingénieurs — spécialité logicielle et IA",
    duration: "09/2023 – 09/2026",
    subtitle: "Polytech Dijon · Dijon, France",
    details: [
      "Informatique décisionnelle, Statistique, Big Data, Intelligence artificielle, CI/CD, Modélisation de la connaissance.",
    ],
    tags: [],
    icon: "graduation-cap",
  },
  {
    title: "Classes Préparatoires — option maths/physique",
    duration: "09/2021 – 06/2023",
    subtitle: "IUC — Institut Universitaire de la Côte · Douala, Cameroun",
    details: ["Science de l'ingénieur, Programmation, Conception Assistée par Ordinateur."],
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
        name: "CCNA I — Introduction à la cybersécurité",
        height: "Cybersécurité",
      },
      {
        name: "Sécurité des terminaux",
        height: "Cybersécurité",
      },
      {
        name: "Statistics for Data Science and Business Analysis",
        height: "Udemy",
        duration: "365 Careers",
      },
      {
        name: "Data Analytics With AI",
        height: "Sololearn",
        duration: "Avril 2025",
      },
      {
        name: "Développement web — HTML5, CSS3, JavaScript",
        height: "Sololearn",
      },
      {
        name: "Lacuna Malaria Detection Challenge — médaille d'argent",
        height: "Zindi",
        duration: "2024",
      },
    ],
  },
  {
    title: "Langues & Atouts",
    icon: "fa-solid fa-language",
    accent: "green",
    items: [
      {
        name: "Français",
        height: "Langue maternelle",
      },
      {
        name: "Anglais",
        height: "Courant",
        duration: "TOEIC 815",
      },
      {
        name: "Capacité d'adaptation",
        height: "Atout",
      },
      {
        name: "Force de proposition",
        height: "Atout",
      },
      {
        name: "Esprit d'équipe et de leadership",
        height: "Atout",
      },
    ],
  },
  {
    title: "Bénévolat & Loisirs",
    icon: "fa-solid fa-hand-holding-heart",
    accent: "pink",
    items: [
      {
        name: "Les Restos du Cœur — assistante, collecte de fonds en nature",
        height: "Bénévolat",
        duration: "Mars 2024",
      },
      {
        name: "Basketball, tennis de table",
        height: "Sport",
      },
      {
        name: "R&B, Gospel",
        height: "Musique",
      },
    ],
  },
];

export const contact = [
  {
    label: "kapandeanna8@gmail.com",
    link: "mailto:kapandeanna8@gmail.com",
    icon: "fa-solid fa-envelope",
  },
  {
    label: "+33 7 75 95 09 15",
    link: "tel:+33775950915",
    icon: "fa-solid fa-phone",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/kapande-anna-341b7a29a/",
    icon: "fa-brands fa-linkedin",
  },
  {
    label: "GitHub",
    link: "https://github.com/Anna-Rafaella",
    icon: "fa-brands fa-github",
  },
];

export const footer = [
  {
    label: "copyright-text",
    data: ["Anna Rafaella KAPANDE DENG · Ingénieure Data Science & IA"],
  },
];
