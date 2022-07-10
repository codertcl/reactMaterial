import React, {memo, useCallback, useState} from 'react'

//类组件则继承PureComponent
// class Child extends React.PureComponent {
//     render() {
//         console.log("Child Render")
//         return <div>
//             <h4>{this.props.text}</h4>
//             <button onClick={this.props.onClick}>改变文本</button>
//         </div>
//     }
// }

//函数组件使用memo配合useCallback
const Child = memo((props) => {
    console.log("Child Render")
    return (<div>
        <h4>{props.text}</h4>
        <button onClick={props.onClick}>改变文本</button>
    </div>)
})

export default function () {
    console.log("Parent Render")
    const [txt, setTxt] = useState(123)
    const [n, setN] = useState(0)
    const changeText = useCallback(() => {
        setTxt(0)
    }, [])
    return (
        <>
            <Child text={txt} onClick={changeText}/>
            <input type="number" value={n} onChange={e => {
                setN(parseInt(e.target.value))
            }}/>
        </>
    )
}
