import { html } from "https://unpkg.com/lit-html@3.3.3?module";
import { mount } from "../utils/dom.js";
import { RESUME_URL } from "../constants/urls.js";
import { t } from "../i18n/i18n.js";

const FLOATING_BADGES = [
  { label: "Python", icon: "fa-brands fa-python", pos: "badge-1" },
  { label: "PyTorch", icon: "fa-solid fa-fire", pos: "badge-2" },
  { label: "Computer Vision", icon: "fa-solid fa-eye", pos: "badge-3" },
  { label: "LLMs & RAG", icon: "fa-solid fa-robot", pos: "badge-4" },
  { label: "FastAPI", icon: "fa-solid fa-bolt", pos: "badge-5" },
];

const badgeTemplate = (badge) => html`
  <div class="hero-badge glass ${badge.pos}" aria-hidden="true">
    <i class="${badge.icon}" aria-hidden="true"></i>
    <span>${badge.label}</span>
  </div>
`;

const heroTemplate = () => html`
  <div class="hero-bg" aria-hidden="true">
    <div class="hero-mesh"></div>
    <div class="hero-blob hero-blob-1"></div>
    <div class="hero-blob hero-blob-2"></div>
    <div class="hero-blob hero-blob-3"></div>
  </div>

  <div class="container hero-inner">
    <div class="hero-copy">
      <p class="hero-eyebrow" data-reveal>
        <span class="hero-status-dot"></span>
        ${t("hero.eyebrow")}
      </p>
      <h1 class="hero-title" data-reveal>
        Anna KAPANDE
      </h1>
      <p class="hero-role gradient-text-animated" data-reveal>${t("hero.role")}</p>
      <p class="hero-description" data-reveal>
        <b>${t("hero.description")}</b>
      </p>
      <div class="hero-cta-row" data-reveal>
        <a
          class="btn btn-primary magnetic ripple"
          href="${RESUME_URL}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-solid fa-file-arrow-down" aria-hidden="true"></i>
          ${t("hero.resume")}
        </a>
        <a class="btn btn-secondary magnetic ripple" href="#experience">
          ${t("hero.work")}
        </a>
        <a class="btn btn-ghost underline-link magnetic" href="#contact">
          ${t("hero.contact")}
          <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
      <p class="hero-resume-updated" data-reveal>${t("hero.updated")}</p>
    </div>

    <div class="hero-visual" data-reveal>
      <div class="hero-orbit">
        <div class="hero-orbit-core glass">
          <i class="fa-solid fa-code" aria-hidden="true"></i>
        </div>
        ${FLOATING_BADGES.map((badge) => badgeTemplate(badge))}
      </div>
    </div>
  </div>

  <a class="hero-scroll-cue underline-link" href="#about" aria-label="${t("hero.scrollLabel")}">
    <span>${t("hero.scroll")}</span>
    <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
  </a>
`;

export function mountHero() {
  return mount("hero", heroTemplate());
}
