export function init(initialCount) {
    //{count: 0} 所以直接返回
    return initialCount;
}

export default function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        case 'reset':
            return init(action.payload);
        default:
            return state
    }
}
