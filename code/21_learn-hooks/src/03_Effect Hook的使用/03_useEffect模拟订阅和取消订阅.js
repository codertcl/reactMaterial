import React, {useEffect, useState} from "react";

export default function EffectHookSubscribe() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('订阅')

        return () => {
            console.log('取消订阅')
        }
    },[])
    // 添加空数组即useEffect不再因为数据改变而造成的DOM渲染而重复执行
    // 在组件生命周期内只会调用一次，相当于componentDidMount和componentWillUnmount
    // 避免更新dom后重新执行useEffect中的函数

    // 不写第二个参数，组件每次render之后useEffect都会调用
    // 相当于componentDidMount和componentDidUpdate
    return (
        <div>
            EffectHookSubscribe
            <h1>{count}</h1>
            {/*更新count后先会执行useEffect中的返回值中的函数，再执行useEffect回调函数 */}
            <button onClick={e => setCount(count + 1)}>+1</button>
            <button onClick={e => setCount(count - 1)}>-1</button>
        </div>
    )
}
