import axios from "axios";
import {
  FETCH_REVIEWS_FAILURE,
  FETCH_REVIEWS_REQUEST,
  FETCH_REVIEWS_SUCCESS,
  SEARCH_REVIEWS_FAILURE,
  SEARCH_REVIEWS_REQUEST,
  SEARCH_REVIEWS_SUCCESS,
} from "../actionType";


const API_URL = 'https://668ea2c1bf9912d4c92f2a43.mockapi.io';
const API_URL_USER =
  "https://667e5671297972455f67ee82.mockapi.io/projectojt/api/v1";

export const getAllReviews = (userId) => {
    return async (dispatch) => {
      dispatch({ type: FETCH_REVIEWS_REQUEST });
  
      try {
        const userResponse = await axios.get(`${API_URL_USER}/users/${userId}`);
        const reviewsIds = userResponse.data.review.map(
          (review) => review.number
        );
        const reviewsResponse = await axios.get(`${API_URL}/reviews`, {
          params: { number: reviewsIds.join("") },
        });
        const filteredReviews = reviewsResponse.data.filter(
          (review) =>
            userResponse.data.review.includes(review.number)
        );

        dispatch({
          type: FETCH_REVIEWS_SUCCESS,
          payload: filteredReviews,
        });
      } catch (error) {
        dispatch({
          type: FETCH_REVIEWS_FAILURE,
          error: error.message,
        });
      }
    };
  };


  export const searchReview = (userId, query) => {
    return async (dispatch) => {
      dispatch({ type: SEARCH_REVIEWS_REQUEST });
  
      try {
        const userResponse = await axios.get(`${API_URL_USER}/users/${userId}`);
        const reviewsIds = userResponse.data.review.map(
          (review) => review.number
        );
        const reviewsResponse = await axios.get(`${API_URL}/reviews`, {
          params: { number: reviewsIds.join("") },
        });
        const filteredReviews = reviewsResponse.data.filter(
          (review) =>
            userResponse.data.review.includes(review.number) &&
            review.username.toLowerCase().includes(query.toLowerCase())
        );
  
        dispatch({
          type: SEARCH_REVIEWS_SUCCESS,
          payload: filteredReviews,
        });
      } catch (error) {
        dispatch({
          type: SEARCH_REVIEWS_FAILURE,
          error: error.message,
        });
      }
    };
  };