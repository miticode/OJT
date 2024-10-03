import axios from "axios";
import {
  FETCH_ENROLLED_COURSES_REQUEST,
  FETCH_ENROLLED_COURSES_SUCCESS,
  FETCH_ENROLLED_COURSES_FAILURE,
  SEARCH_COURSES_REQUEST,
  SEARCH_COURSES_SUCCESS,
  SEARCH_COURSES_FAILURE,
  SET_RECENT_COURSES,
  SET_NEWEST_COURSES,
  CREATE_COURSE_REQUEST,
  CREATE_COURSE_SUCCESS,
  CREATE_COURSE_FAILURE,
  DELETE_SAVED_COURSES_REQUEST,
  DELETE_SAVED_COURSES_SUCCESS,
  DELETE_SAVED_COURSES_FAILURE,
  FETCH_SAVED_COURSES_SUCCESS,
  FETCH_SAVED_COURSES_REQUEST,
  FETCH_SAVED_COURSES_FAILURE,
  ADD_SAVED_COURSES_REQUEST,
  ADD_SAVED_COURSES_SUCCESS,
  ADD_SAVED_COURSES_FAILURE,
  ADD_SHOPPING_COURSES_REQUEST,
  FETCH_SHOPPING_COURSES_REQUEST,
  FETCH_SHOPPING_COURSES_SUCCESS,
  FETCH_SHOPPING_COURSES_FAILURE,
  ADD_SHOPPING_COURSES_SUCCESS,
  ADD_SHOPPING_COURSES_FAILURE,
  DELETE_SHOPPING_COURSES_REQUEST,
  DELETE_SHOPPING_COURSES_SUCCESS,
  DELETE_SHOPPING_COURSES_FAILURE,
} from "../actionType";
import { differenceInDays, parse, isValid } from "date-fns";

const API_URL = "https://667e5671297972455f67ee82.mockapi.io/projectojt/api/v1";

const isRecentCourse = (courseDate, daysThreshold = 30) => {
  try {
    const today = new Date();
    const courseParsedDate = parse(courseDate, "dd/MM/yyyy", new Date());

    if (!isValid(courseParsedDate)) {
      console.error("Invalid date:", courseDate);
      return false;
    }

    const daysDifference = differenceInDays(today, courseParsedDate);

    console.log(
      `Course date: ${courseDate}, Parsed date: ${courseParsedDate}, Days difference: ${daysDifference}`
    );
    return daysDifference <= daysThreshold;
  } catch (error) {
    console.error("Error parsing date:", error);
    return false;
  }
};
export const getAllCourses = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_ENROLLED_COURSES_REQUEST });

    try {
      const coursesResponse = await axios.get(`${API_URL}/courses`);
      const allCourses = coursesResponse.data;
      console.log("All courses data:", allCourses);

      const recentCourses = allCourses.filter((course) => {
        console.log(`Course date: ${course.date}`);
        return isRecentCourse(course.date);
      });
      console.log("Recent courses data:", recentCourses);

      const newestCourses = [...allCourses]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 8);

      dispatch({
        type: FETCH_ENROLLED_COURSES_SUCCESS,
        payload: allCourses,
      });

      dispatch({
        type: SET_RECENT_COURSES,
        payload: recentCourses,
      });

      dispatch({
        type: SET_NEWEST_COURSES,
        payload: newestCourses,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ENROLLED_COURSES_FAILURE,
        error: error.message,
      });
    }
  };
};

export const getEnrolledCourses = (userId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_ENROLLED_COURSES_REQUEST });

    try {
      const userResponse = await axios.get(`${API_URL}/users/${userId}`);
      const enrolledCoursesIds = userResponse.data.enrolledCourses.map(
        (course) => course.id
      );
      console.log(enrolledCoursesIds);
      const coursesResponse = await axios.get(`${API_URL}/courses`, {
        params: { id: enrolledCoursesIds.join(",") },
      });
      const filteredCourses = coursesResponse.data.filter((course) =>
        enrolledCoursesIds.includes(course.id)
      );

      dispatch({
        type: FETCH_ENROLLED_COURSES_SUCCESS,
        payload: filteredCourses,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ENROLLED_COURSES_FAILURE,
        error: error.message,
      });
    }
  };
};

