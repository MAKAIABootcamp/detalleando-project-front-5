import React from 'react'
import NavMobile from '../../components/nav-mobile/NavMobile'
import test from "/test.jfif"
import master from "/icons/mastercard.svg"
import Address from '../../components/address/Address'
import Time from '../../components/time/Time'
import "./success.scss"

const Success = () => {
  return (
    <>
    <main>
        <div className='success-message'>
            <h2>Gracias por su compra!</h2>
            <img src={test} alt="" />
            <p>Va a recibir la confirmacion de su compra en su correo. En el dia de entrega el vendodor le va a mandar la foto del producto preparado. Si quiere conectarse con el vendedor,  
                <span> escribele un mensaje</span>
            </p>
            
        </div>
        <div className='order-details'>
            <h2>Detalles del orden</h2>
            <div className='product-info'>
                <img src={test} alt="" />
                <div className='info-text'>
                    <div>
                        <h4>Cupcakes with cream cheese</h4>
                    </div>
                    <div>
                        <p>Shop name</p>
                            <span>x2</span>
                        <span className='price'>$14</span>
                    </div>
                </div>
            </div>
            <div>
                <Address/>
                <Time/>
            </div>
            <h2>Detalles del pago</h2>
            <div className='method'>
                <img src={master} alt="" />
                <span>4950 **** **** 3826</span>
            </div>
        </div>
        <h4 className='link-to-shop'>Seguir comprando</h4>
    </main>
    <NavMobile/>
    </>
  )
}

export default Success