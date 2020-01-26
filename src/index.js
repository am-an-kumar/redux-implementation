import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore, combineReducers, applyMiddleware } from './impl/redux'
import { todos, goals, loading } from './store/reducer'
import './css/style.css'
import logger from './impl/redux-logger'

const store = createStore(
  combineReducers({
    todos,
    goals,
    loading,
  }),
  applyMiddleware(logger),
)

// initializes the state of the store to the default values
store.dispatch({
  type: 'SETUP',
})

ReactDOM.render(<App store={store} />, document.getElementById('root'))
