import React from 'react'
import './orderlist.scss'
import arrowBack from "/arrowback.svg";
import { useNavigate } from 'react-router';
const OrderList = () => {
    const navigate = useNavigate();
  return (
    <section className="orders-container">
    <div className="infoup">
      <img 
      src={arrowBack} 
      alt="ArrowBack"
      onClick={() => navigate(-1)}
      />
      <h2>Mis ordenes</h2>
    </div>
    <div className="historial">
      <span>Actual</span>
      <span>Historial</span>
      
    </div>
    <hr className="button-divider" />

  </section>
  )
}

export default OrderList