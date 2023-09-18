import React from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import google from "/Google.svg";
import phone from "/phone.svg";
import imageDek from "/Fondologin.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  loginWithEmailAndPassword,
  loginWithGoogle,
} from "../../redux/auth/authActions";
import mykitty from "/Mykitty1.svg";
import Swal from "sweetalert2";
import useSessionStorage from "../../hooks/useSessionStorege";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { error } = useSelector((store) => store.auth);
  // const key = 'user';
  // const { saveInfo } = useSessionStorage();

  const onSubmit = async (data) => {
    dispatch(loginWithEmailAndPassword(data));
    // saveInfo(key, data);
  };

  const phoneAuthentication = () => {
    navigate("/phoneAuthentication");
  };

  const googleAuthentication = () => {
    dispatch(loginWithGoogle());
  };

  return (
    <main className="login">
      <figure className="leftL">
        <img src={imageDek} alt="dekstop" />
      </figure>
      <section className="info">
        <figure className="logoD">
          <img src={mykitty} alt="Logo" />
        </figure>
        <h2>Inicio de sesión</h2>

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
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

          <button type="submit" className="button-login">
            Iniciar sesión
          </button>
          <hr className="button-divider" />

          <div className="form-others">
            <img src={google} alt="Google" onClick={googleAuthentication} />
            <span>o</span>
            <img src={phone} alt="Phone" onClick={phoneAuthentication} />
          </div>

          <span className="form-register">
            ¿No tienes una cuenta?
            <span> </span>
            <Link to="/registro" className="text">
              Registrate
            </Link>
          </span>
          <span className="form-register">
            ¿Eres vendedor?
            <span> </span>
            <Link to="/loginvendedor" className="text">
              Inicia sesión aquí
            </Link>
          </span>
        </form>
      </section>
    </main>
  );
};

export default Login;
