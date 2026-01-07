document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll("section, .item, .pub-card").forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
  });

  const navLinks = Array.from(document.querySelectorAll(".top-nav a"));
  const sectionMap = new Map(
    navLinks
      .map(link => {
        const id = link.getAttribute("href").replace("#", "");
        const section = document.getElementById(id);
        return section ? [section, link] : null;
      })
      .filter(Boolean)
  );

  const spy = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const link = sectionMap.get(entry.target);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.classList.remove("active"));
          link.classList.add("active");
        }
      });
    },
    { threshold: 0.35 }
  );
  sectionMap.forEach((_link, section) => spy.observe(section));

  const backToTop = document.querySelector(".back-to-top");
  const toggleBackToTop = () => {
    if (window.scrollY > 400) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  };
  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  toggleBackToTop();

  const nodes = Array.from(document.querySelectorAll(".rg-node"));
  nodes.forEach(rect => {
    const key = rect.dataset.node;
    const relatedText = document.querySelectorAll(`text[data-node='${key}']`);
    rect.addEventListener("mouseenter", () => {
      rect.classList.add("highlight");
      relatedText.forEach(t => t.classList.add("rg-text-highlight"));
    });
    rect.addEventListener("mouseleave", () => {
      rect.classList.remove("highlight");
      relatedText.forEach(t => t.classList.remove("rg-text-highlight"));
    });
    rect.addEventListener("focus", () => {
      rect.classList.add("highlight");
      relatedText.forEach(t => t.classList.add("rg-text-highlight"));
    });
    rect.addEventListener("blur", () => {
      rect.classList.remove("highlight");
      relatedText.forEach(t => t.classList.remove("rg-text-highlight"));
    });
  });
});
