/* eslint-disable camelcase */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSound } from '../../actions/sound'

import scene1 from '../../data/scene1'
import scene2 from '../../data/scene2'
import scene3 from '../../data/scene3'

import type1_short from '../../audio/type-sounds/type1-short.mp3'
import type1_long from '../../audio/type-sounds/type1-long.mp3'
import type2_mid from '../../audio/type-sounds/type2-mid.mp3'
import type2_mid2 from '../../audio/type-sounds/type2-mid2.mp3'
import sparrow2 from '../../audio/sparrow2.mp3'

import ambience from '../../audio/ambience.mp3'
import music from '../../audio/music.mp3'

const type1_short_audio = new Audio(type1_short)
const type1_long_audio = new Audio(type1_long)
const type2_mid_audio = new Audio(type2_mid)
const type2_mid2_audio = new Audio(type2_mid2)
const sparrow2_audio = new Audio(sparrow2)

const ambienceSound = new Audio(ambience)
const musicSound = new Audio(music)

musicSound.volume = 0.1;
ambienceSound.volume = 0.9;

type1_short_audio.volume = 0.5
type1_long_audio.volume = 0.5
type2_mid_audio.volume = 0.5
type2_mid2_audio.volume = 0.5
sparrow2_audio.volume = 0.5

function ToggleSound () {
  const dispatch = useDispatch()
  const isSoundOn = useSelector(globalState => globalState.sound)
  const sceneIndex = useSelector(globalState => globalState.scenario.sceneIndex)
  const scriptIndex = useSelector(globalState => globalState.scenario.scriptIndex)
  const isFinished = useSelector(state => state.scenario.finished)

  const scene = sceneIndex === 1 ? scene1 : sceneIndex === 2 ? scene2 : scene3
  const currentEvent = scene.script[scriptIndex]

  const playSound = () => {
    let sound
    if (currentEvent.sound === 'type1_short') {
      sound = type1_short_audio
    } else if (currentEvent.sound === 'type1_long') {
      sound = type1_long_audio
    } else if (currentEvent.sound === 'type2_mid') {
      sound = type2_mid_audio
    } else if (currentEvent.sound === 'sparrow2') {
      sound = sparrow2_audio
    } else {
      sound = type2_mid2_audio
    }
    if (isSoundOn) {
      sound.play()
    }
  }

  useEffect(() => {
    if (currentEvent.type === 'bird-dialogue') {
      playSound()
    }
  }, [scriptIndex])

  const handleClick = () => {
    dispatch(toggleSound())
  }
  
  useEffect(() => {
    if (isSoundOn) {
      ambienceSound.play()
      musicSound.play()
    } else {
      ambienceSound.pause()
      musicSound.pause()
      type1_short_audio.pause()
      type1_long_audio.pause()
      type2_mid_audio.pause()
      type2_mid2_audio.pause()
      sparrow2_audio.pause()
    }
  }, [isSoundOn])
  
  useEffect(()=> {
    if(isFinished){
      musicSound.pause()
    }
  }, [isFinished])
  
  const imageFile = isSoundOn ? './images/icons/volume-on.svg' : './images/icons/volume-off.svg'
  
  return (
    <button className="sound-button__btn" onClick={() => handleClick()}><img className="sound-button__img" src={imageFile}/></button>
    )
}

export default ToggleSound
