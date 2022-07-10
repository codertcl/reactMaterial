import store from "./store/index.js";
import {addAction,subAction} from "./store/actionCreators.js";

// //1:基本做法 不便于重复使用
// console.log('dispatch前', store.getState())
// console.log(store.dispatch(addAction(10)))
// console.log('dispatch后', store.getState())

// // // //2:封装一个函数 使用时需要手动导入导出dispatchAnLogging
// // // 并通过该函数名来派发action
// function dispatchAnLogging(action) {
//     console.log('dispatch前', action)
//     store.dispatch(action)
//     console.log('dispatch后', store.getState())
// }
//
// dispatchAnLogging(addAction(1))
// dispatchAnLogging(addAction(5))

// //3:函数基础之上进行优化修改dispatch
// //Monkey patch所谓的猴子补丁
// //是指在运行时修改类或模块，而不去改变源码，达到hot patch的目的。
// const next = store.dispatch
// function dispatchAnLogging(action) {
//     console.log('dispatch前', action)
//     next(action)
//     console.log('dispatch后', store.getState())
// }
// store.dispatch = dispatchAnLogging
// store.dispatch(addAction(10))
// store.dispatch(addAction(5))

// // //4:方法三封装函数 可以独立封装,想使用即可调用该函数修改store.dispatch
// function patchLogging(store) {
//     const next = store.dispatch
//
//     function dispatchAndLogging(action) {
//         console.log('dispatch前', action)
//         next(action)
//         console.log('dispatch后', store.getState())
//     }
//
//     store.dispatch = dispatchAndLogging
// }
//
// patchLogging(store)
// store.dispatch(addAction(1))
// store.dispatch(addAction(5))


// //5:封装pathThunk 处理函数
// function pathThunk(store) {
//     const next = store.dispatch
//
//     function dispatchAndThunk(action) {
//         if (typeof action === 'function') {
//             //下面重新派发action后,即返回了对象,继续执行下面的else语句
//             action(store.dispatch, store.getState)
//         } else {
//             console.log('dispatch前', store.getState())
//             next(action)
//             console.log('dispatch后', store.getState())
//         }
//     }
//
//     store.dispatch = dispatchAndThunk
// }
//
// pathThunk(store)
// store.dispatch(addAction(1))
// store.dispatch(addAction(5))
//
// function foo(dispatch, getState) {
//     dispatch(subAction(10))
// }
//
// store.dispatch(foo)


//6.1:封装applyMiddleware (两个中间件函数)

function patchLogging(store) {
    const next = store.dispatch

    function dispatchAndLogging(action) {
        console.log('dispatch前', action)
        next(action)
        console.log('dispatch后', store.getState())
    }
    // store.dispatch = dispatchAndLogging
    return dispatchAndLogging
}

//封装pathThunk 处理函数
function patchThunk(store) {
    const next = store.dispatch

    function dispatchAndThunk(action) {
        if (typeof action === 'function') {
            action(store.dispatch, store.getState)
        } else {
            next(action)
        }
    }
    // store.dispatch = dispatchAndThunk
    return dispatchAndThunk
}


function applyMiddleware(...middlewares) {
    middlewares.forEach(middleware => {
        store.dispatch = middleware(store)
    })
}

applyMiddleware(patchLogging, patchThunk)


// //6.2:封装applyMiddleware (单中间件函数)
// function patchThunk(store) {
//     const next = store.dispatch
//
//     function dispatchAndThunk(action) {
//         if (typeof action === 'function') {
//             action(store.dispatch, store.getState)
//         } else {
//             console.log('dispatch前', action)
//             next(action)
//             console.log('dispatch后', store.getState())
//         }
//     }
//
//     // store.dispatch = dispatchAndThunk
//     return dispatchAndThunk
// }
//
//
// function applyMiddleware(...middlewares) {
//     middlewares.forEach(middleware => {
//         store.dispatch = middleware(store)
//     })
// }
//
// applyMiddleware(patchThunk)


store.dispatch(addAction(1))
store.dispatch(addAction(5))

function foo(dispatch, getState) {
    dispatch(subAction(10))
}

store.dispatch(foo)
