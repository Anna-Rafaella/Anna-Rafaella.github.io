import { html, render } from "https://unpkg.com/lit-html@3.3.3?module";
import { fetchJson } from "../utils/fetch.js";
import { t } from "../i18n/i18n.js";

// Last fetched GitHub profile per card element, so a language switch can re-render the
// labels in place without refetching.
const githubProfiles = new WeakMap();

const errorCardTemplate = (platform) => html`
  <p class="fetch-error">${t("github.profileError")} ${platform}.</p>
`;

const statBlock = (stat) => html`
  <div>
    <p class="stat-label">${stat.label}</p>
    <p class="stat-value">${stat.value}</p>
  </div>
`;

const profileCardTemplate = ({ avatar, badgeClass, badgeLabel, url, urlLabel, stats }) => html`
  <a href="${url}" target="_blank" rel="noopener noreferrer" class="profile-card">
    <div class="profile-card-header">
      <img class="profile-avatar" src="${avatar}" alt="" loading="lazy" />
      <div>
        <span class="profile-badge ${badgeClass}">${badgeLabel}</span>
        <p class="profile-url">${urlLabel}</p>
      </div>
    </div>
    <div class="profile-stats-grid">${stats.map((stat) => statBlock(stat))}</div>
  </a>
`;

function renderGithubCard(el, data) {
  render(
    data
      ? profileCardTemplate({
          avatar: data.avatar_url,
          badgeClass: "badge-github",
          badgeLabel: "GitHub",
          url: data.html_url,
          urlLabel: data.html_url.replace("https://", ""),
          stats: [
            { label: t("github.repositories"), value: data.public_repos },
            { label: t("github.followers"), value: data.followers },
            { label: t("github.following"), value: data.following },
          ],
        })
      : errorCardTemplate("GitHub"),
    el
  );
}

async function hydrateGithubCard(el) {
  const username = el.dataset.username;
  el.replaceChildren();
  let data = null;
  try {
    data = await fetchJson(`https://api.github.com/users/${username}`, "GitHub");
  } catch {
    // rendered as an error card below
  }
  githubProfiles.set(el, data);
  renderGithubCard(el, data);
}

export function refreshProfileCards() {
  document.querySelectorAll("[data-github-card]").forEach((el) => {
    if (githubProfiles.has(el)) renderGithubCard(el, githubProfiles.get(el));
  });
}

async function hydrateStackCard(el) {
  const userId = el.dataset.userId;
  el.replaceChildren();
  try {
    const { items } = await fetchJson(
      `https://api.stackexchange.com/2.2/users/${userId}?site=stackoverflow`,
      "StackOverflow"
    );
    const user = items[0];
    const username = user.link.replace("https://", "").replace(`/users/${userId}`, "");
    render(
      profileCardTemplate({
        avatar: user.profile_image,
        badgeClass: "badge-stack",
        badgeLabel: "StackOverflow",
        url: user.link,
        urlLabel: username,
        stats: [
          { label: "Reputation", value: user.reputation },
          { label: "Gold", value: user.badge_counts.gold },
          { label: "Silver", value: user.badge_counts.silver },
          { label: "Bronze", value: user.badge_counts.bronze },
        ],
      }),
      el
    );
  } catch {
    render(errorCardTemplate("StackOverflow"), el);
  }
}

export function initProfileCards() {
  document.querySelectorAll("[data-github-card]").forEach(hydrateGithubCard);
  document.querySelectorAll("[data-stack-card]").forEach(hydrateStackCard);
}
