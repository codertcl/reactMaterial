import React, {Component} from "react";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '冰冰',
            message: 'hello',
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <h1>{this.state.name}</h1>
                <button onClick={() => this.changeText()}>改变文本</button>
            </div>
        )
    }

    ////数据合并 Object.assign(target, ...sources)
    // 如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。
    // 后面的源对象的属性将类似地覆盖前面的源对象的属性。
    changeText() {
        //name属性仍会存在
        this.setState({
            message: 'hi'
        })
    }
}
