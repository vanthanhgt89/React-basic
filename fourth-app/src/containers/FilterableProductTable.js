import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
export default function FilterableProductTable(props) {
  return(
    <div>
    <SearchBar 
    search={props.filterProduct} 
    isStockOnly={props.checked} 
    onInputChanged={props.onInputChanged}
   />
    <ProductTable 
    product={props.product} 
    search={props.filterProduct} 
    isStockOnly={props.checked}/>
    </div>
  )
}