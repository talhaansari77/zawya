import {createStore, combineReducers, applyMiddleware} from 'redux';
// import thunkMiddleware from "redux-thunk";

import authReducer from '../reducers';
import myCoinReducer from '../reducers/MyCoinReducer';
const rootReducer = combineReducers({
  myCoinReducer: myCoinReducer,
});
const store = createStore(rootReducer, applyMiddleware());

export {store};

