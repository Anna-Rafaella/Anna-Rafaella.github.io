import { t } from "../i18n/i18n.js";

const KONAMI_SEQUENCE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

function showKonamiToast() {
  const toast = document.createElement("div");
  toast.className = "easter-egg-toast glass";
  toast.setAttribute("role", "status");
  toast.innerHTML = `
    <i class="fa-solid fa-terminal" aria-hidden="true"></i>
    <span>${t("egg.konami")}</span>
  `;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("is-visible"));
  setTimeout(() => {
    toast.classList.remove("is-visible");
    setTimeout(() => toast.remove(), 400);
  }, 3600);
}

function initKonamiCode() {
  let progress = 0;
  document.addEventListener("keydown", (e) => {
    const expected = KONAMI_SEQUENCE[progress];
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if (key === expected) {
      progress += 1;
      if (progress === KONAMI_SEQUENCE.length) {
        progress = 0;
        showKonamiToast();
      }
    } else {
      progress = key === KONAMI_SEQUENCE[0] ? 1 : 0;
    }
  });
}

function logConsoleGreeting() {
  console.log(
    "%c👋 Bonjour !%c\nAssez curieux pour ouvrir les devtools — j'apprécie.\nCe site est fait main en vanilla JS + lit-html, sans framework ni bundler.\nContact : kapandeanna8@gmail.com",
    "font-size:20px;font-weight:700;color:#4F8CFF;",
    "font-size:13px;color:#9aa5b8;line-height:1.6;"
  );
}

export function initEasterEggs() {
  initKonamiCode();
  logConsoleGreeting();
}
