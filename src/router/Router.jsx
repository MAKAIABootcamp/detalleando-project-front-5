import React, { useEffect, useState } from "react";
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
import SellerRegister from "../pages/sellerRegister/SellerRegister";
import useSessionStorage from "../hooks/useSessionStorege";
import { setIsLogged } from "../redux/store/auth/authReducer";

const Router = () => {
  const dispatch = useDispatch();
  const { isLogged, userLogged } = useSelector((store) => store.auth);
  const key = 'user';
  const { getInfo } = useSessionStorage();
  const user = getInfo(key);

  // console.log(user)

  // useEffect(() => {
  //   if(user?.id){
  //     dispatch(setIsLogged(true));
  //   }else{
  //     dispatch(setIsLogged(false));
  //   }
  // },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route element={<PublicRouter isAuthenticate={isLogged} isTypeSeller={userLogged?.isSeller} />}>
            <Route index element={<Login />} />
            <Route path="registro" element={<Registro />} />
            <Route path="phoneAuthentication" element={<LoginByPhone />} />
            <Route path="insertcode" element={<InsertCode />} />
            <Route path="loginvendedor" element={<LoginVendedor />} />
            <Route path="sellerRegister" element={<SellerRegister />} />
          </Route>
          <Route
            element={
              <PrivateRouter
                isAuthenticate={isLogged}
                
              />
            }
          >
            <Route path="homeseller" element={<HomeSeller isTypeSeller={userLogged?.isSeller} />} />
            <Route path="createproduct" element={<CreateProduct isTypeSeller={userLogged?.isSeller} />} />
            <Route path="ventas" element={<SaleSeller isTypeSeller={userLogged?.isSeller} />} />
            <Route path="home" element={<Home isTypeSeller={userLogged?.isSeller} />} />
            <Route path="shop" element={<Shop isTypeSeller={userLogged?.isSeller} />} />
            <Route path="product" element={<Product isTypeSeller={userLogged?.isSeller}/>} />
            <Route path="cart" element={<Order isTypeSeller={userLogged?.isSeller}/>} />
            <Route path="profile" element={<Profile isTypeSeller={userLogged?.isSeller} />} />
            <Route path="profileEdit" element={<ProfileEdit isTypeSeller={userLogged?.isSeller} />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
