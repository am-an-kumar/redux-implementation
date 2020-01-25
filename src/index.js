import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore, combineReducers, applyMiddleware } from './impl/redux'
import { todos, goals } from './store/reducer'
import './css/style.css'

const test1 = (store, next, action) => {
  console.log(store)
  console.log(next)
  console.log(action)
}

const test2 = (store, next, action) => {
  console.log(store)
  console.log(next)
  console.log(action)
}

const store = createStore(
  combineReducers({
    todos,
    goals,
  }),
  applyMiddleware(test1, test2),
)

ReactDOM.render(<App store={store} />, document.getElementById('root'))
