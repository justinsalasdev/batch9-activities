export let navBar = document.querySelector(".navigation__bar");

if (window.scrollY > 0) {
  //add sticky immediately is user refreshes at scrolled position
  navBar.classList.add("navigation__bar_sticky");
}
window.addEventListener("scroll", function () {
  navBar.classList.toggle(
    "navigation__bar_sticky",
    //don't toggle sticky when in mobile;
    window.scrollY > 0
  );
});
