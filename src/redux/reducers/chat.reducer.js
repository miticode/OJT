import {
  SET_MESSAGES,
  ADD_MESSAGE,
  RESET_MESSAGES,
} from "../actions/chat.action";

const initialState = {};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return {
        ...state,
        [action.payload.id]: action.payload.messages,
      };
    case ADD_MESSAGE:
      return {
        ...state,
        [action.payload.id]: [
          ...(state[action.payload.id] || []),
          action.payload.message,
        ],
      };
    case RESET_MESSAGES:
      return {
        ...state,
        [action.payload]: [],
      };
    default:
      return state;
  }
};

export default chatReducer;
