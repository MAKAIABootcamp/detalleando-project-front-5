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
     
        <figure className="photo-user">
          <img src={user} alt="Photo" />
        </figure>

        <section>
          
        </section>

    </main>
  )
}

export default ProfileEdit