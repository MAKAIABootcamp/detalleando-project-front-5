import React, { useEffect, useState } from "react";
import "./saleSeller.scss";
import NavSeller from "../../components/navSeller/NavSeller";
import SaleCourse from "../../components/saleCourse/SaleCourse";
import SaleCompleted from "../../components/saleCompleted/SaleCompleted";
import { useNavigate } from "react-router-dom";
import Logo from "/logo.svg";
import NavSellerDekstop from "../../components/navSellerDekstop/NavSellerDekstop";
import { fillOrdersFromCollection } from "../../redux/order/orderActions";
import { useDispatch, useSelector } from "react-redux";
const SaleSeller = ({ isTypeSeller }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [ selectedTable, setSelectedTable ] = useState(null);
  const { orders } = useSelector(store => store.order);
  const { userLogged } = useSelector(store => store.auth);
  const [ orderInProgress, setOrderInProgress ] = useState([]);
  const [ orderCompleted, setOrderCompleted ] = useState([]);

  useEffect(() => {
    dispatch(fillOrdersFromCollection());
    filterOrders();
  },[])

  const filterOrders = () => {
    const filterOrdersSeller = orders?.filter(order => order.shopId === userLogged.id);
    const filterOrderCompleted = filterOrdersSeller?.filter(order => order.state == "completado");
    const filterOrderInProgress = filterOrdersSeller?.filter(order => order.state !== "completado");
    setOrderCompleted(filterOrderCompleted);
    setOrderInProgress(filterOrderInProgress);
  }

  const handleOrderDetSeller = (table) => {
    // setSelectedTable(table);
    // // Navega a la página de detalles de la orden del vendedor con el valor de 'selectedTable' en la URL
    // navigate(`/OrderDetailSeller?selectedTable=${table}`);
  };
  return (
    isTypeSeller && (
      <>
          <main className="sale-order-mobile">
            <NavSeller />
            <section className="sales-orders-details">
              <div className="sale-seller">
                <h3>Ventas en curso</h3>
                <SaleCourse order={orderInProgress}/>
              </div>

              <div className="sale-completed">
                <h3>Ventas completadas</h3>
                <SaleCompleted order={orderCompleted} />
              </div>
            </section>
          </main>



          <div className="sales-orders-dekstop">
            <div className="sales-orders-dekstop__logo">
              <figure>
                <img src={Logo} alt="Logo" />
              </figure>
              <h1>Detalleando</h1>
            </div>
            <div className="sales-orders-dekstop__information">
              <NavSellerDekstop />
              <div className="sales-orders-dekstop__information-div">
                <section className="sales-orders-dekstop__information-section">
                  <div className="sale-seller-dekstop">
                    <h3>Ventas en curso</h3>
                    <SaleCourse order={orderInProgress} />
                  </div>
                  <div className="sale-completed-dekstop">
                    <h3>Ventas completadas</h3>
                    <SaleCompleted order={orderCompleted} />
                  </div>
                </section>
              </div>
            </div>
          </div>
      </>
    )
  );
};

export default SaleSeller;
