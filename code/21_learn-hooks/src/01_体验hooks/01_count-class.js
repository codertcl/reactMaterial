import React, {PureComponent} from "react";

export default class CountClass extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        console.log('CountClass')
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={e => this.add()}>+1</button>
                <button onClick={e => this.sub()}>-1</button>
            </div>
        )
    }

    add() {
        this.setState({
            count: this.state.count + 1
        })
    }

    sub() {
        this.setState({
            count: this.state.count - 1
        })
    }
}
