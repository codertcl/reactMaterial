import React, {PureComponent} from "react";
import {NavLink, withRouter} from "react-router-dom";
import routes from "./router";
import { renderRoutes } from 'react-router-config';
import './App.css'

class App extends PureComponent {
    render() {
        const id = 'abc', info = {name: '冰冰'}
        return (
            <div>
                {/*使用react-router为活跃link添加的类active*/}
                <NavLink exact to="/" activeClassName="link-active">首页</NavLink>
                <NavLink to="/about" activeClassName="link-active">关于</NavLink>
                <NavLink to="/profile" activeClassName="link-active">我的</NavLink>
                <NavLink to="/abc" activeClassName="link-active">abc</NavLink>
                <NavLink to="/user" activeClassName="link-active">用户</NavLink>
                <NavLink to={`/detail/${id}`} activeClassName="link-active">详情</NavLink>
                <NavLink to={"/detail2?name=冰冰&age=32"} activeClassName="link-active">详情1</NavLink>
                <NavLink to={{
                    pathname: "/detail3",
                    search: "name=冰冰&age=32",
                    hash: "#the-hash",
                    state: info
                }} activeClassName="link-active">详情2</NavLink>
                <button onClick={e => this.jumpProduct()}>商品</button>
                <hr/>
                {renderRoutes(routes)}
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
