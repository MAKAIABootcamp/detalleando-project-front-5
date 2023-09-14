import React, { useEffect, useState } from "react";
import "./saleSeller.scss";
import NavSeller from "../../components/navSeller/NavSeller";
import SaleCourse from "../../components/saleCourse/SaleCourse";
import SaleCompleted from "../../components/saleCompleted/SaleCompleted";
import { useNavigate } from "react-router-dom";
import Logo from "/logo.svg";
import NavSellerDekstop from "../../components/navSellerDekstop/NavSellerDekstop";
const SaleSeller = ({ isTypeSeller }) => {
  const navigate = useNavigate();
  const [widthMovile, setWidthMovile] = useState();

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      setWidthMovile(true);
    } else {
      setWidthMovile(false);
    }
  };
  return isTypeSeller && (
    <>
      {widthMovile ? (
        <main>
          <NavSeller />
          <section className="sales-orders-details">
            <div className="sale-seller">
              <h3>Ventas en curso</h3>
              <SaleCourse />
            </div>

            <div className="sale-completed">
              <h3>Ventas completadas</h3>
              <SaleCompleted />
            </div>
          </section>
        </main>
      ) : (
        <main className="sales-orders-dekstop">
          <div className="sales-orders-dekstop__logo">
            <figure>
              <img src={Logo} alt="Logo" />
            </figure>
            <h1>Detalleando</h1>
          </div>
          <div className="sales-orders-dekstop__information">
            <NavSellerDekstop />

            <section className="sales-orders-dekstop__information-section">
              <div className="sale-seller-dekstop">
                <h3>Ventas en curso</h3>
                <SaleCourse />
              </div>
              <div className="sale-completed-dekstop">
                <h3>Ventas completadas</h3>
                <SaleCompleted />
              </div>
            </section>
          </div>
        </main>
      )}
    </>
  );
};

export default SaleSeller;
