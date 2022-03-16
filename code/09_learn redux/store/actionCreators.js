import {DECREMENT, INCREMENT,ADD_NUMBER,SUB_NUMBER} from './constants.js'

export const addAction = () => {
    return {
        type: INCREMENT
    }
}

export const subAction = () => {
    return {
        type: DECREMENT
    }
}

export const addNumber = (num) => {
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
