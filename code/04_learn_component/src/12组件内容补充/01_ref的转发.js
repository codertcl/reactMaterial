import React, {createRef, PureComponent,forwardRef} from "react";

class Home extends PureComponent {
    render() {
        return <h2>Home</h2>
    }
}

//内置高阶组件forwardRef 函数第二个参数ref
const Profile=forwardRef(function (props,ref) {
    return (
        <p ref={ref}>Profile:{props.name}</p>
    )
})

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            message: '你好'
        }
        this.titleRef = createRef()
        this.homeRef = createRef()
        this.profileRef = createRef()
    }

    render() {
        return (
            <div>
                <h1 ref={this.titleRef}>hello</h1>
                <Home ref={this.homeRef}/>
                <Profile name="冰冰" ref={this.profileRef}/>
                <button onClick={e => this.printRef()}>打印ref</button>
            </div>
        )
    }

    printRef() {
        console.log(this.titleRef.current)
        console.log(this.homeRef.current)
        console.log(this.profileRef.current)
    }
}
