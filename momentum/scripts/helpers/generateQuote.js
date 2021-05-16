import { defaultAuthor, defaultQuote } from "./constants.js";
import { quoteAuthorEl, quoteTextEl, randomButton } from "./handles.js";

const quoteApiUrl = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";

randomButton.addEventListener("click", generateQuote);

export default async function generateQuote() {

  
  try {
      let response = await fetch(quoteApiUrl);
      let { quotes } = await response.json();
      console.log(quotes)
      const text = quotes[0].text;
      const author = quotes[0].author;
  
      quoteAuthorEl.textContent = author;
      quoteTextEl.textContent = text;
      quoteTextEl.dataset.custom = 'false'

      localStorage.removeItem('author')

  } catch (error) {
    setDefault()
  }
}


function setDefault(){
  quoteAuthorEl.textContent = defaultAuthor;
  quoteTextEl.textContent = defaultQuote;
}
