document.addEventListener("DOMContentLoaded", function () {
  const contactsName = document.querySelector(".header__contacts-name");
  const phoneLinks = document.querySelectorAll(".header__contacts-phones li a");
  const initialText = contactsName ? contactsName.textContent : "";

  phoneLinks.forEach(function (link) {
    link.addEventListener("mouseover", function (event) {
      contactsName.textContent = event.target.dataset.name || initialText;
    });
    link.addEventListener("mouseout", function () {
      contactsName.textContent = initialText;
    });
  });

  const lists = document.querySelectorAll(".requisites-hover");
  lists.forEach(function (list) {
    list.addEventListener("mouseover", function () {
      lists.forEach(function (l) {
        l.classList.add("active");
      });
    });
    list.addEventListener("mouseout", function () {
      lists.forEach(function (l) {
        l.classList.remove("active");
      });
    });
  });
});
