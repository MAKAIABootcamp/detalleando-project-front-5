import React from 'react'
import './profileEdit.scss'
import arrowBack from "/arrowback.svg";
import { useNavigate } from 'react-router-dom';
import user from "/test.jfif";
const ProfileEdit = () => {
  const navigate = useNavigate();
  return (
    <main className='profileEdit'>
      <div className="profileEdit-up">
        <img src={arrowBack} alt="ArrowBack" onClick={() => navigate(-1)} />
        <h2>Perfil</h2>
      </div>
     <div className='content-user'>
     <figure className="photo-user">
          <img src={user} alt="Photo" />
        </figure>
     </div>
        

        <section className='edit-section'>
        <div className="data">
          <div className='text'>
          <span>Tú nombre</span>
          <h3>Anna</h3>
          </div>
        </div>
        <hr className="button-divider" />

        <div className="data">
          <div className='text'>
          <span>Tú correo</span>
          <h3>ann@gmail.com</h3>
          </div>
        </div>
        <hr className="button-divider" />

        <div className="data">
          <div className='text'>
          <span>Tú fecha de nacimiento</span>
          <h3>22.12.1999</h3>
          </div>
        </div>
        <hr className="button-divider" />
        <div className="data">
          <div className='text'>
          <span>Tú teléfono</span>
          <h3>+57 3102706787</h3>
          </div>
        </div>
        <hr className="button-divider" />
        </section>
        <div className='content-button'>
        <button className='button-save'>
          Guardar
        </button>
        <span className='close-sesion'>Cerrar sesión</span>
        </div>
        
    </main>
  )
}

export default ProfileEdit