import React, {PureComponent} from "react";
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import Home from './pages/home'
import About from './pages/about'
import Profile from './pages/profile'
import User from "./pages/user";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/login";
import './App.css'
import Switch from "react-router-dom/es/Switch";

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <BrowserRouter>
                    {/*使用react-router为活跃link添加的类active*/}
                    <NavLink exact to="/" activeClassName="link-active">首页</NavLink>
                    <NavLink to="/about" activeClassName="link-active">关于</NavLink>
                    <NavLink to="/profile" activeClassName="link-active">我的</NavLink>
                    <NavLink to="/abc" activeClassName="link-active">abc</NavLink>
                    <NavLink to="/user" activeClassName="link-active">用户</NavLink>
                    <hr/>


                    {/*Switch组件只匹配一个*/}
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/profile" component={Profile}/>
                        {/*<Route path="/:id" component={User}/>*/}
                        <Route path="/user" component={User}/>
                        <Route path="/login" component={Login}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
