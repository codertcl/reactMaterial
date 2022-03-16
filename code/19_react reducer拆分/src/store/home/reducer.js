import {CHANGE_BANNER, CHANGE_RECOMMEND} from './constants.js';



const initialHomeState = {
    banner: [],
    recommend: []
}

export function homeReducer(state = initialHomeState, action) {
    switch (action.type) {
        case CHANGE_BANNER:
            return {...state, banner: action.banner};
        case CHANGE_RECOMMEND:
            return {...state, recommend: action.recommend};
        default:
            return state;
    }
}

