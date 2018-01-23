import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Provider } from 'react-redux'

import App from './components/App'
import { fetchCategories } from './actions'
import rootReducer from './reducers'


const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.dispatch(
  fetchCategories()
)
