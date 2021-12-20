export const CHANGE_CATEGORY = 'CHANGE_CATEGORY'
export const CHANGE_CHARACTER = 'CHANGE_CHARACTER'

export function changeCharacter (category, newValue) {
  return {
    type: CHANGE_CHARACTER,
    category,
    newValue
  }
}

export function changeCategory (category, newValue) {
  return {
    type: CHANGE_CATEGORY,
    category
  }
}
