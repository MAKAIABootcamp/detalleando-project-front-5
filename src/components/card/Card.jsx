import React from "react";
import test from "/test.jfif";
import trash from "/icons/trash-bin.svg";
import delivery from "/icons/delivery.svg";
import star from "/icons/star.svg";
import "./card.scss";
import Address from "../address/Address";
import "./../address/address.scss";
import { useNavigate } from "react-router";
const Card = () => {
  const navigate = useNavigate();
  const handleOrder = () => {
    navigate("/orderempty");
  };
  return (
    <div className="orders-cards-container">
      <div className="order-card">
        <img className="order-img" src={test} alt="" />
        <figure className="trash">
          <img src={trash} alt="Icon for like" />
        </figure>
        <div className="order-price">
          <div className="order-left">
          <h4>Cupcakes with cream cheese</h4>
            <div className="order-info">
              
              <img src={test} alt="Icon for logo" />
              <div>
                <h4>Shop name</h4>
                <p>Category</p>
              </div>
            </div>
            <Address />
          </div>
          <div className="order-right">
            <div className="order-stats">
              <span>$ 2.5</span>
              <span>En proceso</span>
            </div>
            <button className="order-button" onClick={handleOrder}>
              Ir a la orden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
