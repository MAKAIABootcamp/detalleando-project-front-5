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

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { error } = useSelector((store) => store.auth);

  const onSubmit = async (data) => {
    dispatch(loginWithEmailAndPassword(data));
  };

  if (error) {
    Swal.fire("Oops!", "Ha occurrido un error en el inicio de sesión", "error");
  }
  if (error === false) {
    Swal.fire("Excelente", "Haz iniciado sesión correctamente", "success").then(
      () => navigate("/home")
    );
  }

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
