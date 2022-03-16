import {ADD_NUMBER, DECREMENT, INCREMENT, SUB_NUMBER} from './constants.js';


const initialCountState = {
    count: 0
}

export function countReducer(state = initialCountState, action) {
    switch (action.type) {
        case ADD_NUMBER:
            return {...state, count: state.count + action.num};
        case SUB_NUMBER:
            return {...state, count: state.count - action.num};
        case INCREMENT:
            return {...state, count: state.count + 1};
        case DECREMENT:
            return {...state, count: state.count - 1};
        default:
            return state;
    }
}

