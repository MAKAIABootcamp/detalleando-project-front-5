import React from "react";
import Login from "../pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registro from "../pages/registro/Registro";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import Product from "../pages/product/Product";
import { useDispatch, useSelector } from "react-redux";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import LoginByPhone from "../pages/loginByPhone/LoginByPhone";
import InsertCode from "../pages/insertCode/InsertCode";

const Router = () => {
  const dispatch = useDispatch();
  const { isLogged, userLogged } = useSelector((store) => store.auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route element={<PublicRouter isAuthenticate={isLogged} />}>
            <Route index element={<Login />} />
            <Route path="registro" element={<Registro />} />
            <Route path="phoneAuthentication" element={<LoginByPhone />}/>
            <Route path="insertcode" element={<InsertCode />}/>
          </Route>
          <Route element={<PrivateRouter isAuthenticate={isLogged} />}>
            <Route path="home" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product" element={<Product />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
