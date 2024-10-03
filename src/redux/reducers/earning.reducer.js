// statementsReducer.js
import {
    FETCH_EARNING_FAILURE,
    FETCH_EARNING_REQUEST,
    FETCH_EARNING_SUCCESS,
  } from "../actionType";
  
  const initialState = {
    earning: [], 
    loading: false,
    error: null,
  };
  
  const earningReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_EARNING_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_EARNING_SUCCESS:
        return {
          ...state,
          loading: false,
          earning: action.payload, 
        };
      case FETCH_EARNING_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default earningReducer;
  