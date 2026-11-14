(function () {
  "use strict";

  function setupSkipLink() {
    var main = document.querySelector("main");
    if (!main) return;

    if (!main.id) main.id = "main-content";
    main.setAttribute("tabindex", "-1");
    main.setAttribute("aria-label", "Основное содержимое страницы");

    if (document.querySelector(".skip-link")) return;

    var link = document.createElement("a");
    link.className = "skip-link";
    link.href = "#" + main.id;
    link.textContent = "Перейти к основному содержимому";
    link.addEventListener("click", function () {
      window.requestAnimationFrame(function () {
        main.focus({ preventScroll: false });
      });
    });
    document.body.insertBefore(link, document.body.firstChild);
  }

  function setupExternalLinks() {
    var links = document.querySelectorAll('a[target="_blank"]');
    links.forEach(function (link) {
      var rel = (link.getAttribute("rel") || "").split(/\s+/).filter(Boolean);
      if (rel.indexOf("noopener") === -1) rel.push("noopener");
      if (rel.indexOf("noreferrer") === -1) rel.push("noreferrer");
      link.setAttribute("rel", rel.join(" "));
    });
  }

  function setupDecorativeSvg() {
    var svgs = document.querySelectorAll("a[aria-label] svg, .page__close svg");
    svgs.forEach(function (svg) {
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("focusable", "false");
    });
  }

  function setupImages() {
    var images = document.querySelectorAll("img");
    images.forEach(function (img) {
      if (!img.hasAttribute("decoding")) img.setAttribute("decoding", "async");

      var heroBox = img.closest(".page__image");
      if (heroBox) {
        var size = heroBox.classList.contains("page__image-copyright") ? 300 : 330;
        if (!img.hasAttribute("width")) img.setAttribute("width", String(size));
        if (!img.hasAttribute("height")) img.setAttribute("height", String(size));
        if (!img.hasAttribute("fetchpriority")) img.setAttribute("fetchpriority", "high");
        return;
      }

      if (!img.hasAttribute("loading")) img.setAttribute("loading", "lazy");
    });
  }

  function setupLiveRegion() {
    var name = document.querySelector(".header__contacts-name");
    if (name && !name.hasAttribute("aria-live")) {
      name.setAttribute("aria-live", "polite");
      name.setAttribute("aria-atomic", "true");
    }
  }

  function setupLandmarks() {
    var header = document.querySelector("header");
    var footer = document.querySelector("footer");
    if (header && !header.getAttribute("aria-label")) {
      header.setAttribute("aria-label", "Шапка сайта");
    }
    if (footer && !footer.getAttribute("aria-label")) {
      footer.setAttribute("aria-label", "Подвал сайта");
    }
  }

  function setupPageStructure() {
    var wrapper = document.querySelector(".page__wrapper");
    if (wrapper && !wrapper.getAttribute("role")) {
      wrapper.setAttribute("role", "article");
    }

    var heroImage = document.querySelector(".page__image img");
    if (heroImage) {
      var alt = heroImage.getAttribute("alt") || "";
      if (alt && alt.length < 60) {
        heroImage.setAttribute("alt", "Иллюстрация героя: " + alt);
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupSkipLink();
    setupExternalLinks();
    setupDecorativeSvg();
    setupImages();
    setupLiveRegion();
    setupLandmarks();
    setupPageStructure();
  });
})();
