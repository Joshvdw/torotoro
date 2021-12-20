import { TOGGLE_SOUND } from '../actions/sound'

export default function sound (state = false, action) {
  switch (action.type) {
    case TOGGLE_SOUND:
      return !state
    default:
      return state
  }
}
