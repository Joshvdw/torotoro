import React from 'react'

const Bubble = (props) => {
  return (
      <div className={`${props.character}`}>
        <div className={`bubble bubble-bottom-left bubble-${props.character}`}><p className={`dialogue-${props.character}`}>{props.dialogue}</p></div>
      </div>
  )
}

export default Bubble
