import React from 'react'
import './saleCompleted.scss'
import Address from '../../components/address/Address'
import arrow from '/arrow-right.svg'
const SaleCompleted = () => {
  return (
    <table className='table-sale-completed'> 
        <tr> 
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Enviado</th>
            <th> </th>
        </tr>
        <tr> 
            <td>Cupcakes with cream cheese</td>
            <td>1 unidad</td>
            <td>$14</td>
            <td>Tunja, cll 12, Anna Bondarets</td>
            <td><img src={arrow} alt="arrow" /></td>
        </tr>
        <tr> 
            <td>Cupcakes with cream cheese</td>
            <td>1 unidad</td>
            <td>$14</td>
            <td>Tunja, cll 12, Anna Bondarets</td>
            <td><img src={arrow} alt="arrow" /></td>
        </tr>
        <tr> 
            <td>Cupcakes with cream cheese</td>
            <td>1 unidad</td>
            <td>$14</td>
            <td>Tunja, cll 12, Anna Bondarets</td>
            <td><img src={arrow} alt="arrow" /></td>
        </tr>
    </table>
  )
}

export default SaleCompleted