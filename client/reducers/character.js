import { CHANGE_CHARACTER } from '../actions/characterCreator'

const randomInt = () => Math.floor(Math.random() * 15)

const initialState = {
  eyes: 8,
  mouth: 5,
  skin: randomInt(),
  hair: randomInt()
}

export default function character (state = initialState, action) {
  switch (action.type) {
    case CHANGE_CHARACTER:
      return { ...state, [action.category]: action.newValue }
    default:
      return state
  }
}
