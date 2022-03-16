import React, {useEffect, useState} from "react";

export default function FunctionCountTitleChange() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = count //组件渲染到真实dom后执行
    })
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={e => setCount(count + 1)}>+1</button>
            <button onClick={e => setCount(count - 1)}>-1</button>
        </div>
    )
}
