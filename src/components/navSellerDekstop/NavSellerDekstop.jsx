import React from "react";
import "./navSellerDekstop.scss";
import { NavLink } from "react-router-dom";
const NavSellerDekstop = () => {
  return (
    <nav className="navseller-dekstop">
      <div className="navseller-dekstop-left">
        <NavLink to={"/"} className="navseller-dekstop-left-navlink">
          <span className="navseller-dekstop-left-navlink-span">Productos</span>
        </NavLink>
        <NavLink to={"/ventas"} className="navseller-dekstop-left-navlink">
          <span className="navseller-dekstop-left-navlink-span">Ventas</span>
        </NavLink>
        <NavLink to={"/perfil"} className="navseller-dekstop-left-navlink">
          <span className="navseller-dekstop-left-navlink-span">Perfil</span>
        </NavLink>
        <NavLink to={"/chat"} className="navseller-dekstop-left-navlink">
          <span className="navseller-dekstop-left-navlink-span">Mensajes</span>
        </NavLink>
      </div>

      <div className="button-divider-dekstop"  >
        <hr className="button-divider-dekstop-right" />
      </div>
    </nav>
  );
};

export default NavSellerDekstop;
