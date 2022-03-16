import React, {PureComponent} from "react";

export default class App extends PureComponent {
    constructor() {
        super();
        this.state={
            color:"pink"
        }
    }
    render() {
        const pStyle = {
            color: this.state.color,
            textDecoration: "underline"
        }
        return (
            <div>
                <h1 style={{color: 'red', fontSize: "30px"}}>冰冰</h1>
                <p style={pStyle}>饼饼</p>
            </div>
        )
    }
}
