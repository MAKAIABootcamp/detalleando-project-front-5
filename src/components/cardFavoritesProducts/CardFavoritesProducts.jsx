import React, { useEffect, useState } from "react";
import heartWhite from "/icons/heart-white.svg";
import heartPink from "/icons/heart-pink.svg";
import { useDispatch, useSelector } from "react-redux";
import { updateFavoritesProducts } from "../../redux/auth/authActions";

const CardFavoritesProducts = ({ idProduct }) => {
  const [favorite, setFavorite] = useState(false);
  const dispatch = useDispatch();
  const { favoritesProducts, userLogged } = useSelector((store) => store.auth);

  useEffect(() => {
    validateFavoriteProduct();
  }, []);

  const validateFavoriteProduct = () => {
    const filter = favoritesProducts.find(item => item == idProduct);
    if(filter != null){
        setFavorite(true)
    }else{
        setFavorite(false)
    }
  };

  const handleSaveProduct = (id) => {
    let arrayFavorites = [];
    if (favoritesProducts.includes(id)) {
      arrayFavorites = favoritesProducts.filter((item) => item !== id);
      setFavorite(false);
    } else {
      arrayFavorites = [...favoritesProducts, id];
      setFavorite(true)
    }
    dispatch(
      updateFavoritesProducts(userLogged.id, {
        favoritesProducts: arrayFavorites,
      })
    );
  };

  return (
    <>
        {favorite ? (
        <img src={heartPink} alt="" onClick={() => handleSaveProduct(idProduct)} />
      ) : (
        <img src={heartWhite} alt="Icon for like" onClick={() => handleSaveProduct(idProduct)} />
      )}
    </>
  );
};

export default CardFavoritesProducts;
