import {combineReducers} from 'redux'
import LoadReducer from './LoadReducer'
import RTLReducer from './RTLReducer'

export default combineReducers({
  items: LoadReducer,
  isRTL: RTLReducer,
})
