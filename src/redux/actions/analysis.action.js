// analysisAction.js
import axios from 'axios';
import {FETCH_ANALYSIS_REQUEST,
    FETCH_ANALYSIS_SUCCESS,
    FETCH_ANALYSIS_FAILURE, } from '../actionType';
  

const API_URL = 'https://669f7703b132e2c136fdf01d.mockapi.io/analysis';

export const fetchAnalysisData = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_ANALYSIS_REQUEST });

    try {
      const response = await axios.get(API_URL);
      dispatch({
        type: FETCH_ANALYSIS_SUCCESS,
        payload: response.data[0], 
      });
    } catch (error) {
      dispatch({
        type: FETCH_ANALYSIS_FAILURE,
        error: error.message,
      });
    }
  };
};
