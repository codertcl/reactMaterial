import React, {PureComponent} from "react";

export default class Detail extends PureComponent {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.location.pathname}</h1>
            </div>
        )
    }
}
