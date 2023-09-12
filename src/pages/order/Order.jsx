import React from "react";
import arrowBack from "/arrowback.svg";
import Card from "../../components/card/Card";
import NavMobile from "../../components/nav-mobile/NavMobile";
import { useNavigate } from "react-router";
import OrderList from "../../components/orderList/OrderList";
const Order = () => {
    const navigate = useNavigate();
  return (
    <main className="orders-infor">
     
     <OrderList/>
      <Card/>
      <NavMobile/>
    </main>
  );
};

export default Order;
