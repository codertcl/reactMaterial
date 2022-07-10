import React, {PureComponent} from "react";

class Home extends PureComponent {
    // 即将渲染获取一个时间 beginTime
    UNSAFE_componentWillMount() {
        this.beginTime = Date.now();
    }

    render() {
        return (
            <div>
                <h2>Home</h2>
            </div>
        )
    }

    // 渲染完成再获取一个时间 endTime
    componentDidMount() {
        this.endTime = Date.now();
        const interval = this.endTime - this.beginTime;
        console.log(`Home渲染时间: ${interval}`)
    }
}

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <Home/>
            </div>
        )
    }
}
