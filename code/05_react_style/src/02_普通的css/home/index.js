import React,{PureComponent} from "react";
import './style.css'

export default class Home extends PureComponent{
    constructor(props) {
        super(props);
        this.state={
            message:'你好'
        }
    }

    render() {
        return (
            <div className="home">
                <h1 className="title">Home</h1>
                <div className="banner">
                    <span>轮播图</span>
                </div>
            </div>
        )
    }
}
