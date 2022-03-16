import React, {createRef, PureComponent} from "react";

class Count extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.increment()}>+1</button>
            </div>
        )
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }
}

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.countRef = createRef()
    }

    render() {
        return (
            <div>
                <Count ref={this.countRef}/>
                <button onClick={e => this.appBtnClick()}>App中按钮</button>
            </div>
        )
    }

    appBtnClick() {
        this.countRef.current.increment()
    }
}
