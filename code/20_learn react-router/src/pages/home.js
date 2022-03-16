import React,{PureComponent} from "react";

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
                <h1>首页</h1>
            </div>
        )
    }
}
