import React, {useCallback, useState} from "react";

export default function CallbackHookDemo01() {
    const [count, setCount] = useState(0)
    const [login, setLogin] = useState(true)
    const increment = () => {
        console.log('increment')
        setCount(count + 1)
    }

    //useCallback 执行会创建匿名函数 相当于未进行性能优化
    const increment2 = useCallback(() => {
        console.log('increment2')
        setCount(count + 1)//闭包 每次用到的count都是0 所以结果恒定是1
    }, [count])
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>+1</button>
            <button onClick={increment2}>+1</button>
        </div>
    )
}
