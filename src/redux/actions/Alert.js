import { REMOVE_ALERT, SET_ALERT } from '../actions/actionTypes';
import { v4 as uuidv4 } from 'uuid';

const id = uuidv4();

export const setAlert =
  (msg, alertType, color, timeOut = 5000) =>
  (dispatch) => {
    console.log(msg, alertType, color);
    dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, id, color },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeOut);
  };
