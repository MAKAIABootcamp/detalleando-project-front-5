import React from 'react'
import arrow from "/icons/arrow-down.svg"
import "./address.scss"
import { useLocation } from 'react-router-dom'

const Address = () => {

  const location = useLocation()

  return (
    <div className='address'>
        <p>Entregar a:</p>
        <div className='choice'>
          {location.pathname === '/checkout' ? 
          <div>
              <h4>Tunja, cll 12</h4>
              <h4>Anna Bondarets, +573042706787</h4>
          </div> : 
          <h4>Tunja, cll 12, Anna Bondarets</h4>}
            
            <img src={arrow} alt="Icon for arrrow" />
        </div>
    </div>
  )
}

export default Address