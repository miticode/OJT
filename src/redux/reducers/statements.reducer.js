// statementsReducer.js
import {
    FETCH_STATEMENTS_FAILURE,
    FETCH_STATEMENTS_REQUEST,
    FETCH_STATEMENTS_SUCCESS,
  } from "../actionType";
  
  const initialState = {
    statements: [],
    loading: false,
    error: null,
  };
  
  const statementsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_STATEMENTS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_STATEMENTS_SUCCESS:
        return {
          ...state,
          loading: false,
          statements: action.payload, // Assuming action.payload is an array of statements
        };
      case FETCH_STATEMENTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default statementsReducer;
  