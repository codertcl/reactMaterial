import React,{PureComponent} from "react";
import homeStyle from './style.module.css'

export default class Home extends PureComponent{
    constructor(props) {
        super(props);
        this.state={
            message:'你好'
        }
    }

    render() {
        return (
            <div>
                <h1 className={homeStyle.title}>Home</h1>
                <div className={homeStyle.banner}>
                    <span>轮播图</span>
                </div>
            </div>
        )
    }
}
