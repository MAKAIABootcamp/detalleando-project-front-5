import React from "react";
import "./createproduct.scss";
import arrowBack from "/arrowback.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from '/logo.svg'
const CreateProduct = ({ isTypeSeller }) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const categorias = ["Categoría 1", "Categoría 2", "Categoría 3"];

  const onSubmit = async (data) => {
    console.log(data);
  };
  return isTypeSeller && (
    <main className="create-new-product">
      <div className="create-new-product__info hidden">
        <img src={arrowBack} alt="ArrowBack" onClick={() => navigate(-1)} />
        <h2>Crear nuevo producto</h2>
      </div>
      <div className="create-new-product__info-logo">
        <img src={logo} alt="Logo"  />
        <h2>Detalleando</h2>
      </div>
      <form
      
        className="create-new-product__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="create-new-product__form-div">
          <label className="create-new-product__form-label">
            <span>Nombre</span>
          </label>
          <input
            type="name"
            className="create-new-product__form-input"
            name="name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="create-new-product__form-divFile">
          <label className="create-new-product__form-labelFile">
            <span>Imagenes principales</span>
          </label>
          <input
            type="file"
            className="create-new-product__form-inputFile"
            name="photoPrin"
            {...register("photoPrin", { required: true })}
          />
        </div>

        <div className="create-new-product__form-divFile">
          <label className="create-new-product__form-labelFile">
            <span>Imagenes secundarias</span>
          </label>
          <input
            type="file"
            className="create-new-product__form-inputFile"
            name="photoSec"
            {...register("photoSec", { required: true })}
          />
        </div>

        <div className="create-new-product__form-div">
          <label className="create-new-product__form-label">
            <span>Precio por unidad</span>
          </label>
          <input
            type="text"
            className="create-new-product__form-input"
            name="price"
            {...register("price", { required: true })}
          />
        </div>

        <div className="create-new-product__form-div">
          <label className="create-new-product__form-label">
            <span>Categoría</span>
          </label>
          <select
            className="create-new-product__form-input"
            name="categoria"
            {...register("categoria", { required: true })}
          >
            <option value="">Selecciona una categoría</option>
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </div>

        <div className="create-new-product__form-div">
          <label className="create-new-product__form-label">
            <span>Descripción del producto</span>
          </label>
          <textarea
            className="create-new-product__form-input"
            name="description"
            {...register("description", { required: true })}
          />
        </div>

        <button type="submit" className="button-create">
          Guardar el producto
        </button>
      </form>
    </main>
  );
};

export default CreateProduct;
