import React from "react";
import NavSeller from "../../components/navSeller/NavSeller";
import "./homeSeller.scss";
import CardSeller from "../../components/cardSeller/CardSeller";
import { useNavigate } from "react-router-dom";

const HomeSeller = ({ isTypeSeller }) => {
  const navigate = useNavigate();
  const handleNewProduct = () => {
    navigate("/createproduct");
  };
  return (
    isTypeSeller ? (
      <>
        <NavSeller />
        <main>
          <CardSeller />
          <CardSeller />
          <CardSeller />
          <CardSeller />
          <CardSeller />
          <div className="button-homeseller">
            <button
              className="button-homeseller-home"
              onClick={handleNewProduct}
            >
              + Crear nuevo producto
            </button>
          </div>
        </main>
      </>
    ) : (
      navigate("/")
    )
  );
};

export default HomeSeller;
