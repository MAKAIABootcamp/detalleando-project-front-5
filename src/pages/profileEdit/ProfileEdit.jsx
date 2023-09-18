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
    console.log('hice click')
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
            <div className="data">
              <div className="text">
                <span>Tú nombre</span>
                <h3>Anna</h3>
              </div>
            </div>
            <hr className="button-divider" />

            <div className="data">
              <div className="text">
                <span>Tú correo</span>
                <h3>ann@gmail.com</h3>
              </div>
            </div>
            <hr className="button-divider" />

            <div className="data">
              <div className="text">
                <span>Tú fecha de nacimiento</span>
                <h3>22.12.1999</h3>
              </div>
            </div>
            <hr className="button-divider" />
            <div className="data">
              <div className="text">
                <span>Tú teléfono</span>
                <h3>+57 3102706787</h3>
              </div>
            </div>
            <hr className="button-divider" />
          </section>
          <div className="content-button">
            <button className="button-save">Guardar</button>
            <span className="close-sesion" onClick={handleLogout}>Cerrar sesión</span>
          </div>
        </main>
      ) : (
        <main className="profileEdit-desktop">
          <section className="profileEdit-desktop__card">
            <h2>Información del Perfil</h2>
            <figure className="profileEdit-desktop__card__figure">
              <img src={user} alt="Photo" />
            </figure>
            <div className="profileEdit-desktop__card__info">
              <label>Tu nombre</label>
              <input type="text" />
              <label>Tu correo</label>
              <input type="text" />
              <label>Tu teléfono</label>
              <input type="text" />
              <label>Tu fecha de nacimiento</label>
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
