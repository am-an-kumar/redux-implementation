import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore, combineReducers, applyMiddleware } from './impl/redux'
import { todos, goals } from './store/reducer'
import './css/style.css'
import logger from './impl/redux-logger'

const store = createStore(
  combineReducers({
    todos,
    goals,
  }),
  applyMiddleware(logger),
)

ReactDOM.render(<App store={store} />, document.getElementById('root'))
