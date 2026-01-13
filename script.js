document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  const navLinks = Array.from(document.querySelectorAll(".top-nav a"));
  const templates = new Map();

  // Extract sections as templates and clear main
  Array.from(main.querySelectorAll("section")).forEach(section => {
    templates.set(section.id, section.cloneNode(true));
    section.remove();
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.15 }
  );

  const prepareReveal = root => {
    root.querySelectorAll("section, .item, .pub-card").forEach(el => {
      el.classList.add("reveal");
      observer.observe(el);
    });
  };

  const initGraphHover = root => {
    const nodes = Array.from(root.querySelectorAll(".rg-node"));
    nodes.forEach(rect => {
      const key = rect.dataset.node;
      const relatedText = root.querySelectorAll(`text[data-node='${key}']`);
      const activate = () => {
        rect.classList.add("highlight");
        relatedText.forEach(t => t.classList.add("rg-text-highlight"));
      };
      const deactivate = () => {
        rect.classList.remove("highlight");
        relatedText.forEach(t => t.classList.remove("rg-text-highlight"));
      };
      rect.addEventListener("mouseenter", activate);
      rect.addEventListener("mouseleave", deactivate);
      rect.addEventListener("focus", activate);
      rect.addEventListener("blur", deactivate);
    });
  };

  const setActiveNav = id => {
    navLinks.forEach(link => {
      const target = link.getAttribute("href").replace("#", "");
      link.classList.toggle("active", target === id);
    });
  };

  const renderSection = id => {
    const tpl = templates.get(id) || templates.values().next().value;
    if (!tpl) return;
    main.innerHTML = "";
    const node = tpl.cloneNode(true);
    main.appendChild(node);
    prepareReveal(main);
    initGraphHover(main);
    if (window.mermaid) {
      mermaid.initialize({ startOnLoad: false, securityLevel: "loose" });
      mermaid.run({ querySelector: ".mermaid" });
    }
    setActiveNav(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  };

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const id = link.getAttribute("href").replace("#", "");
      renderSection(id);
    });
  });

  const initialId = location.hash ? location.hash.replace("#", "") : "home";
  renderSection(initialId);

  const backToTop = document.querySelector(".back-to-top");
  const toggleBackToTop = () => {
    if (window.scrollY > 200) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  };
  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  toggleBackToTop();
});
