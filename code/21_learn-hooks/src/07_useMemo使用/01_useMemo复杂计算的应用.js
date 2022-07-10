import React, {useState, useMemo} from 'react';

function calcNumber(count) {
    console.log("calcNumber重新计算");
    let total = 0;
    for (let i = 1; i <= count; i++) {
        total += i;
    }
    return total;
}

export default function MemoHookDemo01() {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);

    //每次点击show切换按钮,修改show都会造成calcNumber函数重新执行
    // const total = calcNumber(count);
    //点击show后count未变化所以total不会重新计算
    const total = useMemo(() => {
        return calcNumber(count);
    }, [count]);

    return (
        <div>
            <h2>计算数字的和: {total}</h2>
            <button onClick={e => setCount(count + 1)}>+1</button>
            <button onClick={e => setShow(!show)}>show切换</button>
        </div>
    )
}
