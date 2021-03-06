import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserInput from './shared/UserInput'
import List from './shared/List'
import {
  handleAddTodoAction,
  handleRemoveTodoAction,
  handleToggleTodoAction,
} from '../store/actionHandlers'

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
    if (keyCode === 13 && this.state.value) {
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
    this.props.dispatch(
      handleAddTodoAction(value, () =>
        this.setState({
          value: '',
        }),
      ),
    )
  }

  removeTodoItem = todo => this.props.dispatch(handleRemoveTodoAction(todo))

  toggleTodoItem = id => this.props.dispatch(handleToggleTodoAction(id))

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
