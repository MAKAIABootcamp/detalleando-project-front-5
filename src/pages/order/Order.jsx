import React, { useEffect, useState } from "react";
import arrowBack from "/arrowback.svg";
import Card from "../../components/card/Card";
import NavMobile from "../../components/nav-mobile/NavMobile";
import { useNavigate } from "react-router";
import OrderList from "../../components/orderList/OrderList";
import NavDesktop from "../../components/nav-desktop/NavDesktop";
import "./order.scss";
import OrderEmpty from "../../components/orderEmpty/OrderEmpty";
const Order = ({ isTypeSeller }) => {
  const navigate = useNavigate();
  const [clikedActual, setClikedActual] = useState(true);
  const [clikedHistorial, setClikedHistorial] = useState(false);

  const handleClick = () => {
    if (clikedActual) {
      setClikedActual(false);
      setClikedHistorial(true);
    } else if (clikedHistorial) {
      setClikedActual(true);
      setClikedHistorial(false);
    }
  };

  return !isTypeSeller && (
    <>
      
        <main className="orders-infor">
        <div className="infoup">
        <img src={arrowBack} alt="ArrowBack" onClick={() => navigate(-1)} />
        <h2>Mis órdenes</h2>
      </div>
      <div className="historial">
        <div className="status">
          <span onClick={handleClick} className={clikedActual ? "chosen" : ""}>
            Actual
          </span>
          <span
            onClick={handleClick}
            className={clikedHistorial ? "chosen" : ""}
          >
            Historial
          </span>
        </div>
        <hr className="button-divider" />

        {
          clikedActual &&
          <Card/>
        }
        {
          clikedHistorial &&
          <OrderEmpty/>
        }
      </div>
          <NavMobile />
        </main>
     


        <div className="main-order-dekstop">
          <NavDesktop/>
          <h2>Mis órdenes</h2>
      <div className="historial">
        <div className="status">
          <span onClick={handleClick} className={clikedActual ? "chosen" : ""}>
            Actual
          </span>
          <span
            onClick={handleClick}
            className={clikedHistorial ? "chosen" : ""}
          >
            Historial
          </span>
        </div>
        <hr className="button-divider" />

        {
          clikedActual &&
          <Card/>
        }
        {
          clikedHistorial &&
          
          <OrderEmpty/>
        }
      </div>
          
           
        </div>
      
    </>
  );
};

export default Order;
