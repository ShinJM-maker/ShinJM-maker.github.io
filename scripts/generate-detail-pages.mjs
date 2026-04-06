import { mkdir, readFile, readdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const siteUrl = "https://shinjm-maker.github.io";
const today = new Date().toISOString().slice(0, 10);

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

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function stripTags(value = "") {
  return String(value).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function truncate(value, maxLength = 160) {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength - 1).trimEnd()}...`;
}

function buildMetaDescription(...parts) {
  const text = parts
    .map(part => stripTags(part || ""))
    .filter(Boolean)
    .join(" ");

  return truncate(text, 160);
}

function encodeAssetPath(relativePath) {
  return encodeURI(relativePath).replace(/#/g, "%23");
}

function renderHead({ title, description, canonical, type = "article" }) {
  const escapedTitle = escapeHtml(title);
  const escapedDescription = escapeHtml(description);
  const escapedCanonical = escapeHtml(canonical);

  return `  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapedTitle}</title>
  <meta name="description" content="${escapedDescription}" />
  <meta property="og:type" content="${escapeHtml(type)}" />
  <meta property="og:title" content="${escapedTitle}" />
  <meta property="og:description" content="${escapedDescription}" />
  <meta property="og:url" content="${escapedCanonical}" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="${escapedTitle}" />
  <meta name="twitter:description" content="${escapedDescription}" />
  <link rel="canonical" href="${escapedCanonical}" />
  <link rel="icon" href="../favicon.svg" type="image/svg+xml" />
  <link rel="stylesheet" href="../style.css" />`;
}

function renderHeader(activePage) {
  const navItems = [
    { label: "Home", href: "../index.html", key: "home" },
    { label: "Experience", href: "../experience.html", key: "experience" },
    { label: "Projects", href: "../projects.html", key: "projects" },
    { label: "Publications", href: "../publications.html", key: "publications" },
    { label: "Research Map", href: "../research-map.html", key: "research-map" },
    { label: "Profile", href: "../profile.html", key: "profile" }
  ];

  const navLinks = navItems
    .map(item => {
      const className = item.key === activePage ? ' class="active"' : "";
      return `        <a${className} href="${item.href}">${item.label}</a>`;
    })
    .join("\n");

  return `  <header class="site-header">
    <div class="container header-row">
      <a class="brand" href="../index.html">Joongmin Shin</a>
      <nav class="site-nav" aria-label="Primary">
${navLinks}
      </nav>
    </div>
  </header>`;
}

function renderProjectSection(title, body) {
  if (!body) return "";
  return `
      <section class="paper-section">
        <h2>${escapeHtml(title)}</h2>
        <p>${escapeHtml(body)}</p>
      </section>`;
}

function renderProjectPage(projects, index) {
  const project = projects[index];
  const prevProject = index > 0 ? projects[index - 1] : null;
  const nextProject = index < projects.length - 1 ? projects[index + 1] : null;
  const title = `${project.title} | Joongmin Shin`;
  const description = buildMetaDescription(project.description, project.role, project.achievements);
  const canonical = `${siteUrl}/projects/${project.slug}.html`;
  const metaParts = [project.period, project.affiliation].filter(Boolean).map(escapeHtml);
  const meta = metaParts.join(" &mdash; ");
  const prevLink = prevProject
    ? `<a href="${escapeHtml(`${prevProject.slug}.html`)}">Previous: ${escapeHtml(prevProject.title)}</a>`
    : '<a href="../projects.html">Back to Projects</a>';
  const nextLink = nextProject
    ? `<a href="${escapeHtml(`${nextProject.slug}.html`)}">Next: ${escapeHtml(nextProject.title)}</a>`
    : '<a href="../projects.html">Back to Projects</a>';

  return `<!DOCTYPE html>
<html lang="en">
<head>
${renderHead({ title, description, canonical, type: "article" })}
</head>
<body>
${renderHeader("projects")}
  <main class="container page-main">
    <article class="project-page">
      <p class="paper-kicker"><a href="../projects.html">Projects</a></p>
      <h1 class="paper-title">${escapeHtml(project.title)}</h1>
      <p class="paper-meta">${meta}</p>
