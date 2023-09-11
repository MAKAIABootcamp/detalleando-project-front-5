import React from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import google from "/Google.svg";
import phone from "/phone.svg";
import imageDek from "/Fondologin.svg";
import { useDispatch } from "react-redux";
import { loginWithGoogle } from "../../redux/store/auth/authActions";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log("datos del formulario", data);
  };

  const phoneAuthentication = () => {
    navigate('/phoneAuthentication');
  };

  const googleAuthentication = () => {
    dispatch(loginWithGoogle())
  }

  return (
    <main className="login">
      <div className="left">
        <img src={imageDek} alt="dekstop" />
      </div>
      <section className="info">
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
        </form>
      </section>
    </main>
  );
};

export default Login;
