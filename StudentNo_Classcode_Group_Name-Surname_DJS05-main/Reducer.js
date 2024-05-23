import  "./store";

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return state.count > 0 ? { ...state, count: state.count - 1 } : state;
        case RESET:
            return { ...state, count: 0 };
        case SAVE:
            return { ...state, savedCounts: [...state.savedCounts, state.count], count: 0 };
        default:
            return state;
    }
}

document.getElementById('decrement-btn').addEventListener('click', () => store.dispatch(decrement()))

store.dispatch(decrement());
console.log(store.getState()); // Scenario: Decrementing the quantity of an item