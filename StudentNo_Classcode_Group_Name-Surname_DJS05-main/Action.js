import "./store";

const INCREMENT = 'INCREMENT';
const SAVE = 'SAVE';

function increment() {
  return { type: INCREMENT };
}

function save() {
  return { type: SAVE };
}

document.getElementById('increment-btn').addEventListener('click', () => store.dispatch(increment()));
document.getElementById('save-btn').addEventListener('click', () => store.dispatch(save()));