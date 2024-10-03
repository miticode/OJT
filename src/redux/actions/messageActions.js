import io from 'socket.io-client';
import { ADD_MESSAGE, MESSAGE_ERROR, MESSAGE_LOADING, SET_MESSAGES } from '../actionType';

const socket = io('https://signaling-server-r4dq.onrender.com/');

const getRoomId = (userId1, userId2) => {
  return [userId1, userId2].sort().join('_');
};

export const setMessages = (roomId, messages) => ({
  type: SET_MESSAGES,
  payload: { roomId, messages: Array.isArray(messages) ? messages : [] },
});

export const addMessage = (roomId, message) => ({
  type: ADD_MESSAGE,
  payload: { roomId, message },
});

export const messageLoading = () => ({
  type: MESSAGE_LOADING,
});

export const messageError = (error) => ({
  type: MESSAGE_ERROR,
  payload: error,
});

export const initializeSocket = (currentUserId) => (dispatch) => {
  dispatch(messageLoading());

  const localMessages = JSON.parse(localStorage.getItem('messages')) || {};
  Object.keys(localMessages).forEach(roomId => {
    dispatch(setMessages(roomId, localMessages[roomId]));
  });

  socket.on('message', (roomId, message) => {
    dispatch(addMessage(roomId, message));
    
    const updatedMessages = JSON.parse(localStorage.getItem('messages')) || {};
    if (!updatedMessages[roomId]) {
      updatedMessages[roomId] = [];
    }
    updatedMessages[roomId].push(message);
    localStorage.setItem('messages', JSON.stringify(updatedMessages));
  });

  socket.on('connect_error', (error) => {
    dispatch(messageError(error));
  });
};


export const sendMessage = (currentUserId, selectedUserId, content) => (dispatch) => {
  const roomId = getRoomId(currentUserId, selectedUserId);
  const message = {
    content,
    timestamp: new Date().toLocaleTimeString(),
    senderId: currentUserId,
  };
  socket.emit('message', roomId, message);
  dispatch(addMessage(roomId, message));

  
  const updatedMessages = JSON.parse(localStorage.getItem('messages')) || {};
  if (!updatedMessages[roomId]) {
    updatedMessages[roomId] = [];
  }
  updatedMessages[roomId].push(message);
  localStorage.setItem('messages', JSON.stringify(updatedMessages));
};
