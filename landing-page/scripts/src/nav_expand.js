import { navBar } from "./nav_transition.js";
import animateMount from "./animate_mount.js";
const navAction = navBar.querySelector(".navigation__action");
const navMenu = navBar.querySelector(".navigation__menu");
let isOpen = false;

export default function () {
  navAction.addEventListener("click", function () {
    toggleMenu();
    navAction.classList.toggle("navigation__action_shown", isOpen);
  });
}

function toggleMenu() {
  const action = isOpen ? "hide" : "show";
  animateMount(navMenu, "navigation__menu", action, isOpen);
  isOpen = !isOpen;
}
