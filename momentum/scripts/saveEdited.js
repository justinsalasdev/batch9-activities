import { nameEl } from "./helpers/handles.js";

let content = "";

nameEl.addEventListener("blur", saveEdit);
nameEl.addEventListener("keydown", e => {
  if (e.key == "Enter") {
    nameEl.spellcheck = false;
    nameEl.blur();
  }
});

function saveEdit(e) {
  console.log(e.target);
}
