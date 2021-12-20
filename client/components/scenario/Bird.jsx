import React from 'react'

const Bird = ({ name }) => {

  return (
    <>
      <div ><img className={`bird ${name}`}src={`./images/birds/${name}.gif`} alt='bird image' /></div>
    </>
  )
}

export default Bird
