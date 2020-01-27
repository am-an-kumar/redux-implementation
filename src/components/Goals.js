import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserInput from './shared/UserInput'
import List from './shared/List'
import {
  handleAddGoalAction,
  handleRemoveGoalAction,
  handleToggleGoalAction,
} from '../store/actionHandlers'

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
    if (keyCode === 13 && this.state.value) {
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
    this.props.dispatch(
      handleAddGoalAction(value, () =>
        this.setState({
          value: '',
        }),
      ),
    )
  }

  removeGoalItem = goal => this.props.dispatch(handleRemoveGoalAction(goal.id))

  toggleGoalItem = id => this.props.dispatch(handleToggleGoalAction(id))

  render() {
    const { goals, loading } = this.props
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
          loading={loading}
        />
      </div>
    )
  }
}

Goals.propTypes = {
  goals: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default Goals
