/**
 * Action Types
 */
import "https://cdnjs.cloudflare.com/ajax/libs/redux/4.1.2/redux.min.js"

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const SAVE = 'SAVE';

/**
 * Action Creators
 */

/**
 * Action creator for incrementing the count.
 * @returns {Object} Action object for incrementing.
 */
function increment() {
    return { type: INCREMENT };
}

/**
 * Action creator for decrementing the count.
 * @returns {Object} Action object for decrementing.
 */
function decrement() {
    return { type: DECREMENT };
}

/**
 * Action creator for resetting the count.
 * @returns {Object} Action object for resetting.
 */
function reset() {
    return { type: RESET };
}

/**
 * Action creator for saving the count.
 * @returns {Object} Action object for saving.
 */
function save() {
    return { type: SAVE };
}

/**
 * Initial State
 */
const initialState = {
    count: 0,
    savedCounts: []
};

/**
 * Reducer function to update state based on actions.
 * @param {Object} state - Current state.
 * @param {Object} action - Action object.
 * @returns {Object} New state.
 */
function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            // Ensure count doesn't go below zero
            return state.count > 0 ? { ...state, count: state.count - 1 } : state;
        case RESET:
            return { ...state, count: 0 };
        case SAVE:
            // Save current count and reset count to zero
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
const resetEl = document.getElementById('reset-btn');

/**
 * Function to render the current state to the DOM.
 */
function render() {
    const state = store.getState();
    // Update count display
    countEl.textContent = state.count;
    // Update saved counts display
    resetEl.textContent = state.savedCounts.join(' - ');
}

// Initial render
render();

// Subscribe render to store
store.subscribe(render);

// Event Listeners
// Dispatch actions on button clicks
document.getElementById('increment-btn').addEventListener('click', () => store.dispatch(increment()));
document.getElementById('reset-btn').addEventListener('click', () => store.dispatch(reset()));
document.getElementById('decrement-btn').addEventListener('click', () => store.dispatch(decrement()));

// Testing the scenarios
// Log initial state
console.log(store.getState()); // Scenario: Initial state
// Dispatch increment actions twice
store.dispatch(increment());
store.dispatch(increment());
// Log state after incrementing
console.log(store.getState()); // Scenario: Incrementing the quantity of an item
// Dispatch decrement action
store.dispatch(decrement());
// Log state after decrementing
console.log(store.getState()); // Scenario: Decrementing the quantity of an item
// Dispatch reset action
store.dispatch(reset());
// Log state after resetting
console.log(store.getState()); // Scenario: Resetting the quantity of an item
