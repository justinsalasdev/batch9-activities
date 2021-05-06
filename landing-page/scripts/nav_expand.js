import animateMount from "./src/animation-helper/animate_mount.js";

const navBar = document.querySelector(".navigation__bar");
const navAction = navBar.querySelector(".navigation__action");
const navMenu = navBar.querySelector(".navigation__menu");
let isOpen = false;

navAction.addEventListener("click", function () {
  toggleMenu();
  navAction.classList.toggle("navigation__action_shown", isOpen);
});

function toggleMenu() {
  const action = isOpen ? "hide" : "show";
  animateMount(navMenu, "navigation__menu", action, isOpen);
  isOpen = !isOpen;
}
