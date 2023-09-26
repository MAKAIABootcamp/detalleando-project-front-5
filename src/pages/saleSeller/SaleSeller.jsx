import React, { useEffect, useState } from "react";
import "./saleSeller.scss";
import NavSeller from "../../components/navSeller/NavSeller";
import SaleCourse from "../../components/saleCourse/SaleCourse";
import SaleCompleted from "../../components/saleCompleted/SaleCompleted";
import { useNavigate } from "react-router-dom";
import Logo from "/logo.svg";
import NavSellerDekstop from "../../components/navSellerDekstop/NavSellerDekstop";
const SaleSeller = ({ isTypeSeller }) => {
  const navigate = useNavigate();

  const [selectedTable, setSelectedTable] = useState(null);

  const handleOrderDetSeller = (table) => {
    setSelectedTable(table);
    navigate(`/OrderDetailSeller?selectedTable=${table}`);// Navega a la página de detalles de la orden del vendedor con el valor de 'selectedTable' en la URL
  };
  return (
    isTypeSeller && (
      <>
          <main className="sale-order-mobile">
            <NavSeller />
            <section className="sales-orders-details">
              <div className="sale-seller">
                <h3>Ventas en curso</h3>
                <SaleCourse handleOrderDetSeller={handleOrderDetSeller} />
              </div>

              <div className="sale-completed">
                <h3>Ventas completadas</h3>
                <SaleCompleted handleOrderDetSeller={handleOrderDetSeller}/>
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
                    <SaleCourse handleOrderDetSeller={handleOrderDetSeller}/>
                  </div>
                  <div className="sale-completed-dekstop">
                    <h3>Ventas completadas</h3>
                    <SaleCompleted handleOrderDetSeller={handleOrderDetSeller}/>
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
