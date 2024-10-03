import {FETCH_ANALYSIS_REQUEST,
  FETCH_ANALYSIS_SUCCESS,
  FETCH_ANALYSIS_FAILURE, } from '../actionType';

const initialState = {
  data: {},
  status: 'idle',
  error: null,
};

const analysisReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANALYSIS_REQUEST:
      return {
        ...state,
        status: 'loading',
      };
    case FETCH_ANALYSIS_SUCCESS:
      return {
        ...state,
        status: 'succeeded',
        data: action.payload,
      };
    case FETCH_ANALYSIS_FAILURE:
      return {
        ...state,
        status: 'failed',
        error: action.error,
      };
    default:
      return state;
  }
};

export default analysisReducer;
