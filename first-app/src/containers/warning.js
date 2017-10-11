import React from 'react'

class Warning extends React.Component{
 
  render(){
    if(!this.props.Warn){
      return null
    }
    
    return (
      <div>
        hello
        <h1 className="warning">Warning</h1>
      </div>
    )
  }
}

export default Warning