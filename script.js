document.addEventListener("DOMContentLoaded", () => {
  const navLinks = Array.from(document.querySelectorAll(".top-nav a"));
  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const backToTop = document.querySelector(".back-to-top");

  const setActiveNav = id => {
    navLinks.forEach(link => {
      const targetId = link.getAttribute("href").replace("#", "");
      const isActive = targetId === id;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );

  const initCompactSections = () => {
    const compactSections = Array.from(document.querySelectorAll("section[data-compact]"));

    compactSections.forEach(section => {
      const selector = section.dataset.targetSelector;
      const limit = Number.parseInt(section.dataset.limit || "", 10);
      if (!selector || !Number.isFinite(limit) || limit < 1) return;

      const items = Array.from(section.querySelectorAll(selector));
      if (items.length <= limit) return;

      const hiddenItems = items.slice(limit);
      hiddenItems.forEach(item => {
        item.classList.add("compact-hidden");
        item.setAttribute("aria-hidden", "true");
      });

      const itemLabel = section.id === "publications" ? "publications" : "projects";
      let isExpanded = false;

      const toggleButton = document.createElement("button");
      toggleButton.type = "button";
      toggleButton.className = "compact-toggle";
      toggleButton.setAttribute("aria-expanded", "false");
      if (section.id) {
        toggleButton.setAttribute("aria-controls", section.id);
      }

      const updateLabel = () => {
        toggleButton.textContent = isExpanded
          ? `Show fewer ${itemLabel}`
          : `Show ${hiddenItems.length} more ${itemLabel}`;
      };

      toggleButton.addEventListener("click", () => {
        isExpanded = !isExpanded;
        toggleButton.setAttribute("aria-expanded", String(isExpanded));
        hiddenItems.forEach(item => {
          item.classList.toggle("compact-hidden", !isExpanded);
          if (isExpanded) {
            item.removeAttribute("aria-hidden");
            item.classList.add("reveal");
            revealObserver.observe(item);
          } else {
            item.setAttribute("aria-hidden", "true");
          }
        });
        updateLabel();
      });

      updateLabel();
      section.appendChild(toggleButton);
    });
  };

  initCompactSections();

  document
    .querySelectorAll("section, .item, .pub-card")
    .forEach(el => {
      el.classList.add("reveal");
      revealObserver.observe(el);
    });

  const sectionObserver = new IntersectionObserver(
    entries => {
      const current = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (current) {
        setActiveNav(current.target.id);
      }
    },
    { threshold: [0.05, 0.2, 0.4, 0.7], rootMargin: "-38% 0px -48% 0px" }
  );

  sections.forEach(section => sectionObserver.observe(section));

  const scrollToHashSection = (hash, behavior = "smooth") => {
    const id = hash.replace("#", "");
    const target = id ? document.getElementById(id) : null;
    if (!target) return false;

    target.scrollIntoView({ behavior, block: "start" });
    setActiveNav(id);
    return true;
  };

  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      const hash = link.getAttribute("href");
      if (!hash || !hash.startsWith("#")) return;

      event.preventDefault();
      history.pushState(null, "", hash);
      scrollToHashSection(hash, "smooth");
    });
  });

  window.addEventListener("hashchange", () => {
    if (!scrollToHashSection(location.hash, "smooth")) {
      setActiveNav(sections[0]?.id || "home");
    }
  });

  window.addEventListener("popstate", () => {
    if (!scrollToHashSection(location.hash, "auto")) {
      setActiveNav(sections[0]?.id || "home");
    }
  });

  if (!scrollToHashSection(location.hash, "auto")) {
    setActiveNav(sections[0]?.id || "home");
  }

  const toggleBackToTop = () => {
    if (!backToTop) return;
    backToTop.classList.toggle("show", window.scrollY > 520);
  };

  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  toggleBackToTop();
});
