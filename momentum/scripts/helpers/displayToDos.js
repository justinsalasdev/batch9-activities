import { toDoList } from "./handles.js";
import deleteButtonIcon from "../icons/delete.js";
import { toDos } from "./constants.js";
import saveTodos from "./saveTodos.js";

export default function displayToDos() {
  //remove existing toDoList children;
  toDoList.innerHTML = "";
  toDos.forEach((todo, index) => {
    const listItem = document.createElement("li");
    listItem.className = "todo__item";
    listItem.innerHTML = `<div>
    <button class="todo__delete" type="button" data-index="${index}"></button>
    <input class="todo__mark" type="checkbox" id="check_${index}" data-index="${index}" />
    <label class="todo__text" for="check_${index}">${todo.name}</label>
  </div>`;
    listItem.querySelector(".todo__mark").checked = toDos[index].done;
    addDeleteBtn(listItem);
    toDoList.appendChild(listItem);
  });
}

function addDeleteBtn(listItem) {
  //once listItem is created with deleteButton --button can be selected
  const deleteButton = listItem.querySelector(".todo__delete");
  deleteButton.innerHTML = deleteButtonIcon;
  deleteButton.addEventListener("click", function () {
    const index = deleteButton.dataset.index;
    toDos.splice(index, 1);
    displayToDos();
    saveTodos(toDos);
  });
}
