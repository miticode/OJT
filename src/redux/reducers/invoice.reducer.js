import {
    FETCH_INVOICE_REQUEST,
    FETCH_INVOICE_SUCCESS,
    FETCH_INVOICE_FAILURE,
  } from '../actionType';
  
  const initialState = {
    data: [],
    status: 'idle',
    error: null,
  };
  
  const invoiceReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_INVOICE_REQUEST:
        return {
          ...state,
          status: 'loading',
        };
      case FETCH_INVOICE_SUCCESS:
        return {
          ...state,
          status: 'succeeded',
          data: action.payload,
        };
      case FETCH_INVOICE_FAILURE:
        return {
          ...state,
          status: 'failed',
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default invoiceReducer;  