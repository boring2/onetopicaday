import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import { Provider } from 'react-redux'
import { store } from './stores/store'
// import { aa } from './components/aa';
// const unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)