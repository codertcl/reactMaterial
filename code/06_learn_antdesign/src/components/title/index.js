import React,{PureComponent} from "react";

export default class HYTitle extends PureComponent{
    constructor(props) {
        super(props);
        this.state={
            message:'你好'
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}
