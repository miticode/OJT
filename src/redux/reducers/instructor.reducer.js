import {
  FETCH_INSTRUCTORS_REQUEST,
  FETCH_INSTRUCTORS_SUCCESS,
  FETCH_INSTRUCTORS_FAILURE,
  SEARCH_INSTRUCTORS_REQUEST,
  SEARCH_INSTRUCTORS_FAILURE,
  SEARCH_INSTRUCTORS_SUCCESS,
  GET_INSTRUCTOR_BY_ID_REQUEST,
  GET_INSTRUCTOR_BY_ID_SUCCESS,
  GET_INSTRUCTOR_BY_ID_FAILURE,
} from "../actionType";

const initialState = {
  loading: false,
  instructors: [],
  error: "",
};

const instructorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INSTRUCTORS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_INSTRUCTORS_SUCCESS:
      return {
        loading: false,
        instructors: action.payload,
        error: "",
      };
    case FETCH_INSTRUCTORS_FAILURE:
      return {
        loading: false,
        error: action.error,
      };
    case SEARCH_INSTRUCTORS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_INSTRUCTORS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SEARCH_INSTRUCTORS_SUCCESS:
      return {
        ...state,
        loading: false,
        instructors: action.payload,
      };
    case GET_INSTRUCTOR_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_INSTRUCTOR_BY_ID_SUCCESS:
      return {
        ...state,
        instructor: action.payload,
        loading: false,
      };
    case GET_INSTRUCTOR_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default instructorsReducer;
