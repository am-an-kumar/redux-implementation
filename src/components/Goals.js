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

  handleKeyDown = (event, id) => {
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
        {goals.length === 0 ? (
          <p className='info-no-item'>No goals added yet!!!</p>
        ) : (
          <ul className='list'>
            {goals.map(goal => (
              <li key={goal.id} className='list-item'>
                <span
                  role='switch'
                  aria-checked={goal.completed}
                  tabIndex='0'
                  className='text'
                  style={{
                    textDecoration: goal.completed ? 'line-through' : 'none',
                  }}
                  onClick={() => this.toggleGoalItem(goal.id)}
                  onKeyDown={event => this.handleKeyDown(event, goal.id)}
                >
                  {goal.name}
                </span>
                <button
                  className='remove'
                  onClick={() => this.removeGoalItem(goal.id)}
                ></button>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

Goals.propTypes = {
  goals: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default Goals
