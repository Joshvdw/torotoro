import React from 'react'
import { useSelector } from 'react-redux'

const Face = () => {
  const character = useSelector(state => state.character)

  return (
    <>
      <div className='features-container'>
        {Object.keys(character).map((feature, i) => (
          <div className={feature} key={i}>
            <img className="character-feature-image" src={`./images/character/${feature}/${feature}-${character[feature]}.svg`} alt=""/>
          </div>
        ))}
        <div className="shirt">
          <img className="character-feature-image" src='./images/character/shirt/shirt.svg' alt=""/>
        </div>
      </div>
    </>
  )
}

export default Face
