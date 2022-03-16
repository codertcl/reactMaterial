import React, {useState} from "react";

export default function CountHook() {
    //Hook:useState函数
    const [count, setCount] = useState(0)
    console.log('CountHook')
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={e => setCount(count + 1)}>+1</button>
            <button onClick={e => setCount(count - 1)}>-1</button>
            <button onClick={e => setCount((prevCount) => prevCount - 1)}>-1</button>
        </div>
    )
}
