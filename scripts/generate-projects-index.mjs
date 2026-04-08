import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

async function loadBrowserData(filename, key) {
  const source = await readFile(path.join(rootDir, filename), "utf8");
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(source, context, { filename });

  const data = context.window[key];
  if (!Array.isArray(data)) {
    throw new Error(`${filename} did not define window.${key} as an array.`);
  }

  return data;
}

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

function renderChip(chip) {
  if (!chip) return "";
  const text = typeof chip === "string" ? chip : chip.text;
  const tone = typeof chip === "object" && chip.tone ? ` project-chip--${chip.tone}` : "";
  return text ? `<span class="project-chip${tone}">${text}</span>` : "";
}

function renderCard(project) {
  const title = project.cardTitle || project.title || "Untitled Project";
  const period = project.period || "";
  const affiliation = project.cardAffiliation || project.affiliation || "";
  const summary = project.cardSummary || project.description || "";
  const chips = [];

  if (affiliation) chips.push({ text: affiliation, tone: "institution" });
  if (Array.isArray(project.cardChips)) chips.push(...project.cardChips);

  const chipRow = chips.length
    ? `<div class="project-chip-row">${chips.map(renderChip).join("")}</div>`
    : "";

  return `          <article class="entry-card project-card-clickable">
            <a class="project-card-link" href="projects/${project.slug}.html">
              <div class="entry-head">
                <h2>${title}</h2>
                <p>${period}</p>
              </div>
              ${chipRow}
              ${summary ? `<p class="project-card-summary">${summary}</p>` : ""}
              <span class="project-card-cta">View details</span>
            </a>
          </article>`;
}

function renderSection(group, projects) {
  const cards = projects.map(renderCard).join("\n");
  const intro = groupIntro[group] ? `\n          <p class="section-note">${groupIntro[group]}</p>` : "";

  return `        <section class="pub-group">
          <h2 class="pub-group-title">${group} <span class="pub-group-count">(${projects.length})</span></h2>${intro}
          <div class="pub-group-list">
${cards}
          </div>
        </section>`;
}

async function main() {
  const projects = await loadBrowserData("projects-data.js", "PROJECTS");
  const byGroup = new Map();

  projects.forEach(project => {
    const key = project.group || "Other";
    if (!byGroup.has(key)) byGroup.set(key, []);
    byGroup.get(key).push(project);
  });

  const sections = groupOrder
    .filter(group => byGroup.has(group))
    .map(group => renderSection(group, byGroup.get(group)));

  const remainingGroups = Array.from(byGroup.keys()).filter(group => !groupOrder.includes(group));
  remainingGroups.forEach(group => {
    sections.push(renderSection(group, byGroup.get(group)));
  });

  const projectListHtml = `      <div id="project-list">\n${sections.join("\n")}\n      </div>`;
  const pagePath = path.join(rootDir, "projects.html");
  const pageSource = await readFile(pagePath, "utf8");
  const updatedSource = pageSource.replace(
    /      <div id="project-list">[\s\S]*?      <\/div>(\n    <\/section>\n  <\/main>)/,
    `${projectListHtml}$1`
  );

  if (updatedSource === pageSource) {
    throw new Error("Failed to update projects.html project list block.");
  }

  await writeFile(pagePath, updatedSource);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
