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
//const host = 'http://localhost:5000/';

// Load user
export const loadUser = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch({
        type: AUTH_ERROR,
      });

      throw new Error('No token found');
    }

    const response = await fetchWithToken(`${host}api/user/auth`, 'GET', token);
    console.log('responsea:', response);
    if (response.success === true) {
      const data = await response.data.user;

      dispatch({
        type: USER_LOADED,
        payload: data,
      });
    } else if (response.success === false) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register user
export const register =
  ({ firstName, lastName, email, managementType }) =>
  async (dispatch) => {
    try {
      const token = localStorage.getItem('token');

      const body = { firstName, lastName, email, managementType };
      const response = await fetchWithToken(
        `${host}api/user/register`,
        'POST',
        token,
        body
      );
      console.log('response:', response);
      if (response.success === true) {
        dispatch(setAlert(response.message, 'success', 'green'));

        dispatch({
          type: REGISTER_SUCCESS,
        });
      } else if (response.success === false) {
        dispatch(
          setAlert(`Registration failed.:   ${response.error}`, 'danger', 'red')
        );
        dispatch({
          type: REGISTER_FAIL,
        });
      }
    } catch (error) {
      const errors = [error];
      console.log(errors);

      errors.forEach((error) => {
        dispatch(setAlert('Registration failed.' + error, 'danger', 'red'));
      });

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
    console.log('response,', response);
    if (response.success === true) {
      const data = await response.data;
      localStorage.setItem('token', data.token);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });
      dispatch(setAlert(response.message, 'success', 'green'));
      dispatch(loadUser());
      return true;
    }
    if (response.success === false) {
      dispatch(
        setAlert(`Login failed.:   ${response.message}`, 'danger', 'red')
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  } catch (error) {
    const errors = error.Error;
    console.log(error);

    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, 'danger', 'red'));
      });
    }
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};

// Logout / Clear profile
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
