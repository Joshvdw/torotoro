export const NEXT_EVENT = 'NEXT_EVENT'
export const PREVIOUS_EVENT = 'PREVIOUS_EVENT'
export const RESET_SCENE = 'RESET_SCENE'

export function nextEvent () {
  return {
    type: NEXT_EVENT
  }
}

export function previousEvent () {
  return {
    type: PREVIOUS_EVENT
  }
}

export function resetScenes () {
  return {
    type: RESET_SCENE
  }
}
