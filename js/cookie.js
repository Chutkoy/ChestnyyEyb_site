function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function deleteCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

function acceptCookies() {
  setCookie("cookieConsent", "true", 365);
  document.getElementById("cookieConsent").style.display = "none";
}

function declineCookies() {
  setCookie("cookieConsent", "false");
  document.getElementById("cookieConsent").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const consentCookie = getCookie("cookieConsent");
  const consentBanner = document.getElementById("cookieConsent");

  if (consentCookie === "true") {
    consentBanner.style.display = "none";
  } else {
    consentBanner.style.display = "flex";
  }

  if (consentCookie === "true") {
    console.log("Куки приняты, инициализируем сервисы");
  }
});
