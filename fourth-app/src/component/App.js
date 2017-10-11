import React from 'react';
import SearchBar from '../containers/SearchBar'
import ProductTable from '../containers/ProductTable'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      product: [
        {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
        {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
        {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
        {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
        {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
        {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
      ],
      filter: '',
      stocked: false
    }
  }
  handleInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(event.target);
    console.log(value);
    this.setState({
      [name]: value
    });
  }
  render(){
    return(
    <div>
    <SearchBar 
    search={this.state.filter} 
    isStockOnly={this.state.stocked} 
    onInputChanged={this.handleInputChange.bind(this)}
   />
    <ProductTable 
    product={this.state.product} 
    search={this.state.filter} 
    isStockOnly={this.state.stocked}/>
    </div>
  )
  }
}

export default App;
