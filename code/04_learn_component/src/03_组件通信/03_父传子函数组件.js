import React, {Component} from "react";

function ChildCpn(props) {
    const {name, age} = props
    return (
        <h2>子组件:{name + " " + age}</h2>
    )
}


export default class App extends Component {
    render() {
        return (
            <div>
                <ChildCpn name='sxy' age="22"/>
                <ChildCpn name='taylor' age="36"/>
            </div>
        )
    }
}
