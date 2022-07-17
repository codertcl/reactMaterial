import React from "react";
import {useArray, useMount} from "./utils";

export interface PersonProps {
    name: string,
    age: number
}

export const TsReactTest = () => {
    const persons: PersonProps[] = [
        {name: "冰冰", age: 32},
        {name: "饼饼", age: 18}
    ]

    const {value, clear, add, removeIndex} = useArray(persons)

    useMount(() => {
        // console.log(value.notExist)
        // add({name:'sxy'})
        // removeIndex('1')
    })
    return (
        <div>
            <ul>
                {
                    value.map(item => <li>name:{item.name}-age:{item.age}</li>)
                }
            </ul>
            <button onClick={() => add({name: 'john', age: 22})}>add tcl</button>
            <button onClick={() => removeIndex(0)}>remove 0</button>
            <button onClick={() => clear()}>clear</button>
        </div>
    )
}
