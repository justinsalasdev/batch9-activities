//target -- element
//rootClass - no modifier class
//action - hide || show
//hide - true || false

export default function (target, rootClass, action, hide) {
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
