import React, {Component} from "react";

function Home(props) {
    return (
        <div>
            <h1>{props.count}</h1>
        </div>
    )
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
                <h1>{this.state.count}</h1>
                <button onClick={() => this.increment()}>+1</button>
            </div>
        )
    }

    increment() {
        // //1.setState合并时只会更新一次
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log(this.state.count)//n
        // })
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log(this.state.count)//n
        // })
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log(this.state.count)//n
        // })

        // //// 2.setState合并时进行累加
        this.setState((prevState, props) => {
            console.log(prevState.count)
            return {
                count: prevState.count + 1
            }
        })
        this.setState((prevState, props) => {
            console.log(prevState.count)
            return {
                count: prevState.count + 1
            }
        })
        this.setState((prevState, props) => {
            console.log(prevState.count)
            return {
                count: prevState.count + 1
            }
        })

    }
}
