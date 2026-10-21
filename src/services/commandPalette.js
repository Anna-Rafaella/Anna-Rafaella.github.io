import { html, render } from "https://unpkg.com/lit-html@3.3.3?module";
import { mount, qs, qsa } from "../utils/dom.js";
import { URLs, LINKEDIN_URL, RESUME_URL } from "../constants/urls.js";
import { getLang, setLang, t } from "../i18n/i18n.js";

const COMMANDS = [
  { label: "palette.about", target: "about", icon: "fa-solid fa-user", meta: "palette.meta.section" },
  { label: "palette.experience", target: "experience", icon: "fa-solid fa-briefcase", meta: "palette.meta.section" },
  { label: "palette.skills", target: "skills", icon: "fa-solid fa-code", meta: "palette.meta.section" },
  { label: "palette.projects", target: "projects", icon: "fa-solid fa-diagram-project", meta: "palette.meta.section" },
  { label: "palette.adventures", target: "adventures", icon: "fa-solid fa-certificate", meta: "palette.meta.section" },
  { label: "palette.contact", target: "contact", icon: "fa-solid fa-envelope", meta: "palette.meta.section" },
  { label: "palette.openGithub", href: URLs.githubProfile, icon: "fa-brands fa-github", meta: "palette.meta.external" },
  { label: "palette.openLinkedin", href: LINKEDIN_URL, icon: "fa-brands fa-linkedin", meta: "palette.meta.external" },
  { label: "palette.resume", href: RESUME_URL, icon: "fa-solid fa-file-arrow-down", meta: "palette.meta.action" },
  { label: "palette.lang", action: "toggleLang", icon: "fa-solid fa-language", meta: "palette.meta.action" },
  { label: "palette.jsonTool", href: "./pages/json-generator.html", icon: "fa-solid fa-file-code", meta: "palette.meta.tool" },
];

const paletteTemplate = () => html`
  <div class="command-palette no-print" id="commandPalette" aria-hidden="true">
    <div class="command-palette-panel glass" role="dialog" aria-modal="true" aria-label="${t("palette.dialog")}">
      <div class="command-search">
        <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
        <input
          type="search"
          id="commandSearch"
          placeholder="${t("palette.placeholder")}"
          aria-label="${t("palette.search")}"
        />
        <button type="button" id="commandPaletteClose" aria-label="${t("palette.close")}">
          <i class="fa-solid fa-xmark" aria-hidden="true"></i>
        </button>
      </div>
      <div class="command-list" id="commandList"></div>
    </div>
  </div>
`;

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;
  const top = section.getBoundingClientRect().top + window.scrollY - (parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-height")) || 76) + 1;
  window.scrollTo({ top, behavior: "smooth" });
}

function executeCommand(command) {
  closePalette();
  if (command.target) {
    scrollToSection(command.target);
    return;
  }
  if (command.action === "toggleLang") {
    setLang(getLang() === "fr" ? "en" : "fr");
    return;
  }
  if (command.href) window.open(command.href, "_blank", "noopener");
}

function renderCommands(filter = "") {
  const list = qs("#commandList");
  if (!list) return;
  const normalized = filter.trim().toLowerCase();
  const matches = COMMANDS.filter((c) => `${t(c.label)} ${t(c.meta)}`.toLowerCase().includes(normalized));

  if (!matches.length) {
    render(html`<div class="command-empty">${t("palette.empty")}</div>`, list);
    return;
  }

  render(
    html`${matches.map(
      (command, i) => html`
        <button
          type="button"
          class="command-item${i === 0 ? " is-active" : ""}"
          @click="${() => executeCommand(command)}"
        >
          <span class="command-item-icon"><i class="${command.icon}" aria-hidden="true"></i></span>
          <span class="command-item-text">
            <span class="command-item-label">${t(command.label)}</span>
            <span class="command-item-meta">${t(command.meta)}</span>
          </span>
        </button>
      `
    )}`,
    list
  );
}

function openPalette() {
  const palette = qs("#commandPalette");
  const search = qs("#commandSearch");
  if (!palette || !search) return;
  palette.classList.add("is-open");
  palette.setAttribute("aria-hidden", "false");
  renderCommands();
  search.value = "";
  search.focus();
}

function closePalette() {
  const palette = qs("#commandPalette");
  if (!palette) return;
  palette.classList.remove("is-open");
  palette.setAttribute("aria-hidden", "true");
}

function moveActiveCommand(direction) {
  const items = qsa(".command-item");
  if (!items.length) return;
  const currentIndex = Math.max(0, items.findIndex((item) => item.classList.contains("is-active")));
  const nextIndex = (currentIndex + direction + items.length) % items.length;
  items[currentIndex].classList.remove("is-active");
  items[nextIndex].classList.add("is-active");
  items[nextIndex].scrollIntoView({ block: "nearest" });
}

export function renderCommandPalette() {
  mount("command-palette-root", paletteTemplate());
}

export function initCommandPalette() {
  renderCommandPalette();

  qs("#commandPaletteToggle")?.addEventListener("click", openPalette);
  qs("#commandPaletteClose")?.addEventListener("click", closePalette);
  qs("#commandPalette")?.addEventListener("click", (e) => {
    if (e.target.id === "commandPalette") closePalette();
  });

  const search = qs("#commandSearch");
  search?.addEventListener("input", () => renderCommands(search.value));
  search?.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      moveActiveCommand(1);
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      moveActiveCommand(-1);
    }
    if (e.key === "Enter") {
      e.preventDefault();
      qs(".command-item.is-active")?.click();
    }
  });

  document.addEventListener("keydown", (e) => {
    const isShortcut = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k";
    if (isShortcut) {
      e.preventDefault();
      openPalette();
    }

    const palette = qs("#commandPalette");
    if (!palette?.classList.contains("is-open")) return;

    if (e.key === "Escape") {
      closePalette();
      return;
    }

    if (e.key === "Tab") {
      const focusable = [qs("#commandSearch"), qs("#commandPaletteClose"), ...qsa(".command-item")].filter(Boolean);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}
