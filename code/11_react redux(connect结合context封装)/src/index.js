import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {StoreContext} from './utils/context.js'
import store from "./store";
ReactDOM.render(
    //通过context将store传递给子组件
    <StoreContext.Provider value={store}>
        <App/>
    </StoreContext.Provider>, document.getElementById('root')
);
