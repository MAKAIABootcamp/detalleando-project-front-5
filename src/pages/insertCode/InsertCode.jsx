import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginWithCode } from "../../redux/store/auth/authActions";
import './insertCode.scss'

const InsertCode = () => {
    
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const login = (data) => {
        dispatch(loginWithCode(data.code));
    }

  return (
    <main className="main-insert-code">
      <h3>Ingrese su código de verificación</h3>

      <form 
      className="main-insert-code__form"
      onSubmit={handleSubmit(login)}>
        <label className="main-insert-code__form-label">Código de verificación:</label>
        <input
          type="text"
          placeholder="Ingrese su código"
          className="main-insert-code__form-input"
          {...register("code")}
        />
        <button type="submit" className="main-insert-code__form-button">Confirmar código</button>
      </form>
    </main>
  );
};

export default InsertCode;
