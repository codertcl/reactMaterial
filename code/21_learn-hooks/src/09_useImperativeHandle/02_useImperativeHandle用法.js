import React, {forwardRef, useImperativeHandle, useRef} from "react";

//函数组件不能直接使用ref
const HYInput = forwardRef((props, ref) => {
    const inputRef = useRef()
    useImperativeHandle(ref, () => ({
        //加()表示返回对象
        focus: () => {
            console.log('useImperativeHandle中的focus')
            inputRef.current.focus()
        }
    }), [inputRef.current])
    return <input ref={inputRef} type="text"/>
})

export default function UseImperativeHandleHookDemo() {
    const inputRef = useRef()
    return (
        <div>
            <HYInput ref={inputRef}/>
            <button onClick={e => inputRef.current.focus()}>聚焦</button>
        </div>
    )
}
