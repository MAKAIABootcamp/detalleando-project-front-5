import React, { useEffect, useState } from "react";
import test from "/test.jfif";
import heartWhite from "/icons/heart-white.svg";
import arrow from "/icons/arrow-down.svg";
import "./product.scss";
import NavDesktop from "../../components/nav-desktop/NavDesktop";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentOrder } from "../../redux/order/orderReducer";
import Swal from "sweetalert2";
import { setShowAddress } from "../../redux/auth/authReducer";
const Product = ({ isTypeSeller }) => {

  const navigate = useNavigate()
  const { idProduct } = useParams();
  const { products } = useSelector((store) => store.products);
  const { shops } = useSelector((store) => store.shops);
  const [product, setProduct] = useState('')
  const [shop, setShop] = useState('');
  const [shopProducts, setShopProducts] = useState([]);
  const [quantity, setQuantity] = useState(1)
  const { currentOrder } = useSelector(store => store.order);
  const { userLogged } = useSelector(store => store.auth);
  const dispatch = useDispatch()

  useEffect(() => {
    setProduct(products.find(item => item.id == idProduct))
    setShop(shops.find(shop => shop.id == product.shopId))
    setShopProducts(products.filter(item => (item.shopId == shop?.id && item?.id!= idProduct)))
  }, [product, shop]);

  const initializeOrder = () => {
    if (currentOrder) {
      const updatedOrder = {
        ...currentOrder,
        products: [
          ...currentOrder.products,
          { ...product, amount: quantity },
        ],
      };
      dispatch(setCurrentOrder(updatedOrder));
      Swal.fire({
        icon: 'success',
        title: 'Excelente!',
        text: 'El producto fue añadido al carrito con éxito!',
        footer: '<a href="/cart">Ir al carrito</a>'
      })
    } else if (currentOrder === null) {
      const order = {
        products: [{ ...product, amount: quantity }],
        sendTo: {
          direction: "",
          name:'',
          phone:'',
          date:'',
          time:'',
          additional:''
        },
        paymentRef: "",
        shopId: product.shopId,
        state: 'para pagar'
      };
      dispatch(setCurrentOrder(order))
      Swal.fire({
        icon: 'success',
        title: 'Excelente!',
        text: 'El producto fue añadido al carrito con éxito!',
        footer: '<a href="/cart">Ir al carrito</a>'
      })
    }
  };

  const increment = () => {
    setQuantity(quantity + 1)
}

const decrement = () => {
    if (quantity >1) {
        setQuantity(quantity - 1)
    }
}

const handleSelectChange = (event) => {
  setQuantity(event.target.value);
};

  return (
    !isTypeSeller && (
      <>
        <header>
          <NavDesktop />
        </header>
        <main className="product-main">
          <div className="desktop-product-container">
            <div className="main-image">
              <img src={product?.mainImage} alt={product?.name} className="main-product-image" />
              <figure className="back">
                <img src={arrow} alt="Icon for arrow" onClick={() => navigate(-1)}/>
              </figure>
              <figure className="like">
                <img src={heartWhite} alt="Icon for like" />
              </figure>
            </div>
            <div className="secondary-images">
              {
                product?.secondaryImages?.map((image, index) => (

                  <img src={image} alt={product?.name} key={index}/>

                ))
              }
            </div>
            <div className="product-info">
                <div>
              <p className="availability">En stock</p>
              <h2>{product?.name}</h2>
              <div className="desktop-price">
                <span>$ {product?.price}</span>
                <div className="desktop-quantity">
                  <label>Quantity</label>
                  <select name="quantity" value={quantity} onChange={handleSelectChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>
              <div className="desktop-shop-info">
                <p className="delivery">Delivery fee: ${shop?.deliveryPrice}</p>
                <div className="shop-info">
                  <img src={shop?.logo} alt={shop?.storeName} />
                  <h3>{shop?.storeName}</h3>
                </div>
              </div>
              <p className="description">Descripción del producto</p>
              <p>
              {product?.description}
              </p>
              </div>
              <button className="desktop-add-button" onClick={initializeOrder}>Add to order</button>
            </div>
            
          </div>
          <div className="more-products">
            <h4>Más de esa tienda</h4>
            <div className="shop-cards-container">
              {
                shopProducts?.map((item) => (
                  <div className="card">
                <img src={item.mainImage} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <div className="price">
                    <span>$ {item.price}</span>
                  </div>
                </div>
                <figure className="like">
                  <img src={heartWhite} alt="Icon for like" />
                </figure>
              </div>
                ))
              }
              
            </div>
          </div>
          <div className="product-footer">
            <div className="product-counter">
              <span onClick={decrement}>-</span>
              <p>{quantity}</p>
              <span onClick={increment}>+</span>
            </div>
            <div className="product-add" onClick={initializeOrder}>
              <h4>Add to order</h4>
              <span>$ {product?.price * quantity}</span>
            </div>
          </div>
        </main>
      </>
    )
  );
};

export default Product;
