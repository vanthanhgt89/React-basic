import React from 'react'

class ListComponent extends React.Component{
  constructor(props){
    super(props)
  }

  render (){
    return (
      <div>
        <ul>
          {this.props.data.map((item) =>
        <li key={item}>
          {item}
        </li>
      )}
        </ul>
      </div>
    )
  }
}

export default ListComponent