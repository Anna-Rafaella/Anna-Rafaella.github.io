import { html } from "https://unpkg.com/lit-html@3.3.3?module";
import { mount } from "../utils/dom.js";
import { data, t } from "../i18n/i18n.js";
import { CONTACT_FORM_ENDPOINT, WEB3FORMS_ACCESS_KEY, isAllowedHost } from "../constants/urls.js";

const contactLink = (item) => html`
  <li>
    <a
      href="${item.link}"
      target="_blank"
      rel="noopener noreferrer"
      class="contact-link glass glass-interactive magnetic ripple"
      aria-label="${item.label}"
    >
      <span class="contact-link-icon"><i class="${item.icon}" aria-hidden="true"></i></span>
      <span class="contact-link-label">${item.label}</span>
      <i class="fa-solid fa-arrow-up-right-from-square contact-link-go" aria-hidden="true"></i>
    </a>
  </li>
`;

const contactTemplate = () => html`
  <div class="container contact-inner">
    <div class="contact-copy">
      <p class="section-eyebrow" data-reveal>${t("contact.eyebrow")}</p>
      <h2 class="section-title" id="contact-title" data-reveal>
        ${t("contact.title")}<span class="gradient-text">${t("contact.titleAccent")}</span>.
      </h2>
      <p class="section-subtitle" data-reveal>
        ${t("contact.subtitle")}
      </p>
      <ul class="contact-link-list" data-reveal>
        ${data().contact.map((item) => contactLink(item))}
      </ul>
    </div>

    <form class="contact-form glass" id="contactForm" data-reveal novalidate>
      <div class="form-field">
        <label for="contactName">${t("contact.name")}</label>
        <input type="text" id="contactName" name="name" autocomplete="name" required />
        <p class="form-error" id="contactNameError" role="alert"></p>
      </div>
      <div class="form-field">
        <label for="contactEmail">${t("contact.email")}</label>
        <input type="email" id="contactEmail" name="email" autocomplete="email" required />
        <p class="form-error" id="contactEmailError" role="alert"></p>
      </div>
      <div class="form-field">
        <label for="contactSubject">${t("contact.subject")}</label>
        <input type="text" id="contactSubject" name="subject" autocomplete="off" required />
        <p class="form-error" id="contactSubjectError" role="alert"></p>
      </div>
      <div class="form-field">
        <label for="contactMessage">${t("contact.message")}</label>
        <textarea id="contactMessage" name="message" rows="4" required></textarea>
        <p class="form-error" id="contactMessageError" role="alert"></p>
      </div>
      <button type="submit" class="btn btn-primary magnetic ripple form-submit" id="contactSubmit">
        <span class="form-submit-label">${t("contact.send")}</span>
        <i class="fa-solid fa-spinner form-spinner" aria-hidden="true"></i>
      </button>
      <p class="form-status" id="formStatus" aria-live="polite"></p>
    </form>
  </div>
`;

export function mountContact() {
  return mount("contact", contactTemplate());
}

const FIELDS = {
  contactName: { errorId: "contactNameError", validate: (v) => (v.trim() ? "" : t("contact.err.name")) },
  contactEmail: {
    errorId: "contactEmailError",
    validate: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : t("contact.err.email")),
  },
  contactSubject: { errorId: "contactSubjectError", validate: (v) => (v.trim() ? "" : t("contact.err.subject")) },
  contactMessage: {
    errorId: "contactMessageError",
    validate: (v) => (v.trim().length >= 10 ? "" : t("contact.err.message")),
  },
};

function validateField(input) {
  const rule = FIELDS[input.id];
  const message = rule.validate(input.value);
  const errorEl = document.getElementById(rule.errorId);
  if (errorEl) errorEl.textContent = message;
  input.setAttribute("aria-invalid", message ? "true" : "false");
  return !message;
}

export function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  Object.keys(FIELDS).forEach((id) => {
    const input = document.getElementById(id);
    input?.addEventListener("blur", () => validateField(input));
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const inputs = Object.keys(FIELDS).map((id) => document.getElementById(id));
    const isValid = inputs.map(validateField).every(Boolean);
    if (!isValid) return;

    const submitBtn = document.getElementById("contactSubmit");
    const status = document.getElementById("formStatus");
    submitBtn.classList.add("is-loading");
    submitBtn.disabled = true;
    status.textContent = "";

    const [name, email, subject, message] = inputs.map((input) => input.value.trim());

    try {
      if (CONTACT_FORM_ENDPOINT && isAllowedHost()) {
        const res = await fetch(CONTACT_FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: `${t("contact.mailSubject")}${subject}`,
            name,
            email,
            message,
          }),
        });
        const data = await res.json();
        if (!res.ok || !data.success) throw new Error("submission failed");
      } else {
        // No form backend configured, or the page isn't running on the allowed host — hand off to
        // the visitor's mail client instead of silently pretending a submission succeeded.
        const mailtoSubject = encodeURIComponent(subject);
        const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
        window.location.href = `mailto:kapandeanna8@gmail.com?subject=${mailtoSubject}&body=${body}`;
      }
      form.classList.add("is-success");
      status.textContent = t("contact.success");
      form.reset();
    } catch {
      status.textContent = t("contact.failure");
    } finally {
      submitBtn.classList.remove("is-loading");
      submitBtn.disabled = false;
    }
  });
}
