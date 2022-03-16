import React, {PureComponent} from "react";
import { Redirect } from 'react-router-dom';

export default class User extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
        }
    }

    render() {
        return this.state.isLogin ? (
            <div>
                <h1>用户:'冰冰'</h1>
            </div>
        ) : <Redirect to="/login"/>
    }
}
