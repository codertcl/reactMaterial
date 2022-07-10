import React, {Component} from "react";

class CountButton extends Component {
    render() {
        //对props结构获取到传递过来的click函数
        const {click} = this.props
        return (
            <button onClick={click}>+1</button>
        )
    }
}

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
                <h2>{this.state.count}</h2>
                <button onClick={() => {
                    this.increment()
                }}>+1
                </button>
                {/*<CountButton onClick={this.increment.bind(this)}/>*/}
                {/*父组件向子组件传递click函数*/}
                <CountButton click={() => this.increment()}/>
            </div>
        )
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }
}
