import { html } from "https://unpkg.com/lit-html@3.3.3?module";
import { mount } from "../utils/dom.js";
import { data, getLang, t } from "../i18n/i18n.js";
import { techLogo } from "../utils/techLogos.js";

// Display-only grouping layered on top of the flat `skills` list in user-data/data.js
// (kept flat there so the JSON generator tool's multi-select keeps working).
const CATEGORIES = [
  {
    key: "skills.cat.ml",
    icon: "fa-solid fa-chart-line",
    match: ["Régression", "Classification", "Clustering", "Évaluation de modèles", "Fine-tuning"],
  },
  {
    key: "skills.cat.dl",
    icon: "fa-solid fa-brain",
    match: ["PyTorch", "TensorFlow", "Keras", "CNN", "RNN", "LSTM", "Transformers"],
  },
  { key: "skills.cat.genai", icon: "fa-solid fa-robot", match: ["LLMs", "RAG", "LangChain", "LangGraph", "GraphRAG"] },
  {
    key: "skills.cat.data",
    icon: "fa-solid fa-cloud",
    match: ["Python", "SQL", "Git", "FastAPI", "GCP", "CI/CD", "Orchestration"],
  },
  {
    key: "skills.cat.prog",
    icon: "fa-solid fa-database",
    match: ["Kotlin", "Swift", "HTML/CSS", "PHP", "JavaScript", "PostgreSQL", "NoSQL", "Redis", "MariaDB"],
  },
  { key: "skills.cat.pm", icon: "fa-solid fa-list-check", match: ["Agile", "Scrum", "Kanban", "Trello", "GitHub"] },
];

// English display labels for the few skill names that aren't language-neutral.
const SKILL_LABELS_EN = {
  "Régression": "Regression",
  "Évaluation de modèles": "Model evaluation",
};

const skillLabel = (name) => (getLang() === "en" ? SKILL_LABELS_EN[name] ?? name : name);

function groupSkills() {
  const remaining = new Set(data().skills);
  const groups = CATEGORIES.map(({ key, icon, match }) => {
    const items = match.filter((name) => remaining.has(name));
    items.forEach((name) => remaining.delete(name));
    return { category: t(key), icon, items };
  }).filter((group) => group.items.length);

  if (remaining.size) {
    groups.push({ category: t("skills.cat.other"), icon: "fa-solid fa-star", items: [...remaining] });
  }
  return groups;
}

const skillChip = (name) => html`
  <li class="chip skill-chip">
    ${techLogo(name)}
    ${skillLabel(name)}
  </li>
`;

const skillGroup = (group, index) => html`
  <div class="skill-group glass glass-interactive glow-card" data-reveal style="--reveal-index: ${index}">
    <div class="skill-group-head">
      <span class="skill-group-icon"><i class="${group.icon}" aria-hidden="true"></i></span>
      <h3>${group.category}</h3>
    </div>
    <ul class="skill-chip-list">
      ${group.items.map((item) => skillChip(item))}
    </ul>
  </div>
`;

const skillsTemplate = () => html`
  <div class="container">
    <div class="section-heading">
      <p class="section-eyebrow" data-reveal>${t("skills.eyebrow")}</p>
      <h2 class="section-title" id="skills-title" data-reveal>
        ${t("skills.title")}<span class="gradient-text">${t("skills.titleAccent")}</span>
      </h2>
      <p class="section-subtitle" data-reveal>
        ${t("skills.subtitle")}
      </p>
    </div>
    <div class="skill-grid">
      ${groupSkills().map((group, i) => skillGroup(group, i))}
    </div>
  </div>
`;

export function mountSkills() {
  return mount("skills", skillsTemplate());
}
