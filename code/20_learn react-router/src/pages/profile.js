import React,{PureComponent} from "react";

export default class Profile extends PureComponent{
    constructor(props) {
        super(props);
        this.state={
             message:'你好'
        }
    }

    render() {
        return (
            <div>
                <h1>我的</h1>
            </div>
        )
    }
}
