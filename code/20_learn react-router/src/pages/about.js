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
        //父组件App通过renderRoutes来渲染才能通过该组件获取对应的路由信息
        console.log(this.props.route)
        //matchRoutes方法会匹配出 Route 组件树中与当前 location 对象匹配的一个子集
        console.log(matchRoutes(this.props.route.routes, '/about'))
        return (
            <>
                <NavLink exact to="/about" activeClassName="about-active">企业文化</NavLink>
                <NavLink exact to="/about/culture" activeClassName="about-active">企业历史</NavLink>
                <NavLink exact to="/about/contact" activeClassName="about-active">联系我们</NavLink>
                <button onClick={e => this.jumpToJoin()}>加入我们</button>
                {/*<Switch>*/}
                {/*    <Route exact path="/about" component={AboutHistory}/>*/}
                {/*    <Route path="/about/culture" component={AboutCulture}/>*/}
                {/*    <Route path="/about/contact" component={AboutContact}/>*/}
                {/*    <Route exact path="/about/join" component={AboutJoin}/>*/}
                {/*    <Route component={NoMatch}/>*/}
                {/*</Switch>*/}
                {renderRoutes(this.props.route.routes)}
            </>
        )
    }

    jumpToJoin() {
        console.log(this.props)
        // 通过路由渲染的组件会添加history属性 可以使用该方法进行跳转
        this.props.history.push("/about/join")
    }
}
