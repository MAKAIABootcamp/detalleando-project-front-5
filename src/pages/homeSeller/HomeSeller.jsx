import React, { useEffect, useState } from "react";
import NavSeller from "../../components/navSeller/NavSeller";
import "./homeSeller.scss";
import CardSeller from "../../components/cardSeller/CardSeller";
import { useNavigate } from "react-router-dom";
import Logo from "/logo.svg";
import NavSellerDekstop from "../../components/navSellerDekstop/NavSellerDekstop";
const HomeSeller = ({ isTypeSeller }) => {
  const navigate = useNavigate();
  const handleNewProduct = () => {
    navigate("/createproduct");
  };
  return isTypeSeller ? (
    <>
      <main className="home-seller-mobile">
        <NavSeller />
        <CardSeller />
        <CardSeller />
        <CardSeller />
        <CardSeller />
        <CardSeller />
        <div className="button-homeseller">
          <button className="button-homeseller-home" onClick={handleNewProduct}>
            + Crear nuevo producto
          </button>
        </div>
      </main>

      <div className="home-seller-dekstop">
        <div className="home-seller-dekstop__logo">
          <figure>
            <img src={Logo} alt="Logo" />
          </figure>
          <h1>Detalleando</h1>
        </div>
        <div className="home-seller-dekstop__information">
          <NavSellerDekstop />
          <div className="button-homeseller-dekstop">
            <button
              className="button-homeseller-dekstop-home"
              onClick={handleNewProduct}
            >
              +
            </button>
          </div>
          <div className="home-seller-dekstop__information-cards">
            <CardSeller />
            <CardSeller />
            <CardSeller />
            <CardSeller />
            <CardSeller />
          </div>
        </div>
      </div>
    </>
  ) : (
    navigate("/")
  );
};

export default HomeSeller;
