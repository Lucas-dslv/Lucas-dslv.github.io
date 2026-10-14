(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#navigation");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Ouvrir le menu" : "Fermer le menu");
      navigation.classList.toggle("is-open", !isOpen);
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Ouvrir le menu");
        navigation.classList.remove("is-open");
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Ouvrir le menu");
        navigation.classList.remove("is-open");
        menuButton.focus();
      }
    });
  }

  // Thème clair / sombre avec mémorisation du choix
  const themeButton = document.querySelector(".theme-toggle");
  const themeIcon = document.querySelector(".theme-icon");
  const themeLabel = document.querySelector(".theme-toggle-label");
  const themeColorMeta = document.querySelector("#theme-color-meta");
  const savedTheme = localStorage.getItem("portfolio-theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  function applyTheme(theme) {
    const isDark = theme === "dark";
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    if (themeButton) {
      themeButton.setAttribute("aria-pressed", String(isDark));
      themeButton.setAttribute("aria-label", isDark ? "Activer le thème clair" : "Activer le thème sombre");
    }
    if (themeIcon) themeIcon.textContent = isDark ? "☀" : "☾";
    if (themeLabel) themeLabel.textContent = isDark ? "Clair" : "Sombre";
    if (themeColorMeta) themeColorMeta.setAttribute("content", isDark ? "#171916" : "#f6f5f1");
  }

  applyTheme(savedTheme || (systemPrefersDark ? "dark" : "light"));
  if (themeButton) {
    themeButton.addEventListener("click", () => {
      const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      localStorage.setItem("portfolio-theme", nextTheme);
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const revealElements = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if ("IntersectionObserver" in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });

    revealElements.forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
      observer.observe(element);
    });
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }
})();
