import {
    ADD_NUMBER,
    DECREMENT,
    INCREMENT,
    SUB_NUMBER
} from './constants.js';
import axios from "axios";

export function addNumber(num) {
    return {
        type: ADD_NUMBER,
        num
    }
}

export const subNumber = (num) => {
    return {
        type: SUB_NUMBER,
        num
    }
}

// 为保证dispatch参数为对象 此处是对象 则dispatch(increment)
// 如果此处是箭头函数 返回一个对象 则dispatch(increment())
export const increment = {
    type: INCREMENT,
};

// export const increment =  () => ({
//     type: INCREMENT,
// });

export const decrement = {
    type: DECREMENT,
};
// export const decrement = () => ({
//     type: DECREMENT,
// });
