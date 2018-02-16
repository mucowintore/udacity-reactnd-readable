import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import 'semantic-ui-css/semantic.min.css'

import App from './components/App'
import { fetchCategories } from './actions/categories'
import rootReducer from './reducers'


const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
)

store.dispatch(fetchCategories())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
