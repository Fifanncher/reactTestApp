import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import state from "./redux/state";
import {addPost, updateNewPostText, sendMessage, updateNewMessageText, subscribe} from "./redux/state";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} sendMessage={sendMessage} updateNewMessageText={updateNewMessageText } />
      </BrowserRouter>,
      document.getElementById("root")
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
