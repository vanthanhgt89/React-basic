import React from 'react'


class TodoList extends React.Component{
  constructor(props){
    super(props)

  }


  render(){
    let data = this.props.todo
    let list = data.map(item => {
      return (<li>{item}</li>)
    })
    return(
      <ul>{list}</ul>
    )
  }
}

export default TodoList