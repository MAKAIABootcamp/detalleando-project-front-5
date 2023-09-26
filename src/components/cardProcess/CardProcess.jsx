
import React, { useEffect, useState } from "react";
import "./CardProcess.scss";
import Address from "../address/Address";
import "./../address/address.scss";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

const CardProcess = () => {

    const navigate = useNavigate();
  const { orderInProcess } = useSelector(store => store.order);
  const { shops } = useSelector((store) => store.shops);
  const [shop, setShop] = useState('');
  const dispatch = useDispatch()

  useEffect(() => {
    setShop(shops.find(shop => shop.id == orderInProcess?.shopId))
  }, [])


  return (
    <div className="orders-cards-container">
      <div className="order-card">
        {
          orderInProcess?.products.map((product) => (
            <div className='product-info'>
              <img src={product.mainImage} alt={product.name} />
              <div className="product-info-price">
                <h4>{product.name}</h4>
                <span className='price'>$ {product.price * product.amount}</span>
              </div>
              
            </div>
          ))
        }
        <div className="order-price">
          <div className="order-left">
            <div className="order-info">
              <img src={shop?.logo} alt={shop?.storeName} />
              <div>
                <h4>{shop?.storeName}</h4>
              </div>
            </div>
            <div className='address'>
              <p>Entregar a:</p>
              <h4>{orderInProcess.sendTo.direction}, {orderInProcess.sendTo.name}</h4>
            </div>
          </div>
          <div className="order-right">
            <div className="order-stats">
              <span className="process">{orderInProcess?.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardProcess