import React, {PureComponent} from "react";

//高阶组件
function enhanceRegionProps(WrapperComponent) {
    return props => {
        return <WrapperComponent {...props} region="中国"/>
    }
}


class About extends PureComponent {
    render() {
        return (
            <div>About
                <h1>{this.props.level} {this.props.name} {this.props.region}</h1>
            </div>
        )
    }
}


class Home extends PureComponent {
    render() {
        return (
            <div>Home
                <h1>{this.props.level} {this.props.name} {this.props.region}</h1>
            </div>
        )
    }
}

const EnhanceHome = enhanceRegionProps(Home)
const EnhanceAbout = enhanceRegionProps(About);


export default class App extends PureComponent {
    render() {
        return (
            <div>
                <EnhanceHome name='冰冰' level={99} region="美国"/>
                <EnhanceAbout name='SXY' level={99} region="美国"/>
            </div>
        )
    }
}
