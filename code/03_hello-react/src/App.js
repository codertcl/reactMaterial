// import React from 'react'
// const {
//     Component
// }=React
import React, {
    Component
} from 'react'
export default class App extends Component {
        constructor() {
            super();
            this.state = {
                count: 1
            }
        }
        render() {
            return (
                <div>
                 <h2> {this.state.count}</h2>
                    { <button type="button">+</button>}
                </div>)
                }
}