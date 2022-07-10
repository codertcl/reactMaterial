import React, {Component} from "react";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            message: 'hello'
        }
    }

    render() {
        console.log('App的render函数被调用')
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.increment()}>+1</button>
                {/*未依赖message但更新了message 不必重新渲染render函数*/}
                <button onClick={() => this.changeText()}>改变文本</button>
            </div>
        )
    }

    //类组件特有 不会阻止第一次的渲染 return false可以阻止render函数的执行
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        //count改变时 可以调用render
        if (nextState.count !== this.state.count)
            return true
        return false
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    changeText() {
        this.setState({
            message: 'Hi'
        })
    }
}
