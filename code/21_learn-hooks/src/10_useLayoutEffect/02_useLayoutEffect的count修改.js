import React, {useEffect, useLayoutEffect, useState} from "react";

export default function EffectCounterDemo2() {
    const [count, setCount] = useState(10)
    useLayoutEffect(() => {
        if (count === 0) {
            setCount(Math.random())
        }
    }, [count])
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={e => setCount(0)}>修改数字</button>
        </div>
    )
}
