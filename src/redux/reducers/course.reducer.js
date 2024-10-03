import {
  FETCH_SAVED_COURSES_FAILURE,
  FETCH_SAVED_COURSES_REQUEST,
  FETCH_SAVED_COURSES_SUCCESS,
  SEARCH_COURSES_FAILURE,
  SEARCH_COURSES_REQUEST,
  SEARCH_COURSES_SUCCESS,
  SET_RECENT_COURSES,
  SET_NEWEST_COURSES,
  CREATE_COURSE_FAILURE,
  CREATE_COURSE_SUCCESS,
  CREATE_COURSE_REQUEST,
  DELETE_SAVED_COURSES_REQUEST,
  DELETE_SAVED_COURSES_SUCCESS,
  DELETE_SAVED_COURSES_FAILURE,
  FETCH_ENROLLED_COURSES_SUCCESS,
  FETCH_ENROLLED_COURSES_REQUEST,
  FETCH_ENROLLED_COURSES_FAILURE,
  ADD_SAVED_COURSES_REQUEST,
  ADD_SAVED_COURSES_SUCCESS,
  ADD_SAVED_COURSES_FAILURE,
  FETCH_SHOPPING_COURSES_REQUEST,
  FETCH_SHOPPING_COURSES_SUCCESS,
  FETCH_SHOPPING_COURSES_FAILURE,
  ADD_SHOPPING_COURSES_REQUEST,
  ADD_SHOPPING_COURSES_SUCCESS,
  ADD_SHOPPING_COURSES_FAILURE,
  DELETE_SHOPPING_COURSES_REQUEST,
  DELETE_SHOPPING_COURSES_SUCCESS,
  DELETE_SHOPPING_COURSES_FAILURE,
} from "../actionType";

const initialState = {
  courses: [],
  recentCourses: [],
  newestCourses: [],
  savedCourses: [],
  shoppingCourses: [],
  loading: false,
  error: "",
};

const enrolledCoursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ENROLLED_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ENROLLED_COURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        courses: action.payload,
      };
    case FETCH_ENROLLED_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case FETCH_SAVED_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SAVED_COURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        savedCourses: action.payload,
      };
    case FETCH_SAVED_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case SEARCH_COURSES_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case SEARCH_COURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        courses: action.payload,
      };
    case SEARCH_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_RECENT_COURSES:
      return {
        ...state,
        recentCourses: action.payload,
      };
    case SET_NEWEST_COURSES:
      return {
        ...state,
        newestCourses: action.payload,
      };
    case CREATE_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        courses: [...state.courses, action.payload],
      };
    case CREATE_COURSE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_SAVED_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_SAVED_COURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        savedCourses: action.payload,
      };
    case DELETE_SAVED_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ADD_SAVED_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_SAVED_COURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        savedCourses: action.payload,
      };
    case ADD_SAVED_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case FETCH_SHOPPING_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SHOPPING_COURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        shoppingCourses: action.payload,
      };
    case FETCH_SHOPPING_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ADD_SHOPPING_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_SHOPPING_COURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        shoppingCourses: action.payload,
      };
    case ADD_SHOPPING_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case DELETE_SHOPPING_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_SHOPPING_COURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        shoppingCourses: action.payload,
      };
    case DELETE_SHOPPING_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default enrolledCoursesReducer;
