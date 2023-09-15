import React from "react";
import Address from "../../components/address/Address";
import test from "/test.jfif";
import delivery from "/icons/delivery.svg";
import star from "/icons/star.svg";
import search from "/icons/search.svg";
import heartWhite from "/icons/heart-white.svg";
import cake from "/icons/cake.svg";
import choco from "/icons/chocolate.svg";
import cupcake from "/icons/cupcake.svg";
import croissant from "/icons/croissant.svg";
import chocoBox from "/icons/chocolate-box.svg";
import NavMobile from "../../components/nav-mobile/NavMobile";
import "./shop.scss";
import NavDesktop from "../../components/nav-desktop/NavDesktop";

const Shop = ({ isTypeSeller }) => {
  const categoriesShop = [
    { name: "Tortas", image: cake },
    { name: "Chocolate", image: choco },
    { name: "Cupcakes", image: cupcake },
    { name: "Panadería", image: croissant },
    { name: "Más dulces", image: chocoBox },
  ];

  return (
    !isTypeSeller && (
      <>
        <header>
          <NavDesktop />
        </header>
        <main>
          <div className="shop-address">
            <Address />
          </div>
          <div className="shop-desktop-layout">
            <div className="shop-main-image">
              <img src={test} alt="" />
            </div>
            <div>
              <div className="shop-page-info">
                <img src={test} alt="Icon for logo" />
                <div>
                  <h2>Shop name</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    vel dui risus. Pellentesque eros leo,{" "}
                  </p>
                </div>
              </div>
              <div className="stats">
                <div className="shop-stats">
                  <img src={delivery} alt="Icon for delivery" />
                  <span>$ 2.5</span>
                </div>
                <div className="shop-stats raiting">
                  <img src={star} alt="Icon for raiting" />
                  <span>4.5</span>
                </div>
              </div>
              <div className="shop-options">
                <div className="search">
                  <input
                    type="search"
                    name=""
                    id=""
                    placeholder="Buscar en la tienda"
                  />
                  <img
                    src={search}
                    alt="Icon for search"
                    className="search-icon"
                  />
                </div>
                <div className="favorite">
                  <img src={heartWhite} alt="Icon for like" />
                  <p>Favorito</p>
                </div>
              </div>
            </div>
          </div>
          <div className="shop-main-content">
          <div className="categories-shop">
            {categoriesShop.map((category) => (
              <div className="category">
                <img src={category.image} alt={category.name} />
                <p>{category.name}</p>
              </div>
            ))}
          </div>
          <div>
          <div className="shop-section">
            <h2>Los mas vendidos</h2>
            <div className="shop-cards-container">
              <div className="card">
                <img src={test} alt="" />
                <div>
                  <h4>Cupcakes with cream cheese</h4>
                  <div className="price">
                    <span>$ 14</span>
                  </div>
                </div>
                <figure className="like">
                  <img src={heartWhite} alt="Icon for like" />
                </figure>
              </div>
            </div>
          </div>
          <div className="shop-section">
            <h2>Tortas</h2>
            <div className="shop-cards-container">
              <div className="card">
                <img src={test} alt="" />
                <div>
                  <h4>Cupcakes with cream cheese</h4>
                  <div className="price">
                    <span>$ 14</span>
                  </div>
                </div>
                <figure className="like">
                  <img src={heartWhite} alt="Icon for like" />
                </figure>
              </div>
            </div>
          </div>
          </div>
          </div>
        </main>
        <div className="shop-nav">
          <NavMobile />
        </div>
      </>
    )
  );
};

export default Shop;
