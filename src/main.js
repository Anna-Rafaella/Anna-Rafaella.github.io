import { mount, showError } from "./utils/dom.js";
import { fetchJson } from "./utils/fetch.js";
import { URLs } from "./constants/urls.js";
import { observeReveals } from "./animations/scrollReveal.js";
import { applyDocumentLang, getLang, onLangChange, setLang, t } from "./i18n/i18n.js";
import { initInteractions } from "./animations/interactions.js";

import { mountNav } from "./components/nav.js";
import { mountHero } from "./components/hero.js";
import { mountAbout } from "./components/about.js";
import { mountExperience } from "./components/experience.js";
import { mountSkills } from "./components/skills.js";
import { mountProjects } from "./components/projects.js";
import { mountGithub, repoListTemplate } from "./components/github.js";
import { mountAdventures } from "./components/adventures.js";
import { mountContact, initContactForm } from "./components/contact.js";
import { mountFooter } from "./components/footer.js";

import { initNavScroll } from "./services/nav-scroll.js";
import { initTheme } from "./services/theme.js";
import { initCommandPalette, renderCommandPalette } from "./services/commandPalette.js";
import { initEasterEggs } from "./services/easterEgg.js";
import { initProfileCards, refreshProfileCards } from "./services/profileCard.js";
import { initVisitorCounter } from "./services/visitorCounter.js";

let repos = null;

async function loadRepos() {
  try {
    repos = await fetchJson(URLs.gitRepo, "GitHub repos");
    mount("repos", repoListTemplate(repos));
    observeReveals(document.getElementById("repos"));
  } catch {
    showError("repos", t("github.error"));
  }
}

function mountStaticSections() {
  mountNav();
  mountHero();
  mountAbout();
  mountExperience();
  mountSkills();
  mountProjects();
  mountGithub();
  mountAdventures();
  mountContact();
  mountFooter();
}

function initLangToggle() {
  document.getElementById("langToggle")?.addEventListener("click", () => {
    setLang(getLang() === "fr" ? "en" : "fr");
  });

  // mount() re-renders in place, so listeners, form input and reveal state are preserved.
  onLangChange(() => {
    mountStaticSections();
    renderCommandPalette();
    refreshProfileCards();
    if (repos) mount("repos", repoListTemplate(repos));
  });
}

function initServices() {
  initTheme();
  initLangToggle();
  initNavScroll();
  initCommandPalette();
  initEasterEggs();
  initInteractions();
  initContactForm();
  initProfileCards();
  initVisitorCounter();
}

applyDocumentLang();
mountStaticSections();
initServices();
observeReveals();

// The GitHub section is optional: only fetch pinned repos when index.html includes it.
if (document.getElementById("repos")) loadRepos();
