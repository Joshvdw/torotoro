import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import click1 from '../../audio/sound-fx/click4.mp3'
import click2 from '../../audio/sound-fx/click1.wav'

const click1_audio = new Audio(click1)
const click2_audio = new Audio(click2)

click1_audio.volume = 0.8
click2_audio.volume = 0.5

import { nextEvent } from '../../actions/scenario'

const NarratorDialog = (props) => {
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(nextEvent())
  }

  const isSoundOn = useSelector(state => state.sound)
  
  useEffect(() => {
    if (isSoundOn) {
      if (props.sound == 'click1') {
        click1_audio.play()
      } else if (props.sound == 'click2') {
        click2_audio.play()
      }
    }
  }, [])

  return (
    <>
      <div className='modal-background'>
        <div className ='modal-card narrator-card' onClick={handleClick}>
          <h3 className='narrator-title'>{props.dialogue}</h3>
        </div>
      </div>
    </>
  )
}

export default NarratorDialog
