import { UPDATE_USER_FAILURE, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "../actionType";

  const initialState = {
    loading: false,
    user: null,
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_USER_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case UPDATE_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          user: action.payload,
        };
      case UPDATE_USER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  