import React from "react";
import arrowBack from "/arrowback.svg";
import { useNavigate } from "react-router";
import "./profile.scss";
import user from "/test.jfif";
import arrowB from "/arrow-right.svg";
import NavMobile from "../../components/nav-mobile/NavMobile";
const Profile = () => {
  const navigate = useNavigate();
  const handleProfileEdit = () => {
    navigate("/profileEdit");
  };
  return (
    <main className="profile">
      <div className="profile-up">
        <img src={arrowBack} alt="ArrowBack" onClick={() => navigate(-1)} />
        <h2>Perfil</h2>
      </div>

      <div className="profile-info">
        <figure className="photo">
          <img src={user} alt="Photo" />
        </figure>

        <div className="date">
          <h3>Anna</h3>
          <span
          className="view"
          onClick={handleProfileEdit}
          >Ver perfil</span>
        </div>
      </div>

      <section className="profile-section">
        <hr className="button-divider" />
        <div className="order-section">
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
          <h3>Español</h3>
          <figure className="arrow-right">
            <img src={arrowB} alt="Arrow right" />
          </figure>
        </div>
        <hr className="button-divider" />
      </section>

      <NavMobile/>
    </main>
  );
};

export default Profile;
