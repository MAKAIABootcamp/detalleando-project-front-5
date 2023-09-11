import React from "react";
import Login from "../pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registro from "../pages/registro/Registro";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import Product from "../pages/product/Product";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"> 
              <Route index element={<Login />} />
              <Route path="registro" element={<Registro/>} />
              <Route path="home" element={<Home/>}/>
              <Route path="shop" element={<Shop/>}/>
              <Route path="product" element={<Product/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
