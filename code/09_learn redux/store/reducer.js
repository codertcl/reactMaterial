const defaultState = {
    count: 0
}

import {ADD_NUMBER, DECREMENT, INCREMENT, SUB_NUMBER} from './constants.js'


function reducer(state = defaultState, action) {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + 1}
        case DECREMENT:
            return {...state, count: state.count - 1}
        case ADD_NUMBER:
            return {...state, count: state.count + action.num}
        case SUB_NUMBER:
            return {...state, count: state.count - action.num}
        default:
            return state
    }
}

export default reducer
