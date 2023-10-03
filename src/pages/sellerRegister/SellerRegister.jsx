import React from "react";
import "./sellerRegister.scss";
import loginV from "/imagenRegistro.jpg";
import mykitty from "/Mykitty1.svg";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import fileUpload from "../../services/fileUpload";
import { createAnSellerUser } from "../../redux/auth/authActions";

const SellerRegister = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { error } = useSelector((store) => store.auth);

  const onSubmit = async (data) => {
    try {
      console.log(data)
        const imageFile = data.logo[0];
        const image = await fileUpload(imageFile);
        const newSeller ={
            ...data,
            logo: image,
            backgroundImage: "",
            description: "",
            isSeller: true,
            deliveryPrice: ""
        }
        if(data.password.length < 6){
            Swal.fire(
              "Oops!", 
              "La contraseña debe tener mínimo 6 caracteres", 
              "error"
              );
        }else{
            dispatch(createAnSellerUser(newSeller));
        Swal.fire(
            "Excelente!", 
            "Haz creado tu cuenta!", 
            "success"
          )
        }  
    } catch (error) {
      console.log(error);
      Swal.fire(
        "Oops!", 
      "Hubo un error en la creación de tu cuenta", 
      "error"
      );
    }
  };

  return (
    <main className="main__register-seller">
      <figure className="main__register-seller__logo">
        <img src={loginV} alt="desktop" />
      </figure>
      <section className="main__register-seller__card">
        <h2>Registro para vendedor</h2>
        <form
          className="main__register-seller__card__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="main__register-seller__card__form__label">
            Email
          </label>
          <input
            type="text"
            className="main__register-seller__card__form__input"
            {...register("email", { required: true })}
          />
          <label className="main__register-seller__card__form__label">
            Contraseña
          </label>
          <input
            type="password"
            className="main__register-seller__card__form__input"
            {...register("password", { required: true })}
          />
          <label className="main__register-seller__card__form__label">
            Nombre de la tienda
          </label>
          <input
            type="text"
            className="main__register-seller__card__form__input"
            {...register("storeName", { required: true })}
          />
          <label className="main__register-seller__card__form__label">
            Logo
          </label>
          <input
            type="file"
            className="main__register-seller__card__form__input"
            {...register("logo", { required: true })}
          />
          <label className="main__register-seller__card__form__label">
            Dirección
          </label>
          <input
            type="text"
            className="main__register-seller__card__form__input"
            {...register("address", { required: true })}
          />
          <label className="main__register-seller__card__form__label">
            Categorías
          </label>
          <select
            className="main__register-seller__card__form__input"
            name="select-categor"
            {...register("category", { required: true })}
          >
            <option>Selecciona una categoría</option>
            <option value="Pastelería y confitería">Pastelería y confitería</option>
            <option value="Ropa y accesorios">Ropa y accesorios</option>
            <option value="Bouquets y arreglos">Bouquets y arreglos</option>
            <option value="Artesanías">Artesanías</option>
          </select>
          <button
            className="main__register-seller__card__form__button"
            type="submit"
          >
            Regístrate
          </button>
        </form>
      </section>
    </main>
  );
};

export default SellerRegister;
