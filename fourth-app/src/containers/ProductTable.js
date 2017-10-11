import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'


export default function ProductTable(props) {
  // let listCategory = new Set()
  let rows = []
  let lastCategory = null
  let isFilter = props.search
  let isStocked = props.isStockOnly
  props.product.forEach((product, index) => {
    if(product.name.indexOf(isFilter) === -1 ) return 
    if(isStocked && !product.stocted) return 
    if(product.category !== lastCategory){
      rows.push(
      <ProductCategoryRow 
      key={product.name}
      category={product.category}/>)
    }
    rows.push(
    <ProductRow product={product} 
      key={product.price}
    />)
    lastCategory = product.category
  })
  return(
    <table>
      <thead> 
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>

       {rows}

      </tbody>
    </table>
  )
}