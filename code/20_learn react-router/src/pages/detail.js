import React,{PureComponent} from "react";

export default class Detail extends PureComponent{
    render() {
        //{isExact: true,params: {id: 'abc'},path: "/detail/:id",url: "/detail/abc"}
        console.log(this.props)
            return (
            <div>
                <h1>{this.props.match.params.id}</h1>
            </div>
        )
    }
}
