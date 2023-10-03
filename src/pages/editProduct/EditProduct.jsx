import React, { useState } from "react";
import "./editProduct.scss";
import arrowback from "/arrowback.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import editImage from "/icons/pencil.svg";
import fileUpload from "../../services/fileUpload";
import { updateProductFromCollection } from "../../redux/products/productsActions";

const EditProduct = ({ isTypeSeller }) => {
  const { products } = useSelector((store) => store.products);
  const { idProduct } = useParams();
  const filter = products.filter((item) => item.id == idProduct);
  const productSelected = filter[0];
  const navigate = useNavigate();
  const [edit, setEdit] = useState({});
  const [valueEdit, setValueEdit] = useState({...productSelected});
  const dispatch = useDispatch();
  console.log(productSelected);

  const handleEdit = (event) => {
    setEdit({
      ...edit,
      [event.target.name]: true,
    });
  };

  const handleEditProduct = async (event) => {

    // console.log(event.target.name);
    // console.log(value);

    if(event.target.name == "mainImage"){
      const { mainImage } = valueEdit;
      const image = await fileUpload(mainImage);
      const imageMain = {
        mainImage:image
      };
      dispatch(updateProductFromCollection(productSelected.id, imageMain))
    }
    else{
      dispatch(updateProductFromCollection(productSelected.id, valueEdit));
    }
    setEdit({
      ...edit,
      [event.target.name]: false,
    });

  };

  const onChangeEdit = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value)
    if (event.target.name == "mainImage") {
      const selectedFile = event.target.files[0];
      setValueEdit({
        [e.target.name]: selectedFile,
      });
    } else {
      setValueEdit({
        [event.target.name]: event.target.value,
      });
    }
  };

  return isTypeSeller ? (
    <div className="container__edit-product">
      <figure
        onClick={() => navigate(-1)}
        className="container__edit-product-return"
      >
        <img src={arrowback} alt="atras" />
      </figure>
      <section className="container__edit-product__info">
        <h2 className="container__edit-product__info-title">
          Información del producto
        </h2>
        <div className="container__edit-product__container">
          <div className="container__edit-product__container__card">
            <h4>Logo</h4>
            {edit.mainImage ? (
              <>
                <input 
                type="file" 
                onChange={onChangeEdit} 
                name="mainImage" />
                <button
                  className="container__edit-product__container__card-button"
                  name="mainImage"
                  onClick={handleEditProduct}
                >
                  Guardar
                </button>
              </>
            ) : (
              <div className="container__editar">
                <figure className="container__edit-product__container__card__figure">
                  <img src={productSelected?.mainImage} alt="logoProducto" />
                </figure>
                <figure
                  className="iconedit"
                  name="mainImage"
                  onClick={handleEdit}
                >
                  <img src={editImage} alt="mainImage" name="mainImage" />
                </figure>
              </div>
            )}
          </div>
          <div className="container__edit-product__container__card">
            <h4>Nombre</h4>
            {edit.name ? (
              <>
                <input
                  type="text"
                  className="container__edit-product__container__card-input"
                  name="name"
                  onChange={onChangeEdit}
                  value={ valueEdit.name }
                />
                <button
                  className="container__edit-product__container__card-button"
                  name="name"
                  onClick={handleEditProduct}
                >
                  Guardar
                </button>
              </>
            ) : (
              <div className="container__editar">
                <span>{productSelected?.name}</span>
                <figure className="iconedit" name="name" onClick={handleEdit}>
                  <img src={editImage} alt="name" name="name" />
                </figure>
              </div>
            )}
          </div>
          <div className="container__edit-product__container__card">
            <h4>Precio</h4>
            {edit.price ? (
              <>
                <input
                  type="text"
                  className="container__edit-product__container__card-input"
                  name="price"
                  onChange={onChangeEdit}
                  value={ valueEdit.price }
                />
                <button
                  className="container__edit-product__container__card-button"
                  onClick={handleEditProduct}
                  name="price"
                >
                  Guardar
                </button>
              </>
            ) : (
              <div className="container__editar">
                <span>${productSelected?.price}</span>
                <figure className="iconedit" name="price" onClick={handleEdit}>
                  <img src={editImage} alt="price" name="price" />
                </figure>
              </div>
            )}
          </div>
          <div className="container__edit-product__container__card">
            <h4>Descripción</h4>
            {edit.description ? (
              <>
                <input
                  type="text"
                  className="container__edit-product__container__card-input"
                  name="description"
                  onChange={onChangeEdit}
                  value={ valueEdit.description }
                />
                <button
                  className="container__edit-product__container__card-button"
                  onClick={handleEditProduct}
                  name="description"
                >
                  Guardar
                </button>
              </>
            ) : (
              <div>
                <p>{productSelected?.description}</p>
                <figure
                  className="iconedit"
                  name="description"
                  onClick={handleEdit}
                >
                  <img src={editImage} alt="description" name="description" />
                </figure>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  ) : (
    navigate("/")
  );
};

export default EditProduct;
