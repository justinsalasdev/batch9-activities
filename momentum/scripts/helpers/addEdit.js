function saveEdit(dest) {
  return function(e){
    const content = e.target.textContent
    localStorage.setItem(dest, content)
  }
}

//contenteditable spellcheck="false"

export default function(element,entryName){
 
  element.addEventListener("blur", saveEdit(entryName));
  element.addEventListener("keydown", e => {
    if (e.key == "Enter") {
      element.blur();
      element.dataset.custom = "true"
    }
  });
  
}


