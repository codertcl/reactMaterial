import React, {PureComponent} from "react";
import {Redirect} from 'react-router-dom';

export default class User extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }

    render() {
        return this.state.isLogin ? (
                <div>
                    <h1>用户:'冰冰'</h1>
                </div>
            ) :
            // <Redirect to="/login"/>
            // push参数通过push向路由堆栈中添加新路径而非replace
            <Redirect push to={{
                pathname: "/login",
                search: "?utm=your+face",//添加params参数
            }}/>
    }
}
