import React,{PureComponent} from "react";
import HYTitle from 'components/title/index'

export default class HYHomeRecommend extends PureComponent{
    constructor(props) {
        super(props);
        this.state={
             message:'你好'
        }
    }

    render() {
        return (
            <div>
                <HYTitle/>
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}
