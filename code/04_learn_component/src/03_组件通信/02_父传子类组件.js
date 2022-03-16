import React, {Component} from "react";

class ChildCpn extends Component {
    // 如果子类没有定义构造函数,则默认调用父类的构造函数
    // //props：父组件传递的数据
    constructor(props) {
        super();
        console.log(this.props)//undefined
        // this.props = props //Component类中执行了这一步
    }

    componentDidMount() {
        console.log(this.props,'componentDidMount')// {name: 'taylor', age: '36'} 'componentDidMount'
    }

    render() {
        const {name, age} = this.props
        return (
            <div>
                <h2>子组件:{name + " " + age}</h2>
            </div>
        )
    }
}


export default class App extends Component {
    render() {
        console.log(this.props,'render')//Object[[Prototype]]: Object 'render'
        return (
            <div>
                {/*<ChildCpn name='sxy' age="22"/>*/}
                <ChildCpn name='taylor' age="36"/>
            </div>
        )
    }
}
