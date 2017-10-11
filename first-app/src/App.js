import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Warning from './containers/warning'
import ListComponent from './containers/list'
import SearchForm from './containers/form'
import Calculator from './containers/siftingState'
import Calculator2 from './containers/sifting2'
// import Todo from './containers/todo'
class App extends Component {
  constructor(){
    super()
    this.state = {
      value: '',
      warn: true,
      data: ['data1', '2', '3'] 
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSumit = this.handleSumit.bind(this)
  }

  handleClick(){
    this.setState(prevState => ({
      warn: !prevState.warn
    }))
  }
  handleChange(event){
    event.preventDefault()
    this.setState({value: event.target.value})
  }
  handleSumit(event){
    alert('sent form:' + this.state.value )
    event.preventDefault()
  }
  render() {
    return (
      <div className="App">
        <SearchForm />
        <form onSubmit={this.handleSubmit} >
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
           <input type="submit" value="submit" /> 
        </form>
        <h1>Type: {this.state.value}</h1>
        <Warning Warn={this.state.warn}/>
        <button onClick={this.handleClick}> 
          {this.state.warn ? 'ON' : 'OFF'}
        </button>
        <ListComponent data={this.state.data}/>
        <Calculator/>
        <Calculator2/>
        {/* <Todo /> */}
      </div>
    );
  }
}


export default App;
