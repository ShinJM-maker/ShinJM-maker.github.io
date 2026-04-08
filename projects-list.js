(function () {
  const container = document.getElementById("project-list");
  const list = Array.isArray(window.PROJECTS) ? window.PROJECTS : [];
  if (!container || !list.length) return;

  const groupOrder = [
    "Multimodal Evidence Systems",
    "Foundation Models and Adaptation",
    "Applied AI Systems and Pilots",
    "Language, Speech, and Structured Reasoning",
    "Early Prototypes Toward Structured Memory and Future Agents"
  ];

  const groupIntro = {
    "Foundation Models and Adaptation": "In parallel with my research on multimodal evidence systems, I contributed to Korean and multilingual foundation models across academic, industrial, and consortium settings.",
    "Early Prototypes Toward Structured Memory and Future Agents": "Early exploratory systems connecting multimodal reasoning with future directions in structured memory, temporal abstraction, and agent planning."
  };

  const byGroup = new Map();
  list.forEach(project => {
    const key = project.group || "Other";
    if (!byGroup.has(key)) byGroup.set(key, []);
    byGroup.get(key).push(project);
  });

  function renderChip(chip) {
    if (!chip) return "";
    const text = typeof chip === "string" ? chip : chip.text;
    const tone = typeof chip === "object" && chip.tone ? ` project-chip--${chip.tone}` : "";
    return text ? `<span class="project-chip${tone}">${text}</span>` : "";
  }

  function renderCard(project) {
    const safeTitle = project.cardTitle || project.title || "Untitled Project";
    const safePeriod = project.period || "";
    const safeAffiliation = project.cardAffiliation || project.affiliation || "";
    const safeSummary = project.cardSummary || project.description || "";
    const chips = [];
    if (safeAffiliation) chips.push({ text: safeAffiliation, tone: "institution" });
    if (Array.isArray(project.cardChips)) chips.push(...project.cardChips);
    const chipRow = chips.length
      ? `<div class="project-chip-row">${chips.map(renderChip).join("")}</div>`
      : "";

    return `
      <article class="entry-card project-card-clickable">
        <a class="project-card-link" href="projects/${project.slug}.html">
          <div class="entry-head">
            <h2>${safeTitle}</h2>
            <p>${safePeriod}</p>
          </div>
          ${chipRow}
          ${safeSummary ? `<p class="project-card-summary">${safeSummary}</p>` : ""}
          <span class="project-card-cta">View details</span>
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
          ${groupIntro[group] ? `<p class="section-note">${groupIntro[group]}</p>` : ""}
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
