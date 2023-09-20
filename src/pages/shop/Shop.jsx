import React, { useEffect, useState } from "react";
import Address from "../../components/address/Address";
import test from "/test.jfif";
import delivery from "/icons/delivery.svg";
import star from "/icons/star.svg";
import searchIcon from "/icons/search.svg";
import heartWhite from "/icons/heart-white.svg";
import cake from "/icons/cake.svg";
import choco from "/icons/chocolate.svg";
import cupcake from "/icons/cupcake.svg";
import croissant from "/icons/croissant.svg";
import chocoBox from "/icons/chocolate-box.svg";
import potted from "/icons/plant.svg";
import terrarium from "/icons/terrarium.svg";
import sweetBouquet from "/icons/bouquet-sweet.svg";
import bouquet from "/icons/bouquet.svg";
import toy from "/icons/teddy-bear.svg";
import art from "/icons/art.svg";
import beauty from "/icons/cosmetics.svg";
import home from "/icons/home-color.svg";
import kitchen from "/icons/kitchen.svg";
import otherArt from "/icons/handmade.svg";
import flowers from "/icons/flower.svg";
import watch from "/icons/watch.svg";
import ring from "/icons/ring.svg";
import earring from "/icons/earrings.svg";
import dress from "/icons/dress.svg";
import shirt from "/icons/clothes-man.svg";
import child from "/icons/child-clothes.svg";
import mirror from "/icons/mirror.svg";
import trash from "/icons/trash-bin.svg";
import NavMobile from "../../components/nav-mobile/NavMobile";
import "./shop.scss";
import NavDesktop from "../../components/nav-desktop/NavDesktop";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getShopById } from "../../services/shopsService";
import { getShopProductFromCollection } from "../../redux/products/productsActions";
import { searchProducts } from "../../redux/products/productsReducer";

const Shop = ({ isTypeSeller }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { idShop } = useParams();
  const [shop, setShop] = useState('');
  const [shopProducts, setShopProducts] = useState([]);
  const [categoriesShop, setCategoriesShop] = useState([])
  const [activeSearch, setActiveSearch] = useState(false);
  const { products, search } = useSelector((store) => store.products);
  const { shops } = useSelector((store) => store.shops);

  useEffect(() => {
    // dispatch(getShopProductFromCollection(idShop));
    // getShop();
    setShop(shops.find(shop => shop.id == idShop))
    setShopProducts(products.filter(product => product.shopId == idShop))
    getCategories()
  }, [shop]);

  const searchProductsHome = (e) => {
    const searchParam = e.target.value;

    if (searchParam.length > 1) {
        setActiveSearch(true);
        const filter = shopProducts?.filter(product => product.name.toLowerCase().includes(searchParam.toLowerCase()))
        dispatch(searchProducts(filter));
    }
}

  const getCategories = () => {
    if (shop.category === "Bouquets y arreglos") {
      setCategoriesShop([
        { name: "Ramos", image: bouquet },
        { name: "Ramos dulces", image: sweetBouquet },
        { name: "Plantas de interior", image: potted },
        { name: "Terrarios", image: terrarium },
        { name: "Más flores", image: flowers },
      ])
    }
    else if (shop.category === "Pasteleria y confeteria") {
      setCategoriesShop([
        { name: "Tortas", image: cake },
        { name: "Chocolate", image: choco },
        { name: "Cupcakes", image: cupcake },
        { name: "Panadería", image: croissant },
        { name: "Más dulces", image: chocoBox },
      ])}
    else if (shop.category === "Artesanias") {
      setCategoriesShop([
        { name: "Juguetes", image: toy },
        { name: "Arte", image: art },
        { name: "Belleza", image: beauty },
        { name: "Para la casa", image: home },
        { name: "Para la cocina", image: kitchen },
        { name: "Más artesanias", image: otherArt },
      ])
    }
    else if (shop.category === "Ropa y accesorios") {
      setCategoriesShop([
        { name: "Relojes", image: watch },
        { name: "Anillos", image: ring },
        { name: "Aretes", image: earring },
        { name: "Ropa para mujer", image: dress },
        { name: "Ropa para hombre", image: shirt },
        { name: "Ropa para niño", image: child },
        { name: "Más articulos", image: mirror },
      ])
    }
}
  // const getShop = async () => {
  //   try {
  //     const response = await getShopById(idShop);
  //     setShop(response);
  //     return response;
  //   } catch (error) {
  //     console.log(error);
  //     return null
  //   }
  // };

  return (
    !isTypeSeller && (
      <>
        <header>
          <NavDesktop />
        </header>
        <main className="shop-main">
          <div className="shop-address">
            <Address />
          </div>
          <div className="shop-desktop-layout">
            <div className="shop-main-image">
              <img src={shop?.backgroundImage} alt={shop?.name} />
            </div>
            <div>
              <div className="shop-page-info">
                <img src={shop?.logo} alt="Icon for logo" />
                <div>
                  <h2>{selectedShop?.storeName}</h2>
                  <p>{selectedShop?.description}</p>
                </div>
              </div>
              <div className="stats">
                <div className="shop-stats">
                  <img src={delivery} alt="Icon for delivery" />
                  <span>$ {shop?.deliveryPrice}</span>
                </div>
                <div className="shop-stats raiting">
                  <img src={star} alt="Icon for raiting" />
                  <span>4.5</span>
                </div>
              </div>
              <div className="shop-options">
                <div className="search">
                  <input
                    type="search"
                    name=""
                    id=""
                    placeholder="Buscar en la tienda"
                    onChange={searchProductsHome}
                  />
                  <img
                    src={searchIcon}
                    alt="Icon for search"
                    className="search-icon"
                  />
                  <img src={trash} alt="Icon for delete" className="clear-icon" onClick={()=>setActiveSearch(false)}/>
                </div>
                <div className="favorite">
                  <img src={heartWhite} alt="Icon for like" />
                  <p>Favorito</p>
                </div>
              </div>
            </div>
          </div>
          <div className="shop-main-content">
            <div className="categories-shop">
              {categoriesShop.map((category) => (
                <div className="category" key={category.name}>
                  <img src={category.image} alt={category.name} />
                  <p>{category.name}</p>
                </div>
              ))}
            </div>
            <div>
              { activeSearch && search?.length > 0 ? 
              <div className="shop-section">
                <div className="shop-cards-container">
                {
                  search.map((item) => (
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
             : <>
              <div className="shop-section">
                <h2>Los mas vendidos</h2>
                <div className="shop-cards-container">
                  <div className="card">
                    <img src={test} alt="" />
                    <div>
                      <h4>Cupcakes with cream cheese</h4>
                      <div className="price">
                        <span>$ 14</span>
                      </div>
                    </div>
                    <figure className="like">
                      <img src={heartWhite} alt="Icon for like" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="shop-section">
                <h2>Productos</h2>
                <div className="shop-cards-container" >
                {shopProducts?.map((product) => (
                  
                    <div className="card" key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
                      <img src={product?.mainImage} alt={product?.name} />
                      <div>
                        <h4>{product?.name}</h4>
                        <div className="price">
                          <span>$ {product?.price}</span>
                        </div>
                      </div>
                      <figure className="like">
                        <img src={heartWhite} alt="Icon for like" />
                      </figure>
                    </div>
                  
                ))}
                </div>
              </div>
              </>}
            </div>
          </div>
        </main>
        <div className="shop-nav">
          <NavMobile />
        </div>
      </>
    )
  );
};

export default Shop;
