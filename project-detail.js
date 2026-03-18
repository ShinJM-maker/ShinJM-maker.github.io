(function () {
  const list = Array.isArray(window.PROJECTS) ? window.PROJECTS : [];
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  if (!slug) {
    window.location.replace("projects.html");
    return;
  }

  const project = list.find(item => item.slug === slug);
  if (project) {
    window.location.replace(`projects/${project.slug}.html`);
    return;
  }

  const titleEl = document.getElementById("project-title");
  const metaEl = document.getElementById("project-meta");
  const descriptionEl = document.getElementById("project-description");
  const roleEl = document.getElementById("project-role");
  const toolsEl = document.getElementById("project-tools");
  const achievementsEl = document.getElementById("project-achievements");
  const prevEl = document.getElementById("project-prev");
  const nextEl = document.getElementById("project-next");

  if (!list.length) {
    titleEl.textContent = "Project Not Found";
    metaEl.textContent = "Please return to the projects page.";
    descriptionEl.textContent = "No project data is available.";
    roleEl.textContent = "Not specified yet.";
    toolsEl.textContent = "Not specified yet.";
    achievementsEl.textContent = "Not specified yet.";
    prevEl.textContent = "Back to Projects";
    prevEl.href = "projects.html";
    nextEl.remove();
    return;
  }

  if (!project) {
    titleEl.textContent = "Project Not Found";
    metaEl.textContent = "This project entry does not exist.";
    descriptionEl.textContent = "Please check the URL or return to the project list.";
    roleEl.textContent = "Not specified yet.";
    toolsEl.textContent = "Not specified yet.";
    achievementsEl.textContent = "Not specified yet.";
    prevEl.textContent = "Back to Projects";
    prevEl.href = "projects.html";
    nextEl.remove();
    return;
  }

  const index = list.findIndex(item => item.slug === slug);
  const prevProject = index > 0 ? list[index - 1] : null;
  const nextProject = index < list.length - 1 ? list[index + 1] : null;

  titleEl.textContent = project.title;
  metaEl.textContent = `${project.period || ""}  —  ${project.affiliation || ""}`;
  descriptionEl.textContent = project.description || "Not specified yet.";
  roleEl.textContent = project.role || "Not specified yet.";
  toolsEl.textContent = project.tools || "Not specified yet.";
  achievementsEl.textContent = project.achievements || "Not specified yet.";

  if (prevProject) {
    prevEl.textContent = `Previous: ${prevProject.title}`;
    prevEl.href = `projects/${prevProject.slug}.html`;
  } else {
    prevEl.textContent = "Back to Projects";
    prevEl.href = "projects.html";
  }

  if (nextProject) {
    nextEl.textContent = `Next: ${nextProject.title}`;
    nextEl.href = `projects/${nextProject.slug}.html`;
  } else {
    nextEl.textContent = "Back to Projects";
    nextEl.href = "projects.html";
  }

  document.title = `${project.title} | Joongmin Shin`;
})();
