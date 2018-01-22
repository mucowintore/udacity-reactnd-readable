import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'


const initialState = {
  posts: {
    "8xf0y6ziyjabvozdd253nd": {
      id: '8xf0y6ziyjabvozdd253nd',
      timestamp: 1467166872634,
      title: 'Udacity is the best place to learn React',
      body: 'Everyone says so after all.',
      author: 'thingtwo',
      category: 'react',
      voteScore: 6,
      deleted: false,
      commentCount: 2
    },
    "6ni6ok3ym7mf1p33lnez": {
      id: '6ni6ok3ym7mf1p33lnez',
      timestamp: 1468479767190,
      title: 'Learn Redux in 10 minutes!',
      body: 'Just kidding. It takes more than 10 minutes to learn technology.',
      author: 'thingone',
      category: 'redux',
      voteScore: -5,
      deleted: false,
      commentCount: 4
    },
    "6ni6ok3ym7mf1p33lnWz": {
      id: '6ni6ok3ym7mf1p33lnWz',
      timestamp: Date.now(),
      title: 'Learn Redux in 10 minutes!',
      body: 'Just kidding. It takes more than 10 minutes to learn technology. In fact, it usually takes years to master all the intricacies of Redux. Few are those who can confidently say they have learned all there is to learn about Redux',
      author: 'thingone',
      category: 'redux',
      voteScore: 4,
      deleted: false,
      commentCount: 0
    },
    allIds: ["8xf0y6ziyjabvozdd253nd", "6ni6ok3ym7mf1p33lnez", "6ni6ok3ym7mf1p33lnWz"],
    displayedIds: ["8xf0y6ziyjabvozdd253nd", "6ni6ok3ym7mf1p33lnez", "6ni6ok3ym7mf1p33lnWz"],
    activeFilterCategory: 'all',
    activeSortProperty: 'timestamp',
  },
  comments: {},
  categories: [],
}

const store = createStore(
  reducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
