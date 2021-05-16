import randomIcon from "./icons/random.js";
import { randomButton, toDoList, toDoInput, nameEl, quoteTextEl, quoteAuthorEl } from "./helpers/handles.js";
import { defaultQuote, toDos } from "./helpers/constants.js";
import displayToDos from "./helpers/displayToDos.js";
import addEdit from './helpers/addEdit.js'
import generateQuote from './helpers/generateQuote.js'




// editButton.innerHTML = editIcon;
randomButton.innerHTML = randomIcon;


nameEl.textContent = localStorage.getItem('name') || 'Boss'
addEdit(nameEl,'name');



addEdit(quoteTextEl,'quotation')
addEdit(quoteAuthorEl,'author')

const localQuote = localStorage.getItem('quotation')
const localAuthor = localStorage.getItem('author') || 'Anonymous'

if(localQuote){
  quoteTextEl.textContent = localQuote
  quoteAuthorEl.textContent = localAuthor;
} else {
  generateQuote()
}

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

//update toDos state (updated stated not used)
toDoList.addEventListener("change", e => {
  const checkBox = e.target;
  const index = parseInt(checkBox.dataset.index);
  toDos[index].done = checkBox.checked;
});

