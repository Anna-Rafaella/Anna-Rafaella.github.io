import { html } from "https://unpkg.com/lit-html@3.3.3?module";
import { mount } from "../utils/dom.js";
import { data, t } from "../i18n/i18n.js";

const adventureItem = (item) => html`
  <li class="adventure-item">
    <div class="adventure-item-top">
      <span class="adventure-name">${item.name}</span>
      ${item.state
        ? html`<span class="adventure-state">
            <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
            ${item.state}
          </span>`
        : ""}
    </div>
    <div class="adventure-meta">
      <span class="chip">${item.height}</span>
      ${item.duration ? html`<span class="chip">${item.duration}</span>` : ""}
      ${item.level ? html`<span class="chip">${item.level}</span>` : ""}
    </div>
  </li>
`;

const adventureGroup = (group, index) => html`
  <article class="adventure-group glass glass-interactive" data-reveal style="--reveal-index: ${index}">
    <div class="adventure-group-head">
      <span class="adventure-group-icon adventure-accent-${group.accent}">
        <i class="${group.icon}" aria-hidden="true"></i>
      </span>
      <div>
        <h3>${group.title}</h3>
        <p>${group.items.length} ${t("adventures.count")}</p>
      </div>
    </div>
    <ul class="adventure-items">
      ${group.items.map((item) => adventureItem(item))}
    </ul>
  </article>
`;

const adventuresTemplate = () => html`
  <div class="container">
    <div class="section-heading">
      <p class="section-eyebrow" data-reveal>${t("adventures.eyebrow")}</p>
      <h2 class="section-title" id="adventures-title" data-reveal>
        ${t("adventures.title")}<span class="gradient-text">${t("adventures.titleAccent")}</span>
      </h2>
      <p class="section-subtitle" data-reveal>
        ${t("adventures.subtitle")}
      </p>
    </div>
    <div class="adventure-grid">
      ${data().adventures.map((group, i) => adventureGroup(group, i))}
    </div>
  </div>
`;

export function mountAdventures() {
  return mount("adventures", adventuresTemplate());
}
