import React from "react";
import "./saleCompleted.scss";
import Address from "../../components/address/Address";
import arrow from "/arrow-right.svg";
import { useNavigate } from "react-router-dom";
import ItemComplete from "../itemComplete/ItemComplete";
const SaleCompleted = ({ order }) => {
    
  const navigate = useNavigate();
  
  return (
    <table className="table-sale-completed">
      <tr>
        <th>Nombre</th>
        <th>Cantidad</th>
        <th>Precio</th>
        <th>Enviado</th>
        <th> </th>
      </tr>
      {order?.map((item) => (
        <tr key={item?.id}>
            <ItemComplete element={item}/>
          <td onClick={() => navigate(`/OrderDetailSeller/${item?.id}`)}>
            <img
              src={arrow}
              alt="arrow"
            />
          </td>
        </tr>
      ))}
    </table>
  );
};

export default SaleCompleted;
