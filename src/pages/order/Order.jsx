import React, { useEffect, useState } from "react";
import arrowBack from "/arrowback.svg";
import Card from "../../components/card/Card";
import NavMobile from "../../components/nav-mobile/NavMobile";
import { useNavigate } from "react-router";
import OrderList from "../../components/orderList/OrderList";
import NavDesktop from "../../components/nav-desktop/NavDesktop";
import "./order.scss";
import OrderEmpty from "../../components/orderEmpty/OrderEmpty";
import { useDispatch, useSelector } from "react-redux";
import OrderHistory from "../../components/orderHistory/OrderHistory";
import { fillOrdersFromCollection } from "../../redux/order/orderActions";
import CardProcess from "../../components/cardProcess/CardProcess";
const Order = ({ isTypeSeller }) => {
  const navigate = useNavigate();
  const [clikedActual, setClikedActual] = useState(true);
  const [clikedHistorial, setClikedHistorial] = useState(false);
  const { currentOrder, orderInProcess } = useSelector(store => store.order);
  const [orderHistory, setOrderHistory] = useState([])
  const { orders } = useSelector(store => store.order);
  const { userLogged } = useSelector(store => store.auth);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fillOrdersFromCollection())
    setOrderHistory(orders?.filter(order => order.userId == userLogged.id && order.state === "completado"))
}, [orders])

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
            En progreso
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
    // (currentOrder || orderInProcess? (currentOrder? <Card/> : <CardProcess/>) : <OrderEmpty text={'Todavía no tienes órdenes actuales'}/>)
        (currentOrder && orderInProcess?(<><Card/><CardProcess/></>):(currentOrder? <Card/> : orderInProcess?<CardProcess/>:<OrderEmpty text={'Todavía no tienes órdenes actuales'}/>))  
        }
        {
          clikedHistorial &&
          (orderHistory.length > 0 ? <OrderHistory/> : <OrderEmpty text={'Todavía no has completado ningún órden'}/>)
          
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
            En proceso
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
          (currentOrder && orderInProcess?(<><Card/><CardProcess/></>):(currentOrder? <Card/> : orderInProcess?<CardProcess/>:<OrderEmpty text={'Todavía no tienes órdenes actuales'}/>))  
        }
        {
          clikedHistorial &&
          
          (orderHistory && orderHistory.length > 0 ? <OrderHistory/> : <OrderEmpty text={'Todavía no has completado ningún órden'}/>)
        }
      </div>
          
           
        </div>
      
    </>
  );
};

export default Order;
