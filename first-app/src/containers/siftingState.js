import React from 'react'
class BoilingVerdict extends React.Component{
  constructor(props){
    super(props)

  }

  render (){
    if(this.props.celsius >= 100){
      return (<h1>Water boiled</h1>)
    }
    return (<h1>Water is not boid</h1>)
  }
  
}

class Calculator extends React.Component{
  constructor(props){
    super(props)
    this.state = {temperature: ''}
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    event.preventDefault()
    this.setState({temparature: event.target.value})
  }

  render(){

    return (
      <div>
        <fieldset>
        <legend>Enter temparature</legend>
        <input type='text' 
        value={this.state.temparature} 
        onChange={this.handleChange}/>
        <BoilingVerdict celsius={this.state.temparature}/>
        </fieldset>
      </div>
    )
  }
}

export default Calculator