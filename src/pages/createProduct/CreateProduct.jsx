import React, { useEffect, useState } from "react";
import "./createproduct.scss";
import arrowBack from "/arrowback.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from '/logo.svg'
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import fileUpload from "../../services/fileUpload";
import { createProduct } from "../../redux/products/productsActions";
const CreateProduct = ({ isTypeSeller }) => {

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { userLogged } = useSelector(store => store.auth);
  const [categoriesShop, setCategoriesShop] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getCategories();
  },[])

  const getCategories = () => {
    if (userLogged.category === "Bouquets y arreglos") {
      setCategoriesShop([
        { name: "Ramos" },
        { name: "Ramos dulces" },
        { name: "Plantas de interior" },
        { name: "Terrarios" },
        { name: "Más flores" },
      ]);
    } else if (userLogged.category === "Pastelería y confetería") {
      setCategoriesShop([
        { name: "Tortas" },
        { name: "Chocolate" },
        { name: "Cupcakes" },
        { name: "Panadería" },
        { name: "Más dulces" },
      ]);
    } else if (userLogged.category === "Artesanías") {
      setCategoriesShop([
        { name: "Juguetes" },
        { name: "Arte" },
        { name: "Belleza" },
        { name: "Para la casa" },
        { name: "Para la cocina" },
        { name: "Más artesanias" },
      ]);
    } else if (userLogged.category === "Ropa y accesorios") {
      setCategoriesShop([
        { name: "Relojes" },
        { name: "Anillos" },
        { name: "Aretes" },
        { name: "Ropa para mujer" },
        { name: "Ropa para hombre" },
        { name: "Ropa para niño" },
        { name: "Más articulos" },
      ]);
    }
  };

  const onSubmit = async (data) => {
    const secondaryImages =[]
    try {
      const imageFile = data.mainImage[0];
      const image = await fileUpload(imageFile);
      const imageFileSecondary = data.secondaryImages[0];
      const imageSecondary = await fileUpload(imageFileSecondary);
      secondaryImages.push(imageSecondary)
      const newProduct = {
        ...data,
        mainImage: image, 
        secondaryImages,
        shopId: userLogged.id
      }
      dispatch(createProduct(newProduct));
      Swal.fire(
        "Excelente!",
        "Haz creado con exito el producto",
        "success"
      )
      navigate("/homeseller")
    } catch (error) {
      console.log(error);
      Swal.fire(
        "Oops!",
        "Hubo un error en la creación del producto",
        "error"
      )
    }
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
            name="mainImage"
            {...register("mainImage", { required: true })}
          />
        </div>

        <div className="create-new-product__form-divFile">
          <label className="create-new-product__form-labelFile">
            <span>Imagenes secundarias</span>
          </label>
          <input
            type="file"
            className="create-new-product__form-inputFile"
            name="secondaryImages"
            {...register("secondaryImages", { required: true })}
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
            name="category"
            {...register("category", { required: true })}
          >
            <option value="">Selecciona una categoría</option>
            {categoriesShop.map((categoria, index) => (
              <option key={index} value={categoria.name}>
                {categoria.name}
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
