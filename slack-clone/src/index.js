import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./components/App/App";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import PeopleProvider from "./providers/People";
import MessagesProvider from "./providers/Messages";
import UserProvider from "./providers/User";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PeopleProvider>
        <MessagesProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </MessagesProvider>
      </PeopleProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
