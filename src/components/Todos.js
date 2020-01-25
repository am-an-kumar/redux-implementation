import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { addTodo, removeTodo, toggleTodo } from '../store/actionCreators'
import UserInput from './UserInput'
import List from './List'

class Todos extends Component {
  state = {
    value: '',
  }

  handleInputOnChange = event => {
    const value = event.target.value
    this.setState({
      value,
    })
  }

  handleInputKeyDown = ({ keyCode }) => {
    if (keyCode === 13) {
      this.addTodoItem()
    }
  }

  handleItemKeyDown = (event, id) => {
    if (event.keyCode === 13) {
      this.toggleTodoItem(id)
    }
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
    const {
      handleInputOnChange,
      addTodoItem,
      removeTodoItem,
      toggleTodoItem,
      handleItemKeyDown,
      handleInputKeyDown,
    } = this

    return (
      <div className='container'>
        <h2 className='heading'>Todos</h2>
        <UserInput
          value={value}
          onChangeHandler={handleInputOnChange}
          onKeyDownHandler={handleInputKeyDown}
          onClickHandler={addTodoItem}
        />
        <List
          items={todos}
          removeItem={removeTodoItem}
          toggleItem={toggleTodoItem}
          handleItemKeyDown={handleItemKeyDown}
        />
      </div>
    )
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default Todos
