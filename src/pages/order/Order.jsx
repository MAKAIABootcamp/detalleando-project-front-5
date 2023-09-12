import React, { useEffect, useState } from "react";
import arrowBack from "/arrowback.svg";
import Card from "../../components/card/Card";
import NavMobile from "../../components/nav-mobile/NavMobile";
import { useNavigate } from "react-router";
import OrderList from "../../components/orderList/OrderList";
import NavDesktop from "../../components/nav-desktop/NavDesktop";
import "./order.scss";
const Order = () => {
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
        <main className="orders-infor">
          <OrderList />
          <Card />
          <NavMobile />
        </main>
      ) : (
        <main className="main-order-dekstop">
          <h2>Mis ordenes</h2>
          <div className="main-order-historial">
          <OrderList />
          <Card />
          </div>
          
        </main>
      )}
    </>
  );
};

export default Order;
