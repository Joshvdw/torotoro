import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import click from '../../audio/sound-fx/click2.mp3'
import click2 from '../../audio/sound-fx/click7.mp3'
import click3 from '../../audio/sound-fx/click6.mp3'

const click_audio = new Audio(click)
const click2_audio = new Audio(click2)
const click3_audio = new Audio(click3)

click_audio.volume  = 0.4
click2_audio.volume  = 0.3
click3_audio.volume = 0.7

import { nextEvent } from '../../actions/scenario'

const ScenarioQuestionDialog = (props) => {
  const dispatch = useDispatch()

  const isSoundOn = useSelector(state => state.sound)

  if (isSoundOn) {
    click3_audio.play()
  }

  const playSound = () => {
    if (isSoundOn) {
      click_audio.play()
    }
  }

  const handleClick = () => {
    dispatch(nextEvent())

    if (isSoundOn) {
      click2_audio.play()
    }
  }

  return (
    <>
      <div className='modal-background'>
        <div className ='modal-card'>
          <h2 className='question-title'>{props.dialogue}</h2>
          <div className="question-btns-container" >
            {props.answers.map((answer, i) => {
              return (
                <button
                  className='answer-button'
                  key={i}
                  onMouseEnter={() => playSound()}
                  onClick={() => handleClick()}
                >{answer}</button>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ScenarioQuestionDialog
