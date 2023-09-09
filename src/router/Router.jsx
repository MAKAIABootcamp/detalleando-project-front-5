import React from "react";
import Login from "../pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registro from "../pages/registro/Registro";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"> 
              <Route index element={<Login />} />
              <Route path="registro" element={<Registro/>} />
            </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
