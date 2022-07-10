import React, {
    useEffect,
    useState,
    useRef
} from 'react'
export default function App() {
    const [count, setCount] = useState(0)
    const refTimeId = useRef(null)
    // 采用useRef,作为组件实例的变量，const refTimeId = useRef(null)只会执行一次
    console.log(refTimeId.current) // 1 
    useEffect(() => {
        refTimeId.current = setInterval(() => {
            setCount((count) => count + 1)
        }, 1000)
        console.log(refTimeId.current) // 1
    }, [])

    const hClick = () => {
        console.log(refTimeId.current) // 1
        clearInterval(refTimeId.current)
    }
    return (
        <div> count: {count} <button onClick={hClick} > 点击停止定时器 </button> </div>
    )
}