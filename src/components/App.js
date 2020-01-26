import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todos from './Todos'
import Goals from './Goals'
import { hot } from 'react-hot-loader'
import { fetchGoalsAPI, fetchTodosAPI } from '../util/fakeAPI'
import { initializeDataAction } from '../store/actionCreators'

class App extends Component {
  componentDidMount() {
    this.props.store.subscribe(() => this.forceUpdate())

    // fetching initialData
    Promise.all([fetchTodosAPI(), fetchGoalsAPI()]).then(data => {
      this.props.store.dispatch(initializeDataAction(data[0], data[1]))
    })
  }

  render() {
    const { dispatch, getState } = this.props.store
    const { todos, goals, loading } = getState()
    return (
      <>
        <Todos todos={todos} dispatch={dispatch} loading={loading} />
        <Goals goals={goals} dispatch={dispatch} loading={loading} />
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
