document.addEventListener("DOMContentLoaded", function () {
  var contactsName = document.querySelector(".header__contacts-name");
  var phoneLinks = document.querySelectorAll(".header__contacts-phones li a");
  var initialText = contactsName ? contactsName.textContent : "";

  function showName(value) {
    if (!contactsName) return;
    contactsName.textContent = value || initialText;
  }

  phoneLinks.forEach(function (link) {
    var value = link.dataset.name || initialText;

    link.addEventListener("mouseenter", function () {
      showName(value);
    });
    link.addEventListener("mouseleave", function () {
      showName(initialText);
    });
    link.addEventListener("focus", function () {
      showName(value);
    });
    link.addEventListener("blur", function () {
      showName(initialText);
    });
  });

  var lists = document.querySelectorAll(".requisites-hover");
  if (!lists.length) return;

  function setActive(state) {
    lists.forEach(function (list) {
      list.classList.toggle("active", state);
    });
  }

  lists.forEach(function (list) {
    var owner = list.closest("a") || list;

    list.addEventListener("mouseenter", function () {
      setActive(true);
    });
    list.addEventListener("mouseleave", function () {
      setActive(false);
    });
    owner.addEventListener("focusin", function () {
      setActive(true);
    });
    owner.addEventListener("focusout", function (event) {
      if (owner.contains(event.relatedTarget)) return;
      setActive(false);
    });
  });
});
