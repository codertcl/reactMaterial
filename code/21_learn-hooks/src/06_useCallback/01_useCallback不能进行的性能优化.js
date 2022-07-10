import React, {useCallback, useState} from "react";

export default function CallbackHookDemo01() {
    const [count, setCount] = useState(0)
    // const [login, setLogin] = useState(true)
    // count变化 DOM重新渲染,每次都定义一个箭头函数
    const increment = () => {
        console.log('increment')
        setCount(count + 1)
    }

    //接收两个参数,一个是依赖发生变化时需要被执行的函数,一个是依赖项
    //useCallback 执行会创建匿名函数 相当于未进行性能优化
    const increment2 = useCallback(() => {
        console.log('increment2',count)
        setCount(count + 1)//闭包
        // 如果useCallback第二个参数为空,则每次用到的count都是0 setCount后结果恒定是1
        // 如果useCallback第二个参数为count,则每次输出的count在点击按钮后依次累加
        console.log(count);
    }, [count])
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>+1</button>
            <button onClick={increment2}>+1</button>
        </div>
    )
}
