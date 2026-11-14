function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  var secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie =
    name + "=" + (value || "") + expires + "; path=/; SameSite=Lax" + secure;
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function deleteCookie(name) {
  var secure = window.location.protocol === "https:" ? "; Secure" : "";
  var host = window.location.hostname;
  var domains = ["", "; domain=" + host, "; domain=." + host];
  domains.forEach(function (domain) {
    document.cookie =
      name +
      "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=Lax" +
      secure +
      domain;
  });
}

function loadAnalytics() {
  if (getCookie("cookieConsent") !== "true") return;
  if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) return;

  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-1P81G0D66K";
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", "G-1P81G0D66K");
}

function hideConsentBanner() {
  var banner = document.getElementById("cookieConsent");
  if (!banner) return;

  var focusInside = banner.contains(document.activeElement);
  banner.style.display = "none";
  banner.setAttribute("hidden", "");

  if (focusInside) {
    var target =
      document.querySelector(".skip-link") ||
      document.querySelector("main") ||
      document.body;
    if (target === document.body) target.setAttribute("tabindex", "-1");
    target.focus();
  }
}

function acceptCookies() {
  setCookie("cookieConsent", "true", 365);
  hideConsentBanner();
  loadAnalytics();
}

function declineCookies() {
  setCookie("cookieConsent", "false");
  deleteCookie("_ga");
  deleteCookie("_ga_G-1P81G0D66K");
  deleteCookie("_gid");
  hideConsentBanner();
}

function prepareConsentBanner() {
  var banner = document.getElementById("cookieConsent");
  if (!banner) return;

  banner.setAttribute("role", "region");
  banner.setAttribute("aria-label", "Уведомление об использовании cookie");

  var title = banner.querySelector(".cookie-title");
  if (title && !title.querySelector(".cookie-notice")) {
    var notice = document.createElement("p");
    notice.className = "cookie-notice visually-hidden";
    notice.innerHTML =
      "Мы используем cookie-файлы для работы сайта и анонимной статистики посещений. " +
      'Подробнее — в <a href="https://chestnyyeyb.ru/privacy/">Политике конфиденциальности</a>. ' +
      "Нажмите «Принять», чтобы разрешить аналитику, или «Отклонить», чтобы отказаться.";
    title.appendChild(notice);
  }

  var buttons = banner.querySelectorAll("button");
  buttons.forEach(function (button, index) {
    button.setAttribute("type", "button");
    if (index === 0) {
      button.setAttribute("aria-label", "Принять cookie и включить аналитику");
      button.addEventListener("click", acceptCookies);
    } else {
      button.setAttribute("aria-label", "Отклонить cookie");
      button.addEventListener("click", declineCookies);
    }
  });

  var first = document.body.firstChild;
  var skip = document.querySelector(".skip-link");
  if (skip && skip.nextSibling) {
    document.body.insertBefore(banner, skip.nextSibling);
  } else if (first !== banner) {
    document.body.insertBefore(banner, first);
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !banner.hasAttribute("hidden")) {
      declineCookies();
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  prepareConsentBanner();

  var banner = document.getElementById("cookieConsent");
  var consent = getCookie("cookieConsent");

  if (banner) {
    if (consent === "true" || consent === "false") {
      banner.style.display = "none";
      banner.setAttribute("hidden", "");
    } else {
      banner.removeAttribute("hidden");
      banner.style.display = "flex";
    }
  }

  loadAnalytics();
});
