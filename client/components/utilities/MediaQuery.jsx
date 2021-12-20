import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'

const mediaQuery = (props) => {

  const navigate = useNavigate()
  const isScreenBigEnough= useMediaQuery({query: '(min-width: 940px)'})
  
  useEffect(() => {
    if(isScreenBigEnough) {navigate(-1)}
  })
  
  return (
    <>
      <div className='squish-section'>
        <h1 className='squish-title'>Squawk! I'm squished</h1>
        <p>Give us space to fly on a desktop please!</p>
        <div>
          <img src={'./images/birds/squishBird.png'} alt='A squeezed bird' />
        </div>
      </div>
    </>
  )
}

export default mediaQuery