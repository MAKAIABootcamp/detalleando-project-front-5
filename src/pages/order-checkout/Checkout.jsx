import React, { useEffect, useState } from 'react'
import NavMobile from '../../components/nav-mobile/NavMobile'
import test from "/test.jfif"
import trash from "/icons/trash-bin.svg"
import edit from "/icons/edit.svg"
import mastercard from "/icons/mastercard.svg"
import visa from "/icons/visa.svg";
import amex from "/icons/american-express.svg";
import Address from '../../components/address/Address'
import Time from '../../components/time/Time'
import "./checkout.scss"
import NavDesktop from '../../components/nav-desktop/NavDesktop'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, setAdditionalInfo, setAmountProduct, setCurrentOrder, setOrderInProcess } from '../../redux/order/orderReducer'
import Swal from 'sweetalert2'
import { createAnOrderAction } from '../../redux/order/orderActions'
import { fireStore } from '../../firebase/firebaseConfig'
import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from '@firebase/firestore'

const Checkout = ({ isTypeSeller }) => {

    const navigate = useNavigate();
    const { currentOrder } = useSelector(store => store.order);
    const { shops } = useSelector((store) => store.shops);
    const { userLogged } = useSelector(store => store.auth);
    const [shop, setShop] = useState('');
    const [editAmount, setEditAmount] = useState(false)
    const [total, setTotal] = useState('')
    const dispatch = useDispatch()
    
    useEffect(() => {
        setShop(shops.find(shop => shop.id == currentOrder?.shopId))
        setTotal(currentOrder?.products.reduce(
            (acc, product) => acc + product.price * product.amount,
            0
          ))
          console.log(currentOrder);
      }, [currentOrder.products, currentOrder.paymentMethod])

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

      const addInfo = (event) => {
        const info = event.target.value
        dispatch(setAdditionalInfo({
          additional: info
        }));
      };

      const handleSelectChange = (index, event) => {
            dispatch(setAmountProduct({
              index, amount: event.target.value
            }));
          };

          const deleteOneProduct = (id) => {
            Swal.fire({
              title: 'Quieres eliminar el producto?',
              showCancelButton: true,
              confirmButtonText: 'Eliminar',
            }).then((result) => {
              if (result.isConfirmed) {
                dispatch(deleteProduct(id))
              } 
            })
          }

          const sendOrder = () => {
            Swal.fire({
              title: '¿Quieres proceder al pago?',
              showCancelButton: true,
              cancelButtonText: 'Cancelar',
              confirmButtonText: 'Proceder',
            }).then((result) => {
              if (result.isConfirmed) {
                const productArray = []
            currentOrder?.products?.map((product) => {
            const newProduct = {
                amount: product.amount,
                productId: product.id
            }
            productArray.push(newProduct)
        })
            const newOrder = {
                shopId: shop.id,
                userId: userLogged.id,
                products: productArray,
                state: 'inicializado',
                sendTo: currentOrder.sendTo,
                paymentRef: currentOrder.paymentRef
            }
            dispatch(createAnOrderAction(newOrder))
            dispatch(setOrderInProcess(currentOrder))
            handleSelect()
            navigate('/purchase-success')
              } 
            })
            
        }

        const handleSelect = async () => {
          //check whether the group(chats in firestore) exists, if not create
          const combinedId =userLogged.id + shop.id
          try {
            const res = await getDoc(doc(fireStore, "chats", combinedId));
      
            if (!res.exists()) {
              //create a chat in chats collection
              await setDoc(doc(fireStore, "chats", combinedId), { messages: [] });
      
              //create user chats
              await updateDoc(doc(fireStore, "userChats", userLogged.id), {
                [combinedId + ".userInfo"]: {
                  uid: shop.id,
                  displayName: shop.storeName,
                  photoURL: shop.logo,
                },
                [combinedId + ".date"]: serverTimestamp(),
              });
      
              await updateDoc(doc(fireStore, "userChats", shop.id), {
                [combinedId + ".userInfo"]: {
                  uid: userLogged.id,
                  displayName: userLogged.displayName,
                  photoURL: userLogged.photoURL,
                },
                [combinedId + ".date"]: serverTimestamp(),
              });
            }
          } catch (err) {
            console.log(err);
          }
        };

  return !isTypeSeller && (
    <>
    <header>
        <NavDesktop />
    </header>
    <main className='checkout-main'>
        <h1>Proceso del pago</h1>
        <div className='desktop-checkout-container'>
        <div className='order-details'>
            <h2>Detalles de la orden</h2>
            {
                currentOrder?.products.map((product, index) => (
                    <div className='product-info' key={index}>
                <img src={product.mainImage} alt={product.name} />
                <div className='info-text'>
                    <div>
                        <h4>{product.name}</h4>
                        <img src={trash} alt="Icon for delete" className='icon delete' onClick={() => deleteOneProduct(product.id)}/>
                    </div>
                    <div>
                        <p>{shop?.storeName}</p>
                        <div className='price-amount'>
                        <div>
                            <img src={edit} alt="Icon for edit" className='icon' onClick={() => setEditAmount(!editAmount)}/>
                            { editAmount? <select name="quantity" value={product.amount} onChange={(e) => handleSelectChange(index, e)}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                          </select> :
                            <span>x{product.amount}</span>}
                        </div>
                        <span className='price'>${product.price * product.amount}</span>
                        </div>
                    </div>
                </div>
            </div>
                ))
            }
            
            <div>
                <Address/>
                <Time/>
            </div>
            <div className='order-aditional'>
                <p>Escribe informacion adicional</p>
                <textarea cols="30" rows="3" placeholder='Escribe algo' onChange={(e) => addInfo(e)}></textarea>
            </div>
        </div>
        <div className='payment-details'>
            <h2>Detalles del pago</h2>
            <div className='payment-method'>
                <p onClick={() => navigate("/payment-methods")}>{userLogged?.payment?.length > 0 ? 'Cambiar metodo del pago' : "Añadir nuevo metodo del pago"}</p>
                { userLogged?.payment?.length > 0 &&
                    
                        <div className='method'>
                            <img src={getInfoCard(currentOrder?.paymentMethod)} alt="" />
                            <span>{maskCardNumber(currentOrder?.paymentMethod)}</span>
                        </div>
                }
                
            </div>
            <div className='payment-discount'>
                <p>Cupón</p>
                <div>
                    <input type="text" />
                    <button>Aplicar</button>
                </div>
            </div>
            <div className='order-total'>
                <div className='total-price'>
                    <p>Subtotal</p>
                    <span>${total}</span>
                </div>
                <div className='total-price'>
                    <p>Descuento</p>
                    <span>$0</span>
                </div>
                <div className='total-price'>
                    <p>Domicilio</p>
                    <span>${shop?.deliveryPrice}</span>
                </div>
                <hr />
                <div className='total-price total'>
                    <p>Total a pagar</p>
                    <span>${parseInt(total) + parseInt(shop?.deliveryPrice)}</span>
                </div>
            </div>
        </div>
        </div>
        <button className='checkout-button' onClick={sendOrder}>Ir al pago</button>
    </main>
    <div className='checkout-nav'>
        <NavMobile/>
    </div>
    </>
  )
}

export default Checkout