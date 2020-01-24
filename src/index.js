// import { createStore, combineReducers } from './impl/redux'
// import { todos, goals } from './store/reducer'
// import { addTodo, addGoal } from './store/actionCreators'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(<App />, document.getElementById('root'))

// const store = createStore(
//   combineReducers({
//     todos,
//     goals,
//   }),
// )

// this subscription will help us log the state of the store when ever it updates due to a dispatched action
// store.subscribe(() => console.log(store.getState()))

// test code to check if todosReducer works
// store.dispatch(addTodo('Learn Redux'))
// store.dispatch(addTodo('Implement Redux'))

// store.dispatch(addGoal('Join Tradeling'))
// store.dispatch(addGoal('Complete react nanodegree'))
