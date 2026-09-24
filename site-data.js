// Site-wide content that is not a publication or a project.
// After editing, run `node scripts/build.mjs` to regenerate the pages.
window.SITE = {
  name: "Joongmin Shin",
  url: "https://shinjm-maker.github.io",
  email: "tlswndals13@korea.ac.kr",
  links: {
    scholar: "https://scholar.google.com/citations?user=KKzAjXAAAAAJ",
    github: "https://github.com/shinjm-maker",
    linkedin: "https://www.linkedin.com/in/shinjm-maker",
    cv: "CV/Curriculum_Vitae_Joongmin_Shin.pdf",
    kudoc: "https://kudocai.github.io/index.html"
  },

  // Totals shown on the site (kept in sync with the CV). First-author paper counts are derived from publications-data.js.
  stats: {
    publications: 15,
    patents: 5,
    industryProjects: 4,
    transfers: 3,
    awards: 7,
    outstandingPaperAwards: 3
  },

  // Newest first. `html` may contain inline markup.
  news: [
    { date: "Sep 2026", html: '<a href="publications/admit.html"><strong>ADMIT</strong></a> was accepted at <strong>NeurIPS 2026</strong> (Main, first author).' },
    { date: "Aug 2026", html: '<a href="publications/pilar.html"><strong>PILAR</strong></a> was accepted at <strong>EMNLP 2026</strong> (Findings, first author).' },
    { date: "Apr 2026", html: '<a href="publications/hikey.html"><strong>HiKEY</strong></a> was accepted at <strong>ACL 2026</strong> (Main, <strong>Oral</strong>, first author).' },
    { date: "Feb 2026", html: '<a href="publications/m3docdep.html"><strong>M3DocDep</strong></a> was accepted at <strong>CVPR 2026</strong> (Main, first author).' },
    { date: "Aug 2025", html: '<a href="publications/multidocfusion.html"><strong>MultiDocFusion</strong></a> was accepted at <strong>EMNLP 2025</strong> (Main, first author).' },
    { date: "Aug 2025", html: 'Appointed to the National Representative <strong>K-AI Research Team</strong> (with NC AI).' },
    { date: "Oct 2024", html: '<a href="publications/styledfs.html"><strong>StyleDFS</strong></a> was accepted at <strong>EMNLP 2024</strong> (Industry, co-first author).' }
  ],

  // Home page research areas; `pubs` are publication slugs.
  researchAreas: [
    {
      title: "Structure-Aware Multimodal Reasoning",
      text: "Retrieval- and generation-oriented representations that preserve layout, section hierarchy, table–figure relations, cross-page dependencies, and provenance.",
      pubs: ["hikey", "multidocfusion"]
    },
    {
      title: "Document Structure Recovery",
      text: "LVLM-based parsing and dependency modeling for long, noisy, multi-page documents.",
      pubs: ["m3docdep", "styledfs"]
    },
    {
      title: "Auditable Evidence and Agent Memory",
      text: "Claim-to-evidence linking, page-grounded evidence graphs, and support-gated memory writes for reliable document agents.",
      pubs: ["pilar", "admit"]
    }
  ],

  patents: [
    { title: "Hierarchical Multimodal Retrieval for Open-Domain Document Question Answering", meta: "Korea · Pending · 2026 · Related to HiKEY (ACL 2026)" },
    { title: "Multi-modal, Multi-page, Multi-document Dependency Chunking with Large Vision-Language Models", meta: "Korea · Pending · 2026 · Related to M3DocDep (CVPR 2026)" },
    { title: "Device and Method for Document Chunking, and Question-Answering Device and Method Using the Same", meta: "Korea · DP-2025-0093 · Pending · 2025" },
    { title: "Rule Filtering Techniques and Methods for Knowledge Inference Systems Based on Deep Learning", meta: "Korea · P2022-0340-KR00 · Registered · Feb 2023" },
    { title: "AI-Based Adaptive Problem Recommendation System and Method for Learner-Level Assessment", meta: "Korea · 10-2022-0068075 · Registered · Nov 2022" }
  ],

  // Old URLs that should keep working.
  redirects: {
    "research-map.html": "about.html#research-map",
    "profile.html": "experience.html",
    "publications/under-review-executable-plan-representation.html": "../publications.html#under-review"
  },

  researchDirections: "Current research directions include actionable ontologies for multimodal agent memory, video-structured memory for long-horizon reasoning, and planning over structured world representations."
};
