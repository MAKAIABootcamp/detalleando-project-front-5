import React from 'react'
import NavMobile from '../../components/nav-mobile/NavMobile'
import test from "/test.jfif"
import trash from "/icons/trash-bin.svg"
import edit from "/icons/edit.svg"
import master from "/icons/mastercard.svg"
import Address from '../../components/address/Address'
import Time from '../../components/time/Time'
import "./checkout.scss"
import NavDesktop from '../../components/nav-desktop/NavDesktop'
import { useNavigate } from 'react-router-dom'

const Checkout = ({ isTypeSeller }) => {

    const navigate = useNavigate();

  return !isTypeSeller && (
    <>
    <header>
        <NavDesktop />
    </header>
    <main className='checkout-main'>
        <h1>Proceso del pago</h1>
        <div className='desktop-checkout-container'>
        <div className='order-details'>
            <h2>Detalles del orden</h2>
            <div className='product-info'>
                <img src={test} alt="" />
                <div className='info-text'>
                    <div>
                        <h4>Cupcakes with cream cheese</h4>
                        <img src={trash} alt="Icon for delete" className='icon delete'/>
                    </div>
                    <div>
                        <p>Shop name</p>
                        <div>
                            <img src={edit} alt="Icon for edit" className='icon'/>
                            <span>x2</span>
                        </div>
                        <span className='price'>$14</span>
                    </div>
                </div>
            </div>
            <div>
                <Address/>
                <Time/>
            </div>
            <div className='order-aditional'>
                <p>Escribe informacion adicional</p>
                <textarea name="" id="" cols="30" rows="5"></textarea>
            </div>
        </div>
        <div className='payment-details'>
            <h2>Detalles del pago</h2>
            <div className='payment-method'>
                <p onClick={() => navigate("/payment-methods")}>Cambiar metodo del pago</p>
                <div className='method'>
                    <img src={master} alt="" />
                    <span>4950 **** **** 3826</span>
                </div>
            </div>
            <div className='payment-discount'>
                <p>Cupon</p>
                <div>
                    <input type="text" />
                    <button>Aplicar</button>
                </div>
            </div>
            <div className='order-total'>
                <div className='total-price'>
                    <p>Subtotal</p>
                    <span>$14</span>
                </div>
                <div className='total-price'>
                    <p>Descuento</p>
                    <span>$0</span>
                </div>
                <div className='total-price'>
                    <p>Domicilio</p>
                    <span>$5</span>
                </div>
                <hr />
                <div className='total-price total'>
                    <p>Total a pagar</p>
                    <span>$19</span>
                </div>
            </div>
        </div>
        </div>
        <button className='checkout-button' onClick={() => navigate("/purchase-success")}>Ir al pago</button>
    </main>
    <div className='checkout-nav'>
        <NavMobile/>
    </div>
    </>
  )
}

export default Checkout