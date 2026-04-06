(function () {
  const container = document.getElementById("project-list");
  const list = Array.isArray(window.PROJECTS) ? window.PROJECTS : [];
  if (!container || !list.length) return;

  const groupOrder = [
    "Research Systems",
    "Selected LLM Development",
    "Industry Pilots",
    "Research Prototypes for Future Agents"
  ];

  const byGroup = new Map();
  list.forEach(project => {
    const key = project.group || "Other";
    if (!byGroup.has(key)) byGroup.set(key, []);
    byGroup.get(key).push(project);
  });

  function renderCard(project) {
    const safeTitle = project.title || "Untitled Project";
    const safePeriod = project.period || "";
    const safeAffiliation = project.affiliation || "";
    const safeDescription = project.description || "";
    const safeRole = project.role || "";
    const safeTools = project.tools || "";
    const safeAchievements = project.achievements || "";

    return `
      <article class="entry-card project-card-clickable">
        <a class="project-card-link" href="projects/${project.slug}.html">
          <div class="entry-head">
            <h2>${safeTitle}</h2>
            <p>${safePeriod}</p>
          </div>
          ${safeAffiliation ? `<p class="project-affiliation">${safeAffiliation}</p>` : ""}
          <ul class="project-meta-list">
            ${safeDescription ? `<li><strong>Description:</strong> ${safeDescription}</li>` : ""}
            ${safeRole ? `<li><strong>Role:</strong> ${safeRole}</li>` : ""}
            ${safeTools ? `<li><strong>Tools Used:</strong> ${safeTools}</li>` : ""}
            ${safeAchievements ? `<li><strong>Achievements:</strong> ${safeAchievements}</li>` : ""}
          </ul>
        </a>
      </article>
    `;
  }

  const sections = groupOrder
    .filter(group => byGroup.has(group))
    .map(group => {
      const cards = byGroup.get(group).map(renderCard).join("\n");
      return `
        <section class="pub-group">
          <h2 class="pub-group-title">${group} <span class="pub-group-count">(${byGroup.get(group).length})</span></h2>
          <div class="pub-group-list">
            ${cards}
          </div>
        </section>
      `;
    });

  const remaining = Array.from(byGroup.keys()).filter(k => !groupOrder.includes(k));
  remaining.forEach(group => {
    const cards = byGroup.get(group).map(renderCard).join("\n");
    sections.push(`
      <section class="pub-group">
        <h2 class="pub-group-title">${group} <span class="pub-group-count">(${byGroup.get(group).length})</span></h2>
        <div class="pub-group-list">${cards}</div>
      </section>
    `);
  });

  container.innerHTML = sections.join("\n");
})();
