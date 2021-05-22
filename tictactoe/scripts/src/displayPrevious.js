import { previousNode } from "./handles.js";
import showLog from "./showLog.js";
import state from "./state.js";

export default function displayPrevious() {
  showLog(state.moveLog[--state.moves - 1]); //TODO: import showLog
  if (state.moves <= 1) {
    previousNode.setAttribute("disabled", true);
  }
}
