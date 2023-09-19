import React from "react";
import test from "/test.jfif";
import heartWhite from "/icons/heart-white.svg";
import arrow from "/icons/arrow-down.svg";
import "./product.scss";
import NavDesktop from "../../components/nav-desktop/NavDesktop";

const Product = ({ isTypeSeller }) => {
  return (
    !isTypeSeller && (
      <>
        <header>
          <NavDesktop />
        </header>
        <main className="product-main">
          <div className="desktop-product-container">
            <div className="main-image">
              <img src={test} alt="" className="main-product-image" />
              <figure className="back">
                <img src={arrow} alt="Icon for arrow" />
              </figure>
              <figure className="like">
                <img src={heartWhite} alt="Icon for like" />
              </figure>
            </div>
            <div className="secondary-images">
              <img src={test} alt="" />
              <img src={test} alt="" />
              <img src={test} alt="" />
            </div>
            <div className="product-info">
                <div>
              <p className="availability">En stock</p>
              <h2>Cupcakes with cream cheese</h2>
              <div className="desktop-price">
                <span>$ 14</span>
                <div className="desktop-quantity">
                  <label>Quantity</label>
                  <select name="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>
              <div className="desktop-shop-info">
                <p className="delivery">Delivery fee: $2.5</p>
                <div className="shop-info">
                  <img src={test} alt="" />
                  <h3>Shop name</h3>
                </div>
              </div>
              <p className="description">Descripción del producto</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel
                dui risus. Pellentesque eros leo,
              </p>
              </div>
              <button className="desktop-add-button">Add to order</button>
            </div>
            
          </div>
          <div className="more-products">
            <h4>Mas de esa tienda</h4>
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
          <div className="product-footer">
            <div className="product-counter">
              <span>-</span>
              <p>1</p>
              <span>+</span>
            </div>
            <div className="product-add">
              <h4>Add to order</h4>
              <span>$14</span>
            </div>
          </div>
        </main>
      </>
    )
  );
};

export default Product;
