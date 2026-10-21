import { render } from "https://unpkg.com/lit-html@3.3.3?module";

export const qs = (selector, root = document) => root.querySelector(selector);
export const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

const mounted = new WeakSet();

/**
 * Render a lit-html TemplateResult into a container by id. No-op if the container is missing.
 * Calling it again for the same container updates the existing DOM in place (used for the
 * language switch), so event listeners and reveal state on rendered nodes survive.
 */
export function mount(id, templateResult) {
  const el = document.getElementById(id);
  if (!el) return null;
  // lit-html's render() only clears nodes it previously rendered itself — it won't touch
  // static skeleton markup already sitting in the container, so wipe it on first mount.
  if (!mounted.has(el)) {
    el.replaceChildren();
    mounted.add(el);
  }
  render(templateResult, el);
  return el;
}

export function showError(id, message) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = `<p class="fetch-error">${message}</p>`;
}
