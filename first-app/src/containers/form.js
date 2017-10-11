import React from 'react'


class SearchForm  extends React.Component{
  constructor(props){
    super(props)
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSumit = this.handleSumit.bind(this)
  }
  handleChange(event){
    this.setState({
      value: event.target.value
    })
    event.preventDefault()
  }
  handleSumit (event){
    event.preventDefault()
    alert('Sumit form: ' +  this.state.value)
  }
  render(){
    return (
      <div>
        {/* <form onSubmit={this.handleSumit}>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <input type="submit" value="submit"/>
        </form>

        <form onSubmit={this.handleSumit}>
          <label>Name: 
            <textarea value={this.state.value} onChange={this.handleChange}></textarea>
          </label>
          
          <input type="submit" value="submit"/>
        </form> */}

        <form onSubmit={this.handleSumit}>
            <select value={this.setState.value} onChange={this.handleChange}>
              <option value='HTML'> HTML </option>
              <option value='CSS'> Css </option>
              <option value='react JS'> React js </option>
              <option value='VUE js'> Vue js </option>
            </select>
           <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

export default SearchForm
