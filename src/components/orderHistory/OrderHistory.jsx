import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fillOrdersFromCollection } from '../../redux/order/orderActions'

const OrderHistory = () => {

    const dispatch = useDispatch()
    const { orders } = useSelector(store => store.order);
    const { userLogged } = useSelector(store => store.auth);
    const [orderHistory, setOrderHistory] = useState([])

    useEffect(() => {
        setOrderHistory(orders?.filter(order => order.userId == userLogged.id))
    }, [orders])
  return (
    <div>
        {
            orderHistory.map((order, index) => (
                <div className="order-card" key={index}>
        {
          order?.products.map((product) => (
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
            <Address />
          </div>
          <div className="order-right">
            <div className="order-stats">
              <span className="process">{order?.state}</span>
            </div>
          </div>
        </div>
      </div>
            ))
        }
    </div>
  )
}

export default OrderHistory