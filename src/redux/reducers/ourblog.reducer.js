import { FETCH_OURBLOG_FAILURE, FETCH_OURBLOG_REQUEST, FETCH_OURBLOG_SUCCESS } from "../actionType";

const initialState = {
    ourblog: [],
    loading: false,
    error: "",
  };

const ourblogReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_OURBLOG_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_OURBLOG_SUCCESS:
        return {
          loading: false,
          ourblog: action.payload,
        };
      case FETCH_OURBLOG_FAILURE:
        return {
          loading: false,
          error: action.error,
        };
        default:
      return state;
  }
};

export default ourblogReducer;