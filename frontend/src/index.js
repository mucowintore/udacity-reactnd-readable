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

import {
  addPost,
} from './actions/posts'
// TODO Do the initial rendering without the samplePosts and sampleComments
const samplePosts = [
  {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
  },
  {
    id: '6ni6ok3ym7mf1p33lnWz',
    timestamp: Date.now(),
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology. In fact, it usually takes years to master all the intricacies of Redux. Few are those who can confidently say they have learned all there is to learn about Redux',
    author: 'thingone',
    category: 'redux',
  },
  {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
  },
]

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

store.dispatch(fetchCategories())
samplePosts.map(post => store.dispatch(addPost(post)))
