/* eslint-disable camelcase */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import click from '../../audio/sound-fx/click4.mp3'
import click2 from '../../audio/sound-fx/click2.mp3'
import { changeCharacter } from '../../actions/characterCreator'

const click_audio = new Audio(click)
const click2_audio = new Audio(click2)

click_audio.volume = 0.7
click2_audio.volume = 0.1

const PaletteItem = (props) => {
  const dispatch = useDispatch()
  const { category, index } = props

  const stateCharacter = useSelector(state => state.character)

  const selectFeature = (category, index) => {
    dispatch(changeCharacter(category, index))
  }

  const preview = { ...stateCharacter, [category]: index }

  const isSoundOn = useSelector(state => state.sound)

  const playSound = () => {
    if (isSoundOn) {
      click2_audio.play()
    }
  }

  const handleClick = (category, index) => {
    selectFeature(category, index)

    if (isSoundOn) {
      click_audio.play()
    }
  }

  return (

    <div className={stateCharacter[category] === preview[category] ? 'palette-item selected-item' : 'palette-item'}
      onClick={() => handleClick(category, index)}
      onMouseEnter={() => playSound()}>

      <button className='palette-item-button'>
        { preview.skin !== undefined &&
      <img
        className='palette-item-image'
        src={`./images/character/skin/skin-${preview.skin}.svg`}
      />
        }
        { preview.eyes !== undefined &&
    <img
      className='palette-item-image'
      src={`./images/character/eyes/eyes-${preview.eyes}.svg`}
    />
        }
        { preview.mouth !== undefined &&
    <img
      className='palette-item-image'
      src={`./images/character/mouth/mouth-${preview.mouth}.svg`}
    />
        }
        { preview.hair !== undefined &&
      <img
        className='palette-item-image'
        src={`./images/character/hair/hair-${preview.hair}.svg`}
      />
        }
      </button>
    </div>
  )
}

export default PaletteItem
