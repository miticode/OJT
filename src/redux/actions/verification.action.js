import axios from 'axios';

export const VERIFY_COURSE_REQUEST = 'VERIFY_COURSE_REQUEST';
export const VERIFY_COURSE_SUCCESS = 'VERIFY_COURSE_SUCCESS';
export const VERIFY_COURSE_FAILURE = 'VERIFY_COURSE_FAILURE';

export const verifyCourse = (courseTitle) => {
  return async (dispatch) => {
    dispatch({ type: VERIFY_COURSE_REQUEST });

    try {
      const response = await axios.get(`https://667e5671297972455f67ee82.mockapi.io/projectojt/api/v1/courses`);
      const courses = response.data;

      const matchedCourse = courses.find(course => course.title === courseTitle);

      if (matchedCourse) {
        dispatch({ type: VERIFY_COURSE_SUCCESS });
      } else {
        dispatch({ type: VERIFY_COURSE_FAILURE, payload: 'Verification failed: Course title does not match.' });
      }
    } catch (error) {
      dispatch({ type: VERIFY_COURSE_FAILURE, payload: 'Verification failed: Error communicating with server.' });
    }
  };
};
