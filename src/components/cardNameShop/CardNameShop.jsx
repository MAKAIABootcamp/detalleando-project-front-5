import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CardNameShop = ({ shop }) => {
  const { shops } = useSelector((store) => store.shops);
  const [name, setName] = useState("");

  useEffect(() => {
    validateShop();
  }, []);
  
  const validateShop = () => {
    const shopProduct = shops.find((item) => item.id == shop);
    setName(shopProduct?.storeName);
  };

  return <>{name ? <h4>{name}</h4> : <h4>Shop name</h4>}</>;
};

export default CardNameShop;
