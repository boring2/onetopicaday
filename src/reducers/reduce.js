export function reducer (state = {ideas: []}, action) {
  switch(action.type) {
    case 'ADD':
      return Object.assign({}, state, {ideas: [...state.ideas, action.text]});
    default:
      return state;
  }
}