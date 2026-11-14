document.addEventListener("DOMContentLoaded", function () {
  var closeButton = document.querySelector(".page__close");
  var wrapper = document.querySelector(".page__wrapper");

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

  if (!closeButton || !wrapper) return;

  var ticking = false;
  var mobileQuery = window.matchMedia("(max-width: 767px)");

  function updateButtonPosition() {
    ticking = false;

    var wrapperRect = wrapper.getBoundingClientRect();
    var isMobile = mobileQuery.matches;
    var offset = isMobile ? 10 : 20;
    var buttonSize = isMobile ? 30 : 40;

    var viewportHeight = window.innerHeight;
    var viewportWidth = window.innerWidth;
    var wrapperTop = wrapperRect.top;
    var wrapperBottom = wrapperRect.bottom;
    var wrapperRight = wrapperRect.right;

    if (wrapperBottom <= 0 || wrapperTop >= viewportHeight) return;

    var targetTop = wrapperTop + offset;
    var minTop = offset;
    var maxTop = viewportHeight - buttonSize - offset;
    var clampedTop = Math.max(minTop, Math.min(targetTop, maxTop));

    closeButton.style.top = clampedTop + "px";
    closeButton.style.right = viewportWidth - wrapperRight + offset + "px";
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateButtonPosition);
  }

  updateButtonPosition();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate, { passive: true });
  window.addEventListener("orientationchange", requestUpdate, { passive: true });

  if (typeof mobileQuery.addEventListener === "function") {
    mobileQuery.addEventListener("change", requestUpdate);
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(requestUpdate);
  }
});
