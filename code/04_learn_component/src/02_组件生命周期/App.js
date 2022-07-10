import React, {Component} from "react";

class Cpn extends Component {
    render() {
        return <h2>cpn组件</h2>;
    }

    componentDidUnmount() {
        console.log('cpn的componentDidUnmount方法')
    }

    componentWillUnmount() {
        console.log('cpn的componentWillUnmount方法')
    }
}


export default class App extends Component {
    constructor(props) {
        super(props);
        console.log('组件constructor')
        this.state = {
            count: 0,
            isShow: true,
        }
    }


    render() {
        console.log('render函数')
        return (
            <div>
                <h1>App组件</h1>
                <h2>{this.state.count}</h2>
                <button onClick={() => {
                    this.increment()
                }}>+1
                </button>
                <hr/>
                <button onClick={() => {
                    this.changeShow()
                }}>{this.state.isShow?'隐藏':'显示'}</button>
                {this.state.isShow && <Cpn/>}
            </div>
        )
    }


    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    changeShow() {
        this.setState({
                isShow: !this.state.isShow
            }
        )
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
}
