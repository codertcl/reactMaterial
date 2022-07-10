import React, { useState, memo, useMemo } from 'react';

const HYInfo = memo((props) => {
    console.log("HYInfo重新渲染");
    return <h2>名字: {props.info.name} 年龄: {props.info.age}</h2>
});

export default function MemoHookDemo02() {
    console.log("MemoHookDemo02重新渲染");
    const [show, setShow] = useState(true);

    // const info = { name: "why", age: 18 };
    // 不用useMemo在修改show时,父子组件都会重新渲染,每次都新创建了info对象,每次都不一致,所以子组件重新渲染
    // 使用了则子组件不会重新渲染
    const info = useMemo(() => {
        return { name: "why", age: 18 };
    }, []);

    return (
        <div>
            <HYInfo info={info} />
            <button onClick={e => setShow(!show)}>show切换</button>
        </div>
    )
}
