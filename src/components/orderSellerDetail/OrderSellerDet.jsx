import React, { useState } from "react";
import "./orderSellerDet.scss";
import arrowBack from "/arrowback.svg";
import { useLocation, useNavigate } from "react-router-dom";
import Address from "../address/Address";
import Time from "../time/Time";
import test from "/test.jfif";
import NavMobile from "../nav-mobile/NavMobile";
import NavSeller from "../navSeller/NavSeller";
import NavSellerDekstop from "../navSellerDekstop/NavSellerDekstop";
import Logo from "/logo.svg";
const OrderSellerDet = () => {
  const navigate = useNavigate();
  //   const [selectedTable, setSelectedTable] = useState(null);
  //   console.log("selectedTable:", selectedTable);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedTable = queryParams.get("selectedTable");

  return (
    <>
      <main className="order-details-seller">
        <NavSeller />
        <div className="order-details-seller__text">
          <img src={arrowBack} alt="ArrowBack" onClick={() => navigate(-1)} />
          <h2>Detalles del orden</h2>
        </div>
        <div className="order-details-seller__det">
          <div className="order-details-seller__det-info">
            <img src={test} alt="" />
            <div className="info-text">
              <div>
                <h4>Cupcakes with cream cheese</h4>
              </div>
              <div>
                <span>x2</span>
                <span className="price">$14</span>
              </div>
            </div>
          </div>
          <div className="date">
            <Address />
            <Time />
          </div>
          <div className="order-details-seller__det-status">
            {selectedTable === "saleCourse" ? (
              <select>
                <option>Selecciona un estado</option>
                <option>Iniciado</option>
                <option>Preparando</option>
                <option>En camino</option>
                <option>Completado</option>
              </select>
            ) : selectedTable === "saleCompleted" ? (
              <h4 className="code">Completado</h4>
            ) : null}
          </div>

          <h4 className="code">
            Código de la transacción: jkjhfioahfklccnvjkhar
          </h4>
        </div>
      </main>

      <div className="order-details-seller-dekstop">
        <div className="sales-orders-dekstop__logo">
          <figure>
            <img src={Logo} alt="Logo" />
          </figure>
          <h1>Detalleando</h1>
        </div>
        <div className="content-div">
          <NavSellerDekstop />
          <div className="order-details-seller__det">
            <div className="order-details-seller__det-info">
              <img src={test} alt="" />
              <div className="info-text">
                <div>
                  <h4>Cupcakes with cream cheese</h4>
                </div>
                <div>
                  <span>x2</span>
                  <span className="price">$14</span>
                </div>
              </div>
            </div>
            <div className="date">
              <Address />
              <Time />
            </div>
            <div className="order-details-seller__det-status">
              {selectedTable === "saleCourse" ? (
                <select>
                  <option>Selecciona un estado</option>
                  <option>Iniciado</option>
                  <option>Preparando</option>
                  <option>En camino</option>
                  <option>Completado</option>
                </select>
              ) : selectedTable === "saleCompleted" ? (
                <h4 className="code">Completado</h4>
              ) : null}
            </div>

            <h4 className="code">
              Código de la transacción: jkjhfioahfklccnvjkhar
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSellerDet;
