document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");

  if (navToggle && siteNav) {
    const setOpen = open => {
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      siteNav.classList.toggle("open", open);
    };

    navToggle.addEventListener("click", () => {
      setOpen(navToggle.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("click", event => {
      if (!navToggle.contains(event.target) && !siteNav.contains(event.target)) setOpen(false);
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") setOpen(false);
    });
  }

  // Dark mode toggle; the choice is remembered per browser, otherwise the system setting wins.
  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    const root = document.documentElement;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    const isDark = () => (root.dataset.theme ? root.dataset.theme === "dark" : systemDark.matches);
    const sync = () => themeToggle.setAttribute("aria-pressed", String(isDark()));

    themeToggle.addEventListener("click", () => {
      const next = isDark() ? "light" : "dark";
      root.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch (error) {
        // Storage can be unavailable (private mode); the toggle still works for this page view.
      }
      sync();
    });

    systemDark.addEventListener?.("change", sync);
    sync();
  }
});
