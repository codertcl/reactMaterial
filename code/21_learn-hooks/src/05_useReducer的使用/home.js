import React, {useReducer} from "react";
import reducer from "./reducer";
import {init} from './reducer'

const initialState = {count: 0};
export default function Home() {
    const [state, dispatch] = useReducer(reducer, initialState, init);
    return (
        <>
            <h1>{state.count}</h1>
            <button
                onClick={() => dispatch({type: 'reset', payload: initialState})}>
                Reset
            </button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </>
    );
}
