import React, { useState } from 'react'
import NavMobile from '../../components/nav-mobile/NavMobile'
import arrow from "/icons/arrow-down.svg"
import test from "/test.jfif"
import heartPink from "/icons/heart-pink.svg"
import delivery from "/icons/delivery.svg"
import star from "/icons/star.svg"
import "./favorites.scss"

const Favorites = ({ isTypeSeller }) => {

    const [likedProducts, seeLikedProducts] = useState(true)
    const [likedShops, seeLikedShops] = useState(false)

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
  return !isTypeSeller && (
    <>
    <main className='favorites-main'>
        <div className='navigate-back'>
            <img src={arrow} alt="Icon for go back" />
            <h3>Favoritos</h3>
        </div>
        <div className='favorites-navigation'>
            <p onClick={handleClick} className={likedProducts? 'chosen' : ''}>Productos</p>
            <p onClick={handleClick} className={likedShops? 'chosen' : ''}>Tiendas</p>
        </div>
        {
            likedProducts && 
        
        <div className='favorite-product-container'>
            <div className='card'>
                <img src={test} alt="" />
                <div>
                    <p>Cupcakes with cream cheese</p>
                    <div className='price'>
                        <h4>Shop name</h4>
                        <span>$ 14</span>
                    </div>
                </div>
                <figure className='like'>
                    <img src={heartPink} alt="Icon for like" />
                </figure>
            </div>
            <div className='card'>
                <img src={test} alt="" />
                <div>
                    <p>Cupcakes with cream cheese</p>
                    <div className='price'>
                        <h4>Shop name</h4>
                        <span>$ 14</span>
                    </div>
                </div>
                <figure className='like'>
                    <img src={heartPink} alt="Icon for like" />
                </figure>
            </div>
        </div>
        }
        {
            likedShops &&
        
        <div className='favorite-shop-container'>
        <div className='shop-card'>
                    <img src={test} alt="" />
                    <figure className='like'>
                        <img src={heartPink} alt="Icon for like" />
                    </figure>
                    <div className='shop-price'>
                        <div className='shop-info'>
                            <img src={test} alt="Icon for logo" />
                            <div>
                                <h4>Shop name</h4>
                                <p>Category</p>
                            </div>
                        </div>
                        <div>
                            <div className='shop-stats'> 
                                <img src={delivery} alt="Icon for delivery" />
                                <span>$ 2.5</span>
                            </div>
                            <div className='shop-stats raiting'>
                                <img src={star} alt="Icon for raiting" />
                                <span>4.5</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
        </div>
        }
    </main>
    <NavMobile/>
    </>
  )
}

export default Favorites