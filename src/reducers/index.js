import { combineReducers } from 'redux'
import standingsReducer from './standingsReducer'

const rootReducer = combineReducers({
  standings: standingsReducer
})

export default rootReducer
