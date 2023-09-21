import React from 'react'
import logo from "/icons/logo-transparent.png"
import search from "/icons/search.svg"
import { NavLink, useLocation } from 'react-router-dom'
import cart from "/icons/cart.svg"
import profile from "/icons/user-circle.svg"
import trash from "/icons/trash-bin.svg";
import "./nav.scss"
import Address from '../address/Address'

const NavDesktop = ({searchProductsHome, setActiveSearch}) => {

    const location = useLocation()


  return (
    <nav className='navbar-desktop'>
        <img src={logo} alt="Icon for logo" className='logo'/>
        {
            location.pathname === "/home" ? 
        <div className='search'>
            <input type="search" placeholder='Buscar' onChange={searchProductsHome}/>
            <img src={search} alt="Icon for search" className='search-icon'/>
            <img src={trash} alt="Icon for delete" className="clear-icon" onClick={()=>setActiveSearch(false)}/>
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