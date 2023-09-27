import React, { useState } from 'react'
import arrow from "/icons/arrow-down.svg"
import "./time.scss"
import { useDispatch, useSelector } from 'react-redux';
import { setAddress } from '../../redux/order/orderReducer';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Time = () => {

  const numbers = Array.from({ length: 15 }, (_, index) => 8 + index);
  const [chosenTime, setChosenTime] = useState(8)
  const [openCalendar, setOpenCalendar] = useState(false)
  const dispatch = useDispatch()
  const { currentOrder } = useSelector(store => store.order);
  const [value, onChange] = useState(new Date());

  const handleSelectChange = (event) => {
    setChosenTime(event.target.value);
    const newTime = {
      direction: currentOrder.sendTo.direction,
      name: currentOrder.sendTo.name,
      phone: currentOrder.sendTo.phone,
      date: currentOrder.sendTo.date,
      time: event.target.value,
      additional: currentOrder.sendTo.additional
    }
    dispatch(setAddress(newTime))
  };

  return (
    <div className='time'>
        <p>Entregar en:</p>
        <div className='choice'>
            <h4 onClick={() => setOpenCalendar(!openCalendar)}>27.09.23</h4>
            <img src={arrow} alt="Icon for arrrow" />
            {
              openCalendar && 
              <div className='opening-calendar'>
              <Calendar onChange={onChange} value={value} />
            </div>
            }
            
            <select name="quantity" value={chosenTime} onChange={handleSelectChange}>
              {numbers.map((number) => (
                <option key={number} value={number}>
                {number}:00
                </option>
              ))}
            </select>
        </div>
    </div>
  )
}

export default Time