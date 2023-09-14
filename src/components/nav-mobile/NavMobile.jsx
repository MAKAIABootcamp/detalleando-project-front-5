import React from 'react'
import { NavLink } from 'react-router-dom'
import home from "/icons/home.svg"
import favorite from "/icons/favorite.svg"
import cart from "/icons/cart.svg"
import profile from "/icons/user-circle.svg"
import "./nav.scss"

const NavMobile = () => {
  return (
    <nav className='nav-mobile'>
        <NavLink to={'/'}>
            <img src={home} alt="Icon for home" />
        </NavLink>
        <NavLink to={'/favorite'}>
            <img src={favorite} alt="Icon for favorite" />
        </NavLink>
        <NavLink to={'/cart'}>
            <img src={cart} alt="Icon for cart" />
        </NavLink>
        <NavLink to={'/profile'}>
            <img src={profile} alt="Icon for profile" />
        </NavLink>
    </nav>
  )
}

export default NavMobile