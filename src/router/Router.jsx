import React from "react";
import Login from "../pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registro from "../pages/registro/Registro";
import LoginVendedor from "../pages/loginVendedor/LoginVendedor";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import Product from "../pages/product/Product";
import { useDispatch, useSelector } from "react-redux";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import LoginByPhone from "../pages/loginByPhone/LoginByPhone";
import InsertCode from "../pages/insertCode/InsertCode";
import Order from "../pages/order/Order";
import OrderEmpty from "../components/orderEmpty/OrderEmpty";
import Profile from "../pages/profile/Profile";
import ProfileEdit from "../pages/profileEdit/ProfileEdit";
import HomeSeller from "../pages/homeSeller/HomeSeller";
import CreateProduct from "../pages/createProduct/CreateProduct";
import SaleSeller from "../pages/saleSeller/SaleSeller";

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
            <Route path="loginvendedor" element={<LoginVendedor/>} />
          </Route>
          <Route element={<PrivateRouter isAuthenticate={isLogged} />}>
          <Route path="home" element={<HomeSeller />} />
          <Route path="createproduct" element={<CreateProduct />} />
          <Route path="ventas" element={<SaleSeller />} />
            <Route path="home" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product" element={<Product />} />
            <Route path="cart" element={<Order />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profileEdit" element={<ProfileEdit />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
