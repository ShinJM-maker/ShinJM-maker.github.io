(function () {
  const list = Array.isArray(window.PUBLICATIONS) ? window.PUBLICATIONS : [];
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  const titleEl = document.getElementById("paper-title");
  const metaEl = document.getElementById("paper-meta");
  const categoryEl = document.getElementById("paper-category");
  const authorsEl = document.getElementById("paper-authors");
  const abstractEl = document.getElementById("paper-abstract");
  const architectureEl = document.getElementById("paper-architecture");
  const linksEl = document.getElementById("paper-links");
  const prevEl = document.getElementById("paper-prev");
  const nextEl = document.getElementById("paper-next");

  if (!slug || !list.length) {
    titleEl.textContent = "Publication Not Found";
    metaEl.textContent = "Please return to the publications page.";
    categoryEl.textContent = "";
    authorsEl.textContent = "-";
    abstractEl.textContent = "No publication data is available.";
    architectureEl.innerHTML = "";
    linksEl.innerHTML = "";
    prevEl.textContent = "Back to Publications";
    prevEl.href = "publications.html";
    nextEl.remove();
    return;
  }

  const index = list.findIndex(item => item.slug === slug);
  if (index === -1) {
    titleEl.textContent = "Publication Not Found";
    metaEl.textContent = "This publication entry does not exist.";
    categoryEl.textContent = "";
    authorsEl.textContent = "-";
    abstractEl.textContent = "Please check the URL or return to the publications list.";
    architectureEl.innerHTML = "";
    linksEl.innerHTML = "";
    prevEl.textContent = "Back to Publications";
    prevEl.href = "publications.html";
    nextEl.remove();
    return;
  }

  const paper = list[index];
  const prevPaper = index > 0 ? list[index - 1] : null;
  const nextPaper = index < list.length - 1 ? list[index + 1] : null;

  titleEl.textContent = paper.title;
  metaEl.textContent = `${paper.date}  —  ${paper.venue}`;
  categoryEl.textContent = paper.category || "";
  authorsEl.innerHTML = paper.authorsHtml;
  abstractEl.textContent = paper.abstract;

  if (paper.figure && paper.figure.path) {
    const encodedPath = encodeURI(paper.figure.path);
    const caption = paper.figure.caption || "Architecture";
    const sourcePdf = paper.figure.sourcePdf ? encodeURI(paper.figure.sourcePdf) : "";
    const isPdf = /\.pdf$/i.test(paper.figure.path);

    if (isPdf) {
      architectureEl.innerHTML = `
        <h2>Architecture</h2>
        <object class="paper-pdf-viewer" data="${encodedPath}" type="application/pdf">
          <p>Preview is unavailable. <a href="${encodedPath}" target="_blank" rel="noreferrer">Open PDF</a></p>
        </object>
        <p class="paper-figure-caption">${caption}</p>
        ${sourcePdf ? `<p class="paper-figure-source"><a href="${sourcePdf}" target="_blank" rel="noreferrer">View original PDF</a></p>` : ""}
      `;
    } else {
      architectureEl.innerHTML = `
        <h2>Architecture</h2>
        <figure class="paper-figure">
          <img src="${encodedPath}" alt="${caption}" />
          <figcaption class="paper-figure-caption">${caption}</figcaption>
        </figure>
        ${sourcePdf ? `<p class="paper-figure-source"><a href="${sourcePdf}" target="_blank" rel="noreferrer">View original PDF</a></p>` : ""}
      `;
    }
  } else {
    architectureEl.innerHTML = "";
  }

  const parts = [];
  if (paper.paperUrl) {
    parts.push(`<a href="${paper.paperUrl}" target="_blank" rel="noreferrer">Paper</a>`);
  }
  if (paper.doi) {
    const doiUrl = `https://doi.org/${paper.doi}`;
    parts.push(`<a href="${doiUrl}" target="_blank" rel="noreferrer">DOI</a>`);
  }
  if (paper.arxiv) {
    const arxivUrl = paper.arxiv.startsWith("http") ? paper.arxiv : `https://arxiv.org/abs/${paper.arxiv}`;
    parts.push(`<a href="${arxivUrl}" target="_blank" rel="noreferrer">arXiv</a>`);
  }

  if (parts.length) {
    linksEl.innerHTML = `<h2>Links</h2><p>${parts.join("  ·  ")}</p>`;
  } else {
    linksEl.innerHTML = "";
  }

  if (prevPaper) {
    prevEl.textContent = `Previous: ${prevPaper.title}`;
    prevEl.href = `publication.html?slug=${prevPaper.slug}`;
  } else {
    prevEl.textContent = "Back to Publications";
    prevEl.href = "publications.html";
  }

  if (nextPaper) {
    nextEl.textContent = `Next: ${nextPaper.title}`;
    nextEl.href = `publication.html?slug=${nextPaper.slug}`;
  } else {
    nextEl.textContent = "Back to Publications";
    nextEl.href = "publications.html";
  }

  document.title = `${paper.title} | Joongmin Shin`;
})();
