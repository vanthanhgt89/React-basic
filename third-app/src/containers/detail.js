import React from 'react'


class DetailBook extends React.Component{
  render(){
    // let book = this.props.
    return(
      <div>
        <h1>{this.props.bookDetail.name}</h1>
        <h2>{this.props.bookDetail.title}</h2>
        <h2>{this.props.bookDetail.description}</h2>
      </div>
    )
  }
}

export default DetailBook