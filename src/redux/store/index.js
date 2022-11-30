import {createStore, combineReducers, applyMiddleware} from 'redux';
// import thunkMiddleware from "redux-thunk";

import authReducer from '../reducers';
import myFavoriteReducer from '../reducers/MyFavoriteReducer';

const rootReducer = combineReducers({
  myFavoriteReducer: myFavoriteReducer,
});
const store = createStore(rootReducer, applyMiddleware());

export {store};

