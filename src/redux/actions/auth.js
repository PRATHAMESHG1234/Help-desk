import { setAlert } from './Alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './actionTypes';

import { fetchWithToken } from '../../utils/fetchWithToken';

const host = 'http://localhost:5000/';

// Load user
export const loadUser = () => async (dispatch) => {
  console.log('i get call');
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }

    const response = await fetchWithToken(`${host}api/user/auth`, 'GET', token);
    const data = await response;

    dispatch({
      type: USER_LOADED,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register user
export const register =
  ({ firstName, lastName, email }) =>
  async (dispatch) => {
    console.log('i get  call');
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }
      const body = { firstName, lastName, email };
      const response = await fetchWithToken(
        `${host}api/user/register`,
        'POST',
        token,
        body
      );
      // console.log(response);

      // const data = await response;
      // localStorage.setItem('token', data.token); // Store the token in localStorage
      dispatch({
        type: REGISTER_SUCCESS,
      });

      // dispatch(loadUser());
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        const errors = error.response.data.errors;
        errors.forEach((error) => {
          dispatch(setAlert(error.msg, 'danger'));
        });
      }
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

/// Login user
export const login = (username, password) => async (dispatch) => {
  try {
    const body = { username, password };
    const response = await fetchWithToken(
      `${host}api/user/login`,
      'POST',
      null,
      body
    );

    const data = await response;
    localStorage.setItem('token', data.token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });

    dispatch(loadUser());
  } catch (error) {
    const errors = error.Error;
    console.log(errors);

    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, 'danger'));
      });
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout / Clear profile
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
