import React from 'react'
import logo from "/icons/logo-transparent.png"
import search from "/icons/search.svg"
import { NavLink } from 'react-router-dom'
import cart from "/icons/cart.svg"
import profile from "/icons/user-circle.svg"

const NavDesktop = () => {
  return (
    <nav className='nav-dekstop'>
        <img src={logo} alt="Icon for logo" />
        <div className='search'>
            <input type="search" name="" id="" placeholder='Buscar'/>
            <img src={search} alt="Icon for search" className='search-icon'/>
        </div>
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