export const getSavedCourses = (userId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_SAVED_COURSES_REQUEST });
    try {
      const userResponse = await axios.get(`${API_URL}/users/${userId}`);
      const savedCoursesIds = userResponse.data.savedCourses;

      const coursesResponse = await axios.get(`${API_URL}/courses`);

      const filteredCourses = coursesResponse.data.filter((course) =>
        savedCoursesIds.includes(course.id)
      );

      dispatch({
        type: FETCH_SAVED_COURSES_SUCCESS,
        payload: filteredCourses,
      });
    } catch (error) {
      dispatch({
        type: FETCH_SAVED_COURSES_FAILURE,
        error: error.message,
      });
    }
  };
};

export const searchCourses = (query) => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_COURSES_REQUEST });
    try {
      const response = await axios.get(`${API_URL}/courses`, {
        params: { title: query },
      });
      dispatch({ type: SEARCH_COURSES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: SEARCH_COURSES_FAILURE, error: error.message });
    }
  };
};

export const searchCoursesByInstructor = (query) => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_COURSES_REQUEST });
    try {
      const response = await axios.get(`${API_URL}/courses`, {
        params: { instructor: query },
      });
      dispatch({ type: SEARCH_COURSES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: SEARCH_COURSES_FAILURE, payload: error.message });
    }
  };
};
export const createCourse = (courseData) => async (dispatch) => {
  dispatch({ type: CREATE_COURSE_REQUEST });
  try {
    const response = await axios.post(
      "https://667e5671297972455f67ee82.mockapi.io/projectojt/api/v1/courses",
      courseData
    );
    dispatch({ type: CREATE_COURSE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: CREATE_COURSE_FAILURE, payload: error.message });
  }
};

export const deleteSavedCourses = (userId) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_SAVED_COURSES_REQUEST });
    try {
      const userResponse = await axios.get(`${API_URL}/users/${userId}`);
      await axios.put(`${API_URL}/users/${userId}`, {
        ...userResponse.data,
        savedCourses: [],
      });

      dispatch({
        type: DELETE_SAVED_COURSES_SUCCESS,
        payload: [],
      });

      dispatch({
        type: FETCH_SAVED_COURSES_SUCCESS,
        payload: [],
      });
    } catch (error) {
      dispatch({
        type: DELETE_SAVED_COURSES_FAILURE,
        error: error.message,
      });
    }
  };
};
export const addCourseToSaved = (userId, courseId) => {
  return async (dispatch) => {
    dispatch({ type: ADD_SAVED_COURSES_REQUEST });
    try {
      const userResponse = await axios.get(`${API_URL}/users/${userId}`);
      const savedCourses = userResponse.data.savedCourses || [];

      if (!savedCourses.includes(courseId)) {
        const updatedSavedCourses = [...savedCourses, courseId];

        await axios.put(`${API_URL}/users/${userId}`, {
          ...userResponse.data,
          savedCourses: updatedSavedCourses,
        });

        dispatch({
          type: ADD_SAVED_COURSES_SUCCESS,
          payload: updatedSavedCourses,
        });

        dispatch({
          type: FETCH_SAVED_COURSES_SUCCESS,
          payload: updatedSavedCourses,
        });
      } else {
        // Optional: Handle the case where the course is already saved
        dispatch({
          type: ADD_SAVED_COURSES_FAILURE,
          error: "Course is already saved.",
        });
      }
    } catch (error) {
      dispatch({
        type: ADD_SAVED_COURSES_FAILURE,
        error: error.message,
      });
    }
  };
};
export const deleteSavedCourseByCourseId = (userId, courseId) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_SAVED_COURSES_REQUEST });
    try {
      const userResponse = await axios.get(`${API_URL}/users/${userId}`);
      const savedCourses = userResponse.data.savedCourses || [];
      const updatedSavedCourses = savedCourses.filter(id => id !== courseId);

      await axios.put(`${API_URL}/users/${userId}`, {
        ...userResponse.data,
        savedCourses: updatedSavedCourses,
      });

      dispatch({
        type: DELETE_SAVED_COURSES_SUCCESS,
        payload: updatedSavedCourses,
      });

      dispatch({
        type: FETCH_SAVED_COURSES_SUCCESS,
        payload: updatedSavedCourses,
      });
    } catch (error) {
      dispatch({
        type: DELETE_SAVED_COURSES_FAILURE,
        error: error.message,
      });
    }
  };
};

