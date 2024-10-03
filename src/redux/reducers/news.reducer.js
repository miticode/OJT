import { FETCH_NEWS_FAILURE, FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS } from "../actionType";


const initialState = {
  news: [],
  loading: false,
  error: "",
};
const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_NEWS_SUCCESS:
      return {
        loading: false,
        news: action.payload,
      };
    case FETCH_NEWS_FAILURE:
      return {
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default newsReducer;
