import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todos from './Todos'
import Goals from './Goals'

class App extends Component {
  state = {
    todos: [],
    goals: [],
  }

  componentDidMount() {
    const unsubsribe = this.props.store.subscribe(() => {
      const { todos, goals } = this.props.store.getState()
      this.setState({
        todos,
        goals,
      })
    })
    this.setState({
      unsubsribe,
    })
  }

  componentWillUnmount() {
    this.state.unsubsribe()
  }

  render() {
    const { todos, goals } = this.state
    return (
      <>
        <Todos list={todos} />
        <Goals list={goals} />
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

export default App
