import { ADD_MESSAGE, SET_MESSAGES, MESSAGE_LOADING, MESSAGE_ERROR } from '../actionType';

const initialState = {
  messages: {},
  loading: false,
  error: null,
};

const saveMessagesToLocalStorage = (messages) => {
  localStorage.setItem('messages', JSON.stringify(messages));
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES: {
      const { roomId, messages } = action.payload;
      const updatedMessages = {
        ...state.messages,
        [roomId]: messages,
      };
      saveMessagesToLocalStorage(updatedMessages);
      return {
        ...state,
        messages: updatedMessages,
        loading: false,
        error: null,
      };
    }
    case ADD_MESSAGE: {
      const { roomId, message } = action.payload;
      const updatedMessages = {
        ...state.messages,
        [roomId]: [...(state.messages[roomId] || []), message],
      };
      saveMessagesToLocalStorage(updatedMessages);
      return {
        ...state,
        messages: updatedMessages,
      };
    }
    case MESSAGE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case MESSAGE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default messageReducer;
