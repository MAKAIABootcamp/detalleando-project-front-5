import React from "react";
import "./registro.scss";
import { useForm } from "react-hook-form";
import imageDek from "/Fondologin.svg";
const Registro = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log("datos del formulario", data);
  };
  return (
    <main className="main">
      <div className="left">
        <img src={imageDek} alt="dekstop" />
      </div>
      <section className="registro ">
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
