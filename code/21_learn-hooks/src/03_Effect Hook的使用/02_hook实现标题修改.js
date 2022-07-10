import React, {useEffect, useState} from "react";

export default function FunctionCountTitleChange() {
    const [count, setCount] = useState(0)
    //类似于网络请求、手动更新DOM、一些事件的监听在Effect Hook执行
    //组件渲染到真实dom后执行
    useEffect(() => {
        document.title = count
    })
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={e => setCount(count + 1)}>+1</button>
            <button onClick={e => setCount(count - 1)}>-1</button>
        </div>
    )
}
