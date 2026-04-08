document.addEventListener("DOMContentLoaded", () => {
  // ── Hamburger menu toggle ──
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      siteNav.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (!navToggle.contains(e.target) && !siteNav.contains(e.target)) {
        navToggle.setAttribute("aria-expanded", "false");
        siteNav.classList.remove("open");
      }
    });
  }

  // ── Back to top ──
  const backToTop = document.querySelector(".back-to-top");

  const toggleBackToTop = () => {
    if (!backToTop) return;
    backToTop.classList.toggle("show", window.scrollY > 520);
  };

  window.addEventListener("scroll", toggleBackToTop, { passive: true });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  toggleBackToTop();

  // ── Reveal animation on scroll ──
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );

  document
    .querySelectorAll(".section-block, .pub-card, .entry-card, .detail-card, .impact-stat, .research-stage-card, .pillar-card")
    .forEach((el) => {
      el.classList.add("reveal");
      revealObserver.observe(el);
    });
});
