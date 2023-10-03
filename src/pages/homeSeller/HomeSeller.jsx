import React, { useEffect, useState } from "react";
import NavSeller from "../../components/navSeller/NavSeller";
import "./homeSeller.scss";
import CardSeller from "../../components/cardSeller/CardSeller";
import { useNavigate } from "react-router-dom";
import Logo from "/logo.svg";
import NavSellerDekstop from "../../components/navSellerDekstop/NavSellerDekstop";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductFronCollection, getShopProductFromCollection } from "../../redux/products/productsActions";
import Swal from "sweetalert2";
const HomeSeller = ({ isTypeSeller }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userLogged } = useSelector(store => store.auth)

  useEffect(() => {
    dispatch(getShopProductFromCollection(userLogged.id))
  },[dispatch]);
  // console.log(userLogged);
  // console.log(products);

  // const handleDeleteProduct = (id, index) => {
  //   console.log(index)
  //   console.log(id)
  //   dispatch(deleteProductFronCollection(id, index));
  //   Swal.fire(
  //     "Excelente!",
  //     "El producto fue eliminado con exito",
  //     "success"
  //   )
  // }
  
  const handleNewProduct = () => {
    navigate("/createproduct");
  };
  return isTypeSeller ? (
    <>
      <main className="home-seller-mobile">
        <NavSeller />
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
          </div>
        </div>
      </div>
    </>
  ) : (
    navigate("/")
  );
};

export default HomeSeller;
