// import * as api from "../api";

export const setUser = (userInfo) => ({
  type: "SET_USER",
  payload: userInfo,
});

export const setSelectedChat = (chat) => ({
  type: "SET_SELECTED_CHAT",
  payload: chat,
});

export const setNotification = (notifications) => ({
  type: "SET_NOTIFICATION",
  payload: notifications,
});

export const setChats = (chats) => ({
  type: "SET_CHATS",
  payload: chats,
});
