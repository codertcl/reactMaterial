import {useEffect, useState} from "react";
import {SearchPanelProps} from "../screens/serach-panel";
//判断参数是否有效 将参数转换为布尔值 为0则为false(可能参数值就为0)
export const isFalsy = (value: any) => (value === 0 ? false : !value)

export const cleanObject = (object: SearchPanelProps['param']) => {
    const res = {...object}
    Object.keys(object).forEach(key => {
        // @ts-ignore
        let value = object[key]
        //对象中有属性为null 空 undefined 且不为0则删除该属性
        if (isFalsy(value)) { // @ts-ignore
            delete res[key]
        }
    })
    return res
}

//自定义Hook必须以use开头,useEffect等内置Hook只能在组件或者hook内运行
export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback()
    }, [])
}

//对输入框内数据变化导致频繁进行网络请求 防抖处理
export const useDebounce = <V>(value: V, delay?: number) => {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceValue(value)
        }, delay)
        // useEffect 函数的返回值。它的返回值是一个函数，这个函数在 useEffect 即将重新执行时
        // 会先执行上一次 Rerender useEffect 第一个回调的返回函数
        // 再执行下一次渲染的 useEffect 第一个回调
        return () => clearTimeout(timeout)
    }, [value, delay])
    return debounceValue
}

export const useArray = <T>(initialArray: T[]) => {
    const [value, setValue] = useState(initialArray)

    return {
        value,
        setValue,
        clear: () => setValue([]),
        add: (item: T) => setValue([...value, item]),
        removeIndex: (index: number) => {
            let newArr = [...value]
            newArr.splice(index, 1)
            setValue(newArr)
        }
    }
}
