export let navBar = document.querySelector(".navigation__bar");

if (window.scrollY > 0 && !window.matchMedia("(max-width: 490px)").matches) {
  navBar.classList.add("navigation__bar_sticky");
}

window.addEventListener("scroll", function () {
  if (window.matchMedia("(max-width: 490px)").matches) {
    return; //don't toggle sticky when in mobile;
  } else {
    navBar.classList.toggle(
      "navigation__bar_sticky",

      window.scrollY > 0
    );
  }
});
