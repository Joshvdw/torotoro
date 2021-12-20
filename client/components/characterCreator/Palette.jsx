import React from 'react'
import { useSelector } from 'react-redux'

import PaletteItem from './PaletteItem'
import PaletteMenu from './PaletteMenu'

const Palette = () => {
  const category = useSelector(state => state.category)

  return (
    <div className='palette-section'>
      <div className='palette-grid'>
        {Array(16).fill().map((e, i) => {
          return (
            <PaletteItem key={i} index={i} category={category}/>
          )
        })}
      </div>
      <PaletteMenu />
    </div>
  )
}

export default Palette
