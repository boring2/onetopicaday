import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import { reducer } from './reducers/reduce';
import { addIdea } from './actions/addIdea';
import { createStore } from 'redux';

let store = createStore(reducer);
console.log(store.getState());
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(addIdea('Learn about actions'))
store.dispatch(addIdea('Learn about actions 2'))
store.dispatch(addIdea('Learn about actions 3'))

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
