import React, {useEffect, useRef, useState} from "react";

export default function RefHookDemo02() {
    const [count, setCount] = useState(0)
    const countRef = useRef(count)
    useEffect(() => {
        //count变化后更新current值 dom不会重新渲染
        // 再次点击DOM渲染 count上一次的值更新
        countRef.current = count
    }, [count])
    return (
        <div>
            {/*useRef返回一个ref对象，返回的ref对象再组件的整个生命周期保持不变*/}
            <h2>count上一次的值:{countRef.current}</h2>
            <h2>count当前值:{count}</h2>
            <button onClick={e => setCount(count + 10)}>+10</button>
        </div>
    )
}
