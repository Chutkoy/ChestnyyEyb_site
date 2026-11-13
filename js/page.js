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
      const offsetTop = isMobile ? 10 : 20;
      const buttonHeight = isMobile ? 30 : 40;
      const offsetRight = isMobile ? 10 : 20;

      const viewportWidth = window.innerWidth;
      const wrapperRight = wrapperRect.right;

      const targetTop = wrapperRect.top + offsetTop;
      const minTop = offsetTop;
      const maxTop = window.innerHeight - buttonHeight - offsetTop;

      if (wrapperRect.top < window.innerHeight && wrapperRect.bottom > 0) {
        const clampedTop = Math.max(minTop, Math.min(targetTop, maxTop));
        closeButton.style.top = clampedTop + "px";
      }

      if (viewportWidth > 767) {
        const targetRight = viewportWidth - wrapperRight + offsetRight;
        closeButton.style.right = targetRight + "px";
      } else {
        closeButton.style.right = offsetRight + "px";
      }
    };

    updateButtonPosition();
    window.addEventListener("scroll", updateButtonPosition, { passive: true });
    window.addEventListener("resize", updateButtonPosition);
  }
});
