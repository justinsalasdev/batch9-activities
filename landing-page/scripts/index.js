import startAnimation from "./src/slide.js";
import addNavTransition from "./src/nav_transition.js";
import addNavExpansion from "./src/nav_expand.js";

addNavExpansion();
addNavTransition();
requestAnimationFrame(startAnimation());
