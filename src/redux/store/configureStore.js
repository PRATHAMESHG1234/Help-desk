import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/index';
import { createStore, compose, applyMiddleware } from 'redux';
const initialState = {};

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
