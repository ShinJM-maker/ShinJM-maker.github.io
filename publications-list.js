(function () {
  const container = document.getElementById("publication-groups");
  const list = Array.isArray(window.PUBLICATIONS) ? window.PUBLICATIONS : [];
  if (!container || !list.length) return;

  const underReviewOrder = [
    "under-review-evidence-graph",
    "under-review-executable-plan-representation",
    "under-review-consumed-evidence-audit",
    "under-review-error-propagation"
  ];

  function renderCard(pub) {
    const meta = `${pub.venue || ""} · ${pub.date || ""}`;
    const roleBadge = pub.role ? `<span class="pub-role-badge">${pub.role}</span>` : "";
    const statusBadge = pub.status ? `<span class="pub-status-badge pub-status-${pub.status.toLowerCase().replace(/\s+/g, "-")}">${pub.status}</span>` : "";
    const contribution = pub.contribution ? `<p class="pub-contribution">${pub.contribution}</p>` : "";
    const keywords = (pub.keywords && pub.keywords.length)
      ? `<div class="pub-keywords">${pub.keywords.map(k => `<span class="pub-keyword">${k}</span>`).join("")}</div>`
      : "";

    return `
      <article class="pub-card pub-card-clickable">
        <a class="pub-card-link" href="publications/${pub.slug}.html">
          <div class="pub-titleline">
            <h2>${pub.title}</h2>
            <span class="pub-type-badge">${pub.category}</span>
          </div>
          <p class="meta">${meta}${roleBadge}${statusBadge}</p>
          <p class="authors">${pub.authorsHtml || ""}</p>
          ${contribution}
          ${keywords}
        </a>
      </article>
    `;
  }

  const selectedPublications = list.filter(pub => pub.category !== "Under Review");
  const underReviewMap = new Map(list.filter(pub => pub.category === "Under Review").map(pub => [pub.slug, pub]));
  const underReviewPublications = underReviewOrder.map(slug => underReviewMap.get(slug)).filter(Boolean);

  const sections = [];

  sections.push(`
    <section class="pub-group">
      <h2 class="pub-group-title">Selected Publications</h2>
      <div class="pub-group-list">
        ${selectedPublications.map(renderCard).join("\n")}
      </div>
    </section>
  `);

  sections.push(`
    <section class="pub-group">
      <h2 class="pub-group-title">Anonymous Manuscripts Under Review</h2>
      <div class="pub-group-list">
        ${underReviewPublications.map(renderCard).join("\n")}
      </div>
    </section>
  `);

  sections.push(`
    <section class="pub-group">
      <h2 class="pub-group-title">Current Research Directions</h2>
      <p class="section-note">Current research directions include actionable ontologies for multimodal agent memory, video-structured memory for long-horizon reasoning, and planning over structured world representations.</p>
    </section>
  `);

  container.innerHTML = sections.join("\n");
})();
