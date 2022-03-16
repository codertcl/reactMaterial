import React, {useReducer} from "react";
import reducer from "./reducer";
const initialState = {count: 0};

export default function Profile() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <h1>{state.count}</h1>
            <button onClick={e => dispatch({type: 'increment'})}>+1</button>
            <button onClick={e => dispatch({type: 'decrement'})}>-1</button>
        </>
    )
}
