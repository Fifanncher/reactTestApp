let rerenderEntireTree = () =>{
  
}

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi oldmans!", likesCount: 27 },
      { id: 2, message: "I am 54 years old", likesCount: 228 }
    ],
    newPostText: 'Let\'s go'
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
    newMessageText : 'Hi!'
  }
};

export const addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state); 
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state); 
};

export const sendMessage = () => {
  let newMessage = {
    id: 7,
    message: state.dialogsPage.newMessageText
  };

  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state); 
};

export const updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state); 
};

export const subscribe = (observer) =>{
  rerenderEntireTree=observer;
}

export default state;
