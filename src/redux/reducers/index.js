import { combineReducers } from 'redux';
import alert from './alert';
import Auth from './authReducer';
const rootReducer = combineReducers({
  alert,
  Auth,
});
console.log(alert);
export default rootReducer;
