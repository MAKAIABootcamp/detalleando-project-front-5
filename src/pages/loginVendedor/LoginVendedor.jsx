import React from "react";
import loginV from "/imagenRegistro.jpg";
import "./loginVendedor.scss";
import { useForm } from "react-hook-form";
import mykitty from "/Mykitty1.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSellerWithEmailAndPassword } from "../../redux/auth/authActions";
import Swal from "sweetalert2";
import useSessionStorage from "../../hooks/useSessionStorege";
const LoginVendedor = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { error } = useSelector(store => store.auth);
  const key = 'user';
  const { saveInfo } = useSessionStorage(key);

  const onSubmit = async (data) => {
    dispatch(loginSellerWithEmailAndPassword(data));
    saveInfo(key, data);
  };

  if (error) {
    Swal.fire(
      "Oops!", 
      "Ha occurrido un error en el inicio de sesión", 
      "error");
  }
  if (error === false) {
    Swal.fire(
      "Excelente", 
      "Haz iniciado sesión correctamente", 
      "success").then(
      () => navigate("/homeseller")
    );
  }

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
              <span>Email</span>
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

          <button type="submit" className="button-login">
            Iniciar sesión
          </button>
          <hr className="button-divider" />
          <span className="form-register">
            ¿No tienes una cuenta?
            <br />
            <Link to="/sellerRegister" className="text">Registrate</Link>
          </span>
        </form>
      </section>
    </main>
  );
};

export default LoginVendedor;
