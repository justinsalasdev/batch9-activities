import { defaultAuthor, defaultQuote } from "./constants.js";
import { quoteAuthorEl, quoteTextEl, randomButton } from "./handles.js";

randomButton.addEventListener("click", generateQuote);

export default async function generateQuote() {
  try {
    const quoteApiUrl = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";
    let response = await fetch(quoteApiUrl);
    let { quotes } = await response.json();
    const text = quotes[0].text;
    const author = quotes[0].author;

    quoteAuthorEl.textContent = author;
    quoteTextEl.textContent = text;
  } catch (error) {
    quoteAuthorEl.textContent = defaultAuthor;
    quoteTextEl.textContent = defaultQuote;
  }
}
