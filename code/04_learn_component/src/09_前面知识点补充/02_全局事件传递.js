import React, {PureComponent} from "react";
import {EventEmitter} from 'events'
//事件总线
const eventBus = new EventEmitter()

class Home extends PureComponent {
    componentDidMount() {
        eventBus.addListener('sayHello', this.handleSayHelloListener)
    }

    componentWillUnmount() {
        eventBus.removeListener('sayHello', this.handleSayHelloListener)
    }

    handleSayHelloListener(message1, message2) {
        console.log(message1, message2)
    }

    render() {
        return (
            <div>
                Home
            </div>
        );
    }
}

class Profile extends PureComponent {
    render() {
        return (
            <div>
                Profile
                <button onClick={e => this.emitEvent()}>Profile</button>
            </div>
        );
    }

    emitEvent() {
        eventBus.emit('sayHello', 'Hello', 'Hi')
    }
}


export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Home/>
                <Profile/>
            </div>
        )
    }
}
