import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  ADD_GOAL,
  REMOVE_GOAL,
  TOGGLE_GOAL,
  INITIALISE_DATA,
} from './actionTypes'

// action creators for todo actions
const addTodoAction = todo => ({
  type: ADD_TODO,
  todo: todo,
})

const removeTodoAction = id => ({
  type: REMOVE_TODO,
  id,
})

const toggleTodoAction = id => ({
  type: TOGGLE_TODO,
  id,
})

// action creators for goal actions
const addGoalAction = goal => ({
  type: ADD_GOAL,
  goal: goal,
})

const removeGoalAction = id => ({
  type: REMOVE_GOAL,
  id,
})

const toggleGoalAction = id => ({
  type: TOGGLE_GOAL,
  id,
})

// action creator for fetching initial data
const initializeDataAction = (todos, goals) => ({
  type: INITIALISE_DATA,
  todos,
  goals,
})

export {
  addTodoAction,
  removeTodoAction,
  toggleTodoAction,
  addGoalAction,
  removeGoalAction,
  toggleGoalAction,
  initializeDataAction,
}
