import React, { useState } from "react";
import "./orderSellerDet.scss";
import arrowBack from "/arrowback.svg";
import { useNavigate, useParams } from "react-router-dom";
import NavSeller from "../navSeller/NavSeller";
import NavSellerDekstop from "../navSellerDekstop/NavSellerDekstop";
import Logo from "/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import ProductOrder from "../productOrder/ProductOrder";
import { updateOrderFromCollection } from "../../redux/order/orderActions";
import Swal from "sweetalert2";
const OrderSellerDet = () => {
  const navigate = useNavigate();
  const { idOrder } = useParams();
  const { orders } = useSelector((store) => store.order);
  const selectedOrder = orders?.filter((order) => order.id == idOrder);
  const idProductsOrder = selectedOrder[0]?.products;
  const [stateOrder, setStateOrder] = useState(selectedOrder[0]?.state);
  const dispatch = useDispatch();

  const handleSelectedState = (event) => {
    setStateOrder(event.target.value);
  };

  const onChangeStatus = () => {
    const info = {
      state: stateOrder,
    };
    dispatch(updateOrderFromCollection(idOrder, info));
    Swal.fire(
      "Excelente!", 
      "Haz cambiado el estado de la orden con exito!", 
      "success"
      );
    navigate(-1);
  };

  return (
    <>
      <main className="order-details-seller">
        <div className="order-details-seller__logo">
          <figure>
            <img src={Logo} alt="Logo" />
          </figure>
          <h1>Detalleando</h1>
        </div>
        <div className="order-details-seller__navmobile">
          <NavSeller />
        </div>

        <div className="order-details-seller__text">
          <img src={arrowBack} alt="ArrowBack" onClick={() => navigate(-1)} />
          <h2>Detalles de la orden</h2>
        </div>

        <div className="order-details-seller__div">
          <div className="order-details-seller__navdekstop">
            <NavSellerDekstop />
          </div>

          <div className="order-details-seller__det">
            <div className="order-details-seller__det-info">
              {idProductsOrder?.map((product) => (
                <ProductOrder idProduct={product} key={product?.productId} />
              ))}
            </div>
            <div className="date">
              <div>
                <p>Entregar a:</p>
                <span>
                  {selectedOrder[0]?.sendTo?.direction},{" "}
                  {selectedOrder[0]?.sendTo?.name}, +57
                  {selectedOrder[0]?.sendTo?.phone}
                </span>
              </div>
              <div>
                <p>Tiempo de entrega:</p>
                <span>22.12.23 {selectedOrder[0]?.sendTo?.time}:00</span>
              </div>
            </div>
            <div className="order-details-seller__det-status">
              {selectedOrder[0]?.state !== "completado" ? (
                <div className="change__status">
                  <select value={stateOrder} onChange={handleSelectedState}>
                    <option>Selecciona un estado</option>
                    <option value={"inicializado"}>Inicializado</option>
                    <option value={"preparando"}>Preparando</option>
                    <option value={"en camino"}>En camino</option>
                    <option value={"completado"}>Completado</option>
                  </select>
                  <button
                    className="change__status__button"
                    onClick={onChangeStatus}
                  >
                    Guardar
                  </button>
                </div>
              ) : selectedOrder[0]?.state == "completado" ? (
                <h4 className="code">Completado</h4>
              ) : null}
            </div>

            <h4 className="code">
              Código de la transacción: {selectedOrder[0]?.paymentRef}
            </h4>
          </div>
        </div>
      </main>
    </>
  );
};

export default OrderSellerDet;
