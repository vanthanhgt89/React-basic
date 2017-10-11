import React from 'react'

export default function SearchBar(props) {
  return(
    <form >
      <input name="filter" required type="text" value={props.search} onChange={props.onInputChanged}/>
      <p>
      <input name="stocked" id="stocked"
      type="checkbox" 
      checked={props.isStockOnly} 
      onChange={props.onInputChanged}/>
      <label htmlFor="stocked">Only show product in stock</label>
      </p>
    </form>
  )
}