import React, {Component} from "react";

//1:类组件
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '你好'
        }
    }

    render() {
        return (
            //1:返回数组
            [
                <div>
                    <h1>{this.state.message}</h1>
                </div>,
                <div>
                    <h1>{this.state.message}</h1>
                </div>
            ]
            ////2:返回数字 字符串 null
            // '21345'
        )
    }
}

//
// // //2:函数式组件
// //React 元素
// export default function App() {
//     return (
//         <div>
//             <h1>hello</h1>
//         </div>
//     )
// }
