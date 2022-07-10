// const redux = require('redux')
import redux from 'redux'

const initialState = {
    count: 0,
}


function reducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            return {...state, count: state.count + 1}
        case "DECREMENT":
            return {...state, count: state.count - 1}
        case "ADD_NUMBER":
            return {...state, count: state.count + action.num}
        case "SUB_NUMBER":
            return {...state, count: state.count - action.num}
        default:
            return state
    }
}

const store = redux.createStore(reducer)


//订阅Store的变化 先订阅后派发事件
store.subscribe(() => {
    console.log(store.getState().count)
})

const action1 = {type: "INCREMENT"}
const action2 = {type: "DECREMENT"}
const action3 = {type: "ADD_NUMBER", num: 2}
const action4 = {type: "SUB_NUMBER", num: 2}

//dispatch派发action后,就被reducer函数进行处理,操作state,并返回新的state
store.dispatch(action1)//1
store.dispatch(action2)//0
store.dispatch(action3)//2
store.dispatch(action4)//0
