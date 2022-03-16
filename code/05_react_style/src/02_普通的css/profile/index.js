import React,{PureComponent} from "react";
import './style.css'

export default class Profile extends PureComponent{
    constructor(props) {
        super(props);
        this.state={
            message:'你好'
        }
    }

    render() {
        return (
            <div className="profile">
                <h1 className="title">Profile</h1>
                <ul className="settings">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        )
    }
}
