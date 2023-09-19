import React, { useState , useEffect } from "react";
import Address from "../../components/address/Address";
import calendar from "/icons/calendar.svg";
import search from "/icons/search.svg";
import bouquet from "/icons/bouquet.svg";
import cake from "/icons/cake.svg";
import arte from "/icons/manualidades.svg";
import dress from "/icons/dress.svg";
import gift from "/icons/gift.svg";
import test from "/test.jfif";
import heartWhite from "/icons/heart-white.svg";
import delivery from "/icons/delivery.svg";
import star from "/icons/star.svg";
import NavMobile from "../../components/nav-mobile/NavMobile";
import "./home.scss";
import NavDesktop from "../../components/nav-desktop/NavDesktop";
import Banner from "../../components/home-banner/Banner";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fillShopsFromCollection } from "../../redux/shops/shopsActions";

const Home = ({ isTypeSeller }) => {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchValue, setSearchValue] = useState("");
    const [filteredShops, setFilteredShops] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { shops } = useSelector((store) => store.shops);

  useEffect(() => {
    dispatch(fillShopsFromCollection());
  }, []);
    // useEffect(() => 
    //     { 
    //       setFilteredShops(shops.filter(shop => shop.name.toLowerCase().includes(searchValue.toLowerCase())) );

    //     }, [searchValue, shops])
  

  return (
    !isTypeSeller && (
      <>
        <header>
          <NavDesktop />
          <Banner />
        </header>
        <main className="main-home">
          <div className="choose-address">
            <Address />
            <img src={calendar} alt="Icon for events" className="calendar" />
          </div>
          <div className="search">
            <input type="search" name="" id="" placeholder="Buscar" />
            <img src={search} alt="Icon for search" className="search-icon" />
          </div>
          <div className="categories">
            <div className="category category-blue" onClick={() => setSelectedCategory("Bouquets y arreglos")}>
              <p>Bouquets y arreglos</p>
              <img src={bouquet} alt="Icon for bouquets" />
            </div>
            <div className='category category-pink' onClick={() => setSelectedCategory("Pasteleria y confeteria")}>
                <p>Pasteleria y confeteria</p>
                <img src={cake} alt="Icon for pasteleria" />
            </div>
            <div className='category category-pink' onClick={() => setSelectedCategory("Artesanias")}>
                <p>Artesanias</p>
                <img src={arte} alt="Icon for artesanias" />
            </div>
            <div className='category category-blue' onClick={() => setSelectedCategory("Ropa y accesorios")}>
                <p>Ropa y accesorios</p>
                <img src={dress} alt="Icon for ropa" />
            </div>
            { selectedCategory !== "All" &&
            <div className='category category-peach' onClick={() => setSelectedCategory("All")}>
              <p>Todas categorías</p>
            <img src={gift} alt="Icon for gift" />
        </div>
            }
          </div>
          { selectedCategory === "All" &&
            <>
          <div className="section">
            <h2>Repetir orden</h2>
            <div className="cards-container">
              <div className="card">
                <img src={test} alt="" />
                <div>
                  <p>Cupcakes with cream cheese</p>
                  <div className="price">
                    <h4>Shop name</h4>
                    <span>$ 14</span>
                  </div>
                </div>
                <figure className="like">
                  <img src={heartWhite} alt="Icon for like" />
                </figure>
              </div>
            </div>
          </div>
          <div className="section">
            <h2>Productos favoritos</h2>
            <div className="cards-container">
              <div className="card" onClick={() => navigate("/product")}>
                <img src={test} alt="" />
                <div>
                  <p>Cupcakes with cream cheese</p>
                  <div className="price">
                    <h4>Shop name</h4>
                    <span>$ 14</span>
                  </div>
                </div>
                <figure className="like">
                  <img src={heartWhite} alt="Icon for like" />
                </figure>
              </div>
            </div>
          </div>
          </>}
          <div className="section">
            { selectedCategory!== "All" ? <h2>{selectedCategory}</h2> : <h2>Todas las tiendas</h2>}
            
            <div className="shops-cards-container">
              {shops?.map((shop) => {
                if (
                  selectedCategory === "All" ||
                  (shop.category &&
                    shop.category === selectedCategory)
                ) {
                  return (
                <div className="shop-card" onClick={() => navigate(`/${shop.id}`)} key={shop.id}>
                  <img src={shop?.backgroundImage} alt="" />
                  <figure className="like">
                    <img src={heartWhite} alt="Icon for like" />
                  </figure>
                  <div className="shop-price">
                    <div className="shop-info">
                      <img src={shop?.logo} alt="Icon for logo" />
                      <div>
                        <h4>{shop?.storeName}</h4>
                        <p>{shop?.category}</p>
                      </div>
                    </div>
                    <div>
                      <div className="shop-stats">
                        <img src={delivery} alt="Icon for delivery" />
                        <span>$ 2.5</span>
                      </div>
                      <div className="shop-stats raiting">
                        <img src={star} alt="Icon for raiting" />
                        <span>4.5</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}})}
            </div>
          </div>
        </main>
        <div className="mobile-navbar">
          <NavMobile />
        </div>
      </>
    )
  );
};

export default Home;
