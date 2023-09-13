import React from "react";
import "./registro.scss";
import { useForm } from "react-hook-form";
import imageDek from "/Fondologin.svg";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import fileUpload from "../../services/fileUpload";
import { createAnUser } from "../../redux/store/auth/authActions";
const Registro = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { error } = useSelector(store => store.auth);

  const onSubmit = async (data) => {
    try {
      const imageFile = data.photoURL[0];
      const avatar = await fileUpload(imageFile);
      const newUser = {
        ...data,
        photoURL: avatar,
        address: [],
        phone: "",
        payment: []
      }
      dispatch(createAnUser(newUser));
      Swal.fire(
        "Excelente!", 
        "Haz creado tu cuenta!", 
        "success"
      )
    } catch (error) {
      console.log(error);
      Swal.fire(
        "Oops!", 
        "Hubo un error en la creación de tu cuenta", 
        "error"
      )
    }

  };
  return (
    <main className="mainR">
      <figure className="left">
        <img src={imageDek} alt="dekstop" />
      </figure>
      <section className="registroS ">
        <h2>Registrate</h2>
        <form className="formRegistro" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-div">
            <label className="form-label">
              <span>Nombre completo</span>
            </label>
            <input
              type="name"
              className="form-input"
              name="name"
              {...register("name", { required: true })}
            />
          </div>

          <div className="form-div">
            <label className="form-label">
              <span>Correo</span>
            </label>
            <input
              type="email"
              className="form-input"
              name="email"
              {...register("email", { required: true })}
            />
          </div>

          <div className="form-div">
            <label className="form-label">
              <span>Contraseña</span>
            </label>
            <input
              type="password"
              className="form-input"
              name="password"
              {...register("password", { required: true })}
            />
          </div>

          <div className="form-div">
            <label className="form-label">
              <span>Número de celular</span>
            </label>
            <input
              type="phone"
              className="form-input"
              name="phone"
              {...register("phone", { required: true })}
            />
          </div>

          <div className="form-divFile">
            <label className="form-labelFile">
              <span>Foto de perfil</span>
            </label>
            <input
              type="file"
              className="form-inputFile"
              name="photoURL"
              {...register("photoURL", { required: true })}
            />
          </div>

          <button type="submit" className="button-login">
            Registrate
          </button>
          <hr className="button-divider" />
        </form>
      </section>
    </main>
  );
};

export default Registro;
