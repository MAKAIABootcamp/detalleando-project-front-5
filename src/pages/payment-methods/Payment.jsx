import React, { useState } from 'react'
import arrow from "/icons/arrow-down.svg"
import trash from "/icons/trash-bin.svg"
import master from "/icons/mastercard.svg"
import creditCard from "/icons/credit-card.svg"
import close from "/icons/close-circle.svg"
import "./payment.scss"

const Payment = () => {

    const [openForm, setOpenForm] = useState()

  return (
    <>
    <main className='payment-main'>
        <div>
        <div className='navigate-back'>
            <img src={arrow} alt="Icon for go back" />
            <h3>Metodos de pago</h3>
        </div>
        <div>
            <div className='method chosen'>
                <img src={master} alt="" className='card-icon'/>
                <span>4950 **** **** 3826</span>
                <img src={trash} alt="Icon for delete" className='delete'/>
            </div>
            <div className='method'>
                <img src={master} alt="" className='card-icon'/>
                <span>4950 **** **** 3826</span>
                <img src={trash} alt="Icon for delete" className='delete'/>
            </div>
        </div>
        </div>
        <button className='payment-add' onClick={() => setOpenForm(true)}>Añadir metodo de pago</button>
    </main>
    {openForm && 
    <div className='new-container'>
        <div className='new-form'>
            <img src={close} alt="Icon for close" className='close' onClick={() => setOpenForm(false)}/>
            <h4>Nuevo metodo de pago</h4>
            <div className='new-icon'>
                <img src={creditCard} alt="Icon for credit card" className='chosen'/>
            </div>
            <form>
                <input type="text" placeholder='Nombre'/>
                <input type="number" placeholder='Numero de la tarjeta'/>
                <input type="text" placeholder='Fecha de vencimiento'/>
                <input type="number" placeholder='CVC'/>
                <button type="submit" className='new-button'>Guardar</button>
            </form>
        </div>
    </div>}
    </>
  )
}

export default Payment