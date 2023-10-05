import React, { useEffect, useState } from "react";
import arrowBack from "/arrowback.svg";
import { useNavigate } from "react-router";
import "./profile.scss";
import user from "/test.jfif";
import arrowB from "/arrow-right.svg";
import NavMobile from "../../components/nav-mobile/NavMobile";
import regalo from "/icons/gift.svg";
import calendar from "/icons/calendar-color.svg";
import language from "/icons/language.svg";
import chat from "/icons/chat-conversation.svg";
import heart from "/icons/heart-pink.svg";
import NavDesktop from "../../components/nav-desktop/NavDesktop";
import { useSelector } from "react-redux";

const Profile = ({ isTypeSeller }) => {
  const navigate = useNavigate();

  const prods = useSelector((store) => store.auth);
  const date = prods.userLogged


  const handleProfileEdit = () => {
    navigate("/profileEdit");
  };

  return !isTypeSeller && (
    <>
      
        <main className="profile">
          <div className="profile-up">
            <img src={arrowBack} alt="ArrowBack" onClick={() => navigate(-1)} />
            <h2>Perfil</h2>
          </div>

          <div className="profile-info">
            <figure className="photo">
              <img src={date.photoURL} alt="Photo" />
            </figure>

            <div className="date">
              <h3>{date.displayName}</h3>
              <span className="view" onClick={handleProfileEdit}>
                Ver perfil
              </span>
            </div>
          </div>

          <section className="profile-section">
            <hr className="button-divider" />
            <div className="order-section" onClick={() => navigate('/cart')}>
              <h3>Ordenes</h3>
              <figure className="arrow-right">
                <img src={arrowB} alt="Arrow right" />
              </figure>
            </div>

            <hr className="button-divider" />
            <div className="order-section">
              <h3>Mis eventos</h3>
              <figure className="arrow-right">
                <img src={arrowB} alt="Arrow right" />
              </figure>
            </div>

            <hr className="button-divider" />
            <div className="order-section">
              <h3>Idioma</h3>
              <figure className="arrow-right">
                <img src={arrowB} alt="Arrow right" />
              </figure>
            </div>
            <hr className="button-divider" />
          </section>

          <NavMobile />
        </main>
      


        <div className="main-profile-desktop">
        <NavDesktop/>
          <h2>Perfil</h2>
          <div>
            <div className="main-profile-desktop__info">
              <figure className="main-profile-desktop__info-photo">
                <img src={date.photoURL} alt="Photo" />
              </figure>
              <div className="main-profile-desktop__info-user">
                <h3>{date.displayName}</h3>
                <span onClick={handleProfileEdit}>Ver perfil</span>
              </div>
            </div>
          </div>
          <section className="main-profile-desktop__filter">
            <div className="main-profile-desktop__filter__card" onClick={() => navigate('/cart')}>
              <img src={regalo} />
              <span>Ordenes</span>
            </div>
            <div className="main-profile-desktop__filter__card">
              <img src={calendar} />
              <span>Mis eventos</span>
            </div>
            <div className="main-profile-desktop__filter__card">
              <img src={language} />
              <span>Idioma</span>
            </div>
            <div className="main-profile-desktop__filter__card" onClick={() => navigate('/chat')}>
              <img src={chat} />
              <span>Mensajes</span>
            </div>
            <div className="main-profile-desktop__filter__card" onClick={() => navigate('/favorites')}>
              <img src={heart} />
              <span>Favoritos</span>
            </div>
          </section>
        </div>
      
    </>
  );
};

export default Profile;
