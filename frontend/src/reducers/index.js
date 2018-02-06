import { combineReducers } from 'redux'
import posts from './posts'
import categories from './categories'
import comments from './comments'
import ui from './ui'

const rootReducer = combineReducers({
  posts,
  categories,
  comments,
  ui,
})

export default rootReducer
