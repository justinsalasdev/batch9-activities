import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./components/App/App";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import PeopleProvider from "./providers/People";
import LettersProvider from "./providers/LettersProvider";
import UserProvider from "./providers/User";
import ShoutsProvider from "./providers/ShoutsProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PeopleProvider>
        <UserProvider>
          <LettersProvider>
            <ShoutsProvider>
              <App />
            </ShoutsProvider>
          </LettersProvider>
        </UserProvider>
      </PeopleProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
