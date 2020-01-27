import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todos from './Todos'
import Goals from './Goals'
import { hot } from 'react-hot-loader'
import { handleInitializeDataAction } from '../store/actionHandlers'

class App extends Component {
  componentDidMount() {
    const { subscribe, dispatch } = this.props.store
    subscribe(() => this.forceUpdate())

    // fetching initialData
    dispatch(handleInitializeDataAction())
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
