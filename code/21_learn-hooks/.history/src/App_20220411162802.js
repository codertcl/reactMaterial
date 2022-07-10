import React, {createContext, useState} from "react";
// import CountClass from './01_体验hooks/01_count-class'
// import CountHook from './01_体验hooks/02_count-hook'
// import MultiHookState from './02_useState的使用/01_多个状态和复杂状态'
// import ComplexHookState from './02_useState的使用/02_复杂状态的修改'
// import ClassCountTitleChange from './03_Effect Hook的使用/01_class实现标题修改'
// import FunctionCountTitleChange from "./03_Effect Hook的使用/02_hook实现标题修改";
// import EffectHookSubscribe from "./03_Effect Hook的使用/03_useEffect模拟订阅和取消订阅";
// import MultiEffectHook from "./03_Effect Hook的使用/04_多个useEffect一起使用";
import Home from "./05_useReducer的使用/home";
import Profile from "./05_useReducer的使用/profile";
// export const userContext = createContext()
// export const themeContext = createContext()
// import CallbackHookDemo01 from './06_useCallback/01_useCallback不能进行的性能优化'
// import CallbackHookDemo02 from './06_useCallback/02_useCallback进行的性能优化'
// import MemoHookDemo01 from './07_useMemo使用/01_useMemo复杂计算的应用'
// import MemoHookDemo02 from './07_useMemo使用/02_useMemo传入子组件应用类型'
// import RefHookDemo01 from './08_useRef/01_useRef引用dom'
// import RefHookDemo02 from './08_useRef/02_useRef引用其他数据'
// import ForwardRefDemo from './09_useImperativeHandle/01_回顾forwardRef的用法'
// import UseImperativeHandleHookDemo from './09_useImperativeHandle/02_useImperativeHandle用法'
// import EffectCounterDemo from './10_useLayoutEffect/01_useEffect的count修改'
// import EffectCounterDemo2 from './10_useLayoutEffect/02_useLayoutEffect的count修改'
// import CustomHookDemo01 from './11_自定义Hook/01_认识自定义Hook'
// import CustomContextShareHook from './11_自定义Hook/02_自定义Hook练习-Context共享'
// export const UserContext = createContext()
// export const TokenContext = createContext()
// import CustomScrollPositionHook from "./11_自定义Hook/03_自定义Hook练习-获取滚动位置";
// import CustomDataStoreHook from "./11_自定义Hook/04_自定义Hook练习-localStorage存储";

function App() {
    const [show, setShow] = useState(true)
    return (
        <div>
            {/*1:hook初体验*/}
            {/*<CountClass/>*/}
            {/*<CountHook/>*/}

            {/*2:useState使用*/}
            {/*<MultiHookState/>*/}
            {/*<ComplexHookState/>*/}

            {/*3:Effect hook*/}
            {/*<ClassCountTitleChange/>*/}
            {/*<FunctionCountTitleChange/>*/}

            {/*4:进行订阅和取消订阅*/}
            {/*{show && <EffectHookSubscribe/>}*/}
            {/*<button onClick={e => {*/}
            {/*    setShow(!show)*/}
            {/*}}>切换*/}
            {/*</button>*/}

            {/*5:多个Effect*/}
            {/*<MultiEffectHook/>*/}

            {/*/!*6:useContext*!/*/}
            {/*<userContext.Provider value={{name:'冰冰',age:32}}>*/}
            {/*    <themeContext.Provider value={{fontSize:"20px",color:"red"}}>*/}
            {/*        <UseConTextHookDemo/>*/}
            {/*    </themeContext.Provider>*/}
            {/*</userContext.Provider>*/}

            {/* /!*    7:useReducer*!/*/} */}
            <Home/>
            {/*/!*两个组件之间不会共享state数据*!/*/}
            {/* {/* <Profile/>}

            {/*8:useCallback*/}
            {/*<CallbackHookDemo01/>*/}
            {/*<CallbackHookDemo02/>*/}

            {/*9:useMemo*/}
            {/*<MemoHookDemo01/>*/}
            {/*<MemoHookDemo02/>*/}

            {/*10useRef*/}
            {/*<RefHookDemo01/>*/}
            {/*<RefHookDemo02/>*/}

            {/*11:useImperativeHandle*/}
            {/*<ForwardRefDemo/>*/}
            {/*<UseImperativeHandleHookDemo/>*/}

            {/*/!*{12:useLayoutEffect}*!/*/}
            {/*<EffectCounterDemo/>*/}
            {/*<EffectCounterDemo2/>*/}

            <button onClick={e => setShow(!show)}>切换</button>
            {/* 13:自定义Hook*/}
            {/*{show && <CustomHookDemo01/>}*/}

            {/*2:context共享*/}
            {/*<UserContext.Provider value={{name:'冰冰',age:32}}>*/}
            {/*    <TokenContext.Provider value="asdf">*/}
            {/*        <CustomContextShareHook/>*/}
            {/*    </TokenContext.Provider>*/}
            {/*</UserContext.Provider>*/}

            {/*3:获取滚动位置*/}
            {/*<CustomScrollPositionHook/>*/}
            <CustomDataStoreHook/>
        </div>
    )
}

export default App
