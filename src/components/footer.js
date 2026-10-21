import { html } from "https://unpkg.com/lit-html@3.3.3?module";
import { mount } from "../utils/dom.js";
import { data, t } from "../i18n/i18n.js";
import { firebaseConfig } from "../constants/firebase.js";

const copyrightText = () => data().footer.find((item) => item.label === "copyright-text")?.data?.[0] ?? "";

const footerTemplate = () => html`
  <div class="container footer-inner">
    <div class="footer-brand">
      <p class="footer-logo">Anna<span class="gradient-text">.</span></p>
      <p class="footer-tagline">${copyrightText()}</p>
    </div>

    <ul class="footer-links">
      ${data().contact.map(
        (item) => html`
          <li>
            <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="underline-link">
              ${item.label}
            </a>
          </li>
        `
      )}
    </ul>

    <div class="footer-meta">
      ${firebaseConfig.projectId
        ? html`<p class="footer-visitors">
            <span class="visitor-label">${t("footer.visitors")}</span>
            <span id="visitorCount" class="visitor-number">—</span>
          </p>`
        : ""}
    </div>
  </div>
`;

export function mountFooter() {
  return mount("footer", footerTemplate());
}
