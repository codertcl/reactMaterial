import React, {useEffect, useState} from "react";

export default function MultiEffectHook() {
    const [count, setCount] = useState(0)
    const [login, setLogin] = useState(true)
    useEffect(() => {
        console.log('修改dom',count)
    },[count])//回调函数在count变化时进行执行
    useEffect(() => {
        console.log('订阅')
    },[])//第二个参数表示回到函数依赖该数组中的元素 当该参数变化时执行回调函数
    useEffect(() => {
        console.log('网络请求')
    }, [])
    return (
        <div>
            MultiEffectHook
            <h1>{count}</h1>
            {/*更新count后先会执行useEffect中的返回值中的函数，再执行useEffect回调函数 */}
            <button onClick={e => setCount(count + 1)}>+1</button>
            <hr/>
            <h1>{login?'已登录':'未登录'}</h1>
            {/*更新count后先会执行useEffect中的返回值中的函数，再执行useEffect回调函数 */}
            <button onClick={e => setLogin(!login)}>切换</button>
        </div>
    )
}
