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
  //setCookie("cookieConsent", "false", 365);  //  Убираем срок действия
  setCookie("cookieConsent", "false"); // Создаём сессионную cookie
  document.getElementById("cookieConsent").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const consentCookie = getCookie("cookieConsent");
  const consentBanner = document.getElementById("cookieConsent");

  //  Удаляем куку при загрузке страницы
  //deleteCookie("cookieConsent"); // Раскомментируй, чтобы удалить куку при каждой загрузке

  if (consentCookie === "true") {
    consentBanner.style.display = "none"; // Скрываем баннер, если кука принята
  } else {
    consentBanner.style.display = "flex"; // Отображаем баннер если куки нет или отклонены
  }

  if (consentCookie === "true") {
    // Код для инициализации сервисов, использующих куки
    console.log("Куки приняты, инициализируем сервисы");
  }
});