${renderProjectSection("Description", project.description || "Not specified yet.")}
${renderProjectSection("Role", project.role)}
${renderProjectSection("Tools Used", project.tools)}
${renderProjectSection("Achievements", project.achievements)}

      <nav class="paper-nav" aria-label="Project navigation">
        ${prevLink}
        ${nextLink}
      </nav>
    </article>
  </main>
</body>
</html>`;
}

function renderPublicationFigure(figure) {
  if (!figure || !figure.path) return "";

  const figurePath = escapeHtml(encodeAssetPath(`../${figure.path}`));
  const caption = escapeHtml(figure.caption || "Architecture");
  const sourcePdf = figure.sourcePdf
    ? escapeHtml(encodeAssetPath(`../${figure.sourcePdf}`))
    : "";

  if (/\.pdf$/i.test(figure.path)) {
    return `
      <section class="paper-section">
        <h2>Architecture</h2>
        <object class="paper-pdf-viewer" data="${figurePath}" type="application/pdf">
          <p>Preview is unavailable. <a href="${figurePath}" target="_blank" rel="noreferrer">Open PDF</a></p>
        </object>
        <p class="paper-figure-caption">${caption}</p>
        ${sourcePdf ? `<p class="paper-figure-source"><a href="${sourcePdf}" target="_blank" rel="noreferrer">View original PDF</a></p>` : ""}
      </section>`;
  }

  return `
      <section class="paper-section">
        <h2>Architecture</h2>
        <figure class="paper-figure">
          <img src="${figurePath}" alt="${caption}" />
          <figcaption class="paper-figure-caption">${caption}</figcaption>
        </figure>
        ${sourcePdf ? `<p class="paper-figure-source"><a href="${sourcePdf}" target="_blank" rel="noreferrer">View original PDF</a></p>` : ""}
      </section>`;
}

function renderPublicationLinks(publication) {
  const links = [];

  if (publication.paperUrl) {
    links.push(`<a href="${escapeHtml(publication.paperUrl)}" target="_blank" rel="noreferrer">Paper</a>`);
  }

  if (publication.doi) {
    links.push(`<a href="${escapeHtml(`https://doi.org/${publication.doi}`)}" target="_blank" rel="noreferrer">DOI</a>`);
  }

  if (publication.arxiv) {
    const arxivUrl = publication.arxiv.startsWith("http")
      ? publication.arxiv
      : `https://arxiv.org/abs/${publication.arxiv}`;
    links.push(`<a href="${escapeHtml(arxivUrl)}" target="_blank" rel="noreferrer">arXiv</a>`);
  }

  if (!links.length) return "";

  return `
      <section class="paper-section">
        <h2>Links</h2>
        <p>${links.join("  ·  ")}</p>
      </section>`;
}

function renderPublicationPage(publications, index) {
  const publication = publications[index];
  const prevPublication = index > 0 ? publications[index - 1] : null;
  const nextPublication = index < publications.length - 1 ? publications[index + 1] : null;
  const title = `${publication.title} | Joongmin Shin`;
  const description = buildMetaDescription(publication.abstract, publication.venue, publication.category);
  const canonical = `${siteUrl}/publications/${publication.slug}.html`;
  const metaParts = [publication.date, publication.venue].filter(Boolean).map(escapeHtml);
  const meta = metaParts.join(" &mdash; ");
  const prevLink = prevPublication
    ? `<a href="${escapeHtml(`${prevPublication.slug}.html`)}">Previous: ${escapeHtml(prevPublication.title)}</a>`
    : '<a href="../publications.html">Back to Publications</a>';
  const nextLink = nextPublication
    ? `<a href="${escapeHtml(`${nextPublication.slug}.html`)}">Next: ${escapeHtml(nextPublication.title)}</a>`
    : '<a href="../publications.html">Back to Publications</a>';

  return `<!DOCTYPE html>
<html lang="en">
<head>
${renderHead({ title, description, canonical, type: "article" })}
</head>
<body>
${renderHeader("publications")}
  <main class="container page-main">
    <article class="paper-page">
      <p class="paper-kicker"><a href="../publications.html">Publications</a></p>
      <h1 class="paper-title">${escapeHtml(publication.title)}</h1>
      <p class="paper-meta">${meta}</p>
      <p class="paper-category">${escapeHtml(publication.category || "")}</p>

      <section class="paper-section">
        <h2>Authors</h2>
        <p>${publication.authorsHtml || "-"}</p>
      </section>

      <section class="paper-section">
        <h2>Abstract</h2>
        <p>${escapeHtml(publication.abstract || "Not specified yet.")}</p>
      </section>
${publication.contribution ? `
      <section class="paper-section">
        <h2>Key Contribution</h2>
        <p>${escapeHtml(publication.contribution)}</p>
      </section>` : ""}
${renderPublicationFigure(publication.figure)}
${renderPublicationLinks(publication)}

      <nav class="paper-nav" aria-label="Publication navigation">
        ${prevLink}
        ${nextLink}
      </nav>
    </article>
  </main>
</body>
</html>`;
}

