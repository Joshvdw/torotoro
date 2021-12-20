import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useSelector } from 'react-redux'

import CharacterCreator from './characterCreator/CharacterCreator'
import LandingPage from './landingPage/LandingPage'
import Scenario from './scenario/Scenario'
import SummaryPage from './landingPage/SummaryPage'
import MediaQuery from './utilities/MediaQuery'

import { Routes, Route, useNavigate } from 'react-router-dom'

import squash from '../audio/squash.mp3'
const squash_audio = new Audio(squash)

squash_audio.volume = 0.2

function App () {

  const navigate = useNavigate()
  const isSoundOn = useSelector(state => state.sound)

  const isScreenTooSmall = useMediaQuery({
    query: '(max-width: 940px)'
  })
  
  useEffect (() => {
    if (isScreenTooSmall) { navigate('/squished') }
    if ((isScreenTooSmall) && (isSoundOn)) {
      squash_audio.play()
    }
  }, [isScreenTooSmall])

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/character' element={<CharacterCreator />} />
        <Route path='/scenario' element={<Scenario />} />
        <Route path='/summary' element={<SummaryPage />} />
        <Route path='/squished' element={<MediaQuery />} />
      </Routes>
    </>
  )
}

export default App
