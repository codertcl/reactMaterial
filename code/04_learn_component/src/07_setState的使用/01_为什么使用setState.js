import React, {Component} from "react";

export default class App extends Component {
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
        this.state.count +=1 //修改了count 但react不知道数据更新了 不会更新页面
        console.log(this.state.count)
        this.setState({
            count: this.state.count + 1
        })
    }
}
