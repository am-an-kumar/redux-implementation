import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  ADD_GOAL,
  REMOVE_GOAL,
} from './actionTypes'

// reducer for TODO actions
const todos = (state = [], action) => {
  if (action.type === ADD_TODO) {
    return state.concat([action.todo])
  } else if (action.type === REMOVE_TODO) {
    return state.filter(todo => todo.id !== action.id)
  } else if (action.type === TOGGLE_TODO) {
    return state.map(todo =>
      todo.id === action.id
        ? Object.assign(todo, { completed: !todo.completed })
        : todo,
    )
  } else {
    return state
  }
}

// reducer for GOAL actions
const goals = (state = [], action) => {
  if (action.type === ADD_GOAL) {
    return state.concat([action.goal])
  } else if (action.type === REMOVE_GOAL) {
    return state.filter(goal => goal.id !== action.id)
  } else {
    return state
  }
}

export { todos, goals }
