import React, { useState, useEffect } from "react";
import Address from "../../components/address/Address";
import calendar from "/icons/calendar.svg";
import searchIcon from "/icons/search.svg";
import bouquet from "/icons/bouquet.svg";
import cake from "/icons/cake.svg";
import arte from "/icons/manualidades.svg";
import dress from "/icons/dress.svg";
import gift from "/icons/gift.svg";
import test from "/test.jfif";
import heartWhite from "/icons/heart-white.svg";
import heartPink from "/icons/heart-pink.svg";
import delivery from "/icons/delivery.svg";
import star from "/icons/star.svg";
import trash from "/icons/trash-bin.svg";
import NavMobile from "../../components/nav-mobile/NavMobile";
import "./home.scss";
import NavDesktop from "../../components/nav-desktop/NavDesktop";
import Banner from "../../components/home-banner/Banner";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fillShopsFromCollection } from "../../redux/shops/shopsActions";
import { fillProductsFromCollection } from "../../redux/products/productsActions";
import { searchProducts } from "../../redux/products/productsReducer";
import { updateFavoritesShops } from "../../redux/auth/authActions";
import CardSaveFavorites from "../../components/cardSaveFavorites/CardSaveFavorites";
import CardFavoritesProducts from "../../components/cardFavoritesProducts/CardFavoritesProducts";
import CardNameShop from "../../components/cardNameShop/CardNameShop";

const Home = ({ isTypeSeller }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [wishedProducts, setWishedProducts] = useState([]);
  // const [searchValue, setSearchValue] = useState("");
  // const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeSearch, setActiveSearch] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { shops } = useSelector((store) => store.shops);
  const { products, search } = useSelector((store) => store.products);
  const { favoritesShops, userLogged, favoritesProducts } = useSelector(
    (store) => store.auth
  );

  useEffect(() => {
    dispatch(fillShopsFromCollection());
    dispatch(fillProductsFromCollection());
    favoritesProductsUser();
  }, []);

  const searchProductsHome = (e) => {
    const searchParam = e.target.value;

    if (searchParam.length > 1) {
      setActiveSearch(true);
      const filter = products?.filter((product) =>
        product.name.toLowerCase().includes(searchParam.toLowerCase())
      );
      dispatch(searchProducts(filter));
    }
    if (!searchParam.length) {
      setActiveSearch(false);
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


  return (
    !isTypeSeller && (
      <>
        <header>
          <NavDesktop searchProductsHome={searchProductsHome} setActiveSearch={setActiveSearch}/>
          <Banner />
        </header>
        <main className="main-home">
          <div className="choose-address">
            <Address />
            <img src={calendar} alt="Icon for events" className="calendar" />
          </div>
          <div className="search">
            <input
              type="search"
              placeholder="Buscar"
              onChange={searchProductsHome}
            />
            <img
              src={searchIcon}
              alt="Icon for search"
              className="search-icon"
            />
            <img
              src={trash}
              alt="Icon for delete"
              className="clear-icon"
              onClick={() => setActiveSearch(false)}
            />
          </div>
          {activeSearch && search?.length > 0 ? 
            <div className="section">
              <div className="cards-container">
                {search.map((item) => (
                  <div className="card">
                    <img src={item.mainImage} alt={item.name} />
                    <div>
                      <p>{item.name}</p>
                      <div className="price">
                        <h4>Shop name</h4>
                        <span>$ {item.price}</span>
                      </div>
                    </div>
                    <figure className="like">
                      <img src={heartWhite} alt="Icon for like" />
                    </figure>
                  </div>
                ))}
              </div>

            </div>
            : <>
              <div className="categories">
                <div
                  className="category category-blue"
                  onClick={() => setSelectedCategory("Bouquets y arreglos")}
                >
                  <p>Bouquets y arreglos</p>
                  <img src={bouquet} alt="Icon for bouquets" />

                </div>
                <div
                  className="category category-pink"
                  onClick={() => setSelectedCategory("Pastelería y confitería")}
                >
                  <p>Pastelería y confitería</p>
                  <img src={cake} alt="Icon for pasteleria" />
                </div>
                <div
                  className="category category-blue"
                  onClick={() => setSelectedCategory("Artesanías")}
                >
                  <p>Artesanías</p>
                  <img src={arte} alt="Icon for artesanias" />
                </div>
                <div
                  className="category category-pink"
                  onClick={() => setSelectedCategory("Ropa y accesorios")}
                >
                  <p>Ropa y accesorios</p>
                  <img src={dress} alt="Icon for ropa" />
                </div>
                {selectedCategory !== "All" && 
                  <div
                    className="category category-peach"
                    onClick={() => setSelectedCategory("All")}
                  >
                    <p>Todas las categorías</p>
                    <img src={gift} alt="Icon for gift" />
                  </div>
                }
              </div>
              {selectedCategory === "All" && 
                <>
                  {/* <div className="section">
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
                  </div> */}
                  {products.length > 0 && favoritesProducts ? (
                    <div className="section">
                      <h2>Productos favoritos</h2>
                      <div className="cards-container">
                        {wishedProducts?.map((element) => (
                          <div
                            className="card"
                            key={element?.id}
                          >
                            <img src={element?.mainImage} alt="" onClick={() => navigate(`/product/${element?.id}`)} />
                            <div>
                              <p onClick={() => navigate(`/product/${element?.id}`)}>{element?.name}</p>
                              <div className="price" onClick={() => navigate(`/product/${element?.id}`)}>
                                <CardNameShop shop={element?.shopId} />
                                <span>$ {element?.price}</span>
                              </div>
                            </div>
                            <figure className="like">
                              <CardFavoritesProducts idProduct={element?.id} />
                            </figure>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </>
              }
              <div className="section">
                {selectedCategory !== "All" ? 
                  <h2>{selectedCategory}</h2>
                 : 
                  <h2>Todas las tiendas</h2>
                }
                <div className="shops-cards-container">
                  {shops?.map((shop) => {
                    if (
                      selectedCategory === "All" ||
                      (shop.category && shop.category === selectedCategory)
                    ) {
                      return (
                        <div className="shop-card" key={shop.id}>
                          <img
                            src={shop?.backgroundImage}
                            alt=""
                            onClick={() => navigate(`/${shop.id}`)}
                          />
                          <figure className="like">
                            <CardSaveFavorites id={shop?.id} />
                          </figure>
                          <div
                            className="shop-price"
                            onClick={() => navigate(`/${shop.id}`)}
                          >
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
                                <span>$ {shop?.deliveryPrice}</span>
                              </div>
                              <div className="shop-stats raiting">
                                <img src={star} alt="Icon for raiting" />
                                <span>4.5</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  })}
                </div>
              </div>
            </>
          }
        </main>
        <div className="mobile-navbar">
          <NavMobile />
        </div>
      </>
    )
  )
}

export default Home;
