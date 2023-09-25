import React, { useState } from "react";
import "./orderlist.scss";
import arrowBack from "/arrowback.svg";
import { useNavigate } from "react-router";
import Card from "../card/Card";
import OrderEmpty from "../orderEmpty/OrderEmpty";
const OrderList = () => {
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
  return (
    <section className="orders-container">
      <div className="infoup">
        <img src={arrowBack} alt="ArrowBack" onClick={() => navigate(-1)} />
        <h2>Mis ordenes</h2>
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
    </section>
  );
};

export default OrderList;
