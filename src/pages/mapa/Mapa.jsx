import React from "react";
import "./mapa.scss";
import mapa from "/mapa.svg";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { updateUserPayment } from "../../redux/auth/authActions";
import { setUserAddress } from "../../redux/auth/authReducer";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

const Mapa = ({ isTypeSeller }) => {
  const { userLogged } = useSelector((store) => store.auth);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const onSubmit = (data) => {
    Swal.fire({
      title: "Quieres añadir esta dirección?",
      showCancelButton: true,
      confirmButtonText: "Añadir",
    }).then((result) => {
      if (result.isConfirmed) {
        const newAddress = {
            direction: data.direction,
            name: data.name,
            phone: data.phone
          }
        if (userLogged.address?.length > 0) {
          
          const newAddressArray = [...userLogged.address, newAddress];
          dispatch(
            updateUserPayment(userLogged.id, { address: newAddressArray })
          );
          dispatch(setUserAddress(newAddressArray));
        } else if (!userLogged.address || !userLogged.address.length) {
          const newAddressArray = [newAddress];
          dispatch(
            updateUserPayment(userLogged.id, { address: newAddressArray })
          );
          dispatch(setUserAddress(newAddressArray));
        }
      }
      navigate(-1)
    });
  };

  return (
    !isTypeSeller && (
      <main className="home-page-mapa">
        <h2>¿A dónde llevaremos el pedido?</h2>
        <span>Especificar en el mapa</span>

        <figure className="home-page-mapa-img">
          <img src={mapa} alt="Mapa" />
        </figure>

        <div className="home-page-mapa-direccion">
          <label className="home-page-mapa-direccion__label">
            <span>O registrala manualmente</span>
          </label>
          <input
            type="text"
            className="home-page-mapa-direccion__input"
            placeholder="Escribe la dirección aquí "
            {...register("direction", { required: true })}
          />
        </div>

        <form className="home-page-mapa-datos" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="destination">¿Para quién?</h2>
          <div className="home-page-mapa-datos-div">
            <label className="home-page-mapa-datos-div__label">
              <span>Nombre</span>
            </label>
            <input
              type="text"
              className="home-page-mapa-datos-div__input"
              placeholder="Escribe el nombre aquí"
              {...register("name", { required: true })}
            />
            <label className="home-page-mapa-datos-div__label">
              <span>Teléfono</span>
            </label>
            <input
              type="text"
              className="home-page-mapa-datos-div__input"
              placeholder="Escribe el teléfono aquí"
              {...register("phone", { required: true })}
            />
          </div>
          <div className="home-page-mapa-buttons">
          <span className="home-page-mapa-buttons__forme">Es para mí</span>
          <button className="home-page-mapa-buttons__save" type="submit">
            Guardar
          </button>
        </div>
        </form>
        
      </main>
    )
  );
};

export default Mapa;
