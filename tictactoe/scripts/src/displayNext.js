import { nextNode } from "./handles.js";
import showLog from "./showLog.js";
import state from "./state.js";

export default function displayNext() {
  showLog(state.moveLog[state.moves++]);
  if (state.moves >= state.moveLog.length) {
    nextNode.setAttribute("disabled", true);
  }
}
