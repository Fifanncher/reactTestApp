import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogsReducer";

const Dialogs = props => {
  let dialogElements = props.state.dialogs.map(dialog => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.state.messages.map(message => (
    <Message message={message.message} />
  ));

  let newDialogElement = React.createRef();

  let sendMsg = () => {
    props.dispatch(sendMessageCreator());
  };

  let onMessageChange = () => {
    let text = newDialogElement.current.value;
    props.dispatch(updateNewMessageTextCreator(text));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>

      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            ref={newDialogElement}
            onChange={onMessageChange}
            value={props.state.newMessageText}
            placeholder="Enter text"
          />
        </div>
        <div>
          <button onClick={sendMsg}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
