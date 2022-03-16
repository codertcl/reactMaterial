import React, {PureComponent} from "react";

export default class ClassCountTitleChange extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        document.title = this.state.count
    }


    componentDidUpdate() {
        document.title = this.state.count
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={e => this.setState({count: this.state.count + 1})}>+1</button>
                <button onClick={e => this.setState({count: this.state.count - 1})}>-1</button>
            </div>
        )
    }
}
