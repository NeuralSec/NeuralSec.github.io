(function() {
  var storageKey = "site-theme";
  var root = document.documentElement;

  function getStoredTheme() {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function getPreferredTheme() {
    var storedTheme = getStoredTheme();

    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }

    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem(storageKey, theme);
    } catch (error) {}
  }

  function setTheme(theme) {
    var toggle = document.getElementById("theme-toggle");
    var isDark = theme === "dark";

    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;

    if (!toggle) {
      return;
    }

    toggle.setAttribute("aria-pressed", isDark ? "true" : "false");
    toggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    toggle.setAttribute("title", isDark ? "Switch to light theme" : "Switch to dark theme");

    var icon = toggle.querySelector(".theme-toggle__icon");
    var text = toggle.querySelector(".theme-toggle__text");

    if (icon) {
      icon.classList.toggle("fa-moon", !isDark);
      icon.classList.toggle("fa-sun", isDark);
    }

    if (text) {
      text.textContent = isDark ? "Light" : "Dark";
    }
  }

  function initThemeToggle() {
    var toggle = document.getElementById("theme-toggle");

    setTheme(getPreferredTheme());

    if (!toggle) {
      return;
    }

    toggle.addEventListener("click", function() {
      var nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";

      setTheme(nextTheme);
      storeTheme(nextTheme);
    });

    if (window.matchMedia) {
      var mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      var syncSystemTheme = function(event) {
        if (!getStoredTheme()) {
          setTheme(event.matches ? "dark" : "light");
        }
      };

      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", syncSystemTheme);
      } else if (mediaQuery.addListener) {
        mediaQuery.addListener(syncSystemTheme);
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initThemeToggle);
  } else {
    initThemeToggle();
  }
})();
