import React, { useEffect, useState } from "react";
import heartWhite from "/icons/heart-white.svg";
import heartPink from "/icons/heart-pink.svg";
import { updateFavoritesShops } from "../../redux/auth/authActions";
import { useDispatch, useSelector } from "react-redux";

const CardSaveFavorites = ({ id }) => {

    const [ favorite, setFavorite ] = useState(false);
    const dispatch = useDispatch();
    const { favoritesShops, userLogged } = useSelector(store => store.auth);

    useEffect(() => {
        validateFavoriteShop()
    },[])

    const validateFavoriteShop = () => {
        const filter = favoritesShops?.find(item => item == id)
        if(filter != null){
            setFavorite(true)
        }else{
            setFavorite(false)
        }
    }

    const handleSaveShop = (idShop) => {
        let arrayFavorites = [];
        if(favoritesShops.includes(idShop)){
          arrayFavorites = favoritesShops.filter(item => item !== idShop);
          setFavorite(false)
        }else {
          setFavorite(true)
          arrayFavorites = [...favoritesShops, idShop];
        }
        dispatch(updateFavoritesShops(userLogged.id, {favoritesShops: arrayFavorites}))
      }

  return (
    <>
      {favorite ? (
        <img src={heartPink} alt="" onClick={() => handleSaveShop(id)}/>
      ) : (
        <img src={heartWhite} alt="Icon for like" onClick={() => handleSaveShop(id)} />
      )}
    </>
  );
};

export default CardSaveFavorites;
