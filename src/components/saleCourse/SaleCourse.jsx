import React from 'react'
import './saleCo.scss'
import Address from '../../components/address/Address'
import arrow from '/arrow-right.svg'
import { useNavigate } from 'react-router-dom'
const saleCourse = ({ handleOrderDetSeller }) => {
    const navigate = useNavigate()
    // const handleOrderDetSeller = () => {
    //     navigate("/OrderDetailSeller");
    //   };
  return (
    <table className='table-sale-course'> 
        <tr> 
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Estado</th>
            <th>Enviar</th>
            <th> </th>
        </tr>
        <tr> 
            <td>Cupcakes with cream cheese</td>
            <td>1 unidad</td>
            <td>Preparando</td>
            <td>Tunja, cll 12, 22.12.23 19:00</td>
            <td><img src={arrow} alt="arrow"  
            onClick={() => handleOrderDetSeller("saleCourse")}
            /></td>
        </tr>
        <tr> 
            <td>Cupcakes with cream cheese</td>
            <td>1 unidad</td>
            <td>Preparando</td>
            <td>Tunja, cll 12, 22.12.23 19:00</td>
            <td><img src={arrow} alt="arrow" 
             onClick={() => handleOrderDetSeller("saleCourse")}
            /></td>
        </tr>
        <tr> 
            <td>Cupcakes with cream cheese</td>
            <td>1 unidad</td>
            <td>Preparando</td>
            <td>Tunja, cll 12, 22.12.23 19:00</td>
            <td><img src={arrow} alt="arrow" 
             onClick={() => handleOrderDetSeller("saleCourse")}
            /></td>
        </tr>
    </table>
  )
}

export default saleCourse