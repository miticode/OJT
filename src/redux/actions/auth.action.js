// src/redux/actions/auth.action.js
import axios from "axios";
import Cookies from "js-cookie";


import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_TOKEN,
  SET_ID,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SET_ROLE, SET_USER,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  UPDATE_USER_ROLE_REQUEST,
  UPDATE_USER_ROLE_SUCCESS,
  UPDATE_USER_ROLE_FAILURE,
  CHECK_EMAIL, CHECK_EMAIL_SUCCESS, CHECK_EMAIL_FAILURE

} from "../actionType";

const API_URL = "https://667e5671297972455f67ee82.mockapi.io/projectojt/api/v1/users";


export const login = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await axios.get(`${API_URL}`, { params: { email, password } });
    if (response.data && response.data.length > 0) {
      const user = response.data.find((user) => user.email === email && user.password === password);
      if (user) {
        const token = `fake-jwt-token-${user.email}`;
        dispatch({ type: LOGIN_SUCCESS, payload: user });
        dispatch({ type: SET_TOKEN, payload: token });

        Cookies.set('token', token, { expires: 7 });
        Cookies.set('role', user.role, { expires: 7 });
        Cookies.set('id', user.id, { expires: 7 });
        Cookies.set('avatar', user.avatar, { expires: 7 });
        Cookies.set('username', user.username, { expires: 365 });
        localStorage.setItem('firstName', user.firstName || '');
        localStorage.setItem('lastName', user.lastName || '');
      }
    } else {
      dispatch({ type: LOGIN_FAILURE, error: 'Invalid email or password' });
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      dispatch({ type: LOGIN_FAILURE, error: 'Incorrect email or password' });
    } else {
      dispatch({ type: LOGIN_FAILURE, error: error.message });
    }
  }
};

export const logout = () => {
  Cookies.remove("token");
  Cookies.remove("role");
  Cookies.remove("avatar");
  Cookies.remove("username");
  Cookies.remove("email");
  localStorage.removeItem('firstName');
  localStorage.removeItem('lastName');
  localStorage.removeItem('headline');
  localStorage.removeItem('description');
  localStorage.removeItem('mysite ');
  localStorage.removeItem('facebookbprofile');
  localStorage.removeItem('twitterprofile');
  localStorage.removeItem('linkedinprofile');
  localStorage.removeItem('youtubeprofile');

  return {
    type: LOGOUT,
  };
};

export const setToken = (token) => ({
  type: "SET_TOKEN",
  payload: token,
});

export const setRole = (role) => {
  return {
    type: "SET_ROLE",
    payload: role,
  };
};

export const setID = (id) => {
  // Thêm action lưu user
  return {
    type: SET_ID,
    payload: id,
  };
};

// Action creators
export const signupRequest = () => ({
  type: SIGNUP_REQUEST,
});

export const signupSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

export const signupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export const signup = (fullname, email, password, role = 'student') => async (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  try {
    const response = await axios.post(API_URL, { fullname, email, password, role });
    const user = response.data;
    const token = `fake-jwt-token-${user.email}`;
    dispatch({ type: SIGNUP_SUCCESS, payload: user });
    dispatch({ type: SET_TOKEN, payload: token });

    Cookies.set('token', token, { expires: 7 });
    Cookies.set('role', user.role, { expires: 7 });
    Cookies.set('id', user.id, { expires: 7 });
    Cookies.set('avatar', user.avatar, { expires: 7 });

    return user;
  } catch (error) {
    dispatch({ type: SIGNUP_FAILURE, error: error.message });
    throw error;
  }
};

export const register = (userData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await axios.post('https://your-api-endpoint.com/register', userData);
    const { token, role, user, id, avatar } = response.data;

    Cookies.set('token', token);
    Cookies.set('role', role);
    Cookies.set('id', id);
    Cookies.set('avatar', avatar);

    dispatch({ type: LOGIN_SUCCESS, payload: user });
    dispatch({ type: SET_TOKEN, payload: token });
    dispatch({ type: SET_ROLE, payload: role });
    dispatch({ type: SET_ID, payload: id });
    dispatch({ type: SET_USER, payload: user });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, error: error.message });
  }
};
export const forgotPassword = (email) => async (dispatch) => {
  dispatch({ type: FORGOT_PASSWORD_REQUEST });
  try {
    const { data: users } = await axios.get(`${API_URL}/?email=${email}`);
    if (users.length === 0) {
      throw new Error('Email not found');
    }

    const user = users[0];
    const userId = user.id;
    const defaultPassword = 'password';

    await axios.put(`${API_URL}/${userId}`, { ...user, password: defaultPassword });

    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: { defaultPassword },
    });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAILURE,
      payload: { error: error.message },
    });
  }
};

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const updateUserRoleSuccess = (userId, role) => ({
  type: UPDATE_USER_ROLE_SUCCESS,
  payload: { userId, role },
});

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://667e5671297972455f67ee82.mockapi.io/projectojt/api/v1/users');
      const data = await response.json();
      dispatch(fetchUsersSuccess(data));
    } catch (error) {
      console.error('Failed to fetch users:', error);
      // Handle error here, dispatch an error action or show an error message
    }
  };
};

export const updateUserRole = (userId, role) => {
  return async (dispatch) => {
    try {
      await fetch(`https://667e5671297972455f67ee82.mockapi.io/projectojt/api/v1/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role }),
      });
      dispatch(updateUserRoleSuccess(userId, role));
      // Optionally, you can dispatch a success action or handle success in the component
    } catch (error) {
      console.error('Failed to update user role:', error);
      // Handle error here, dispatch an error action or show an error message
    }
  };
};

// Check if email exists
export const checkEmail = (email) => async (dispatch) => {
  dispatch({ type: CHECK_EMAIL });

  try {
    const response = await axios.get(API_URL, { params: { email } });
    if (response.data.length > 0) {
      dispatch({ type: CHECK_EMAIL_SUCCESS, payload: true });
    } else {
      dispatch({ type: CHECK_EMAIL_SUCCESS, payload: false });
    }
  } catch (error) {
    dispatch({ type: CHECK_EMAIL_FAILURE, payload: error.message });
  }
};


