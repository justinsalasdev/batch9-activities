window.addEventListener("scroll", function () {
  let navBar = document.querySelector(".navigation__bar");
  navBar.classList.toggle("navigation__bar_sticky", window.scrollY > 0);
});
