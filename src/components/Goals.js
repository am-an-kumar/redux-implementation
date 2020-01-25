import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { addGoal, removeGoal, toggleGoal } from '../store/actionCreators'
import UserInput from './shared/UserInput'
import List from './shared/List'

class Goals extends Component {
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
      this.addGoalItem()
    }
  }

  handleItemKeyDown = (event, id) => {
    if (event.keyCode === 13) {
      this.toggleGoalItem(id)
    }
  }

  addGoalItem = () => {
    const { value } = this.state
    this.setState({
      value: '',
    })
    this.props.dispatch(addGoal(value))
  }

  removeGoalItem = id => {
    this.props.dispatch(removeGoal(id))
  }

  toggleGoalItem = id => {
    this.props.dispatch(toggleGoal(id))
  }

  render() {
    const { goals } = this.props
    const { value } = this.state
    const {
      handleInputOnChange,
      addGoalItem,
      handleInputKeyDown,
      removeGoalItem,
      toggleGoalItem,
      handleItemKeyDown,
    } = this

    return (
      <div className='container'>
        <h2 className='heading'>Goals</h2>
        <UserInput
          value={value}
          onChangeHandler={handleInputOnChange}
          onClickHandler={addGoalItem}
          onKeyDownHandler={handleInputKeyDown}
        />
        <List
          items={goals}
          removeItem={removeGoalItem}
          toggleItem={toggleGoalItem}
          handleItemKeyDown={handleItemKeyDown}
        />
      </div>
    )
  }
}

Goals.propTypes = {
  goals: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default Goals
