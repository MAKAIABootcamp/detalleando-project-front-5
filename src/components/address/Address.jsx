import React, { useState } from 'react'
import arrow from "/icons/arrow-down.svg"
import "./address.scss"
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Address = () => {

  const location = useLocation()
  const navigate = useNavigate()
  const { userLogged } = useSelector(store => store.auth);
  const [openChoice, setOpenChoice] = useState(false)

  return (
    <div className='address'>
        <p>Entregar a:</p>
        <div className='choice'>
          
          {location.pathname === '/checkout' ? 
            (
            userLogged.address && userLogged.address.length > 0 && 
            <>
            <div>
                <h4>{userLogged.address[0].direction}</h4>
                <h4>{userLogged.address[0].name}, {userLogged.address[0].phone}</h4>
            </div>
            { openChoice && <div className='opening-element'>
              {
            userLogged.address.map((place) => (
              <div className='opening-address'>
                <h4>{place.direction}</h4>
                <h4>{place.name}, {place.phone}</h4>
              </div>
            ))}
              <div className='new-direction' onClick={() => navigate('/mapa')}>
                <span>+</span>
                <h4>Añadir dirección nueva</h4>
              </div>
            </div>}
            </>)
           : 
           (
            userLogged.address && userLogged.address.length > 0 && 
            <>
            <div>
              <h4>{userLogged.address[0].direction}, {userLogged.address[0].name}</h4>
            </div>
            { openChoice && <div className='opening-element'>
              {
            userLogged.address.map((place) => (
              <div className='opening-address'>
                <h4>{place.direction}, {place.name}</h4>
              </div>
            ))}
              <div className='new-direction' onClick={() => navigate('/mapa')}>
                <span>+</span>
                <h4>Añadir dirección nueva</h4>
              </div>
            </div>}
            </>)
          }
            <div className='new-direction' onClick={() => navigate('/mapa')}>
              <span>+</span>
              <h4>Añadir dirección nueva</h4>
            </div>
            {
              userLogged.address && userLogged.address.length > 0 && 
              <img src={arrow} alt="Icon for arrrow" onClick={() => setOpenChoice(!openChoice)}/>
            }
            
        </div>
    </div>
  )
}

export default Address