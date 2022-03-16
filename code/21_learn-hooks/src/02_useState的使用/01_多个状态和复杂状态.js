import React, {useState} from "react";

export default function MultiHookState() {
    //Hook:useState函数
    const [count, setCount] = useState(0)
    const [age, setAge] = useState(18)
    return (
        <div>
            <h1>当前计数:{count}</h1>
            <h1>当前年龄:{age}</h1>
        </div>
    )
}
