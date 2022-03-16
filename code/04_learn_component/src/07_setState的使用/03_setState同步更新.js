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
                <button id="btn">+1</button>
            </div>
        )
    }

    //在组件生命周期或React合成事件中，setState是异步；
    //在setTimeout或者原生dom事件中，setState是同步；
    increment() {
        //1:将setState放到定时器中执行 变成同步
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            })
            //
            console.log(this.state.count)
        }, 0)
    }

    componentDidMount() {
        let btn = document.getElementById('btn')
        btn.addEventListener('click',()=>{
                this.setState({
                    count: this.state.count + 1
                })
                //
                console.log(this.state.count)
        })
    }
}
