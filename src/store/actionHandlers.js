import {
  addTodoAction,
  removeTodoAction,
  toggleTodoAction,
  addGoalAction,
  removeGoalAction,
  toggleGoalAction,
  initializeDataAction,
} from './actionCreators'

import {
  addTodoAPI,
  removeTodoAPI,
  toggleTodoAPI,
  addGoalAPI,
  removeGoalAPI,
  toggleGoalAPI,
  fetchTodosAPI,
  fetchGoalsAPI,
} from '../util/fakeAPI'

import { toast } from 'react-toastify'

const handleAddTodoAction = (value, callback) => dispatch => {
  addTodoAPI(value)
    .then(todo => {
      dispatch(addTodoAction(todo))
      callback()
      toast.success('Todo Added')
    })
    .catch(() => {
      toast.error('Error occured while adding todo. Please retry')
    })
}

const handleRemoveTodoAction = todo => dispatch => {
  dispatch(removeTodoAction(todo.id))
  removeTodoAPI(todo.id)
    .then(() => toast.success('Todo removed'))
    .catch(() => {
      dispatch(addTodoAction(todo))
      toast.error('Error occured while removing todo. Please retry')
    })
}

const handleToggleTodoAction = id => dispatch => {
  dispatch(toggleTodoAction(id))
  toggleTodoAPI(id)
    .then(() => toast.success('Todo toggled'))
    .catch(() => {
      dispatch(toggleTodoAction(id))
      toast.error('Error occured while toggling todo. Please retry')
    })
}

// action creators for goal actions
const handleAddGoalAction = (value, callback) => dispatch => {
  addGoalAPI(value)
    .then(goal => {
      dispatch(addGoalAction(goal))
      callback()
      toast.success('Goal Added')
    })
    .catch(() => toast.error('Error occured while removing goal. Please retry'))
}

const handleRemoveGoalAction = goal => dispatch => {
  dispatch(removeGoalAction(goal.id))
  removeGoalAPI(goal.id)
    .then(() => toast.success('Goal removed'))
    .catch(() => {
      dispatch(addGoalAction(goal))
      toast.error('Error occured while removing goal. Please retry')
    })
}

const handleToggleGoalAction = id => dispatch => {
  dispatch(toggleGoalAction(id))
  toggleGoalAPI(id)
    .then(() => toast.success('Goal toggled'))
    .catch(() => {
      dispatch(toggleGoalAction(id))
      toast.error('Error occured while toggling goal. Please retry')
    })
}

// action creator for fetching initial data
const handleInitializeDataAction = () => dispatch => {
  Promise.all([fetchTodosAPI(), fetchGoalsAPI()]).then(data => {
    dispatch(initializeDataAction(data[0], data[1]))
  })
}

export {
  handleAddTodoAction,
  handleRemoveTodoAction,
  handleToggleTodoAction,
  handleAddGoalAction,
  handleRemoveGoalAction,
  handleToggleGoalAction,
  handleInitializeDataAction,
}
