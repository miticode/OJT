import axios from "axios";
import {
  FETCH_EARNING_FAILURE,
  FETCH_EARNING_REQUEST,
  FETCH_EARNING_SUCCESS,
} from "../actionType";

const API_URL = "https://6627a8e6b625bf088c09309e.mockapi.io";
const API_URL_USER = "https://667e5671297972455f67ee82.mockapi.io/projectojt/api/v1";


export const getEarning = (userId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_EARNING_REQUEST });

    try {
      const userResponse = await axios.get(`${API_URL_USER}/users/${userId}`);
      const earningIds = userResponse.data.earning.map(
        (earning) => earning.number
      );
      const earningResponse = await axios.get(`${API_URL}/earning`, {
        params: { number: earningIds.join("") },
      });
      const filteredEarning = earningResponse.data.filter(
        (earning) =>
          userResponse.data.earning.includes(earning.number)
      );
      dispatch({
        type: FETCH_EARNING_SUCCESS,
        payload: filteredEarning,
      });
    } catch (error) {
      dispatch({
        type: FETCH_EARNING_FAILURE,
        error: error.message,
      });
    }
  };
};
