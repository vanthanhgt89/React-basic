import React from 'react'
import TodoList from './todolist'

class Todo extends React.Component{
  constructor(props){
    super(props)
    this.state = {value: '', list: []}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({value: e.target.value })
    e.preventDefault()
  }
  handleSumit(e){
    this.setState({list: e.target.list.push(this.state.value)})
    e.preventDefault()
  }

  render(){

    return(
      <div>
        <form onSumit={this.handleSubmit}>
          <input type="text"  value={this.state.value} onChange={this.handleChange}/>
          <input type="submit" value="submit"/>
        </form>
        <TodoList todo={this.state.list}/>
      </div>
    )
  }
}


export default Todo