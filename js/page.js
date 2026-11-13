document.addEventListener("DOMContentLoaded", function () {
  const closeButton = document.querySelector(".page__close");
  const wrapper = document.querySelector(".page__wrapper");

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

  if (closeButton && wrapper) {
    const updateButtonPosition = () => {
      const wrapperRect = wrapper.getBoundingClientRect();
      const isMobile = window.innerWidth <= 767;
      const offset = isMobile ? 10 : 20;
      const buttonSize = isMobile ? 30 : 40;

      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      const wrapperTop = wrapperRect.top;
      const wrapperBottom = wrapperRect.bottom;
      const wrapperRight = wrapperRect.right;

      const targetTop = wrapperTop + offset;
      const minTop = offset;
      const maxTop = viewportHeight - buttonSize - offset;

      if (wrapperBottom > 0 && wrapperTop < viewportHeight) {
        const clampedTop = Math.max(minTop, Math.min(targetTop, maxTop));
        closeButton.style.top = clampedTop + "px";

        const targetRight = viewportWidth - wrapperRight + offset;
        closeButton.style.right = targetRight + "px";
      }
    };

    updateButtonPosition();
    window.addEventListener("scroll", updateButtonPosition, { passive: true });
    window.addEventListener("resize", updateButtonPosition);
  }
});
