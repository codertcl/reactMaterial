import React, {PureComponent} from "react";
import ReactDom from 'react-dom'

class Modal extends PureComponent {
    render() {
        return ReactDom.createPortal(
            this.props.children, document.getElementById('modal')
        )
    }
}

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <h2>App</h2>
                <Modal>
                    <h2>title</h2>
                </Modal>
            </div>
        )
    }
}
