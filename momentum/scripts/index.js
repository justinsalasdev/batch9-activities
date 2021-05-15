import editIcon from "./icons/edit.js";
import randomIcon from "./icons/random.js";
import { editButton, randomButton, toDoList, toDoInput } from "./handles.js";
import { toDos } from "./state.js";
import displayToDos from "./displayToDos.js";

editButton.innerHTML = editIcon;
randomButton.innerHTML = randomIcon;

//initialize toDoList
displayToDos();

//what to do when user enters a toDo
toDoInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const toDoName = toDoInput.value;
    if (toDoName) {
      toDos.unshift({ name: toDoName, done: false });
      displayToDos();
      toDoInput.value = "";
    } else {
      return;
    }
  } else {
    return;
  }
});

toDoList.addEventListener("change", e => {
  const checkBox = e.target;
  const index = parseInt(checkBox.dataset.index);
  toDos[index].done = checkBox.checked;
});
