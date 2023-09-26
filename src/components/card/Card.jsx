import React, { useEffect, useState } from "react";
import test from "/test.jfif";
import trash from "/icons/trash-bin.svg";
import delivery from "/icons/delivery.svg";
import star from "/icons/star.svg";
import "./card.scss";
import Address from "../address/Address";
import "./../address/address.scss";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder } from "../../redux/order/orderReducer";
import Swal from "sweetalert2";
const Card = () => {
  const navigate = useNavigate();
  const handleOrder = () => {
    navigate("/checkout");
  };

  const { currentOrder } = useSelector(store => store.order);
  const { shops } = useSelector((store) => store.shops);
  const [shop, setShop] = useState('');
  const dispatch = useDispatch()


  useEffect(() => {
    setShop(shops.find(shop => shop.id == currentOrder?.shopId))
  }, [])

  const deleteAll = () => {
    Swal.fire({
      title: 'Quieres eliminar el pedido?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteOrder())
      } 
    })
  }
  
  return (
    <div className="orders-cards-container">
      <div className="order-card">
        {
          currentOrder?.products.map((product) => (
            <div className='product-info'>
              <img src={product.mainImage} alt={product.name} />
              <div className="product-info-price">
                <h4>{product.name}</h4>
                <span className='price'>$ {product.price * product.amount}</span>
              </div>
              
            </div>
          ))
        }
        
        <figure className="trash" onClick={deleteAll}>
          <img src={trash} alt="Icon for delete" />
        </figure>
        <div className="order-price">
          <div className="order-left">
            <div className="order-info">
              <img src={shop?.logo} alt={shop?.storeName} />
              <div>
                <h4>{shop?.storeName}</h4>
              </div>
            </div>
            <Address />
          </div>
          <div className="order-right">
            <div className="order-stats">
              <span className="process">{currentOrder?.status}</span>
            </div>
            <button className="order-button" onClick={handleOrder}>
              Ir a la orden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
