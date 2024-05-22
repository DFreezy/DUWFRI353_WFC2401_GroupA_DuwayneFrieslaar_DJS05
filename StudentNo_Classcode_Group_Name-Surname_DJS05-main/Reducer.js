import  "./store";

function counterReducer(state = initialState, action) {
  switch (action.type) {
      case INCREMENT:
          return { ...state, count: state.count + 1 };
      case SAVE:
          return { ...state, savedCounts: [...state.savedCounts, state.count], count: 0 };
      default:
          return state;
  }
}