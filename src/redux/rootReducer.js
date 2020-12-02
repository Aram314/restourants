import { combineReducers } from 'redux'
import basketReducer from './basket/basketReducer';
import { enableMapSet } from 'immer'

enableMapSet();

const rootReducer = combineReducers({
  basket: basketReducer
})

export default rootReducer
