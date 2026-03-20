(function () {
  const container = document.getElementById("publication-groups");
  const list = Array.isArray(window.PUBLICATIONS) ? window.PUBLICATIONS : [];
  if (!container || !list.length) return;

  const categoryOrder = [
    "Top Conferences",
    "Under Review",
    "Journals",
    "Domestic Conferences & Theses"
  ];

  const byCategory = new Map();
  list.forEach(item => {
    const key = item.category || "Others";
    if (!byCategory.has(key)) byCategory.set(key, []);
    byCategory.get(key).push(item);
  });

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

  const sections = categoryOrder
    .filter(category => byCategory.has(category))
    .map(category => {
      const cards = byCategory.get(category).map(renderCard).join("\n");
      return `
        <section class="pub-group">
          <h2 class="pub-group-title">${category} <span class="pub-group-count">(${byCategory.get(category).length})</span></h2>
          <div class="pub-group-list">
            ${cards}
          </div>
        </section>
      `;
    });

  const remaining = Array.from(byCategory.keys()).filter(k => !categoryOrder.includes(k));
  remaining.forEach(category => {
    const cards = byCategory.get(category).map(renderCard).join("\n");
    sections.push(`
      <section class="pub-group">
        <h2 class="pub-group-title">${category} <span class="pub-group-count">(${byCategory.get(category).length})</span></h2>
        <div class="pub-group-list">${cards}</div>
      </section>
    `);
  });

  container.innerHTML = sections.join("\n");
})();
