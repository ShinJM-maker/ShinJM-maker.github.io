import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const outputDir = path.join(rootDir, "records");

function loadBrowserData(filename, key) {
  const source = fs.readFileSync(path.join(rootDir, filename), "utf8");
  const context = { window: {} };
  vm.runInNewContext(source, context, { filename });
  return context.window[key];
}

function stripHtml(value = "") {
  return String(value)
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(value = "") {
  return stripHtml(value)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function pushField(lines, label, value) {
  if (!value) {
    return;
  }
  lines.push(`- ${label}: ${value}`);
}

function pushSection(lines, title, body) {
  if (!body) {
    return;
  }
  lines.push("", `## ${title}`, body);
}

function writeMarkdown(dirPath, filename, lines) {
  ensureDir(dirPath);
  fs.writeFileSync(path.join(dirPath, filename), `${lines.join("\n").trim()}\n`, "utf8");
}

function appendItem(lines, title, fields = [], sections = []) {
  lines.push(`## ${title}`, "");

  for (const [label, value] of fields) {
    pushField(lines, label, value);
  }

  for (const [sectionTitle, body] of sections) {
    pushSection(lines, sectionTitle, body);
  }

  lines.push("");
}

function buildItemMarkdown(title, fields = [], sections = []) {
  const lines = [`# ${title}`, ""];

  for (const [label, value] of fields) {
    pushField(lines, label, value);
  }

  for (const [sectionTitle, body] of sections) {
    pushSection(lines, sectionTitle, body);
  }

  return lines;
}

const publications = loadBrowserData("publications-data.js", "PUBLICATIONS");
const projects = loadBrowserData("projects-data.js", "PROJECTS");

const awards = [
  {
    slug: "deputy-prime-minister-and-minister-of-education-award",
    title: "Deputy Prime Minister and Minister of Education Award",
    year: "2024",
    organization: "Ministry of Education / National Research Foundation",
    description: "Competition for Best Practices in Academia-Industry Cooperation.",
    source: ["profile.html", "CV/Curriculum_Vitae_Joongmin_Shin.pdf"]
  },
  {
    slug: "outstanding-paper-presentation-award-kiise-2023",
    title: "Outstanding Paper Presentation Award",
    year: "2023",
    organization: "Korean Institute of Information Scientists and Engineers (KIISE)",
    source: ["profile.html", "CV/Curriculum_Vitae_Joongmin_Shin.pdf"]
  },
  {
    slug: "grand-prize-samsung-fire-and-marine-insurance-llm-mvp-competition-2023",
    title: "Grand Prize",
    year: "2023",
    organization: "Samsung Fire & Marine Insurance",
    description: "LLM-based MVP Model Idea Competition.",
    source: ["profile.html", "CV/Curriculum_Vitae_Joongmin_Shin.pdf"]
  },
  {
    slug: "excellence-award-ku-grant-technology-track-2023",
    title: "Excellence Award (Technology Track)",
    year: "2023",
    organization: "Korea University",
    description: "KU-Grant Program.",
    source: ["profile.html", "CV/Curriculum_Vitae_Joongmin_Shin.pdf"]
  },
  {
    slug: "outstanding-paper-presentation-award-ksc-2022",
    title: "Outstanding Paper Presentation Award",
    year: "2022",
    organization: "Korea Software Congress (KSC)",
    source: ["profile.html", "CV/Curriculum_Vitae_Joongmin_Shin.pdf"]
  },
  {
    slug: "excellence-award-student-led-research-project-graduate-school-of-ai-2022",
    title: "Excellence Award",
    year: "2022",
    organization: "Graduate School of AI, Pusan National University",
    description: "Student-led Research Project.",
    source: ["profile.html", "CV/Curriculum_Vitae_Joongmin_Shin.pdf"]
  },
  {
    slug: "milestone-scholarship-grade-a-2020",
    title: "Milestone Scholarship (Grade A)",
    year: "2020",
    organization: "Pusan National University",
    description: "SW-centered University Milestone Scholarship Program.",
    source: ["CV/Curriculum_Vitae_Joongmin_Shin.pdf"]
  }
];

const patents = [
  {
    slug: "adaptive-rule-based-filtering-patent",
    title: "Patent on Adaptive Rule-Based Filtering",
    description:
      "The CV states that the hybrid QA systems work resulted in a 10% accuracy improvement and a patent on adaptive rule-based filtering.",
    note: "The repository does not provide a formal patent title, number, or filing date for this item.",
    source: ["CV/Curriculum_Vitae_Joongmin_Shin.pdf"]
  },
  {
    slug: "hybrid-neural-symbolic-nlp-related-patents",
    title: "Related Patents Filed on Hybrid Neural-Symbolic NLP",
    period: "Mar 2021 - Feb 2023",
    description:
      "The profile page and CV state that related patents were filed while participating in national AI projects during the M.S. research period.",
    note: "The repository does not include the individual patent titles.",
    source: ["profile.html", "CV/Curriculum_Vitae_Joongmin_Shin.pdf"]
  },
  {
    slug: "homepage-patent-count-summary",
    title: "Homepage Patent Count Summary",
    count: "5 patents",
    description:
      "The homepage summary chip lists 5 patents, but the repository does not contain the complete titled patent list needed to split them into named records.",
    source: ["index.html"]
  }
];

ensureDir(outputDir);

for (const publication of publications) {
  const dirPath = path.join(outputDir, "publications");
  const lines = buildItemMarkdown(
    publication.title,
    [
      ["Type", "Publication"],
      ["Slug", publication.slug],
      ["Category", publication.category],
      ["Venue", publication.venue],
      ["Date", publication.date],
      ["Authors", stripHtml(publication.authorsHtml)],
      ["Role", publication.role],
      ["Status", publication.status],
      ["Keywords", Array.isArray(publication.keywords) ? publication.keywords.join(", ") : ""],
      ["Paper URL", publication.paperUrl],
      ["DOI", publication.doi ? `https://doi.org/${publication.doi}` : ""],
      ["arXiv", publication.arxiv],
      ["Figure", publication.figure?.path || ""],
      ["Detail Page", `publications/${publication.slug}.html`],
      ["Source", "`publications-data.js`"]
    ],
    [
      ["Abstract", publication.abstract],
      ["Contribution", publication.contribution]
    ]
  );

  writeMarkdown(dirPath, `${publication.slug}.md`, lines);
}

for (const project of projects) {
  const dirPath = path.join(outputDir, "projects");
  const lines = buildItemMarkdown(
    project.title,
    [
      ["Type", "Project"],
      ["Slug", project.slug],
      ["Period", project.period],
      ["Affiliation", project.affiliation],
      ["Group", project.group],
      ["Role", project.role],
      ["Tools", project.tools],
      ["Achievements", project.achievements],
      ["Detail Page", `projects/${project.slug}.html`],
      ["Source", "`projects-data.js`"]
    ],
    [["Description", project.description]]
  );

  writeMarkdown(dirPath, `${project.slug}.md`, lines);
}

for (const award of awards) {
  const dirPath = path.join(outputDir, "awards");
  const lines = buildItemMarkdown(
    award.title,
    [
      ["Type", "Award"],
      ["Year", award.year],
      ["Organization", award.organization],
      ["Source", award.source.map(item => `\`${item}\``).join(", ")]
    ],
    [["Description", award.description]]
  );

  writeMarkdown(dirPath, `${award.slug || slugify(award.title)}.md`, lines);
}

for (const patent of patents) {
  const dirPath = path.join(outputDir, "patents");
  const lines = buildItemMarkdown(
    patent.title,
    [
      ["Type", "Patent"],
      ["Period", patent.period],
      ["Count", patent.count],
      ["Source", patent.source.map(item => `\`${item}\``).join(", ")]
    ],
    [
      ["Description", patent.description],
      ["Note", patent.note]
    ]
  );

  writeMarkdown(dirPath, `${patent.slug || slugify(patent.title)}.md`, lines);
}

const publicationsDoc = [
  "# Publications",
  "",
  `Total items: ${publications.length}`,
  ""
];

for (const publication of publications) {
  appendItem(
    publicationsDoc,
    publication.title,
    [
      ["Slug", publication.slug],
      ["Category", publication.category],
      ["Venue", publication.venue],
      ["Date", publication.date],
      ["Authors", stripHtml(publication.authorsHtml)],
      ["Role", publication.role],
      ["Status", publication.status],
      ["Keywords", Array.isArray(publication.keywords) ? publication.keywords.join(", ") : ""],
      ["Paper URL", publication.paperUrl],
      ["DOI", publication.doi ? `https://doi.org/${publication.doi}` : ""],
      ["arXiv", publication.arxiv],
      ["Figure", publication.figure?.path || ""],
      ["Detail Page", `publications/${publication.slug}.html`],
      ["Per-item Markdown", `publications/${publication.slug}.md`],
      ["Source", "`publications-data.js`"]
    ],
    [
      ["Abstract", publication.abstract],
      ["Contribution", publication.contribution]
    ]
  );
}

writeMarkdown(outputDir, "publications.md", publicationsDoc);

const projectsDoc = [
  "# Projects",
  "",
  `Total items: ${projects.length}`,
  ""
];

for (const project of projects) {
  appendItem(
    projectsDoc,
    project.title,
    [
      ["Slug", project.slug],
      ["Period", project.period],
      ["Affiliation", project.affiliation],
      ["Group", project.group],
      ["Role", project.role],
      ["Tools", project.tools],
      ["Achievements", project.achievements],
      ["Detail Page", `projects/${project.slug}.html`],
      ["Per-item Markdown", `projects/${project.slug}.md`],
      ["Source", "`projects-data.js`"]
    ],
    [["Description", project.description]]
  );
}

writeMarkdown(outputDir, "projects.md", projectsDoc);

const awardsDoc = [
  "# Awards",
  "",
  `Total items: ${awards.length}`,
  ""
];

for (const award of awards) {
  appendItem(
    awardsDoc,
    award.title,
    [
      ["Year", award.year],
      ["Organization", award.organization],
      ["Per-item Markdown", `awards/${award.slug || slugify(award.title)}.md`],
      ["Source", award.source.map(item => `\`${item}\``).join(", ")]
    ],
    [["Description", award.description]]
  );
}

writeMarkdown(outputDir, "awards.md", awardsDoc);

const patentsDoc = [
  "# Patents",
  "",
  "The repository does not contain a complete structured patent list. The entries below preserve only the patent-related information explicitly available in the repository.",
  "",
  `Total patent-related records: ${patents.length}`,
  ""
];

for (const patent of patents) {
  appendItem(
    patentsDoc,
    patent.title,
    [
      ["Period", patent.period],
      ["Count", patent.count],
      ["Per-item Markdown", `patents/${patent.slug || slugify(patent.title)}.md`],
      ["Source", patent.source.map(item => `\`${item}\``).join(", ")]
    ],
    [
      ["Description", patent.description],
      ["Note", patent.note]
    ]
  );
}

writeMarkdown(outputDir, "patents.md", patentsDoc);

const readmeLines = [
  "# Records",
  "",
  "This directory stores markdown copies of the achievements available in this repository.",
  "",
  `- Publications: ${publications.length}`,
  `- Projects: ${projects.length}`,
  `- Awards: ${awards.length}`,
  `- Patent-related records: ${patents.length}`,
  "",
  "## Category Files",
  "- `publications.md`: all publication records in one markdown file",
  "- `projects.md`: all project records in one markdown file",
  "- `awards.md`: all award records in one markdown file",
  "- `patents.md`: all patent-related records in one markdown file",
  "",
  "## Note on Patents",
  "The repository does not provide a complete titled patent list. The patent markdown files only preserve the patent information that is explicitly available in `index.html`, `profile.html`, and `CV/Curriculum_Vitae_Joongmin_Shin.pdf`."
];

writeMarkdown(outputDir, "README.md", readmeLines);

console.log(
  `Generated markdown records: ${publications.length} publications, ${projects.length} projects, ${awards.length} awards, ${patents.length} patent-related records.`
);
