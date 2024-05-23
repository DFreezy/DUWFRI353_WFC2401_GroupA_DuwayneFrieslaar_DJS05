// Action Types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const SAVE = 'SAVE';

// Action Creators
function increment() {
    return { type: INCREMENT };
}

function decrement() {
    return { type: DECREMENT };
}

function reset() {
    return { type: RESET };
}

function save() {
    return { type: SAVE };
}

// Initial State
const initialState = {
    count: 0,
    savedCounts: []
};

// Reducer
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

// Create Redux Store
const { createStore } = Redux;
const store = createStore(counterReducer);

// DOM Elements
const countEl = document.getElementById('count-el');
const saveEl = document.getElementById('reset-btn');

// Render function
function render() {
    const state = store.getState();
    countEl.textContent = state.count;
    saveEl.textContent = state.savedCounts.join(' - ');
}

// Initial render
render();

// Subscribe render to store
store.subscribe(render);

// Event Listeners
document.getElementById('increment-btn').addEventListener('click', () => store.dispatch(increment()));
document.getElementById('reset-btn').addEventListener('click', () => store.dispatch(reset()));
document.getElementById('decrement-btn').addEventListener('click', () => store.dispatch(decrement()))

// Testing the scenarios
console.log(store.getState()); // Scenario: Initial state

store.dispatch(increment());
store.dispatch(increment());
console.log(store.getState()); // Scenario: Incrementing the quantity of an item

store.dispatch(decrement());
console.log(store.getState()); // Scenario: Decrementing the quantity of an item

store.dispatch(reset());
console.log(store.getState()); // Scenario: Resetting the quantity of an item

