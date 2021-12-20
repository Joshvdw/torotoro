import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../utilities/Nav'

import wood2 from '../../audio/sound-fx/wood2.mp3'
const wood2_audio = new Audio(wood2)

wood2_audio.volume = 0.7

import { useSelector } from 'react-redux'

const LandingPage = () => {
  const isSoundOn = useSelector(state => state.sound)

  const playSound = (audio) => {
    if (isSoundOn) {
      audio.play()
    }
  }

  return (
    <div className='section'>
      <Nav previous=''/>
      <div className='logo'>
        <img className="bottom" src='./images/logo.png' alt="" style={{ width: 550 }}/>
        <img className="top" src='./images/exploreMore.png' alt="" style={{ width: 693 }}/>
        <img className="bottom" src='./images/logo.png' alt="" style={{ width: 550 }}/>
        <img className="top" src='./images/exploreMore.png' alt="" style={{ width: 693 }}/>
      </div>
      <div>
        <Link to='/character'><button className='button-primary' onClick={() => playSound(wood2_audio)}>PLAY</button></Link>
      </div>
    </div>
  )
}

export default LandingPage
