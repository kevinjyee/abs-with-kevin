import { combineReducers } from 'redux'
import attendance from './attendance'
import counter from './counter'
import workout from './workout'
import days from './days'
export default combineReducers({
  counter,
  attendance,
  workout,
  days
})
