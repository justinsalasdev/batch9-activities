export let navBar = document.querySelector(".navigation__bar");

export default function () {
  window.addEventListener("scroll", function () {
    navBar.classList.toggle(
      "navigation__bar_sticky",
      //don't toggle sticky when in mobile;
      window.scrollY > 0
    );
  });
}
