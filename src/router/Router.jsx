import React from "react";
import Login from "../pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registro from "../pages/registro/Registro";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import Product from "../pages/product/Product";
import Checkout from "../pages/order-checkout/Checkout";
import Payment from "../pages/payment-methods/Payment";
import Success from "../pages/purchase-success/Success";
import Favorites from "../pages/favorites/Favorites";


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
              <Route path="checkout" element={<Checkout/>}/>
              <Route path="payment-methods" element={<Payment/>}/>
              <Route path="purchase-success" element={<Success/>}/>
              <Route path="favorites" element={<Favorites/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
