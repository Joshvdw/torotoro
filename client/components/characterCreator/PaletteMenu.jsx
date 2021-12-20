/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { changeCategory } from '../../actions/characterCreator'

import wood2 from '../../audio/sound-fx/wood2.mp3'
import click from '../../audio/sound-fx/click7.mp3'
import click2 from '../../audio/sound-fx/click2.mp3'

const wood2_audio = new Audio(wood2)
const click_audio = new Audio(click)
const click2_audio = new Audio(click2)

wood2_audio.volume = 0.7
click_audio.volume = 0.5
click2_audio.volume = 0.1

const PaletteMenu = () => {
  const skin = 'skin'
  const eyes = 'eyes'
  const mouth = 'mouth'
  const hair = 'hair'

  const dispatch = useDispatch()
  const [category, setCategory] = useState('skin')

  const currentSkin = useSelector(state => state.character.skin)

  useEffect(() => {
    dispatch(changeCategory(category))
  }, [category])

  const selectCategory = (selected) => {
    setCategory(selected)
  }

  const isSoundOn = useSelector(state => state.sound)

  const playSound = (audio) => {
    if (isSoundOn) {
      audio.play()
    }
  }

  const playAudio = () => {
    if (isSoundOn) {
      click2_audio.play()
    }
  }

  const handleClick = (category) => {
    selectCategory(category)

    if (isSoundOn) {
      click_audio.play()
    }
  }

  return (
    <>
      <div className="bottom-menu">
        <button className={category === 'skin' ? 'palette-menu-button selected-button' : 'palette-menu-button'}
          onClick={() => handleClick(skin)} onMouseEnter={() => playAudio()}>
          <img src={`./images/buttons/skin-button-${currentSkin}.svg`} className='palette-button-icon'/>
        </button>

        <button className={category === 'hair' ? 'palette-menu-button selected-button' : 'palette-menu-button'}
          onClick={() => handleClick(hair)} onMouseEnter={() => playAudio()}>
          <img src='./images/buttons/hair-button.svg' className='palette-button-icon'/>
        </button>

        <button className={category === 'mouth' ? 'palette-menu-button selected-button' : 'palette-menu-button'}
          onClick={() => handleClick(mouth)} onMouseEnter={() => playAudio()}>
          <img src='./images/buttons/mouth-button.svg' className='palette-button-icon'/>
        </button>

        <button className={category === 'eyes' ? 'palette-menu-button selected-button' : 'palette-menu-button'}
          onClick={() => handleClick(eyes)} onMouseEnter={() => playAudio()}>
          <img src='./images/buttons/eyes-button.svg' className='palette-button-icon'/>
        </button>



        <Link to='/scenario'>
          <button className='button-go' onClick={() => playSound(wood2_audio)}>
            <img src={'./images/buttons/go-button.svg'} className='palette-button-icon'/>
          </button>
        </Link>
      </div>
    </>
  )
}

export default PaletteMenu
