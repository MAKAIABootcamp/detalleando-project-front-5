import React from "react";
import test from "/test.jfif";
import trash from "/icons/trash-bin.svg";
import "./cardSeller.scss";
const CardSeller = () => {
  return (
    <div className="seller-cards-container">
      <div className="seller-cards-container__up">
        <div className="seller-cards-container__up-left">
          <img className="seller-img" src={test} alt="" />
          <figure className="trash">
            <img src={trash} alt="Icon for like" />
          </figure>
        </div>

        <figure className="seller-right-img">
          <img className="seller-imgs" src={test} alt="" />
          <img className="seller-imgs" src={test} alt="" />
          <img className="seller-imgs" src={test} alt="" />
        </figure>
      </div>

      <div className="seller-down">
        <div className="seller-left">
          <h4>Cupcakes with cream cheese</h4>
          <h4>Descripción del producto:</h4>
          <p className="seller-description">
            Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatibus incidunt, architecto
            quaerat alias minus eum vel numquam commodi adipisci voluptas.
          </p>
        </div>

        <div className="seller-right">
          <h4>Categorías</h4>
          <span>Cupcakes</span>
          <span>$ 2.5</span>
        </div>
      </div>
    </div>
  );
};

export default CardSeller;
