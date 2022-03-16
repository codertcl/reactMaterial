import React, {useEffect, useState} from "react";

export default function EffectHookSubscribe() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('订阅')

        return () => {
            console.log('取消订阅')
        }
    },[])//添加数组后避免更新dom后重新执行useEffect中的函数
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
