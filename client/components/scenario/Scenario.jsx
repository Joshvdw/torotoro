import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Bird from './Bird'
import Bubble from './Bubble'
import Character from '../characterCreator/Character'
import Nav from '../utilities/Nav'

import { nextEvent, previousEvent } from '../../actions/scenario'

import ScenarioQuestionDialog from './ScenarioQuestionDialog'
import NarratorDialog from './NarratorDialog'

import scene1 from '../../data/scene1'
import scene2 from '../../data/scene2'
import scene3 from '../../data/scene3'

const Scenario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const sceneIndex = useSelector(globalState => globalState.scenario.sceneIndex)
  const scriptIndex = useSelector(globalState => globalState.scenario.scriptIndex)
  const isFinished = useSelector(globalState => globalState.scenario.finished)

  const scene = sceneIndex === 1 ? scene1 : sceneIndex === 2 ? scene2 : scene3

  const characters = scene.characters
  const currentEvent = scene.script[scriptIndex]

  const checkKey = (e) => {
    if (e.key === 'ArrowLeft') {
      // left arrow
      dispatch(previousEvent())
    } else if (e.key === 'ArrowRight') {
      // right arrow
      if (currentEvent.type !== 'narrator-question') {
        dispatch(nextEvent())
      }
    }
  }

  document.onkeydown = checkKey

  if (isFinished) {
    navigate('/summary')
  }

  return (

    <div className='scene'>
      <Nav previous='/character'/>

      <div className="scenario-character-container">
        <Character />
      </div>

      {characters.map((character, i) => {
        return <Bird key={i} name={character} />
      })}

      {currentEvent.type === 'bird-dialogue' &&
          (
            <>
              <Bubble character={currentEvent.character} dialogue={currentEvent.dialogue} />
            </>
          )
      }

      {currentEvent.type === 'narrator-question' && (
        <ScenarioQuestionDialog
          dialogue={currentEvent.dialogue}
          answers={currentEvent.answers}/>
      )}

      {currentEvent.type === 'narrator-dialogue' && (
        <NarratorDialog
          dialogue={currentEvent.dialogue}
          sound={currentEvent.sound}
        />
      )}

    </div>
  )
}

export default Scenario
