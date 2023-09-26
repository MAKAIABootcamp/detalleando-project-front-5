import React, { useEffect, useState } from 'react'
import arrow from "/icons/arrow-down.svg"
import "./address.scss"
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAddress } from '../../redux/order/orderReducer'

const Address = () => {

  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { currentOrder } = useSelector(store => store.order);
  const { userLogged } = useSelector(store => store.auth);
  const [openChoice, setOpenChoice] = useState(false)
  const [chosenAddress, setChosenAddress] = useState(userLogged.address[0] || '');

  useEffect(() => {
    if (currentOrder && userLogged.address && userLogged.address.length > 0) {
      const newReceiver = {
        direction: chosenAddress.direction,
        name: chosenAddress.name,
        phone: chosenAddress.phone,
        date: currentOrder.sendTo.date,
        time: currentOrder.sendTo.time,
        additional: currentOrder.sendTo.additional
      }
      dispatch(setAddress(newReceiver))
    }
  }, [chosenAddress])

  const handleClick = (address) => {
    setChosenAddress(address)
  }


  return (
    <div className='address'>
        <p>Entregar a:</p>
        <div className='choice'>
          
          {location.pathname === '/checkout' ? 
            (
            userLogged.address && userLogged.address.length > 0 && 
            <>
            <div>
                <h4>{chosenAddress.direction}</h4>
                <h4>{chosenAddress.name}, {chosenAddress.phone}</h4>
            </div>
            { openChoice && <div className='opening-element'>
              {
            userLogged.address.map((place, index) => (
              <div className='opening-address' onClick={() => handleClick(place)} key={index}>
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
              <h4>{chosenAddress.direction}, {chosenAddress.name}</h4>
            </div>
            { openChoice && <div className='opening-element'>
              {
            userLogged.address.map((place, index) => (
              <div className='opening-address' onClick={() => handleClick(place)} key={index}>
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
            
            {
              userLogged.address && userLogged.address.length > 0 ?
              <img src={arrow} alt="Icon for arrrow" onClick={() => setOpenChoice(!openChoice)}/> :
              <div className='new-direction' onClick={() => navigate('/mapa')}>
              <span>+</span>
              <h4>Añadir dirección nueva</h4>
            </div>
            }
            
        </div>
    </div>
  )
}

export default Address