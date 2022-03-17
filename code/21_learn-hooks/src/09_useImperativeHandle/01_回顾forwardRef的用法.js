import React, {forwardRef, useRef} from "react";

//函数组件不能直接使用ref
const HYInput = forwardRef((props, ref) => {
    return <input ref={ref} type="text"/>
})

export default function ForwardRefDemo() {
    const inputRef = useRef()
    return (
        <div>
            <HYInput ref={inputRef}/>
            <button onClick={e => inputRef.current.focus()}>聚焦</button>
        </div>
    )
}
