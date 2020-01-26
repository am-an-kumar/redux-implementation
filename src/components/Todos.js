import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  addTodoAction,
  removeTodoAction,
  toggleTodoAction,
} from '../store/actionCreators'
import UserInput from './shared/UserInput'
import List from './shared/List'
import { addTodoAPI, removeTodoAPI, toggleTodoAPI } from '../util/fakeAPI'

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
    addTodoAPI(value)
      .then(todo => {
        this.props.dispatch(addTodoAction(todo))
        this.setState({
          value: '',
        })
      })
      .catch(() => {
        console.error('Error adding todo item')
      })
  }

  removeTodoItem = todo => {
    this.props.dispatch(removeTodoAction(todo.id))
    removeTodoAPI(todo.id)
      .then(() => console.log('Todo removed: ', todo))
      .catch(() => {
        this.props.dispatch(addTodoAction(todo))
        console.log('Error removing todo item')
      })
  }

  toggleTodoItem = id => {
    this.props.dispatch(toggleTodoAction(id))
    toggleTodoAPI(id)
      .then(() => console.log('Todo toggled'))
      .catch(() => {
        this.props.dispatch(toggleTodoAction(id))
        console.error('Error toggling the todo')
      })
  }

  render() {
    const { todos, loading } = this.props
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
          loading={loading}
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
  loading: PropTypes.bool.isRequired,
}

export default Todos
