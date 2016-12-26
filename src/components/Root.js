import App from './Main'
import { Router, Route } from 'react-router'
import { Provider } from 'react-redux'
import React from 'react'

export const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
)


