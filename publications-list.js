(function () {
  const container = document.getElementById("publication-groups");
  const list = Array.isArray(window.PUBLICATIONS) ? window.PUBLICATIONS : [];
  if (!container || !list.length) return;

  function renderCard(pub) {
    const meta = [pub.venue, pub.date].filter(Boolean).join(" · ");
    const roleBadge = pub.role ? `<span class="pub-role-badge">${pub.role}</span>` : "";
    const statusBadge = pub.status ? `<span class="pub-status-badge pub-status-${pub.status.toLowerCase().replace(/\s+/g, "-")}">${pub.status}</span>` : "";
    const contribution = pub.contribution ? `<p class="pub-contribution">${pub.contribution}</p>` : "";
    const keywords = (pub.keywords && pub.keywords.length)
      ? `<div class="pub-keywords">${pub.keywords.map(k => `<span class="pub-keyword">${k}</span>`).join("")}</div>`
      : "";

    const inner = `
      <div class="pub-titleline">
        <h2>${pub.title}</h2>
        <span class="pub-type-badge">${pub.category}</span>
      </div>
      <p class="meta">${meta}${roleBadge}${statusBadge}</p>
      <p class="authors">${pub.authorsHtml || ""}</p>
      ${contribution}
      ${keywords}
    `;

    if (pub.noDetail) {
      return `<article class="pub-card">${inner}</article>`;
    }

    return `
      <article class="pub-card pub-card-clickable">
        <a class="pub-card-link" href="publications/${pub.slug}.html">${inner}</a>
      </article>
    `;
  }

  const topConferences = list.filter(pub => pub.category === "Top Conferences");
  const journals = list.filter(pub => pub.category === "Journals");
  const domestic = list.filter(pub => pub.category === "Domestic Conferences & Theses");
  const underReviewAll = list.filter(pub => pub.category === "Under Review");
  const underReviewFirst = underReviewAll.filter(pub => pub.role === "First Author");
  const underReviewCo = underReviewAll.filter(pub => pub.role === "Co-Author");

  const sections = [];

  sections.push(`
    <section class="pub-group">
      <h2 class="pub-group-title">Selected Publications</h2>
      <div class="pub-group-list">
        ${topConferences.map(renderCard).join("\n")}
      </div>
    </section>
  `);

  if (journals.length) {
    sections.push(`
      <section class="pub-group">
        <h2 class="pub-group-title">Journals</h2>
        <div class="pub-group-list">
          ${journals.map(renderCard).join("\n")}
        </div>
      </section>
    `);
  }

  if (domestic.length) {
    sections.push(`
      <section class="pub-group">
        <h2 class="pub-group-title">Domestic Conferences &amp; Theses</h2>
        <div class="pub-group-list">
          ${domestic.map(renderCard).join("\n")}
        </div>
      </section>
    `);
  }

  const underReviewSubsections = [];
  if (underReviewFirst.length) {
    underReviewSubsections.push(`
      <h3 class="pub-subgroup-title">First-Author Manuscripts (${underReviewFirst.length})</h3>
      <div class="pub-group-list">
        ${underReviewFirst.map(renderCard).join("\n")}
      </div>
    `);
  }
  if (underReviewCo.length) {
    underReviewSubsections.push(`
      <h3 class="pub-subgroup-title">Co-Author Manuscripts (${underReviewCo.length})</h3>
      <div class="pub-group-list">
        ${underReviewCo.map(renderCard).join("\n")}
      </div>
    `);
  }
  if (underReviewSubsections.length) {
    sections.push(`
      <section class="pub-group">
        <h2 class="pub-group-title">Manuscripts Under Review</h2>
        <p class="section-note">${underReviewFirst.length} first-author and ${underReviewCo.length} co-author manuscripts currently under peer review at top-tier venues (anonymized titles per double-blind submission policy).</p>
        ${underReviewSubsections.join("\n")}
      </section>
    `);
  }

  sections.push(`
    <section class="pub-group">
      <h2 class="pub-group-title">Patents</h2>
      <div class="patent-list">
        <div class="patent-item">
          <span class="patent-title">Hierarchical Multimodal Retrieval for Open-Domain Document Question Answering</span>
          <span class="patent-meta">Related to HiKEY &middot; ACL 2026</span>
        </div>
        <div class="patent-item">
          <span class="patent-title">Multi-modal, Multi-page, Multi-document Dependency Chunking with Large Vision-Language Models</span>
          <span class="patent-meta">Related to M3DocDep &middot; CVPR 2026</span>
        </div>
        <div class="patent-item">
          <span class="patent-title">Device and Method for Document Chunking, and Question-Answering Device and Method Using the Same</span>
          <span class="patent-meta">DP-2025-0093 &middot; EMNLP 2024</span>
        </div>
        <div class="patent-item">
          <span class="patent-title">Rule Filtering Techniques and Methods for Knowledge Inference Systems Based on Deep Learning</span>
          <span class="patent-meta">P2022-0340-KR00 &middot; Filed 2023</span>
        </div>
        <div class="patent-item">
          <span class="patent-title">An AI-Based System and Method for Recommending Problems Tailored to the Learner&rsquo;s Level</span>
          <span class="patent-meta">10-2022-0068075 &middot; Registered 2022</span>
        </div>
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
