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
        </main>
        <footer>
            <h4>Hecho con <img src={heart} alt="" /> por un equipo maravilloso</h4>
            <a href="https://github.com/MAKAIABootcamp/detalleando-project-front-5">GitHub</a>
        </footer>
  </div>
  )
}

export default Landing