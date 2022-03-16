import React, {PureComponent} from "react";
import {Switch,NavLink, Route,  withRouter} from "react-router-dom";
import Home from './pages/home'
import About from './pages/about'
import Profile from './pages/profile'
import User from "./pages/user";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/login";
import Product from "./pages/product";
import './App.css'

class App extends PureComponent {
    render() {
        return (
            <div>
                    {/*使用react-router为活跃link添加的类active*/}
                    <NavLink exact to="/" activeClassName="link-active">首页</NavLink>
                    <NavLink to="/about" activeClassName="link-active">关于</NavLink>
                    <NavLink to="/profile" activeClassName="link-active">我的</NavLink>
                    <NavLink to="/abc" activeClassName="link-active">abc</NavLink>
                    <NavLink to="/user" activeClassName="link-active">用户</NavLink>
                    <button onClick={e => this.jumpProduct()}>商品</button>
                    <hr/>


                    {/*Switch组件只匹配一个*/}
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/user" component={User}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/product" component={Product}/>
                        <Route component={NoMatch}/>
                    </Switch>
            </div>
        )
    }

    jumpProduct() {
        // 通过路由渲染的组件会添加history属性 可以使用该方法进行跳转
        //App组件通过JSX创建并渲染
        this.props.history.push('/product')
    }
}
//通过高阶组件添加history信息
export default withRouter(App)
