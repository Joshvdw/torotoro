import { NEXT_EVENT, PREVIOUS_EVENT, RESET_SCENE } from '../actions/scenario'

import scene1 from '../data/scene1'
import scene2 from '../data/scene2'
import scene3 from '../data/scene3'

const numberOfScenes = 3

const initialState = {
  sceneIndex: 1,
  scriptIndex: 0,
  finished: false
}

export default function scriptIndex (state = initialState, action) {
  const scene = state.sceneIndex === 1 ? scene1 : state.sceneIndex === 2 ? scene2 : scene3
  const script = scene.script
  const sceneLength = script.length

  switch (action.type) {
    case NEXT_EVENT:
      if (state.sceneIndex === numberOfScenes && state.scriptIndex === sceneLength - 1) {
        return {
          ...state,
          finished: true
        }
      } else if (state.scriptIndex === sceneLength - 1) {
        return {
          ...state,
          sceneIndex: state.sceneIndex + 1,
          scriptIndex: 0
        }
      } else {
        return {
          ...state,
          scriptIndex: state.scriptIndex + 1
        }
      }
    case PREVIOUS_EVENT:
      if (state.scriptIndex === 0 && state.sceneIndex === 1) {
        return state
      } else if (state.scriptIndex === 0) {
        return {
          ...state,
          sceneIndex: state.sceneIndex - 1,
          scriptIndex: 0
        }
      } else {
        return {
          ...state,
          scriptIndex: state.scriptIndex - 1
        }
      }
    case RESET_SCENE:
      return initialState
    default:
      return state
  }
}
