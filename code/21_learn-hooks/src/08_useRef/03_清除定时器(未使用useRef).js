import React, {
    useEffect,
    useState
} from 'react'
export default function App() {
    const [count, setCount] = useState(0)
    let timeId = null
    // 由于setCount改变状态时都会重新走一遍函数组件,也就是说会重新执行let timeId = null
    // 所以我们点击按钮时timeId为null, 而上面打印出来的timeId为1, 结果就是定时器根本就清除不掉
    useEffect(() => {
        timeId = setInterval(() => {
            setCount((count) => count + 1)
        }, 1000)
        console.log(timeId) // 1
    }, [])

    const hClick = () => {
        console.log(timeId) // null
        clearInterval(timeId)
    }

    return (
        <div>count: {count} <button onClick = { hClick} > 点击停止定时器 </button> </div>
    )
}
