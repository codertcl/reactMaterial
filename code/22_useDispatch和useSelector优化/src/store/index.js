import {applyMiddleware, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from "redux-saga";
import reducer from './reducer.js';
import saga from './saga.js'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;

//应用中间件
//https://github.com/reduxjs/redux-devtools/tree/main/extension#installation
const sagaMiddleware = createSagaMiddleware()
//合并多个中间件
const storeEnhancer = applyMiddleware(thunkMiddleware, sagaMiddleware)
////composeEnhancers()合并多个Enhancer
const store = createStore(reducer, composeEnhancers(storeEnhancer));

sagaMiddleware.run(saga)
export default store;
