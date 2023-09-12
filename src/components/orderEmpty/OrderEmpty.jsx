import React from 'react'

import Card from "../../components/card/Card";
import NavMobile from "../../components/nav-mobile/NavMobile";
import { useNavigate } from "react-router";
import notorder from '/not-orders.svg'
import './orderEmpty.scss'
import { Link } from 'react-router-dom';
import OrderList from '../orderList/OrderList';
const OrderEmpty = () => {
    
  return (
    <main className="order-empty">
      
      <OrderList/>
      <h3>Todavía no tienes ordenes actuales</h3>

      <figure className='not-order'>
        <img src={notorder} alt="NotOrders" />
      </figure>

      <Link to="/" className="texto">Ir a la tienda</Link>


      <NavMobile/>
    </main>
  )
}

export default OrderEmpty