import React from 'react'


const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenherit'
}

function toCelsius (fahrenherit){
  return (fahrenherit - 32) * 5 /9
}
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

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


class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator2 extends React.Component{
  constructor(props){
    super(props)
    this.state = {temperature: ''}
    this.state = {scale: 'c', temperature: ''}
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
  }
  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }


  render(){
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenherit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature 

    return(
      <div>
      <TemperatureInput
        scale="c" 
        temperature={celsius} 
        onTemperatureChange={this.handleCelsiusChange}/>
      <TemperatureInput
        scale="f" 
        temperature={fahrenherit}
        onTemperatureChange={this.handleFahrenheitChange}/>
      <BoilingVerdict celsius={parseFloat(celsius)}/>
        
      </div>

    )
  }
}


export default Calculator2

