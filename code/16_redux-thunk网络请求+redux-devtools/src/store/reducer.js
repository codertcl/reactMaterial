import {ADD_NUMBER, CHANGE_BANNER, CHANGE_RECOMMEND, DECREMENT, INCREMENT, SUB_NUMBER} from './constants.js';

const defaultState = {
    count: 0,
    banner: [],
    recommend: []
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_NUMBER:
            return {...state, count: state.count + action.num};
        case SUB_NUMBER:
            return {...state, count: state.count - action.num};
        case INCREMENT:
            return {...state, count: state.count + 1};
        case DECREMENT:
            return {...state, count: state.count - 1};
        case CHANGE_BANNER:
            return {...state, banner: action.banner};
        case CHANGE_RECOMMEND:
            return {...state, recommend: action.recommend};
        default:
            return state;
    }
}

export default reducer;
