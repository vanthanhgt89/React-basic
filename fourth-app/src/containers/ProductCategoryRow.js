import React from 'react'

export default function ProductCategoryRow(props){
  let category = props.category
  return(
    <tr>
      <th colSpan='2'>
      {category}
      </th>
    </tr>
  )
}

