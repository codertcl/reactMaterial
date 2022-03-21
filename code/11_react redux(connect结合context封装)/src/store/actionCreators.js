import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT
} from './constants.js';

export function addNumber(num) {
  return {
    type: ADD_NUMBER,
    num
  }
}

export const subNumber= (num) => {
  return {
    type: SUB_NUMBER,
    num
  }
}

export const increment = num => ({
  type: INCREMENT,
});

export const decrement = num => ({
  type: DECREMENT,
});
