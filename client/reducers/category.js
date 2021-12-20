import { CHANGE_CATEGORY } from '../actions/characterCreator'

export default function category (state = '', action) {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return action.category
    default:
      return state
  }
}
