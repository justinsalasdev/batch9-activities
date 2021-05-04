const parent = document.querySelector(".testimonials__list");
const target = parent.children[1];

export default function startAnimation(status) {
  const speed = 20;

  let targetWidth = target.offsetWidth * 2;
  let windowWidth = window.innerWidth + targetWidth;
  const initialWindowWidth = window.innerWidth;

  if (status === "new") {
    return function performAnimation() {
      if (-windowWidth >= targetWidth) {
        target.style.transform = `translate3d(${initialWindowWidth}px, 0, 0)`;
        console.log(windowWidth, targetWidth);
        windowWidth = initialWindowWidth;
      }

      windowWidth -= speed;
      target.style.transform = `translate3d(${windowWidth}px, 0, 0)`;

      requestAnimationFrame(performAnimation);
    };
  } else {
    return;
  }
}

window.addEventListener("resize", () => startAnimation("old"));
