import React, {PureComponent} from "react";
import {NavLink, Route, Switch} from "react-router-dom";
import NoMatch from "./NoMatch";
import {matchRoutes,renderRoutes} from "react-router-config";

export function AboutHistory() {
    return <h2>企业成立于2000年</h2>
}

export function AboutCulture() {
    return <h2>博大方正尚美创新</h2>
}

export function AboutContact() {
    return <h2>1435678</h2>
}


export function AboutJoin() {
    return <h2>投递简历到2635633080@qq.com</h2>
}

export default class About extends PureComponent {
    render() {
        //该组件对应的路由信息
        console.log(this.props.route)
        //发挥所匹配的路由
        console.log(matchRoutes(this.props.route.routes, '/about'))
        return (
            <div>
                <NavLink exact to="/about" activeClassName="about-active">企业文化</NavLink>
                <NavLink to="/about/culture" activeClassName="about-active">企业历史</NavLink>
                <NavLink to="/about/contact" activeClassName="about-active">联系我们</NavLink>
                <button onClick={e => this.jumpToJoin()}>加入我们</button>
                {/*<Switch>*/}
                {/*    <Route exact path="/about" component={AboutHistory}/>*/}
                {/*    <Route path="/about/culture" component={AboutCulture}/>*/}
                {/*    <Route path="/about/contact" component={AboutContact}/>*/}
                {/*    <Route path="/about/join" component={AboutJoin}/>*/}
                {/*    <Route component={NoMatch}/>*/}
                {/*</Switch>*/}

                {renderRoutes(this.props.route.routes)}
            </div>
        )
    }

    jumpToJoin() {
        // 通过路由渲染的组件会添加history属性 可以使用该方法进行跳转
        this.props.history.push("/about/join")
    }
}
