import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import ticketReducer from './reducers/ticketReducer';
// import userReducer from './reducers/userReducer';
import rootReducer from '../reducers/index';

const initialState = {
  tickets: [],
  currentUser: null,
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
console.log(store);
export default store;
