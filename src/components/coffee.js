import { html } from "https://unpkg.com/lit-html@3.3.3?module";
import { mount } from "../utils/dom.js";
import { URLs } from "../constants/urls.js";

const coffeeTemplate = () => html`
  <div class="container coffee-inner">
    <div class="coffee-card glass glow-card" data-reveal>
      <span class="coffee-icon">
        <i class="fa-solid fa-mug-saucer" aria-hidden="true"></i>
      </span>
      <div class="coffee-copy">
        <h2 class="coffee-title" id="coffee-title">Enjoying the site?</h2>
        <p class="coffee-subtitle">
          If something here helped you out, saved you time, or you just liked poking around,
          consider buying me a coffee. It keeps me caffeinated for the next project.
        </p>
      </div>
      <a
        href="${URLs.buyMeACoffee}"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-primary magnetic ripple coffee-btn"
        aria-label="Buy me a coffee"
      >
        <i class="fa-solid fa-mug-hot" aria-hidden="true"></i>
        Buy me a coffee
      </a>
    </div>
  </div>
`;

export function mountCoffee() {
  return mount("coffee", coffeeTemplate());
}
