import displayNext from "./displayNext.js";
import displayPrevious from "./displayPrevious.js";
import { nextNode, previousNode } from "./handles.js";

export default function enableHistory() {
  previousNode.classList.remove("hidden");
  nextNode.classList.remove("hidden");
  previousNode.addEventListener("click", displayPrevious); //TODO: import displayPrevious
  nextNode.addEventListener("click", displayNext); //TODO: import displayNext
  nextNode.setAttribute("disabled", "true");
  previousNode.removeAttribute("disabled");
}
