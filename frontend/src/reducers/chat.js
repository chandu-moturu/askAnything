const initialState = {
  selectedChat: null,
  user: null,
  notification: [],
  chats: null,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_SELECTED_CHAT":
      return { ...state, selectedChat: action.payload };
    case "SET_NOTIFICATION":
      return { ...state, notification: action.payload };
    case "SET_CHATS":
      return { ...state, chats: action.payload };
    default:
      return state;
  }
};

export default chatReducer;
