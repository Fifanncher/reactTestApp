import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let posts = [
  { id: 1, message: "Hi oldmans!", likesCount: 27 },
  { id: 2, message: "I am 54 years old", likesCount: 228 }
];

let dialogs = [
  { id: 1, name: "Denchik" },
  { id: 2, name: "Valera" },
  { id: 3, name: "Glad" },
  { id: 4, name: "Vlad" },
  { id: 5, name: "Danila" },
  { id: 6, name: "German" }
];

let messages = [
  { id: 1, message: "DA DA YA" },
  { id: 2, message: "OPA" },
  { id: 3, message: "ZIGOTA" },
  { id: 4, message: "PENELOPA" },
  { id: 5, message: "DA DA" }
];

ReactDOM.render(
  <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
