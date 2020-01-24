import { createStore, combineReducers } from './impl/redux'
import { todos, goals } from './store/reducer'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './css/style.css'

const store = createStore(
  combineReducers({
    todos,
    goals,
  }),
)

ReactDOM.render(<App store={store} />, document.getElementById('root'))
