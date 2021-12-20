import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { resetScenes } from '../../actions/scenario'
import Nav from '../utilities/Nav'

import wood2 from '../../audio/sound-fx/wood2.mp3'
import horn from '../../audio/horn.mp3'
import end_theme from '../../audio/end-theme.mp3'

const wood2_audio = new Audio(wood2)
const horn_audio = new Audio(horn)
const ending_audio = new Audio(end_theme)

wood2_audio.volume = 0.7
horn_audio.volume = 0.3
ending_audio.volume = 0.1

wood2_audio.volume = 0.7

const SummaryPage = () => {
  const dispatch = useDispatch()

  const isSoundOn = useSelector(state => state.sound)

  useEffect(() => {
    if (isSoundOn) {
      horn_audio.play()
      ending_audio.play()
    }
  }, [])

  useEffect(() => {
    if(!isSoundOn) {
      ending_audio.pause()
    }
  }, [isSoundOn])

  const handleClick = () => {
    dispatch(resetScenes())
    ending_audio.pause()
    if (isSoundOn) {
      wood2_audio.play()
    }
  }

  return (
    <div className='summary-section'>
      <Nav previous=''/>

      <div className='summary-logo'>
        <img src='./images/ka-pai.png' alt="" style={{ width: 550 }} />
      </div>

      <div className="summary-btn">
        <Link to='/character'><button className='button-primary' onClick={() => handleClick()}>PLAY AGAIN</button></Link>
      </div>
      
      <img className="confetti" src="./images/confetti.gif" alt=""/>
    </div>
  )
}

export default SummaryPage
