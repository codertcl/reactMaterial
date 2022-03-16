import React,{PureComponent} from "react";

export default class Detail2 extends PureComponent{
    render() {
        console.log(this.props.location)
            return (
            <div>
                <h1>{this.props.location.search}</h1>
            </div>
        )
    }
}
