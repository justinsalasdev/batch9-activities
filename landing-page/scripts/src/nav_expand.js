import { navBar } from "./nav_transition.js";
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
  animate(navMenu, "navigation__menu", action, isOpen);
  isOpen = !isOpen;
}

function animate(target, rootClass, action, hide) {
  target.classList.remove(`${rootClass}_hidden`); //remove hidden class --> display: none;
  target.classList.add(`${rootClass}_${action}`);
  target.addEventListener(
    "animationend",
    function endAnimation(event) {
      target.classList.remove(`${rootClass}_${action}`); // Remove the animation class
      if (hide) {
        target.classList.add(`${rootClass}_hidden`);
        // target.setAttribute("hidden", "true");
      }
      target.removeEventListener("animationend", endAnimation, false); // Remove this event listener
    },
    false
  );
}
