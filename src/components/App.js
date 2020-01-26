import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todos from './Todos'
import Goals from './Goals'
import { hot } from 'react-hot-loader'
import { fetchGoals, fetchTodos } from '../util/fakeAPI'

class App extends Component {
  state = {
    todos: [],
    goals: [],
    loading: true,
  }

  componentDidMount() {
    const { subscribe, getState } = this.props.store

    const unsubscribe = subscribe(() => {
      const { todos, goals } = getState()
      this.setState({
        todos,
        goals,
      })
    })

    this.setState({
      unsubscribe,
    })

    Promise.all([fetchTodos(), fetchGoals()]).then(data => {
      this.setState({
        todos: data[0],
        goals: data[1],
      })
    })
  }

  componentWillUnmount() {
    // unsubscribing from state changes
    this.state.unsubscribe()
  }

  render() {
    const { todos, goals } = this.state
    const { dispatch } = this.props.store
    return (
      <>
        <Todos todos={todos} dispatch={dispatch} />
        <Goals goals={goals} dispatch={dispatch} />
      </>
    )
  }
}

App.propTypes = {
  store: PropTypes.shape({
    getState: PropTypes.func.isRequired,
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  }),
}

export default hot(module)(App)
