import "./store";

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const SAVE = 'SAVE';

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

document.getElementById('increment-btn').addEventListener('click', () => store.dispatch(increment()));
document.getElementById('reset-btn').addEventListener('click', () => store.dispatch(reset()));

store.dispatch(reset());
console.log(store.getState()); // Scenario: Resetting the quantity of an item

store.dispatch(increment());
store.dispatch(increment());
console.log(store.getState()); // Scenario: Incrementing the quantity of an item
