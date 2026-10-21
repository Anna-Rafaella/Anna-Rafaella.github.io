import * as dataFr from "../../user-data/data.js";
import * as dataEn from "../../user-data/data.en.js";
import { STRINGS } from "./strings.js";

const STORAGE_KEY = "portfolio-lang";
export const LANGS = ["fr", "en"];

function readStoredLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return LANGS.includes(stored) ? stored : "fr";
  } catch {
    return "fr";
  }
}

let currentLang = readStoredLang();
const listeners = new Set();

export const getLang = () => currentLang;

/** UI string for the current language, falling back to French when a key is missing. */
export const t = (key) => STRINGS[currentLang][key] ?? STRINGS.fr[key] ?? key;

/**
 * Portfolio content for the current language. data.en.js only overrides the
 * fields that need translating; everything else (skills, contact...) comes from data.js.
 */
export const data = () => (currentLang === "en" ? { ...dataFr, ...dataEn } : dataFr);

export function onLangChange(listener) {
  listeners.add(listener);
}

export function applyDocumentLang() {
  document.documentElement.lang = currentLang;
  document.title = t("meta.title");
  document.querySelector('meta[name="description"]')?.setAttribute("content", t("meta.description"));
  const skip = document.querySelector(".skip-link");
  if (skip) skip.textContent = t("a11y.skip");
  document.getElementById("backToTop")?.setAttribute("aria-label", t("a11y.backToTop"));
}

export function setLang(lang) {
  if (!LANGS.includes(lang) || lang === currentLang) return;
  currentLang = lang;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // storage unavailable (private mode) — the choice just won't persist
  }
  applyDocumentLang();
  listeners.forEach((listener) => listener(lang));
}
