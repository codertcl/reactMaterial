import {applyMiddleware, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'

import reducer from './reducer.js';

//应用中间件
//https://github.com/reduxjs/redux-devtools/tree/main/extension#installation
const storeEnhancer = applyMiddleware(thunkMiddleware)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;
const store = createStore(reducer, composeEnhancers(storeEnhancer));

export default store;
