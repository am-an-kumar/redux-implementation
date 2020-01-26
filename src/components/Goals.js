import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  addGoalAction,
  removeGoalAction,
  toggleGoalAction,
} from '../store/actionCreators'
import UserInput from './shared/UserInput'
import List from './shared/List'
import { addGoalAPI, removeGoalAPI, toggleGoalAPI } from '../util/fakeAPI'

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

    addGoalAPI(value)
      .then(goal => {
        this.props.dispatch(addGoalAction(goal))
      })
      .catch(() => console.error('Error occured while adding goal!!!'))
  }

  removeGoalItem = goal => {
    this.props.dispatch(removeGoalAction(goal.id))
    removeGoalAPI(goal.id)
      .then(() => console.log('Goal removed'))
      .catch(() => {
        this.props.dispatch(addGoalAction(goal))
        console.error('Error removing goal')
      })
  }

  toggleGoalItem = id => {
    this.props.dispatch(toggleGoalAction(id))
    toggleGoalAPI(id)
      .then(() => console.log('Goal toggled successfully'))
      .catch(() => {
        this.props.dispatch(toggleGoalAction(id))
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
