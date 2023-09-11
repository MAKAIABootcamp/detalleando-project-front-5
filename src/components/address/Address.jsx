import React from 'react'
import arrow from "/icons/arrow-down.svg"
import "./address.scss"

const Address = () => {
  return (
    <div className='address'>
        <p>Entregar a:</p>
        <div className='choice'>
            <h4>Tunja, cll 12, Anna Bondarets</h4>
            <img src={arrow} alt="Icon for arrrow" />
        </div>
    </div>
  )
}

export default Address