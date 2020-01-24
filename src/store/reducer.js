import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  ADD_GOAL,
  REMOVE_GOAL,
  TOGGLE_GOAL,
} from './actionTypes'

// reducer for TODO actions
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo])

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id)

    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id
          ? Object.assign(todo, { completed: !todo.completed })
          : todo,
      )

    default:
      return state
  }
}

// reducer for GOAL actions
const goals = (state = [], action) => {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat([action.goal])

    case REMOVE_GOAL:
      return state.filter(goal => goal.id !== action.id)

    case TOGGLE_GOAL:
      return state.map(goal =>
        goal.id === action.id
          ? Object.assign(goal, { completed: !goal.completed })
          : goal,
      )

    default:
      return state
  }
}

export { todos, goals }
