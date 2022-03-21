import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from "./store/index.js";
ReactDOM.render(
    //通过context将store传递给子组件
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);
