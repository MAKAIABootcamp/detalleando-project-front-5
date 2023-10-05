import React from "react";
import test from "/test.jfif";
import trash from "/icons/trash-bin.svg";
import pencil from "/icons/pencil.svg";
import "./cardSeller.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductFronCollection } from "../../redux/products/productsActions";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const CardSeller = () => {

  const { products } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteProduct = (id, index) => {
    // console.log(index)
    // console.log(id)
    dispatch(deleteProductFronCollection(id, index));
    Swal.fire(
      "Excelente!",
      "El producto fue eliminado con exito",
      "success"
    )
    .then(() => navigate("/homeseller"))
  }

  return (
    <>
      {products?.map((product, index) => (
        <div className="seller-cards-container" key={product?.id}>
          <div className="seller-cards-container__up">
            <div className="seller-cards-container__up-left">
              <img className="seller-img" src={product?.mainImage} alt="" />
              <figure className="trash" onClick={() => handleDeleteProduct(product?.id, index)}>
                <img src={trash} alt="Icon trash" />
              </figure>
              <figure className="pencil">
                <img src={pencil} alt="Icon pencil" onClick={() => navigate(`/editProduct/${product.id}`)}/>
              </figure>
            </div>
            <figure className="seller-right-img">
              {product?.secondaryImages.map((image, index) => (
                <img
                  className="seller-imgs"
                  src={image}
                  alt="Imagenes adicionales"
                  key={index}
                />
              ))}
            </figure>
          </div>
          <div className="seller-down">
            <div className="seller-left">
              <h4>{product?.name}</h4>
              <br />
              <h4>Descripción del producto:</h4>
              <p className="seller-description">
                {product?.description}
              </p>
            </div>
            <div className="seller-right">
              <h4>Categorías</h4>
              <span>{product?.category}</span>
              <span>$ {product?.price}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardSeller;
