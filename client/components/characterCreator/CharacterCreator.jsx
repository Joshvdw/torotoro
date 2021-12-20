import React from 'react'
import Character from './Character'
import Palette from './Palette'
import Nav from '../utilities/Nav'

const CharacterCreator = () => {
  return (
    <div className='character-background-image'>
      <Nav previous='/' title='How are you feeling today?'/>
      <div className='page-grid'>
        <div className='character-container'>
          <Character />
        </div>
          <Palette />
      </div>
    </div>
  )
}

export default CharacterCreator
