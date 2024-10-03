import { VERIFY_COURSE_REQUEST, VERIFY_COURSE_SUCCESS, VERIFY_COURSE_FAILURE } from '../actions/verification.action';

const initialState = {
  verifiedCourse: false,
  error: null,
};

const verificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case VERIFY_COURSE_REQUEST:
      return {
        ...state,
        verifiedCourse: false,
        error: null,
      };
    case VERIFY_COURSE_SUCCESS:
      return {
        ...state,
        verifiedCourse: true,
        error: null,
      };
    case VERIFY_COURSE_FAILURE:
      return {
        ...state,
        verifiedCourse: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default verificationReducer;
