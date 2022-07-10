import React, {PureComponent} from "react";

class App extends PureComponent {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

// 设置在浏览器Component显示的名字
App.displayName = 'Coder'

//高阶组件 参数和返回值为组件
function enhanceComponent(WrapperComponent) {
    // return class NewComponent extends PureComponent {
    // 类表达式 可以省略类名
    let component = class extends PureComponent {
        render() {
            //传递数据
            return <WrapperComponent {...this.props}/>
        }
    }
    component.displayName = 'enhanceComponent'
    return component

    // //函数组件
    // return function NewComponent(props) {
    //     return (
    //         <WrapperComponent {...props}/>
    //     )
    // }
}

const EnhanceComponent = enhanceComponent(App)
export default EnhanceComponent
