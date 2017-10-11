import React from 'react'


class SideNav extends React.Component{
  render(){
    let list = this.props.listItem.map((item, index) => {
      return (<li key={index} onClick={() => {this.props.onChangeBook(index)}}>{item.name}</li>)
    })
    return (
      <div>
        <h1>Hello</h1>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}


export default SideNav