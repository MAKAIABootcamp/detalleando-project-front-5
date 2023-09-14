import React, { useEffect, useState } from "react";

import Card from "../../components/card/Card";
import NavMobile from "../../components/nav-mobile/NavMobile";
import { useNavigate } from "react-router";
import notorder from "/not-orders.svg";
import "./orderEmpty.scss";
import { Link } from "react-router-dom";
import OrderList from "../orderList/OrderList";
const OrderEmpty = () => {
  const navigate = useNavigate();
  const [widthMovile, setWidthMovile] = useState();

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      setWidthMovile(true);
    } else {
      setWidthMovile(false);
    }
  };
  return (
    <>
      {widthMovile ? (
        <main className="order-empty">
          <OrderList />
          <h3>Todavía no tienes ordenes actuales</h3>

          <figure className="not-order">
            <img src={notorder} alt="NotOrders" />
          </figure>

          <Link to="/" className="texto">
            Ir a la tienda
          </Link>

          <NavMobile />
        </main>
      ) : (
        <main className="order-empty-dekstop">
          <h2>Mis ordenes</h2>
          <div className="order-empty-dekstop__container">
            <div className="order-empty-dekstop__container-order">
              <OrderList />
            </div>
            <div className="order-empty-dekstop__container__info">
              <figure>
                <img src={notorder} alt="NotOrders" />
              </figure>
              <h3>Todavía no tienes ordenes actuales</h3>
              <Link
              className="text" 
              to="/">Ir a la tienda</Link>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default OrderEmpty;
