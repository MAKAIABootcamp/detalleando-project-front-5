import React, { useEffect, useState } from "react";
import "./profileEdit.scss";
import arrowBack from "/arrowback.svg";
import { useNavigate } from "react-router-dom";
import user from "/test.jfif";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authActions";

const ProfileEdit = ({ isTypeSeller }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [widthMovile, setWidthMovile] = useState();

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      setWidthMovile(true);
    } else {
      setWidthMovile(false);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  }

  return !isTypeSeller && (
    <>
      {widthMovile ? (
        <main className="profileEdit">
          <div className="profileEdit-up">
            <img src={arrowBack} alt="ArrowBack" onClick={() => navigate(-1)} />
            <h2>Perfil</h2>
          </div>
          <div className="content-user">
            <figure className="photo-user">
              <img src={user} alt="Photo" />
            </figure>
          </div>

          <section className="edit-section">

            
           <div className="edit-section-date">
          <label className="edit-section-date__label">
            <span>Tú nombre</span>
          </label>
          <input
            type="text"
            class="edit-section-date__input"
            placeholder="Anna"
          />
        </div>

        <div className="edit-section-date">
          <label className="edit-section-date__label">
            <span>Tú correo</span>
          </label>
          <input
            type="email"
            class="edit-section-date__input"
            placeholder="anna@gmail.com"
          />
        </div>
        

        <div className="edit-section-date">
          <label className="edit-section-date__label">
            <span>Tú fecha de nacimiento</span>
          </label>
          <input
            type="text"
            class="edit-section-date__input"
            placeholder="22/09/23"
          />
        </div>
          

        <div className="edit-section-date">
          <label className="edit-section-date__label">
            <span>Tú teléfono</span>
          </label>
          <input
            type="text"
            class="edit-section-date__input"
            placeholder="3011234567"
          />
        </div>
           

          </section>
          <div className="content-button">
            <button className="button-save">Guardar</button>
            <span className="close-sesion" onClick={handleLogout}>Cerrar sesión</span>
          </div>
        </main>
      ) : (
        <main className="profileEdit-desktop">
          <section className="profileEdit-desktop__card">
            <h2>Información del perfil</h2>
            <figure className="profileEdit-desktop__card__figure">
              <img src={user} alt="Photo" />
            </figure>
            <div className="profileEdit-desktop__card__info">
              <label>Tú nombre</label>
              <input type="text" />
              <label>Tú correo</label>
              <input type="text" />
              <label>Tú teléfono</label>
              <input type="text" />
              <label>Tú fecha de nacimiento</label>
              <input type="text" />
            </div>
            <div className="profileEdit-desktop__card__button">
              <button>Guardar</button>
            </div>
          </section>
          <div className="profileEdit-desktop__cerrar">
            <span onClick={handleLogout}>Cerrar sesión</span>
          </div>
        </main>
      )}
    </>
  );
};

export default ProfileEdit;
