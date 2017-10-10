import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import colorChanger from './colorChanger'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  color: colorChanger // Need this in order to pass to props in ChangeColor file
})

export default todoApp