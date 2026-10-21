import { html } from "https://unpkg.com/lit-html@3.3.3?module";
import { mount } from "../utils/dom.js";
import { data, getLang, t } from "../i18n/i18n.js";

function buildStats() {
  const fr = getLang() === "fr";
  return [
    { value: `${data().experience.length}`, label: t("about.stat.experience") },
    { value: fr ? "93,89 %" : "93.89%", label: t("about.stat.accuracy") },
    { value: fr ? "+27,9 pts" : "+27.9 pts", label: t("about.stat.gain") },
    { value: "815", label: t("about.stat.toeic") },
  ];
}

const statCard = (stat) => html`
  <div class="about-stat glass glass-interactive" data-reveal>
    <p class="about-stat-value gradient-text">${stat.value}</p>
    <p class="about-stat-label">${stat.label}</p>
  </div>
`;

const aboutTemplate = () => html`
  <div class="container about-inner">
    <div class="about-copy">
      <p class="section-eyebrow" data-reveal>${t("about.eyebrow")}</p>
      <h2 class="section-title" id="about-title" data-reveal>
        ${t("about.title")}
      </h2>
      <div class="about-bio" data-reveal>
        ${data().bio.map((paragraph) => html`<p>${paragraph}</p>`)}
      </div>
    </div>

    <div class="about-stats">
      ${buildStats().map((stat) => statCard(stat))}
    </div>
  </div>
`;

export function mountAbout() {
  return mount("about", aboutTemplate());
}
