import React from 'react'
import NavDesktop from '../../components/nav-desktop/NavDesktop'
import Banner from '../../components/home-banner/Banner'
import logo from "/icons/logo-transparent.png";
import profile from "/icons/user-circle.svg";
import choice from "/icons/happy-woman.svg";
import payment from "/icons/online-shopping.svg";
import easy from "/icons/delivery-man.svg";
import ShowInterface from "/icons/shopping.svg";
import image from "/Presents.jpeg";
import heart from "/icons/heart-white.svg"
import firebase from "/icons/firebase.svg"
import firestore from "/icons/firestore.svg"
import github from "/icons/github.svg"
import form from "/icons/react-form.svg"
import react from "/icons/react.svg"
import redux from "/icons/redux.svg"
import sass from "/icons/sass.svg"
import swiper from "/icons/swiper.svg"
import vite from "/icons/vite.svg"
import { NavLink } from 'react-router-dom';
import "./landing.scss"

const Landing = () => {

    const cards = [
        {
            text: 'Una amplia selección de tiendas con una diversidad de opciones para que puedan elegir el regalo perfecto',
            img: choice
        },
    {
        text: "Una interfaz sencilla y llamativa que facilita la búsqueda y selección de productos",
        img: ShowInterface
    },
    {
        text: "Procdimientos de pago convenientes para que realizar la compra sea un proceso sin complicaciones",
        img: payment
    },
    {
        text: "La tranquilidad de saber que tu regalo será entregado de manera segura en la ubicación que desees",
        img: easy
    }
    ]
  return (
    <div className='landing'>
        <nav className='nav-landing'>
                <div className='logo-name'>
                    <img src={logo} alt="Icon for logo" className="logo" />
                    <h4>Detalleando</h4>
                </div>
                
                <NavLink to={"/login"} className='navigation'>
                    <img src={profile} alt="Icon for profile" />
                </NavLink>
            </nav>
        <header>
            
            <Banner />
        </header>
        <main className='main-landing'>
            <section className='cards-section'>
                {
                    cards.map((card) => (
                        <div className='card'>
                            <img src={card.img} alt="" />
                            <p>{card.text}</p>
                        </div>
                    ))
                }
            </section>
            <section className='about-us'>
                <img src={image} alt="" />
                <div className='about-us-description'>
                    <h2>¿Quiénes somos?</h2>
                    <p>Somos un Marketplace de tiendas de detalles, donde los compradores pueden fácilmente encontrar los detalles que quieren desde cualquier parte del mundo y los vendedores puedan tener visibilidad en el mercado.</p>
                </div>
            </section>
            <section className='tecnology'>
                <h2>Este proyecto fue desarrollado con:</h2>
                <div>
                    <img src={react} alt="" />
                    <img src={redux} alt="" />
                    <img src={firebase} alt="" />
                    <img src={firestore} alt="" />
                    <img src={github} alt="" />
                    <img src={form} alt="" />
                    <img src={sass} alt="" />
                    <img src={swiper} alt="" />
                    <img src={vite} alt="" />
                </div>
            </section>
        </main>
        <footer>
            <h4>Hecho con <img src={heart} alt="" /> por un equipo maravilloso</h4>
            <a href="https://github.com/MAKAIABootcamp/detalleando-project-front-5">GitHub</a>
        </footer>
  </div>
  )
}

export default Landing