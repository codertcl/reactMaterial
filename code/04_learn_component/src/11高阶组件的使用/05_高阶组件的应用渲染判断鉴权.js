import React, {PureComponent} from "react";

function withAuth(WrapperComponent) {
    const AuthCpn = props => {
        if (props.isLogin)
            return <WrapperComponent {...props}/>
        else {
            return <LoginPage/>
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

const AuthCartPage = withAuth(CartPage)

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
