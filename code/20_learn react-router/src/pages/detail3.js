import React,{PureComponent} from "react";

export default class Detail3 extends PureComponent{
    render() {
        console.log(this.props.location)
            return (
            <div>
                <h1>{this.props.location.state.name}</h1>
                <h1>{this.props.location.search}</h1>
            </div>
        )
    }
}
