const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 7,
        message: state.newMessageText
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
}

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  }
}

export const updateNewMessageTextCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
  }
}

export default dialogsReducer;
