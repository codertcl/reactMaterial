// //1:基本做法
// console.log('dispatch前', store.getState())
// console.log(store.dispatch(addAction(10)))
// console.log('dispatch后', store.getState())
//
// // //2:封装一个函数
// function dispatchAnLogging(action) {
//     console.log('dispatch前', action)
//     store.dispatch(action)
//     console.log('dispatch后', store.getState())
// }
//
// dispatchAnLogging(addAction(1))
// dispatchAnLogging(addAction(5))

// //3:函数基础之上进行优化修改dispatch
// const next = store.dispatch
// function dispatchAnLogging(action) {
//     console.log('dispatch前', action)
//     next(action)
//     console.log('dispatch后', store.getState())
// }
// store.dispatch = dispatchAnLogging


// // //4:方法三封装函数
// import store from "./store/index.js";
// import {addAction,subAction} from "./store/actionCreators.js";
//
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
// // store.dispatch(addAction(1))
// // store.dispatch(addAction(5))
//
//
// //封装pathThunk 处理函数
// function pathThunk(store) {
//     const next = store.dispatch
//
//     function dispatchAndThunk(action) {
//         if (typeof action === 'function') {
//             action(store.dispatch, store.getState)
//         } else {
//             next(action)
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


//5:封装applyMiddleware
import store from "./store/index.js";

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
