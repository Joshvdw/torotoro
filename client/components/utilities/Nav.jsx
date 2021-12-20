/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'
import ToggleSound from './ToggleSound'

import wood1 from '../../audio/sound-fx/wood1.mp3'
import { useDispatch, useSelector } from 'react-redux'

import { resetScenes } from '../../actions/scenario'

const wood1_audio = new Audio(wood1)

wood1_audio.volume = 0.7

const Nav = (props) => {
  const dispatch = useDispatch()
  const isSoundOn = useSelector(state => state.sound)

  const previous = props.previous
  const title = props.title

  const playSound = (audio) => {
    if (isSoundOn) {
      audio.play()
    }
  }

  return (
    <div className='top-nav-bar'>

      <div>
        {(previous !== '') && (
          <Link to={previous} onClick={() => dispatch(resetScenes())}>
            <img src='./images/arrow.png' className="back-btn" alt="Back Button Arrow" onClick={() => playSound(wood1_audio)}/>
          </Link>
        )}
      </div>

      <div className='nav-title'>
        <h2>{title}</h2>
      </div>

      <div className="sound-btn__container">
        <ToggleSound />
      </div>
    </div>
  )
}

export default Nav
