import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi oldmans!", likesCount: 27 },
        { id: 2, message: "I am 54 years old", likesCount: 228 }
      ],
      newPostText: "Let's go"
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Denchik" },
        { id: 2, name: "Valera" },
        { id: 3, name: "Glad" },
        { id: 4, name: "Vlad" },
        { id: 5, name: "Danila" },
        { id: 6, name: "German" }
      ],
      messages: [
        { id: 1, message: "DA DA YA" },
        { id: 2, message: "OPA" },
        { id: 3, message: "ZIGOTA" },
        { id: 4, message: "PENELOPA" },
        { id: 5, message: "DA DA" }
      ],
      newMessageText: ""
    },
    sidebar: []
  },

  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};

export default store;
