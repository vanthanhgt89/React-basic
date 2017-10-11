import React from 'react'

export default function ProductCategoryRow(props){
// console.log(props.product);
  return(
    <tr>
      <td>{props.product.name}</td>
      <td>{props.product.price}</td>
    </tr>
  )
}