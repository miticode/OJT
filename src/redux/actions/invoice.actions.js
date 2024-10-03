import axios from 'axios';
import {
  FETCH_INVOICE_REQUEST,
  FETCH_INVOICE_SUCCESS,
  FETCH_INVOICE_FAILURE,
} from '../actionType';

const API_URL = 'https://667e5671297972455f67ee82.mockapi.io/projectojt/api/v1/users';

export const fetchInvoiceData = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_INVOICE_REQUEST });

    try {
      const response = await axios.get(API_URL);
      dispatch({
        type: FETCH_INVOICE_SUCCESS,
        payload: response.data[0],
      });
    } catch (error) {
      dispatch({
        type: FETCH_INVOICE_FAILURE,
        error: error.message,
      });
    }
  };
};