import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ItemCourse = ({ element }) => {
  const { products } = useSelector((store) => store.products);
  const [product, setProduct] = useState({});

  useEffect(() => {
    nameProducts();
  }, []);

  const nameProducts = () => {
    const productInitial = element?.products[0];
    const filter = products?.filter(
      (item) => item.id == productInitial.productId
    );
    setProduct(filter);
  };

  return (
    <>
      <td>{product[0]?.name}</td>
      <td>{element?.products[0]?.amount} unidad</td>
      <td>{element?.state}</td>
      <td>
        {element?.sendTo?.direction},{element?.sendTo?.date?.toDate().toLocaleDateString()} {" "}
        {element?.sendTo?.time}:00
      </td>
    </>
  );
};

export default ItemCourse;
