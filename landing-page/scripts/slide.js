const target = document.querySelector(".testimonials__list");

const step = 0.9;
const targetWith = target.offsetWidth;
const slideDist = targetWith / 2;

let remainingSlideDist = slideDist;
let startingPosition = 0;

function performAnimation() {
  if (remainingSlideDist <= 0) {
    target.style.transform = `translate3d(${0}px, 0, 0)`;
    remainingSlideDist = slideDist;
    startingPosition = 0;
  } else {
    target.style.transform = `translate3d(${startingPosition}px, 0, 0)`;
    remainingSlideDist -= step;
    startingPosition -= step;
  }
  requestAnimationFrame(performAnimation);
}

requestAnimationFrame(performAnimation);
