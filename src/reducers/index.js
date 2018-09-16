import { combineReducers } from 'redux'
import standingsReducer from './standingsReducer'
import top6Reducer from './top6Reducer'

const rootReducer = combineReducers({
  standings: standingsReducer,
  top6: top6Reducer
})

export default rootReducer