export const getShoppingCart = (userId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_SHOPPING_COURSES_REQUEST });
    try {
      const userResponse = await axios.get(`${API_URL}/users/${userId}`);
      const shoppingCartIds = userResponse.data.shoppingCart;

      const coursesResponse = await axios.get(`${API_URL}/courses`);

      const filteredCourses = coursesResponse.data.filter((course) =>
        shoppingCartIds.includes(course.id)
      );

      console.log(filteredCourses);
      dispatch({
        type: FETCH_SHOPPING_COURSES_SUCCESS,
        payload: filteredCourses,
      });
    } catch (error) {
      dispatch({
        type: FETCH_SHOPPING_COURSES_FAILURE,
        error: error.message,
      });
    }
  };
};

export const addCourseToShoppingCart = (userId, courseId) => {
  return async (dispatch) => {
    dispatch({ type: ADD_SHOPPING_COURSES_REQUEST });
    try {
      const userResponse = await axios.get(`${API_URL}/users/${userId}`);
      const shoppingCart = userResponse.data.shoppingCart || [];

      if (!shoppingCart.includes(courseId)) {
        const updatedShoppingCart = [...shoppingCart, courseId];

        await axios.put(`${API_URL}/users/${userId}`, {
          ...userResponse.data,
          shoppingCart: updatedShoppingCart,
        });

        dispatch({
          type: ADD_SHOPPING_COURSES_SUCCESS,
          payload: updatedShoppingCart,
        });

        dispatch({
          type: FETCH_SHOPPING_COURSES_SUCCESS,
          payload: updatedShoppingCart,
        });
      } else {
        dispatch({
          type: ADD_SHOPPING_COURSES_FAILURE,
          error: "Course is already in the shopping cart.",
        });
      }
    } catch (error) {
      dispatch({
        type: ADD_SHOPPING_COURSES_FAILURE,
        error: error.message,
      });
    }
  };
};

export const deleteShoppingCartItem = (userId, courseId) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_SHOPPING_COURSES_REQUEST });
    try {
      const userResponse = await axios.get(`${API_URL}/users/${userId}`);
      const shoppingCart = userResponse.data.shoppingCart;
      const deleteShopCartNew = shoppingCart.filter(
        (course) => course !== courseId
      );

      await axios.put(`${API_URL}/users/${userId}`, {
        ...userResponse.data,
        shoppingCart: deleteShopCartNew,
      });

      dispatch({
        type: DELETE_SHOPPING_COURSES_SUCCESS,
        payload: deleteShopCartNew,
      });

      const updatedUserResponse = await axios.get(`${API_URL}/users/${userId}`);
      const shoppingCartIds = updatedUserResponse.data.shoppingCart.map(
        (course) => course.id
      );

      const shoppingCartResponse = await axios.get(`${API_URL}/courses`, {
        params: { id: shoppingCartIds.join("") },
      });

      const filteredShoppingCart = shoppingCartResponse.data.filter((course) =>
        updatedUserResponse.data.shoppingCart.includes(course.id)
      );

      dispatch({
        type: FETCH_SHOPPING_COURSES_SUCCESS,
        payload: filteredShoppingCart,
      });
    } catch (error) {
      dispatch({
        type: DELETE_SHOPPING_COURSES_FAILURE,
        error: error.message,
      });
    }
  };
};