import React from 'react'
import arrow from "/icons/arrow-down.svg"
import "./time.scss"

const Time = () => {
  return (
    <div className='time'>
        <p>Entregar en:</p>
        <div className='choice'>
            <h4>22.12.23  19:00</h4>
            <img src={arrow} alt="Icon for arrrow" />
        </div>
    </div>
  )
}

export default Time