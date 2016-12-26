import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
// import { Root } from './components/Root'
import { store } from './stores/store'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import App from './components/Main';

// Render the main component into the dom
ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/(:topic)" component={App} />
    </Router>
  </Provider>
  ),document.getElementById('app')
)