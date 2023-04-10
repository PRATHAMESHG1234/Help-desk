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

const host = 'https://creepy-tan-vulture.cyclic.app/';

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
    try {
      const token = localStorage.getItem('token');

      const body = { firstName, lastName, email };
      await fetchWithToken(`${host}api/user/register`, 'POST', token, body);
      dispatch(setAlert('Registration successful!', 'success'));
      dispatch({
        type: REGISTER_SUCCESS,
      });
    } catch (error) {
      const errors = [error];
      console.log(errors);

      errors.forEach((error) => {
        dispatch(setAlert('Registration failed.', error));
      });

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

/// Login user
export const login = (username, password) => async (dispatch) => {
  console.log(username, password);
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
    console.log(error);

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
