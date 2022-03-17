import React, {memo, useCallback, useMemo, useState} from "react";

//不用memo 两个按钮对应子组件都会重新渲染
//使用memo后 只有btn1会重新渲染(increment每次重新定义 props改变则导致会重新渲染)
// increment2依赖count show改变不影响increment2 所以传递国务props不变 不会重新渲染
const HYButton = memo((props) => {
    console.log(props.title)
    return (<button onClick={props.increment}>+1</button>)
})
export default function CallbackHookDemo02() {
    console.log('重新渲染')
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(true)
    const increment = () => {
        console.log('increment')
        setCount(count + 1)
    }


    /**
     * useCallback在什么时候使用?
     * 场景: 在将一个组件中的函数, 传递给子元素进行回调使用时, 使用useCallback对函数进行处理.
     */
    //useCallback 执行会创建匿名函数 相当于未进行性能优化
    const increment2 = useCallback(() => {
        console.log('increment2')
        setCount(count + 1)//闭包 每次用到的count都是0 所以结果恒定是1
    }, [count])

    //useMemo 返回值可以是数值 函数 对象
    const increment3 = useMemo(() => {
      return ()=>{
          console.log('increment2')
          setCount(count + 1)//闭包 每次用到的count都是0 所以结果恒定是1
      }
    }, [count])
    return (
        <div>
            <h2>{count}</h2>
            <HYButton title="btn1" increment={increment}/>
            <HYButton title="btn2" increment={increment2}/>
            <HYButton title="btn3" increment={increment3}/>
            <button onClick={e => setShow(!show)}>切换</button>
        </div>
    )
}
