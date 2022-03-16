import React,{PureComponent} from "react";
import Home from "../home";
import Profile from "../profile";
import './style.css'
export default class App extends PureComponent{
    constructor(props) {
        super(props);
        this.state={
             message:'你好'
        }
    }

    render() {
        return (
            <div id="app">
                <h1 className="title">App</h1>
                <Home>Home</Home>
                <Profile>Profile</Profile>
            </div>
        )
    }
}
