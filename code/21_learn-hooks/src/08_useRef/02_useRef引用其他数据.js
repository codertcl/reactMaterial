import React, {useEffect, useRef, useState} from "react";

export default function RefHookDemo02() {
    const [count, setCount] = useState(0)
    const countRef = useRef(count)
    // dom渲染完成后执行回调函数
    // 最开始显示两个0,点击按钮后,count变化重新渲染,countRef.current仍为0,count变化了，显示10
    // 然后再执行回调 countRef.current为当前值10
    //Ref对象默认在整个生命周期内数据不变
    useEffect(() => {
        // count变化后更新current为当前count值,但dom不会重新渲染
        // 再次点击+1,DOM渲染 countRef.current更新为count上一次的值更新
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
