import React from "react";
import "./saleCo.scss";
import Address from "../../components/address/Address";
import arrow from "/arrow-right.svg";
import { useNavigate } from "react-router-dom";
import ItemCourse from "../itemCourse/ItemCourse";

const saleCourse = ({ order }) => {
  const navigate = useNavigate();

  return (
    <table className="table-sale-course">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Estado</th>
          <th>Enviar</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {order?.map((item) => (
          <tr key={item?.id}>
            <ItemCourse element={item} />
            <td onClick={() => navigate(`/OrderDetailSeller/${item?.id}`)}>
              <img src={arrow} alt="arrow" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default saleCourse;
