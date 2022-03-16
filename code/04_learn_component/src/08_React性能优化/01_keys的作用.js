import React, {Component} from "react";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: ['你好李焕英', '教父']
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.movies.map((item, index) => {
                            return <li key={item}>{item}</li>
                        })
                    }
                </ul>
                <button onClick={() => this.add()}>添加</button>
            </div>
        )
    }

    add() {
        this.setState({
            movies: ['肖申克的救赎', ...this.state.movies]
        })
    }
}
