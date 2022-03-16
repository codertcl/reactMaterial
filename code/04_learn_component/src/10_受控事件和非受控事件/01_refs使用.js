import React, {createRef, PureComponent} from "react";

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            message: '你好'
        }
        this.titleRef2 = createRef()
        this.titleEl = null
    }

    componentDidMount() {
        document.getElementsByTagName('h1')
    }

    render() {
        return (
            <div>
                {/*1:传入字符串 不推荐 后续可能被删除*/}
                <h1 ref="titleRef">Hello react1</h1>
                {/*2:创建对象*/}
                <h1 ref={this.titleRef2}>Hello react2</h1>
                {/*3:传入回调函数*/}
                <h1 ref={(arg) => {
                    // arg为该标签对象
                    this.titleEl = arg
                    console.log(arg)
                }
                }>Hello react3</h1>
                <button onClick={e => this.changeText()}>改变文本</button>
            </div>
        )
    }

    changeText() {
        ////1:传入字符串 不推荐 后续可能被删除
        this.refs.titleRef.innerHTML='hello sxy'
        ////2:创建对象
        this.titleRef2.current.innerHTML = "hello sxy"
        //// 3:传入回调函数
        this.titleEl.innerHTML = 'hello sxy'
    }
}