function renderRedirectPage(targetPath) {
  const escapedTarget = escapeHtml(targetPath);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="refresh" content="0; url=${escapedTarget}" />
  <script>window.location.replace(${JSON.stringify(targetPath)});</script>
  <title>Redirecting...</title>
</head>
<body>
  <p>Redirecting to <a href="${escapedTarget}">${escapedTarget}</a>.</p>
</body>
</html>`;
}

async function resetGeneratedDirectory(directoryName) {
  const directoryPath = path.join(rootDir, directoryName);
  await mkdir(directoryPath, { recursive: true });

  const entries = await readdir(directoryPath, { withFileTypes: true });
  await Promise.all(
    entries
      .filter(entry => entry.isFile() && entry.name.endsWith(".html"))
      .map(entry => unlink(path.join(directoryPath, entry.name)))
  );
}

async function writeGeneratedPages(directoryName, list, renderPage) {
  await resetGeneratedDirectory(directoryName);

  await Promise.all(
    list.map((item, index) =>
      writeFile(path.join(rootDir, directoryName, `${item.slug}.html`), renderPage(list, index))
    )
  );
}

async function writeAliasPages(directoryName, list) {
  const directoryPath = path.join(rootDir, directoryName);
  const aliasEntries = list.flatMap(item =>
    (Array.isArray(item.legacySlugs) ? item.legacySlugs : []).map(alias => ({
      alias,
      target: `${item.slug}.html`
    }))
  );

  await Promise.all(
    aliasEntries.map(({ alias, target }) =>
      writeFile(path.join(directoryPath, `${alias}.html`), renderRedirectPage(target))
    )
  );
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildSitemap(projects, publications) {
  const staticRoutes = [
    { path: "/", lastmod: today, changefreq: "weekly", priority: "1.0" },
    { path: "/publications.html", lastmod: today, changefreq: "weekly", priority: "0.9" },
    { path: "/projects.html", lastmod: today, changefreq: "weekly", priority: "0.9" },
    { path: "/experience.html", lastmod: "2026-03-07", changefreq: "monthly", priority: "0.8" },
    { path: "/profile.html", lastmod: "2026-03-07", changefreq: "monthly", priority: "0.8" },
    { path: "/research-map.html", lastmod: "2026-03-07", changefreq: "monthly", priority: "0.7" }
  ];

  const detailRoutes = [
    ...projects.map(project => ({
      path: `/projects/${project.slug}.html`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.7"
    })),
    ...publications.map(publication => ({
      path: `/publications/${publication.slug}.html`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.7"
    }))
  ];

  const routes = [...staticRoutes, ...detailRoutes];
  const entries = routes.map(route => `  <url>
    <loc>${escapeXml(`${siteUrl}${route.path}`)}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`);

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>`;
}

async function main() {
  const projects = await loadBrowserData("projects-data.js", "PROJECTS");
  const publications = await loadBrowserData("publications-data.js", "PUBLICATIONS");

  await writeGeneratedPages("projects", projects, renderProjectPage);
  await writeGeneratedPages("publications", publications, renderPublicationPage);
  await writeAliasPages("publications", publications);
  await writeFile(path.join(rootDir, "sitemap.xml"), `${buildSitemap(projects, publications)}\n`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
