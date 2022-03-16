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
                <Home count={this.state.count}></Home>
            </div>
        )
    }

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // })
        //setState异步更新 先执行完了输出再完成了setState更新数据
        // console.log(this.state.count)

        // 方式一:获取最新的数据状态 利用setState的回调函数
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log('回调',this.state.count)
        })
    }

    //先执行回调函数 再执行setState回调函数
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate',this.state.count)
    }
}
