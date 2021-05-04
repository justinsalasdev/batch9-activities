const parent = document.querySelector(".testimonials__list");
const target = parent.children[4];
let rafId = null;

export default function startAnimation() {
  const step = 10;
  const { right, width } = target.getBoundingClientRect();
  // const windowWidth = parent.offsetWidth;
  const windowWidth = window.innerWidth;

  const recurringStart = windowWidth - right + width;

  let xPositionInitial = 0;
  let initialDist = right;
  let recurringDist = windowWidth + width;
  let xPosition = recurringStart;

  return function performAnimation() {
    if (initialDist >= 0) {
      target.style.transform = `translate3d(${xPositionInitial}px, 0, 0)`; //slide initial position
      xPositionInitial -= step;
      initialDist -= step;
    } else {
      if (recurringDist <= 0) {
        target.style.transform = `translate3d(${xPosition}px, 0, 0)`; // position element at start
        recurringDist = windowWidth + width; //refresh slidedistance
        xPosition = recurringStart;
      } else {
        target.style.transform = `translate3d(${xPosition}px, 0, 0)`;
        recurringDist -= step;
        xPosition -= step;
      }
    }
    rafId = requestAnimationFrame(performAnimation);
  };
}

window.addEventListener("resize", () => {
  cancelAnimationFrame(rafId);
  requestAnimationFrame(startAnimation());
});
