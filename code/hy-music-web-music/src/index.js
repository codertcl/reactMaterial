import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@/assets/css/base.css'
import {HashRouter} from "react-router-dom";
ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter> ,document.getElementById('root'));
