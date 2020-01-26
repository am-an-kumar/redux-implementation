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
const addTodo = todo => ({
  type: ADD_TODO,
  todo: todo,
})

const removeTodo = id => ({
  type: REMOVE_TODO,
  id,
})

const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
})

// action creators for goal actions
const addGoal = goal => ({
  type: ADD_GOAL,
  goal: goal,
})

const removeGoal = id => ({
  type: REMOVE_GOAL,
  id,
})

const toggleGoal = id => ({
  type: TOGGLE_GOAL,
  id,
})

// action creator for fetching initial data
const initializeData = (todos, goals) => ({
  type: INITIALISE_DATA,
  todos,
  goals,
})

export {
  addTodo,
  removeTodo,
  toggleTodo,
  addGoal,
  removeGoal,
  toggleGoal,
  initializeData,
}
