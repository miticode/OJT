import axios from "axios";
import { FETCH_NEWS_FAILURE, FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS } from "../actionType";

const API_URL = "https://65e87e874bb72f0a9c4f89ad.mockapi.io/api/news";

export const getAllNews = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_NEWS_REQUEST });

    try {
      const newsResponse = await axios.get(`${API_URL}`);
      // console.log(coursesResponse);
      dispatch({
        type: FETCH_NEWS_SUCCESS,
        payload: newsResponse.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_NEWS_FAILURE,
        error: error.message,
      });
    }
  };
};
