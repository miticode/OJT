import axios from "axios";
import {
  FETCH_INSTRUCTORS_FAILURE,
  FETCH_INSTRUCTORS_REQUEST,
  FETCH_INSTRUCTORS_SUCCESS,
  GET_INSTRUCTOR_BY_ID_FAILURE,
  GET_INSTRUCTOR_BY_ID_REQUEST,
  GET_INSTRUCTOR_BY_ID_SUCCESS,
  SEARCH_INSTRUCTORS_FAILURE,
  SEARCH_INSTRUCTORS_REQUEST,
  SEARCH_INSTRUCTORS_SUCCESS,
} from "../actionType";

const API_URL = "https://667e5671297972455f67ee82.mockapi.io/projectojt/api/v1";

export const getAllInstructor = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_INSTRUCTORS_REQUEST });
    try {
      const response = await axios.get(`${API_URL}/users`, {
        params: { role: "teacher" },
      });
      dispatch({ type: FETCH_INSTRUCTORS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_INSTRUCTORS_FAILURE, error: error.message });
    }
  };
};

export const searchInstructors = (query) => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_INSTRUCTORS_REQUEST });
    try {
      const response = await axios.get(`${API_URL}/users`, {
        params: { role: "teacher", username: query },
      });
      // console.log(response);
      dispatch({ type: SEARCH_INSTRUCTORS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: SEARCH_INSTRUCTORS_FAILURE, error: error.message });
    }
  };
};

export const getInstructorById = (id) => async (dispatch) => {
  dispatch({ type: GET_INSTRUCTOR_BY_ID_REQUEST });
  try {
    const { data } = await axios.get(`${API_URL}/users/${id}`);
    dispatch({ type: GET_INSTRUCTOR_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_INSTRUCTOR_BY_ID_FAILURE, payload: error.message });
  }
};
