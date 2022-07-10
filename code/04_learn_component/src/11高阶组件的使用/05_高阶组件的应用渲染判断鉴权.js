import React, {PureComponent} from "react";

function withAuth(WrapperComponent1, WrapperComponent2) {
    const AuthCpn = props => {
        if (props.isLogin)
            return <WrapperComponent1 {...props}/>
        else {
            return <WrapperComponent2/>
        }
    }
    return AuthCpn
}

class CartPage extends PureComponent {
    render() {
        return (
            <div>
                <h2>CartPage</h2>
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}

class LoginPage extends PureComponent {
    render() {
        return <div>
            <h2>LoginPage</h2>
        </div>
    }
}

const AuthCartPage = withAuth(CartPage, LoginPage)

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <AuthCartPage name="冰冰" age={32} isLogin={true}/>
                <AuthCartPage name="sxy" age={21} isLogin={false}/>
            </div>
        )
    }
}
