const parent = document.querySelector(".testimonials__list");
const targets = parent.children;
let rafId = null;
const speed = 1;

export default function startAnimation() {
  const rects = [];
  const recurringStarts = [];
  const parentWidth = parent.offsetWidth;
  const windowWidth = window.innerWidth;
  const boxWidth = windowWidth >= parentWidth ? windowWidth : parentWidth;
  for (let i = 0; i <= targets.length - 1; i++) {
    rects.push(targets[i].getBoundingClientRect());
  }
  const initialWidths = rects.map(rect => rect.width);
  const initialRights = rects.map(rect => rect.right);

  const _recurringDists = rects.map(rect => rect.width + boxWidth);

  for (let i = 0; i <= targets.length - 1; i++) {
    recurringStarts.push(boxWidth - initialRights[i] + initialWidths[i]);
  }

  //mutable

  let xPositionsInitial = initialRights.map(_ => 0);
  let initialDists = [...initialRights];
  let recurringDists = [..._recurringDists];
  let xPositions = [...recurringStarts];

  return function performAnimation() {
    for (let i = 0; i <= targets.length - 1; i++) {
      if (initialDists[i] >= 0) {
        targets[i].style.transform = `translate3d(${xPositionsInitial[i]}px, 0, 0)`; //slide initial position
        xPositionsInitial[i] -= speed;
        initialDists[i] -= speed;
      } else {
        if (recurringDists[i] <= 0) {
          targets[i].style.transform = `translate3d(${xPositions[i]}px, 0, 0)`; // position element at start
          recurringDists[i] = _recurringDists[i]; //reset slideDistance
          xPositions[i] = recurringStarts[i];
        } else {
          targets[i].style.transform = `translate3d(${xPositions[i]}px, 0, 0)`;
          recurringDists[i] -= speed;
          xPositions[i] -= speed;
        }
      }
    }

    rafId = requestAnimationFrame(performAnimation);
  };
}

window.addEventListener("resize", () => {
  cancelAnimationFrame(rafId);
  requestAnimationFrame(startAnimation());
});
