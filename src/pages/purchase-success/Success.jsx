import React, { useEffect, useState } from 'react'
import NavMobile from '../../components/nav-mobile/NavMobile'
import test from "/test.jfif"
import mastercard from "/icons/mastercard.svg"
import visa from "/icons/visa.svg";
import amex from "/icons/american-express.svg";
import Address from '../../components/address/Address'
import Time from '../../components/time/Time'
import "./success.scss"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const Success = ({ isTypeSeller }) => {

    const { orderInProcess } = useSelector(store => store.order);
    const { shops } = useSelector((store) => store.shops);
    const { products } = useSelector((store) => store.products);
    const [shop, setShop] = useState('');
    const [total, setTotal] = useState('')
    const [orderProducts, setOrderProducts] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        setShop(shops.find(shop => shop.id == orderInProcess?.shopId))
        // const orderProductsIds = currentOrder?.products.map((product) => product.productId)
        // setOrderProducts(products.filter((product) =>
        // orderProductsIds.includes(product.id)))
      }, [orderInProcess.products])

    // const findAmount  = (id) => {
    //     const amount = currentOrder?.products.find(item => item.productId == id).amount
    //     return amount
    // }

    const getInfoCard = (cardNumber) => {
        const lastNumbersCard = cardNumber?.toString().slice(-4);
        const lastNumbersToNumber = Number(lastNumbersCard);
        if (lastNumbersToNumber <= 3333) {
          return mastercard;
        } else if (lastNumbersToNumber > 3333 && lastNumbersToNumber <= 6666) {
          return visa;
        } else {
          return amex;
        }
      };

      const maskCardNumber = (cardNumber) => {
        const firstFour = cardNumber?.substring(0, 4);
        const lastFour = cardNumber?.substring(cardNumber.length - 4);
    
        const maskedMiddle = "*".repeat(8);
    
        const maskedCardNumber = `${firstFour} ${maskedMiddle} ${lastFour}`;
    
        return maskedCardNumber;
      };

  return !isTypeSeller && (
    <>
    <main className='success-main'>
        <div className='success-message'>
            <h2>Gracias por su compra!</h2>
            <img src={test} alt="" />
            <p>Vas a recibir la confirmación de tu compra en tu correo. El día de la entrega el vendodor te va a mandar la foto del producto preparado. Si quieres contactarte con el vendedor,  
                <span> escríbele un mensaje</span>
            </p>
            
        </div>
        <div className='order-details'>
            <h2>Detalles del orden</h2>
            {
                orderInProcess.products?.map((product, index) => (
                    <div className='product-info' key={index}>
                <img src={product.mainImage} alt={product.name} />
                <div className='info-text'>
                    <div>
                        <h4>{product.name}</h4>
                    </div>
                    <div>
                        <p>{shop.name}</p>
                            <span>x{product.amount}</span>
                        <span className='price'>${product.price * product.amount}</span>
                    </div>
                </div>
            </div>
                ))
            }
            
            <div>
                <div className='address'>
                  <p>Entregar a:</p>
                  <h4>{orderInProcess.sendTo.direction}, {orderInProcess.sendTo.name}</h4>
                </div>
                <Time/>
            </div>
            <h2>Detalles del pago</h2>
            <div className='method'>
                <img src={getInfoCard(orderInProcess.paymentMethod)} alt="" />
                <span>{maskCardNumber(orderInProcess.paymentMethod)}</span>
            </div>
            <p>Tu referencia de pago: <h4>{orderInProcess.paymentRef}</h4></p>
        </div>
        <h4 className='link-to-shop' onClick={() => navigate('/home')}>Seguir comprando</h4>
    </main>
    <NavMobile/>
    </>
  )
}

export default Success