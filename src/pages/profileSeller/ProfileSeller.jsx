import React, { useState } from "react";
import "./profileSeller.scss";
import NavSeller from "../../components/navSeller/NavSeller";
import editImage from "/icons/pencil.svg";
import logo from "/logo.svg";
import NavSellerDekstop from "../../components/navSellerDekstop/NavSellerDekstop";
import { useDispatch, useSelector } from "react-redux";
import { logout, updateSellerUser } from "../../redux/auth/authActions";
import fileUpload from "../../services/fileUpload";

const ProfileSeller = ({ isTypeSeller }) => {
  const dispatch = useDispatch();
  const { userLogged } = useSelector((store) => store.auth);
  const [edit, setEdit] = useState({});
  const [valueSeller, setValueSeller] = useState({ ...userLogged });

  const handleLogout = () => {
    dispatch(logout());
  };

  const editSellerUser = (event) => {
    // console.log(event.target?.name)
    setEdit({
      ...edit,
      [event.target?.name]: true,
    });
  };

  const handleEdit = async (event) => {
    // console.log(event.target.name);
    setEdit({
      ...edit,
      [event.target.name]: false,
    });
    // console.log(event.target.name)
    // console.log(valueSeller);
    if (event.target.name == "logo") {
      const { logo } = valueSeller;
      const imageFile = logo;
      const image = await fileUpload(imageFile);
      const value = {
        logo: image,
      };
      dispatch(updateSellerUser(userLogged.id, value));
    } else if (event.target.name == "backgroundImage") {
      const { backgroundImage } = valueSeller;
      const imageFile = backgroundImage;
      const image = await fileUpload(imageFile);
      const value = {
        backgroundImage: image,
      };
      dispatch(updateSellerUser(userLogged.id, value));
    } else {
      dispatch(updateSellerUser(userLogged.id, valueSeller));
    }
  };

  const onChangeEditName = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setValueSeller({
      [e.target.name]: e.target.value,
    });
  };

  return (
    isTypeSeller && (
      <>
        <main className="profile-seller-mobile">
          <NavSeller />
          <h3>Información de la tienda</h3>
          <section className="profile-seller-mobile-section">
            <div className="profile-seller-mobile-section-div">
              <div className="column">
                <h3>Logo</h3>
                {edit.logo ? (
                  <>
                    <input
                      type="file"
                      className="profile-seller-mobile-section-div__input"
                      onChange={onChangeEditName}
                      name="logo"
                    />
                    <button
                      className="profile-seller-mobile-section-div__input__button"
                      onClick={handleEdit}
                      name="logo"
                    >
                      Guardar
                    </button>
                  </>
                ) : (
                  <div className="profile-seller-mobile-section-div-edit">
                    <figure className="column-logo">
                      <img src={userLogged.logo} alt="Logo de la tienda" />
                    </figure>
                    <figure
                      className="iconedit"
                      name="logo"
                      onClick={editSellerUser}
                    >
                      <img src={editImage} alt="Lapiz" name="logo" />
                    </figure>
                  </div>
                )}
              </div>
            </div>

            <div className="profile-seller-mobile-section-div">
              <div className="column">
                <h3>Imagen del fondo</h3>
                {edit.backgroundImage ? (
                  <>
                    <input
                      type="file"
                      className="profile-seller-mobile-section-div__input"
                      onChange={onChangeEditName}
                      name="backgroundImage"
                    />
                    <button
                      className="profile-seller-mobile-section-div__input__button"
                      onClick={handleEdit}
                      name="backgroundImage"
                    >
                      Guardar
                    </button>
                  </>
                ) : (
                  <div className="profile-seller-mobile-section-div-edit">
                    <figure className="column-img">
                      <img
                        src={userLogged.backgroundImage}
                        alt="Logo de la tienda"
                      />
                    </figure>
                    <figure
                      className="iconedit"
                      name="backgroundImage"
                      onClick={editSellerUser}
                    >
                      <img src={editImage} alt="Lapiz" name="backgroundImage" />
                    </figure>
                  </div>
                )}
              </div>
            </div>

            <div className="profile-seller-mobile-section-div">
              <div className="column">
                <h3>Nombre de la tienda</h3>
                {edit.storeName ? (
                  <>
                    <input
                      type="text"
                      className="profile-seller-mobile-section-div__input"
                      value={valueSeller.storeName}
                      onChange={onChangeEditName}
                      name="storeName"
                    />
                    <button
                      className="profile-seller-mobile-section-div__input__button"
                      onClick={handleEdit}
                      name="storeName"
                    >
                      Guardar
                    </button>
                  </>
                ) : (
                  <div className="profile-seller-mobile-section-div-edit">
                    <span>{userLogged.storeName}</span>
                    <figure
                      className="iconedit"
                      name="storeName"
                      onClick={editSellerUser}
                    >
                      <img src={editImage} alt="Lapiz" name="storeName" />
                    </figure>
                  </div>
                )}
              </div>
            </div>

            <div className="profile-seller-mobile-section-div">
              <div className="column">
                <h3>Descripción de la tienda</h3>
                {edit.description ? (
                  <>
                    <input
                      type="text"
                      className="profile-seller-mobile-section-div__input"
                      value={valueSeller.description}
                      onChange={onChangeEditName}
                      name="description"
                    />
                    <button
                      className="profile-seller-mobile-section-div__input__button"
                      onClick={handleEdit}
                      name="description"
                    >
                      Guardar
                    </button>
                  </>
                ) : (
                  <div>
                    <p>{userLogged.description}</p>
                    <figure
                      className="iconedit"
                      name="description"
                      onClick={editSellerUser}
                    >
                      <img src={editImage} alt="Lapiz" name="description" />
                    </figure>
                  </div>
                )}
              </div>
            </div>
            <div className="profile-seller-mobile-section-div">
              <div className="column">
                <h3>Categoría</h3>
                <p>{userLogged.category}</p>
              </div>
            </div>
            <div className="profile-seller-mobile-section-div">
              <div className="column">
                <h3>Dirección de la tienda</h3>
                {edit.address ? (
                  <>
                    <input
                      type="text"
                      className="profile-seller-mobile-section-div__input"
                      value={valueSeller.address}
                      onChange={onChangeEditName}
                      name="address"
                    />
                    <button
                      className="profile-seller-mobile-section-div__input__button"
                      onClick={handleEdit}
                      name="address"
                    >
                      Guardar
                    </button>
                  </>
                ) : (
                  <div className="profile-seller-mobile-section-div-edit">
                    <span>{userLogged.address}</span>
                    <figure
                      className="iconedit"
                      name="address"
                      onClick={editSellerUser}
                    >
                      <img src={editImage} alt="Lapiz" name="address" />
                    </figure>
                  </div>
                )}
              </div>
            </div>
          </section>
          <div className="button">
            <button type="text" className="button-close" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>
        </main>

        <div className="profile-page-dekstop">
          <div className="profile-page-dekstop__logo">
            <figure>
              <img src={logo} alt="Logo" />
            </figure>
            <h1>Detalleando</h1>
          </div>

          <div className="profile-page-dekstop__information">
            <NavSellerDekstop />
            <div className="profile-page-dekstop__information-info">
              <h3>Información de la tienda</h3>
              <section className="profile-seller-mobile-section">
                <div className="profile-seller-mobile-section-div">
                  <div className="column">
                    <h3>Logo</h3>
                    {edit.logo ? (
                      <>
                        <input
                          type="file"
                          className="profile-seller-mobile-section-div__input"
                          onChange={onChangeEditName}
                          name="logo"
                        />
                        <button
                          className="profile-seller-mobile-section-div__input__button"
                          onClick={handleEdit}
                          name="logo"
                        >
                          Guardar
                        </button>
                      </>
                    ) : (
                      <div className="profile-seller-mobile-section-div-edit">
                        <figure className="column-logo">
                          <img src={userLogged.logo} alt="Logo de la tienda" />
                        </figure>
                        <figure
                          className="iconedit"
                          name="logo"
                          onClick={editSellerUser}
                        >
                          <img src={editImage} alt="Lapiz" name="logo" />
                        </figure>
                      </div>
                    )}
                  </div>
                </div>

                <div className="profile-seller-mobile-section-div">
                  <div className="column">
                    <h3>Imagen del fondo</h3>
                    {edit.backgroundImage ? (
                      <>
                        <input
                          type="file"
                          className="profile-seller-mobile-section-div__input"
                          onChange={onChangeEditName}
                          name="backgroundImage"
                        />
                        <button
                          className="profile-seller-mobile-section-div__input__button"
                          onClick={handleEdit}
                          name="backgroundImage"
                        >
                          Guardar
                        </button>
                      </>
                    ) : (
                      <div className="profile-seller-mobile-section-div-edit">
                        <figure className="column-imga">
                          <img
                            src={userLogged.backgroundImage}
                            alt="Logo de la tienda"
                          />
                        </figure>
                        <figure
                          className="iconedit"
                          name="backgroundImage"
                          onClick={editSellerUser}
                        >
                          <img
                            src={editImage}
                            alt="Lapiz"
                            name="backgroundImage"
                          />
                        </figure>
                      </div>
                    )}
                  </div>
                </div>

                <div className="profile-seller-mobile-section-div">
                  <div className="column">
                    <h3>Nombre de la tienda</h3>
                    {edit.storeName ? (
                      <>
                        <input
                          type="text"
                          className="profile-seller-mobile-section-div__input"
                          value={valueSeller.storeName}
                          onChange={onChangeEditName}
                          name="storeName"
                        />
                        <button
                          className="profile-seller-mobile-section-div__input__button"
                          onClick={handleEdit}
                          name="storeName"
                        >
                          Guardar
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="profile-seller-mobile-section-div-edit">
                          <span>{userLogged.storeName}</span>
                          <figure
                            className="iconedit"
                            onClick={editSellerUser}
                            name="storeName"
                          >
                            <img src={editImage} alt="Lapiz" name="storeName" />
                          </figure>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="profile-seller-mobile-section-div">
                  <div className="column">
                    <h3>Descripción de la tienda</h3>
                    {edit.description ? (
                      <>
                        <input
                          type="text"
                          className="profile-seller-mobile-section-div__input"
                          value={valueSeller.description}
                          onChange={onChangeEditName}
                          name="description"
                        />
                        <button
                          className="profile-seller-mobile-section-div__input__button"
                          onClick={handleEdit}
                          name="description"
                        >
                          Guardar
                        </button>
                      </>
                    ) : (
                      <div>
                        <p>{userLogged.description}</p>
                        <figure className="iconedit" onClick={editSellerUser}>
                          <img src={editImage} alt="Lapiz" name="description" />
                        </figure>
                      </div>
                    )}
                  </div>
                </div>
                <div className="profile-seller-mobile-section-div">
                  <div className="column">
                    <h3>Categoría</h3>
                    <p>{userLogged.category}</p>
                  </div>
                </div>
                <div className="profile-seller-mobile-section-div">
                  <div className="column">
                    <h3>Dirección de la tienda</h3>
                    {edit.address ? (
                      <>
                        <input
                          type="text"
                          className="profile-seller-mobile-section-div__input"
                          value={valueSeller.address}
                          onChange={onChangeEditName}
                          name="address"
                        />
                        <button
                          className="profile-seller-mobile-section-div__input__button"
                          onClick={handleEdit}
                          name="address"
                        >
                          Guardar
                        </button>
                      </>
                    ) : (
                      <div className="profile-seller-mobile-section-div-edit">
                        <span>{userLogged.address}</span>
                        <figure className="iconedit" onClick={editSellerUser}>
                          <img src={editImage} alt="Lapiz" name="address" />
                        </figure>
                      </div>
                    )}
                  </div>
                </div>
              </section>
              <button
                type="text"
                className="button-close"
                onClick={handleLogout}
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default ProfileSeller;
