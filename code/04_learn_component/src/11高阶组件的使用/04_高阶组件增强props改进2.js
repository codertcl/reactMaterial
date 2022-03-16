import React, {createContext, PureComponent} from "react";

//1:创建context
const UserContext = createContext({
    name: '冰冰',
    age: 31,
    region: '长春'
})

//2:创建高阶组件
function withUser(WrapperComponent) {
    return props => {
        return (
            <UserContext.Consumer>
                {
                    user => {
                        return <WrapperComponent {...props} {...user}/>
                    }
                }
            </UserContext.Consumer>
        )
    }
}

class About extends PureComponent {
    render() {
        return <h2>About: {`昵称: ${this.props.name} 年龄: ${this.props.age} 区域: ${this.props.region}`}</h2>
    }
}

class Detail extends PureComponent {
    render() {
        return (
            <ul>
                <li>{this.props.name}</li>
                <li>{this.props.age}</li>
                <li>{this.props.region}</li>
            </ul>
        )
    }
}


class Home extends PureComponent {
    render() {
        return <h2>Home: {`昵称: ${this.props.name} 等级: ${this.props.age} 区域: ${this.props.region}`}</h2>
    }
}

const UserHome = withUser(Home)
const UserAbout = withUser(About)
const UserDetail = withUser(Detail)

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <UserContext.Provider value={{name: 'sxy', age: 21}}>
                    <UserHome region='中国'/>
                    <UserDetail region='美国'/>
                    <UserAbout region='韩国'/>
                </UserContext.Provider>
            </div>
        )
    }
}
