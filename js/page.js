document.addEventListener("DOMContentLoaded", function () {
  const closeButton = document.querySelector(".page__close");

  if (closeButton) {
    closeButton.addEventListener("click", function (event) {
      event.preventDefault();
      if (window.history.length > 1 && document.referrer) {
        window.history.back();
      } else {
        window.location.href = "../";
      }
    });
  }
});
