import React, { useEffect, useState } from 'react'
import './profileSeller.scss'
import NavSeller from '../../components/navSeller/NavSeller';
import imgfondo from "/test.jfif";
import edit from "/icons/pencil.svg";
import logo from '/logo.svg'
import NavSellerDekstop from '../../components/navSellerDekstop/NavSellerDekstop';

const ProfileSeller = ({ isTypeSeller }) => {
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
  return isTypeSeller && (
    <>
    {widthMovile ? (
      <main className='profile-seller-mobile'>
      <NavSeller/>
      <h3>Información de la tienda</h3>
      <section className='profile-seller-mobile-section'>
        <div className='profile-seller-mobile-section-div'>
            <div className='column'>
                <h3>Logo</h3>
                <figure className='column-logo'>
                    <img src={logo} alt="Logo de la tienda" />
                </figure>
            </div>
            <figure className='iconedit'>
                <img src={edit} alt="Lapiz" />
            </figure>
        </div>

        <div className='profile-seller-mobile-section-div'>
            <div className='column'>
                <h3>Imagen del fondo</h3>
                <figure className='column-img'>
                    <img src={imgfondo} alt="Logo de la tienda" />
                </figure>
            </div>
            <figure className='iconedit'>
                <img src={edit} alt="Lapiz" />
            </figure>
        </div>

        <div className='profile-seller-mobile-section-div'>
            <div className='column'>
                <h3>Nombre de la tienda</h3>
                <span>Shop name</span>
            </div>
            <figure className='iconedit'>
                <img src={edit} alt="Lapiz" />
            </figure>
        </div>

        <div className='profile-seller-mobile-section-div'>
            <div className='column'>
                <h3>Descripción de la tienda</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <figure className='iconedit'>
                <img src={edit} alt="Lapiz" />
            </figure>
        </div>
        <div className='profile-seller-mobile-section-div'>
            <div className='column'>
                <h3>Categoria</h3>
                <p>Pastelería y confitería</p>
            </div>
            <figure className='iconedit'>
                <img src={edit} alt="Lapiz" />
            </figure>
        </div>
        <div className='profile-seller-mobile-section-div'>
            <div className='column'>
                <h3>Dirección de la tienda</h3>
                <span>Medellin, cra 14</span>
            </div>
            <figure className='iconedit'>
                <img src={edit} alt="Lapiz" />
            </figure>
        </div>
      </section>
      </main>
    ) : (
        <main className="profile-page-dekstop">
        <div className="profile-page-dekstop__logo">
        <figure>
          <img src={logo} alt="Logo" />
        </figure>
        <h1>Detalleando</h1>
      </div>
      <div className="profile-page-dekstop__information">
      <NavSellerDekstop/>
      <div className="profile-page-dekstop__information-info">
     
      <h3>Información de la tienda</h3>
      <section className='profile-seller-mobile-section'>
        <div className='profile-seller-mobile-section-div'>
            <div className='column'>
                <h3>Logo</h3>
                <figure className='column-logo'>
                    <img src={logo} alt="Logo de la tienda" />
                </figure>
            </div>
            <figure className='iconedit'>
                <img src={edit} alt="Lapiz" />
            </figure>
        </div>

        <div className='profile-seller-mobile-section-div'>
            <div className='column'>
                <h3>Imagen del fondo</h3>
                <figure className='column-imga'>
                    <img src={imgfondo} alt="Logo de la tienda" />
                </figure>
            </div>
            <figure className='iconedit'>
                <img src={edit} alt="Lapiz" />
            </figure>
        </div>

        <div className='profile-seller-mobile-section-div'>
            <div className='column'>
                <h3>Nombre de la tienda</h3>
                <span>Shop name</span>
            </div>
            <figure className='iconedit'>
                <img src={edit} alt="Lapiz" />
            </figure>
        </div>

        <div className='profile-seller-mobile-section-div'>
            <div className='column'>
                <h3>Descripción de la tienda</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <figure className='iconedit'>
                <img src={edit} alt="Lapiz" />
            </figure>
        </div>
        <div className='profile-seller-mobile-section-div'>
            <div className='column'>
                <h3>Categoria</h3>
                <p>Pastelería y confitería</p>
            </div>
            <figure className='iconedit'>
                <img src={edit} alt="Lapiz" />
            </figure>
        </div>
        <div className='profile-seller-mobile-section-div'>
            <div className='column'>
                <h3>Dirección de la tienda</h3>
                <span>Medellin, cra 14</span>
            </div>
            <figure className='iconedit'>
                <img src={edit} alt="Lapiz" />
            </figure>
        </div>
      </section>
      </div>
      
      </div>
      </main>
    )}
  </>
  )
}

export default ProfileSeller