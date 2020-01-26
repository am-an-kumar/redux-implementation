import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { addGoal, removeGoal, toggleGoal } from '../store/actionCreators'
import UserInput from './shared/UserInput'
import List from './shared/List'
import { saveGoal, deleteGoal, toggleSaveGoal } from '../util/fakeAPI'

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

    saveGoal(value)
      .then(goal => {
        this.props.dispatch(addGoal(goal))
      })
      .catch(() => console.error('Error occured while adding goal!!!'))
  }

  removeGoalItem = goal => {
    this.props.dispatch(removeGoal(goal.id))
    deleteGoal(goal.id)
      .then(() => console.log('Goal removed'))
      .catch(() => {
        this.props.dispatch(addGoal(goal))
        console.error('Error removing goal')
      })
  }

  toggleGoalItem = id => {
    this.props.dispatch(toggleGoal(id))
    toggleSaveGoal(id)
      .then(() => console.log('Goal toggled successfully'))
      .catch(() => {
        this.props.dispatch(toggleGoal(id))
        console.error('Error toggling goal')
      })
  }

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
