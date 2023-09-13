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
            <th>Estado</th>
            <th>Enviar</th>
            <th> </th>
        </tr>
        <tr> 
            <td>Cupcakes with cream cheese</td>
            <td>1 unidad</td>
            <td>Preparando</td>
            <td><Address/></td>
            <td><img src={arrow} alt="arrow" /></td>
        </tr>
        <tr> 
            <td>Cupcakes with cream cheese</td>
            <td>1 unidad</td>
            <td>Preparando</td>
            <td><Address/></td>
            <td><img src={arrow} alt="arrow" /></td>
        </tr>
        <tr> 
            <td>Cupcakes with cream cheese</td>
            <td>1 unidad</td>
            <td>Preparando</td>
            <td><Address/></td>
            <td><img src={arrow} alt="arrow" /></td>
        </tr>
    </table>
  )
}

export default SaleCompleted