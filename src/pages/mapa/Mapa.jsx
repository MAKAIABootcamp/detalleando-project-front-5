import React from "react";
import "./mapa.scss";
import mapa from "/mapa.svg";
import { useSelector } from "react-redux";

const Mapa = ({ isTypeSeller }) => {
  const { userLogged } = useSelector((store) => store.auth);

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
          />
        </div>

        <form className="home-page-mapa-datos">
          <h2 className="destination">¿Para quién?</h2>
          <div className="home-page-mapa-datos-div">
            <label className="home-page-mapa-datos-div__label">
              <span>Nombre</span>
            </label>
            <input
              type="text"
              className="home-page-mapa-datos-div__input"
              placeholder="Escribe el nombre aquí"
            />
            <label className="home-page-mapa-datos-div__label">
              <span>Teléfono</span>
            </label>
            <input
              type="text"
              className="home-page-mapa-datos-div__input"
              placeholder="Escribe el teléfono aquí"
            />
          </div>
        </form>
        <div className="home-page-mapa-buttons">
          <span className="home-page-mapa-buttons__forme">Es para mí</span>
          <button className="home-page-mapa-buttons__save" type="submit">
            Guardar
          </button>
        </div>
      </main>
    )
  );
};

export default Mapa;
