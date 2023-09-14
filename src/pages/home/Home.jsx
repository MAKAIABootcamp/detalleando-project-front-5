import React from 'react'
import Address from '../../components/address/Address'
import calendar from "/icons/calendar.svg"
import search from "/icons/search.svg"
import bouquet from "/icons/bouquet.svg"
import cake from "/icons/cake.svg"
import arte from "/icons/manualidades.svg"
import dress from "/icons/dress.svg"
import test from "/test.jfif"
import heartWhite from "/icons/heart-white.svg"
import delivery from "/icons/delivery.svg"
import star from "/icons/star.svg"
import NavMobile from '../../components/nav-mobile/NavMobile'
import "./home.scss"

const Home = ({ isTypeSeller }) => {
  return !isTypeSeller && (
    <>
    <main>
        <div className='choose-address'>
            <Address/>
            <img src={calendar} alt="Icon for events" className='calendar'/>
        </div>
        <div className='search'>
            <input type="search" name="" id="" placeholder='Buscar'/>
            <img src={search} alt="Icon for search" className='search-icon'/>
        </div>
        <div className='categories'>
            <div className='category category-blue'>
                <p>Bouquets y arreglos</p>
                <img src={bouquet} alt="Icon for bouquets" />
            </div>
            <div className='category category-pink'>
                <p>Pasteleria y confeteria</p>
                <img src={cake} alt="Icon for pasteleria" />
            </div>
            <div className='category category-pink'>
                <p>Artesanias</p>
                <img src={arte} alt="Icon for artesanias" />
            </div>
            <div className='category category-blue'>
                <p>Ropa y accesorios</p>
                <img src={dress} alt="Icon for ropa" />
            </div>
        </div>
        <div className='section'>
            <h2>Repetir orden</h2>
            <div className='cards-container'>
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
                        <img src={heartWhite} alt="Icon for like" />
                    </figure>
                </div>
            </div>
        </div>
        <div className='section'>
            <h2>Productos favoritos</h2>
            <div className='cards-container'>
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
                        <img src={heartWhite} alt="Icon for like" />
                    </figure>
                </div>
            </div>
        </div>
        <div className='section'>
            <h2>Todas las tiendas</h2>
            <div className='shops-cards-container'>
                <div className='shop-card'>
                    <img src={test} alt="" />
                    <figure className='like'>
                        <img src={heartWhite} alt="Icon for like" />
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
        </div>
        
    </main>
    <NavMobile/>
    </>
  )
}

export default Home