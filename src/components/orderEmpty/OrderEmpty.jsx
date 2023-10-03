import React, { useEffect, useState } from "react";

import Card from "../../components/card/Card";
import NavMobile from "../../components/nav-mobile/NavMobile";
import { useNavigate } from "react-router";
import notorder from "/not-orders.svg";
import "./orderEmpty.scss";
import { Link } from "react-router-dom";
import OrderList from "../orderList/OrderList";
const OrderEmpty = ({text}) => {
  const navigate = useNavigate();
  const [widthMovile, setWidthMovile] = useState();


  return (
    <>
      
        <main className="order-empty">
          <h3>{text}</h3>

          <figure className="not-order">
            <img src={notorder} alt="NotOrders" />
          </figure>

          <Link to="/home" className="texto">
            Ir a la tienda
          </Link>

          <NavMobile />
        </main>
      
        <div className="order-empty-dekstop">
          <div className="order-empty-dekstop__container">
            <div className="order-empty-dekstop__container-order">
              

            </div>
            <div className="order-empty-dekstop__container__info">
              <figure>
                <img src={notorder} alt="NotOrders" />
              </figure>
              <h3>{text}</h3>
              <Link
              className="text" 
              to="/home">Ir a la tienda</Link>
            </div>
          </div>
        </div>
     
    </>
  );
};

export default OrderEmpty;
