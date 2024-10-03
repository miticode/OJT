import axios from "axios";
import {
  FETCH_STATEMENTS_FAILURE,
  FETCH_STATEMENTS_REQUEST,
  FETCH_STATEMENTS_SUCCESS,
} from "../actionType";

const API_URL = "https://65e87e874bb72f0a9c4f89ad.mockapi.io/api/statements";

export const getStatements = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_STATEMENTS_REQUEST });

    try {
      const response = await axios.get(API_URL);
      const statements = response.data;

      dispatch({
        type: FETCH_STATEMENTS_SUCCESS,
        payload: statements,
      });
    } catch (error) {
      dispatch({
        type: FETCH_STATEMENTS_FAILURE,
        error: error.message,
      });
    }
  };
};
