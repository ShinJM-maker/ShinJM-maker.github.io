(function () {
  const container = document.getElementById("publication-groups");
  const list = Array.isArray(window.PUBLICATIONS) ? window.PUBLICATIONS : [];
  if (!container || !list.length) return;

  const categoryOrder = [
    "Top Conferences",
    "Journals",
    "Domestic Conferences & Theses"
  ];

  const byCategory = new Map();
  list.forEach(item => {
    const key = item.category || "Others";
    if (!byCategory.has(key)) byCategory.set(key, []);
    byCategory.get(key).push(item);
  });

  const sections = categoryOrder
    .filter(category => byCategory.has(category))
    .map(category => {
      const cards = byCategory.get(category).map(pub => {
        const meta = `${pub.venue || ""} · ${pub.date || ""}`;
        return `
          <article class="pub-card pub-card-clickable">
            <a class="pub-card-link" href="publication.html?slug=${pub.slug}">
              <div class="pub-titleline">
                <h2>${pub.title}</h2>
                <span class="pub-type-badge">${pub.category}</span>
              </div>
              <p class="meta">${meta}</p>
              <p class="authors">${pub.authorsHtml || ""}</p>
            </a>
          </article>
        `;
      }).join("\n");

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
    const cards = byCategory.get(category).map(pub => `
      <article class="pub-card pub-card-clickable">
        <a class="pub-card-link" href="publication.html?slug=${pub.slug}">
          <div class="pub-titleline">
            <h2>${pub.title}</h2>
            <span class="pub-type-badge">${pub.category || "Others"}</span>
          </div>
          <p class="meta">${pub.venue || ""} · ${pub.date || ""}</p>
          <p class="authors">${pub.authorsHtml || ""}</p>
        </a>
      </article>
    `).join("\n");

    sections.push(`
      <section class="pub-group">
        <h2 class="pub-group-title">${category} <span class="pub-group-count">(${byCategory.get(category).length})</span></h2>
        <div class="pub-group-list">${cards}</div>
      </section>
    `);
  });

  container.innerHTML = sections.join("\n");
})();
