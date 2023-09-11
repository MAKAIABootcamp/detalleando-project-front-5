import React from 'react'
import loginV from '/imagenRegistro.jpg'
import './loginVendedor.scss'
import { useForm } from 'react-hook-form';
import google from "/Google.svg";
import phone from "/phone.svg";
import mykitty from "/Mykitty1.svg";
const LoginVendedor = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
      console.log("datos del formulario", data);
    };
  return (
    <main className="loginVendedor">
      <figure className="leftV">
        <img src={loginV} alt="dekstop" />
      </figure>
      <section className="infoVe">
      <figure className="logoD">
          <img src={mykitty} alt="Logo" />
        </figure>
        <h2>Inicio de sesión como vendedor</h2>

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-div">
            <label className="form-label">
              <span>Nombre de usuario</span>
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
              <span>Contraseña</span>
            </label>
            <input
              type="password"
              className="form-input"
              name="password"
              {...register("password", { required: true })}
            />
          </div>

          <button type="submit" className="button-login">
            Iniciar sesión
          </button>
          <hr className="button-divider" />

          <div className="form-others">
            <img src={google} alt="Google" />
            <span>o</span>
            <img src={phone} alt="Phone" />
          </div>

          <span className="form-register">
            ¿No tienes una cuenta?
            <span> </span>
            
          </span>
        </form>
      </section>
    </main>
  )
}

export default LoginVendedor