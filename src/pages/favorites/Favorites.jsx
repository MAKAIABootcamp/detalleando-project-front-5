import React, { useEffect, useState } from 'react'
import NavMobile from '../../components/nav-mobile/NavMobile'
import arrow from "/icons/arrow-down.svg"
import test from "/test.jfif"
import heartPink from "/icons/heart-pink.svg"
import delivery from "/icons/delivery.svg"
import star from "/icons/star.svg"
import "./favorites.scss"
import NavDesktop from '../../components/nav-desktop/NavDesktop'
import { useNavigate } from 'react-router'
import OrderEmpty from '../../components/orderEmpty/OrderEmpty'
import { useSelector } from 'react-redux'

const Favorites = ({ isTypeSeller }) => {

    const [likedProducts, seeLikedProducts] = useState(true)
    const [likedShops, seeLikedShops] = useState(false)
    const [wishedProducts, setWishedProducts] = useState([]);
    const [wishedShops, setWishedShops] = useState([]);
    const navigate = useNavigate()
    const { products } = useSelector((store) => store.products);
    const { shops } = useSelector((store) => store.shops);
    const { favoritesShops, userLogged, favoritesProducts } = useSelector(
        (store) => store.auth
      );

    useEffect(() => {
        favoritesProductsUser()
        favoritesShopsUser()
    }, [])

    const handleClick = () => {
        if (likedProducts) {
            seeLikedProducts(false)
            seeLikedShops(true)
        }
        else if (likedShops) {
            seeLikedProducts(true)
            seeLikedShops(false)
        }
    }

    const favoritesProductsUser = () => {
        if (favoritesProducts?.length && products?.length) {
          const favoriteProducts = [];
          favoritesProducts.forEach((item) => {
            const favorite = products?.find((element) => element.id == item);
            favoriteProducts.push(favorite);
          });
          setWishedProducts(favoriteProducts);
        }
      };

      const favoritesShopsUser = () => {
        if (favoritesShops?.length && shops?.length) {
          const favoriteShops = [];
          favoritesShops.forEach((item) => {
            const favorite = shops?.find((element) => element.id == item);
            favoriteShops.push(favorite);
          });
          setWishedShops(favoriteShops);
        }
      };

  return !isTypeSeller && (
    <>
    <header>
        <NavDesktop />
    </header>
    <main className='favorites-main'>
        <div className='navigate-back'>
            <img src={arrow} alt="Icon for go back" className='arrow-back'/>
            <h3>Favoritos</h3>
        </div>
        <div className='desktop-favorites-container'>
        <div className='favorites-navigation'>
            <p onClick={handleClick} className={likedProducts? 'chosen' : ''}>Productos</p>
            <p onClick={handleClick} className={likedShops? 'chosen' : ''}>Tiendas</p>
        </div>
        {
            likedProducts && (favoritesProducts && favoritesProducts?.length ? 
            
        
        <div className='favorite-product-container'>
            {wishedProducts?.map((product) => (
            <div className='card'>
                <img src={product.mainImage} alt="" onClick={() => navigate(`/product/${product?.id}`)}/>
                <div>
                    <p>Cupcakes with cream cheese</p>
                    <div className='price'>
                        <h4>{product.name}</h4>
                        <span>$ {product.price}</span>
                    </div>
                </div>
                <figure className='like'>
                    <img src={heartPink} alt="Icon for like" />
                </figure>
            </div>
            ))}
            
        </div> :
        <OrderEmpty text={'Todavía no tienes productos favoritos'}/>)}
        {
            likedShops && (favoritesShops && favoritesShops?.length ?
        
        <div className='favorite-shop-container'>
            {
                wishedShops?.map((shop) => (
                <div className='shop-card'>
                    <img src={shop.backgroundImage} alt="" onClick={() => navigate(`/${shop?.id}`)}/>
                    <figure className='like'>
                        <img src={heartPink} alt="Icon for like" />
                    </figure>
                    <div className='shop-price'>
                        <div className='shop-info'>
                            <img src={shop.logo} alt="Icon for logo" />
                            <div>
                                <h4 onClick={() => navigate(`/${shop?.id}`)}>{shop.storeName}</h4>
                                <p>{shop.category}</p>
                            </div>
                        </div>
                        <div>
                            <div className='shop-stats'> 
                                <img src={delivery} alt="Icon for delivery" />
                                <span>$ {shop.delivery}</span>
                            </div>
                            <div className='shop-stats raiting'>
                                <img src={star} alt="Icon for raiting" />
                                <span>4.5</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                ))
            }
        
        </div> : <OrderEmpty text={'Todavía no tienes tiendas favoritas'}/>
        )}
        </div>
    </main>
    <div className='nav-mobile-favorites'>
        <NavMobile/>
    </div>
    </>
  )
}

export default Favorites