import { combineReducers } from 'redux'

import category from './category'
import character from './character'
import scenario from './scenario'
import sound from './sound'

export default combineReducers({
  category,
  character,
  scenario,
  sound
})
