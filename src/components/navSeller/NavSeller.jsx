import React from "react";
import { NavLink } from "react-router-dom";
import "./navseller.scss";
const NavSeller = () => {
  return (
    <nav className="navseller">
      <NavLink to={"/"} className="navlink-no-underline">
        <span className="navseller-span">Productos</span>
      </NavLink>
      <NavLink to={"/ventas"} className="navlink-no-underline">
        <span className="navseller-span">Ventas</span>
      </NavLink>
      <NavLink to={"/perfil"} className="navlink-no-underline">
        <span className="navseller-span">Perfil</span>
      </NavLink>
      {/* <NavLink to={"/chat"} className="navlink-no-underline">
        <span className="navseller-span">Mensajes</span>
      </NavLink> */}
    </nav>
  );
};

export default NavSeller;
