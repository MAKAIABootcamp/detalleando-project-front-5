import React from "react";
import "./loginByPhone.scss";
import { useForm } from "react-hook-form";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const LoginByPhone = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  //Función que genera el recaptcha
  const generateRecaptcha = () => {
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptch-container",
        {
          size: "invisible",
          callback: () => {},
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  //Función que envía el código de verificación
  const sendSms = (number, recaptchaVerifier) => {
    signInWithPhoneNumber(auth, `+57${number}`, recaptchaVerifier)
      .then((response) => {
        window.confirmationResult = response;
        console.log(response);
        Swal.fire(
          "Excelente",
          `Te enviaremos un mensaje para confirmar a ${number}`,
          "success"
        );
      })
      .then(() => {
        navigate("/insertcode");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          "Ops!",
          `Ocurrió un error al realizar tu solicitud ${error.message}`,
          "error"
        );
      });
  };

  const onSubmit = (data) => {
    //genera el recaptcha
    generateRecaptcha(data.phone);
    const appVerifier = window.recaptchaVerifier;
    sendSms(data.phone, appVerifier);
  };

  return (
    <main className="main-login-Phone">
      <h5>Inicio de Sesión por número celular</h5>
      <form
        className="main-login-Phone__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="main-login-Phone__form-label">Número Celular</label>
        <input
          type="text"
          placeholder="Ingrese su número celular"
          className="main-login-Phone__form-input"
          {...register("phone", { required: true })}
        />
        <button type="submit" className="main-login-Phone__form-button">
          Enviar SMS
        </button>
      </form>
      <div id="recaptch-container"></div>
    </main>
  );
};

export default LoginByPhone;
