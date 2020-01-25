import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { addTodo, removeTodo, toggleTodo } from '../store/actionCreators'

class Todos extends Component {
  state = {
    value: '',
  }

  handleInputChange = event => {
    const value = event.target.value
    this.setState({
      value,
    })
  }

  addTodoItem = () => {
    const { value } = this.state
    this.setState({
      value: '',
    })
    this.props.dispatch(addTodo(value))
  }

  removeTodoItem = id => {
    this.props.dispatch(removeTodo(id))
  }

  toggleTodoItem = id => {
    this.props.dispatch(toggleTodo(id))
  }

  render() {
    const { todos } = this.props
    const { value } = this.state

    return (
      <div className='container'>
        <h2 className='heading'>Todos</h2>
        <div className='add-form'>
          <input type='text' value={value} onChange={this.handleInputChange} />
          <button
            type='submit'
            disabled={value ? false : true}
            onClick={this.addTodoItem}
          >
            Add
          </button>
        </div>
        <ul className='list'>
          {todos.map(todo => (
            <li key={todo.id} className='list-item'>
              <span className='text'>{todo.name}</span>
              <button
                className='remove'
                onClick={() => this.removeTodoItem(todo.id)}
              ></button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default Todos
