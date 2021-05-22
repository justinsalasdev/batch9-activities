import state from "./state.js";

export default function saveMove(boardState) {
  state.moveLog.push([...boardState]);
}
