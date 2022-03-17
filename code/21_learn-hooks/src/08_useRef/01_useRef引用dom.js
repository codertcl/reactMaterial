import React, {PureComponent, useRef} from "react";

class TestCpn extends PureComponent{
    render() {
        return (
            <div>
                test1
            </div>
        )
    }
}

function TestCpn2 (){
        return (
            <div>
                test2
            </div>
        )
}

export default function RefHookDemo01() {
    const titleRef = useRef()
    const inputRef = useRef()
    const testRef = useRef()
    const testRef2 = useRef()

    function changeDom() {
        titleRef.current.innerHTML = 'hello react'
        inputRef.current.focus()
        console.log(testRef.current)
        ////函数组件不能直接使用ref
        // console.log(testRef2.current)
    }

    return (
        <>
            <h2 ref={titleRef}>111111</h2>
            <input ref={inputRef}/>
            <button onClick={e => changeDom()}>修改DOM</button>
            <TestCpn ref={testRef} />
            {/*<TestCpn2 ref={testRef2} />*/}
        </>
    )
}
