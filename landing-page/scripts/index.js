import startAnimation from "./src/multipleSlide.js";
import addNavTransition from "./src/navTransition.js";
import addNavExpansion from "./src/navExpand.js";

addNavExpansion();
addNavTransition();
requestAnimationFrame(startAnimation());
