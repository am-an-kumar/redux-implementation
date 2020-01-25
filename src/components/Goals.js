import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { addGoal, removeGoal, toggleGoal } from '../store/actionCreators'

class Goals extends Component {
  state = {
    value: '',
  }

  handleInputChange = event => {
    const value = event.target.value
    this.setState({
      value,
    })
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

    return (
      <div className='container'>
        <h2 className='heading'>Goals</h2>
        <div className='add-form'>
          <input type='text' value={value} onChange={this.handleInputChange} />
          <button
            type='submit'
            disabled={value ? false : true}
            onClick={this.addGoalItem}
          >
            Add
          </button>
        </div>
        <ul className='list'>
          {goals.map(goal => (
            <li key={goal.id} className='list-item'>
              <span className='text'>{goal.name}</span>
              <button
                className='remove'
                onClick={() => this.removeGoalItem(goal.id)}
              ></button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

Goals.propTypes = {
  goals: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default Goals
