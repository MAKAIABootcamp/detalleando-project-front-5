import React, { useEffect, useState } from "react";
import "./profileEdit.scss";
import arrowBack from "/arrowback.svg";
import { useNavigate } from "react-router-dom";
import user from "/test.jfif";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authActions";
import NavDesktop from "../../components/nav-desktop/NavDesktop";
import camera from "/camera.svg"
const ProfileEdit = ({ isTypeSeller }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const prods = useSelector((store) => store.auth);
  // console.log(prods.userLogged)
  const date = prods.userLogged
  const handleLogout = () => {
    dispatch(logout());
  }

  return !isTypeSeller && (
    <>
      
        <main className="profileEdit">
          <div className="profileEdit-up">
            <img src={arrowBack} alt="ArrowBack" onClick={() => navigate(-1)} />
            <h2>Perfil</h2>
          </div>
          <div className="content-user">
            <figure className="photo-user">
              <img src={date.photoURL} alt="Photo" />
            </figure>
            <figure className="photo-camera">
              <img src={camera} alt="Camera" />
            </figure>
          </div>

          <section className="edit-section">

            
           <div className="edit-section-date">
          <label className="edit-section-date__label">
            <span>Tú nombre</span>
          </label>
          <input
            type="text"
            className="edit-section-date__input"
            defaultValue={date.displayName}
          />
        </div>

        {/* <div className="edit-section-date">
          <label className="edit-section-date__label">
            <span>Tú correo</span>
          </label>
          <input
            type="email"
            className="edit-section-date__input"
            placeholder="anna@gmail.com"
          />
        </div> */}
        

        <div className="edit-section-date">
          <label className="edit-section-date__label">
            <span>Tú fecha de nacimiento</span>
          </label>
          <input
            type="text"
            className="edit-section-date__input"
            defaultValue={date.birthday}
          />
        </div>
          

        <div className="edit-section-date">
          <label className="edit-section-date__label">
            <span>Tú teléfono</span>
          </label>
          <input
            type="text"
            className="edit-section-date__input"
            defaultValue={date.phone}
          />
        </div>
           

          </section>
          <div className="content-button">
            <button className="button-save">Guardar</button>
            <span className="close-sesion" onClick={handleLogout}>Cerrar sesión</span>
          </div>
        </main>
  


        <div className="profileEdit-desktop">
          <NavDesktop/>
          <div className="divpro">
          <section className="profileEdit-desktop__card">
            <h2>Información del perfil</h2>
            <figure className="profileEdit-desktop__card__figure">
              <img src={date.photoURL} alt="Photo" />
            </figure>
            <div className="profileEdit-desktop__card__info">
              <label>Tú nombre</label>
              <input type="text" defaultValue={date.displayName}/>
              <label>Tú teléfono</label>
              <input type="text"  defaultValue={date.phone}/>
              <label>Tú fecha de nacimiento</label>
              <input type="text" defaultValue={date.birthday}/>
            </div>
            <div className="profileEdit-desktop__card__button">
              <button>Guardar</button>
            </div>
          </section>
          <div className="profileEdit-desktop__cerrar">
            <span onClick={handleLogout}>Cerrar sesión</span>
          </div>
          </div>
         
        </div>
    
    </>
  );
};

export default ProfileEdit;
