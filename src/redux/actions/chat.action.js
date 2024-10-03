export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SET_MESSAGES = 'SET_MESSAGES';
export const RESET_MESSAGES = "RESET_MESSAGES";

export const setMessages = (id, messages) => ({
  type: SET_MESSAGES,
  payload: { id, messages },
});

export const addMessage = (id, message) => ({
  type: ADD_MESSAGE,
  payload: { id, message },
});

export const resetMessages = (id) => ({
  type: RESET_MESSAGES,
  payload: id,
});
