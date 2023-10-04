import React from "react";
import { useSelector } from "react-redux";
import "./productOrder.scss";

const ProductOrder = ({ idProduct }) => {
    
  const { products } = useSelector((store) => store.products);
  const filterProduct = products.filter(
    (product) => product.id == idProduct.productId
  );
//   console.log(idProduct);
//   console.log(filterProduct);

  return (
    <div className="container__info-product-order">
      <img src={filterProduct[0]?.mainImage} alt="" />
      <div className="container__info-product-order__details">
        <div>
          <h4>{filterProduct[0]?.name}</h4>
        </div>
        <div>
          <span>{idProduct?.amount}</span>
          <span className="price">${Number(idProduct?.amount)*Number(filterProduct[0]?.price)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductOrder;