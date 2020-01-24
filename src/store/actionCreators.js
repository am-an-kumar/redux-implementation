import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  ADD_GOAL,
  REMOVE_GOAL,
  TOGGLE_GOAL,
} from './actionTypes'
import { generateId } from '../util/library'

// action creators for todo actions
const addTodo = name => ({
  type: ADD_TODO,
  todo: {
    id: generateId(),
    name,
    completed: false,
  },
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
const addGoal = name => ({
  type: ADD_GOAL,
  goal: {
    id: generateId(),
    name,
    completed: false,
  },
})

const removeGoal = id => ({
  type: REMOVE_GOAL,
  id,
})

const toggleGoal = id => ({
  type: TOGGLE_GOAL,
  id,
})

export { addTodo, removeTodo, toggleTodo, addGoal, removeGoal, toggleGoal }
