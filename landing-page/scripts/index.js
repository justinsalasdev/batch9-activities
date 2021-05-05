import startAnimation from "./src/slide.js";
import addNavTransition from "./src/nav_transition.js";
import addNavExpansion from "./src/nav_expand.js";
import addFormValidation from "./src/form-scripts/validate_form.js";
import trackModal from "./src/track_modal.js";

trackModal();
addFormValidation();
addNavExpansion();
addNavTransition();
requestAnimationFrame(startAnimation());
