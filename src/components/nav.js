import { html } from "https://unpkg.com/lit-html@3.3.3?module";
import { mount } from "../utils/dom.js";
import { getLang, t } from "../i18n/i18n.js";

const NAV_LINKS = [
  { id: "about" },
  { id: "experience" },
  { id: "skills" },
  { id: "projects" },
  { id: "adventures" },
  { id: "contact" },
];

const linkItem = (link, mobile = false) => html`
  <li>
    <a
      href="#${link.id}"
      class="nav-link underline-link${mobile ? " nav-link-mobile" : ""}"
      data-nav-link="${link.id}"
    >
      ${t(`nav.${link.id}`)}
    </a>
  </li>
`;

const navTemplate = () => html`
  <header class="site-nav glass" id="siteNav">
    <div class="container nav-inner">
      <a href="#hero" class="nav-logo underline-link" aria-label="${t("nav.home")}">
        Anna<span class="gradient-text">.</span>
      </a>

      <nav class="nav-links" aria-label="${t("nav.primary")}">
        <ul>
          ${NAV_LINKS.map((link) => linkItem(link))}
        </ul>
      </nav>

      <div class="nav-actions">
        <button
          type="button"
          class="nav-icon-btn nav-lang-btn magnetic ripple"
          id="langToggle"
          aria-label="${t("nav.lang")}"
          title="${t("nav.lang")}"
        >
          <span class="nav-lang-option ${getLang() === "fr" ? "is-active" : ""}">FR</span>
          <span class="nav-lang-divider" aria-hidden="true">/</span>
          <span class="nav-lang-option ${getLang() === "en" ? "is-active" : ""}">EN</span>
        </button>
        <button
          type="button"
          class="nav-icon-btn magnetic ripple"
          id="themeToggle"
          aria-label="${t("nav.theme")}"
          title="${t("nav.theme")}"
        >
          <i class="fa-solid fa-moon" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          class="nav-icon-btn magnetic ripple"
          id="commandPaletteToggle"
          aria-label="${t("nav.palette")}"
          title="${t("nav.paletteTitle")}"
        >
          <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          class="nav-mobile-toggle magnetic ripple"
          id="navMobileToggle"
          aria-label="${t("nav.menu")}"
          aria-expanded="false"
          aria-controls="navMobileMenu"
        >
          <i class="fa-solid fa-bars" aria-hidden="true"></i>
        </button>
      </div>
    </div>

    <div class="nav-mobile-menu" id="navMobileMenu" aria-hidden="true">
      <ul>
        ${NAV_LINKS.map((link) => linkItem(link, true))}
      </ul>
    </div>
  </header>
`;

export function mountNav() {
  return mount("nav-root", navTemplate());
}

export { NAV_LINKS };
