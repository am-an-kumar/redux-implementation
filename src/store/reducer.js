import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  ADD_GOAL,
  REMOVE_GOAL,
  TOGGLE_GOAL,
  INITIALISE_DATA,
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

    case INITIALISE_DATA:
      return action.todos

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

    case INITIALISE_DATA:
      return action.goals

    default:
      return state
  }
}

const loading = (state = true, action) => {
  switch (action.type) {
    case INITIALISE_DATA:
      return false
    default:
      return state
  }
}

export { todos, goals, loading }
