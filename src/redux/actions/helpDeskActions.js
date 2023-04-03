import * as actionTypes from './actionTypes';
const host = 'http://localhost:5000/';
export const loadUserRequest = () => ({
  type: actionTypes.LOAD_USER_REQUEST,
});

export const loadUserSuccess = (user) => ({
  type: actionTypes.LOAD_USER_SUCCESS,
  payload: {
    user,
  },
});

export const loadUserFailure = (error) => ({
  type: actionTypes.LOAD_USER_FAILURE,
  payload: {
    error,
  },
});

export const loadUser = (userId) => {
  return async (dispatch) => {
    dispatch(loadUserRequest());

    try {
      const response = await fetch(`${host}/api/users/${userId}`);
      const data = await response.json();

      dispatch(loadUserSuccess(data));
    } catch (error) {
      dispatch(loadUserFailure(error.message));
    }
  };
};
