import axios from "axios";
import { FETCH_OURBLOG_FAILURE, FETCH_OURBLOG_REQUEST, FETCH_OURBLOG_SUCCESS } from "../actionType";

const API_URL = 'https://668b7ae70b61b8d23b09b788.mockapi.io/OJT/OurBlog/OurBlog';

export const getAllOurblog = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_OURBLOG_REQUEST });

    try {
      const ourblogResponse = await axios.get(API_URL);
      dispatch({
        type: FETCH_OURBLOG_SUCCESS,
        payload: ourblogResponse.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_OURBLOG_FAILURE,
        error: error.message,
      });
    }
  };
};
