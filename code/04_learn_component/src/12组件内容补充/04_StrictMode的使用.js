import React, {PureComponent, StrictMode} from "react";

class Home extends PureComponent {
    constructor(props) {
        super(props);
        console.log('Home')
    }
    // UNSAFE_componentWillMount() {
    //     console.log('Home')
    // }

    render() {
        // return <div ref="HomeRef">Home</div>
        return <div>Home</div>
    }
}

class Profile extends PureComponent {
    constructor(props) {
        super(props);
        console.log('Profile')
    }
    // UNSAFE_componentWillMount() {
    //     console.log('Profile')
    // }
    render() {
        return <div ref="ProfileRef">Profile</div>
    }
}


export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            message: '你好'
        }
    }

    render() {
        return (
            <div>
                <StrictMode>
                    <Home/>
                </StrictMode>
                <Profile/>
            </div>
        )
    }
}
