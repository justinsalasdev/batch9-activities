import displayNext from "./displayNext.js";
import displayPrevious from "./displayPrevious.js";
import { nextNode, previousNode } from "./handles.js";

export default function disableHistory() {
  previousNode.classList.add("hidden");
  nextNode.classList.add("hidden");
  previousNode.removeEventListener("click", displayPrevious);
  nextNode.removeEventListener("click", displayNext);
}
