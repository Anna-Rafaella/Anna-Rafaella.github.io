import { html } from "https://unpkg.com/lit-html@3.3.3?module";
import { mount } from "../utils/dom.js";
import { data, t } from "../i18n/i18n.js";
import { techLogo } from "../utils/techLogos.js";

const projectCard = (item, index) => html`
  <article class="project-card glass glass-interactive glow-card tilt" data-reveal style="--reveal-index: ${index}">
    <div class="project-card-head">
      <span class="project-icon">
        <i class="${item.icon}" aria-hidden="true"></i>
      </span>
      <h3>${item.title}</h3>
    </div>
    <p class="project-description">${item.description}</p>
    <div class="project-tags">
      ${item.tags.map((tag) => html`<span class="chip">${techLogo(tag)}${tag}</span>`)}
    </div>
    <div class="project-links">
      ${item.demo
        ? html`<a class="btn btn-primary magnetic ripple" href="${item.demo}" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> ${t("projects.demo")}
          </a>`
        : ""}
      ${item.repo
        ? html`<a class="btn btn-secondary magnetic ripple" href="${item.repo}" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github" aria-hidden="true"></i> ${t("projects.source")}
          </a>`
        : ""}
    </div>
  </article>
`;

const projectsTemplate = () => html`
  <div class="container">
    <div class="section-heading">
      <p class="section-eyebrow" data-reveal>${t("projects.eyebrow")}</p>
      <h2 class="section-title" id="projects-title" data-reveal>
        ${t("projects.title")}<span class="gradient-text">${t("projects.titleAccent")}</span>
      </h2>
      <p class="section-subtitle" data-reveal>${t("projects.subtitle")}</p>
    </div>
    <div class="project-grid">
      ${data().projects.map((item, i) => projectCard(item, i))}
    </div>
  </div>
`;

export function mountProjects() {
  return mount("projects", projectsTemplate());
}
