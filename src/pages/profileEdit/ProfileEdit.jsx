import React, { useEffect, useState } from "react";
import "./profileEdit.scss";
import arrowBack from "/arrowback.svg";
import { useNavigate } from "react-router-dom";
import user from "/test.jfif";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authActions";
import NavDesktop from "../../components/nav-desktop/NavDesktop";
import camera from "/camera.svg";
import fileUpload from "../../services/fileUpload";
import Swal from "sweetalert2";
import { doc, updateDoc } from "firebase/firestore";
import { fireStore } from "../../firebase/firebaseConfig";
const ProfileEdit = ({ isTypeSeller }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const prods = useSelector((store) => store.auth);
  // console.log(prods.userLogged)
  const date = prods.userLogged;
  // console.log(prods);

  const [displayName, setDisplayName] = useState(date.displayName);
  const [birthday, setbirthday] = useState(date.birthday);
  const [phone, setPhone] = useState(date.phone);

  const [isImageSelected, setIsImageSelected] = useState(false);

  const [fotoURL, setfotoURL] = useState(date.photoURL);
  const [isEditingFoto, setIsEditingFoto] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);


  const handleLogout = () => {
    dispatch(logout());
  };

  const handleSave = async () => {
    try {
      const userDocRef = doc(fireStore, "users", date.id); //obtengo el documento
      // para actualizar los datos del documento
      await updateDoc(userDocRef, {
        displayName: displayName,
        phone: phone,
        birthday: birthday,
        photoURL: selectedImage || fotoURL,
      });

      Swal.fire(
        "Excelente!",
        "Los datos fueron actualizados correctamente",
        "success"
      );
      setIsEditingFoto(false);
    } catch (error) {
      Swal.fire("Oops!", "Los datos no se pudieron actualizar", "error");
    }
  };

  const handleImageUpload = async (file) => {
    try {
      const imageUrl = await fileUpload(file);
      if (imageUrl) {
        setSelectedImage(imageUrl);
        // console.log(imageUrl);
      } else {
        console.error("Error al cargar la imagen en Cloudinary");
      }
    } catch (error) {
      console.error("Error al cargar la imagen: ", error);
    }
  };
  const handleAccept = () => {
    if (!isImageSelected) {
      Swal.fire(
        "Atención",
        "Debes seleccionar una foto antes de aceptar.",
        "warning"
      );
      return;
    }
  };
  return (
    !isTypeSeller && (
      <>
        <main className="profileEdit">
          <div className="profileEdit-up">
            <img src={arrowBack} alt="ArrowBack" onClick={() => navigate(-1)} />
            <h2>Perfil</h2>
          </div>
          <div className="content-user">
            {selectedImage ? (
              <figure className="photo-user">
                <img src={selectedImage} alt="Photo" />
              </figure>
            ) : (
              <>
                <figure className="photo-user">
                  <img src={fotoURL} alt="Photo" />
                </figure>
                <figure
                  className="photo-camera"
                  onClick={() => setIsEditingFoto(true)}
                >
                  <img src={camera} alt="Camera" />
                </figure>
              </>
            )}
            {isEditingFoto && !selectedImage && (
              <div className="divPhoto">
                <input
                  className="button-photo"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e.target.files[0])}
                />

                <button
                  className="accept-button"
                  onClick={() => {
                    handleAccept();
                    setSelectedImage(fotoURL);
                  }}
                >
                  Aceptar
                </button>
                <button
                  className="cancel-button"
                  onClick={() => setIsEditingFoto(false)}
                >
                  Cancelar
                </button>
              </div>
            )}
          </div>

          <section className="edit-section">
            <div className="edit-section-date">
              <label className="edit-section-date__label">
                <span>Tú nombre</span>
              </label>
              {/* <input
                type="text"
                className="edit-section-date__input"
                defaultValue={date.displayName}
              /> */}
              <input
                type="text"
                className="edit-section-date__input"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
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
                value={birthday}
                onChange={(e) => setbirthday(e.target.value)}
              />
            </div>

            <div className="edit-section-date">
              <label className="edit-section-date__label">
                <span>Tú teléfono</span>
              </label>
              <input
                type="text"
                className="edit-section-date__input"
                value={phone?.trim() === "" ? "Sin número de teléfono" : phone}
                onChange={(e) => setPhone(e.target.value)}
                readOnly
              />
            </div>
          </section>
          <div className="content-button">
            <button type="button" onClick={handleSave} className="button-save">
              Guardar
            </button>
            <span className="close-sesion" onClick={handleLogout}>
              Cerrar sesión
            </span>
          </div>
        </main>

        <div className="profileEdit-desktop">
          <NavDesktop />
          <div className="divpro">
            <section className="profileEdit-desktop__card">
              <h2>Información del perfil</h2>

              <div className="content-user">
                {selectedImage ? (
                  <figure className="photo-user">
                    <img src={selectedImage} alt="Photo" />
                  </figure>
                ) : (
                  <>
                    <figure className="photo-user">
                      <img src={fotoURL} alt="Photo" />
                    </figure>
                    <figure
                      className="photo-camera"
                      onClick={() => setIsEditingFoto(true)}
                    >
                      <img src={camera} alt="Camera" />
                    </figure>
                  </>
                )}
                {isEditingFoto && !selectedImage && (
                  <div className="divPhoto">
                    <input
                      className="button-photo"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e.target.files[0])}
                    />

                    <button
                      className="accept-button"
                      onClick={() => {
                        handleAccept();
                        setSelectedImage(fotoURL);
                      }}
                    >
                      Aceptar
                    </button>
                    <button
                      className="cancel-button"
                      onClick={() => setIsEditingFoto(false)}
                    >
                      Cancelar
                    </button>
                  </div>
                )}
              </div>
              <div className="profileEdit-desktop__card__info">
                <label>Tú nombre</label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
                <label>Tú fecha de nacimiento</label>
                <input type="text" 
                value={birthday}
                onChange={(e) => setbirthday(e.target.value)}
                />

                <label>Tú teléfono</label>
                <input type="text" 
                value={phone?.trim() === "" ? "Sin número de teléfono" : phone}
                onChange={(e) => setPhone(e.target.value)}
                readOnly
                />
              </div>
              <div className="profileEdit-desktop__card__button">
                <button onClick={handleSave}>Guardar</button>
              </div>
            </section>
            <div className="profileEdit-desktop__cerrar">
              <span onClick={handleLogout}>Cerrar sesión</span>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default ProfileEdit;
