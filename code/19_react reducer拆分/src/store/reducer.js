import {countReducer} from './count/reducer.js';
import {homeReducer} from './home/reducer.js';
import {combineReducers} from "redux";

// function reducer(state = {}, action) {
//     return {
//         countInfo: countReducer(state.countInfo, action),
//         homeInfo: homeReducer(state.homeInfo, action)
//     }
// }

const reducer = combineReducers({
    homeInfo: homeReducer,
    countInfo: countReducer
})

export default reducer;
