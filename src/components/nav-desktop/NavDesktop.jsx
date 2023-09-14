import React from 'react'
import logo from "/icons/logo-transparent.png"
import search from "/icons/search.svg"
import { NavLink, useLocation } from 'react-router-dom'
import cart from "/icons/cart.svg"
import profile from "/icons/user-circle.svg"
import "./nav.scss"
import Address from '../address/Address'

const NavDesktop = () => {

    const location = useLocation()


  return (
    <nav className='navbar-desktop'>
        <img src={logo} alt="Icon for logo" className='logo'/>
        {
            location.pathname === "/home" ? 
        <div className='search'>
            <input type="search" name="" id="" placeholder='Buscar'/>
            <img src={search} alt="Icon for search" className='search-icon'/>
        </div> :
        <Address/>
        }
        <div className='navigation'>
            <NavLink to={'/cart'}>
                <img src={cart} alt="Icon for cart" />
            </NavLink>
            <hr />
            <NavLink to={'/profile'}>
                <img src={profile} alt="Icon for profile" />
            </NavLink>
        </div>
    </nav>
  )
}

export default NavDesktop