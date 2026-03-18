(function () {
  const container = document.getElementById("project-list");
  const list = Array.isArray(window.PROJECTS) ? window.PROJECTS : [];
  if (!container || !list.length) return;

  const cards = list.map(project => {
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
  });

  container.innerHTML = cards.join("\n");
})();
