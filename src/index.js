import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore, combineReducers, applyMiddleware } from './impl/redux'
import { todos, goals, loading } from './store/reducer'
import './css/style.css'
import logger from './impl/redux-logger'
import thunk from './impl/redux-thunk'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const store = createStore(
  combineReducers({
    todos,
    goals,
    loading,
  }),
  applyMiddleware(thunk, logger),
)

// initializes the state of the store to the default values
store.dispatch({
  type: 'SETUP',
})

ReactDOM.render(
  <>
    <App store={store} />
    <ToastContainer autoClose={2000} position={toast.POSITION.BOTTOM_RIGHT} />
  </>,
  document.getElementById('root'),
)
