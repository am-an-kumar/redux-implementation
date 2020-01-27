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

const handleAddTodoAction = (value, callback) => dispatch => {
  addTodoAPI(value)
    .then(todo => {
      dispatch(addTodoAction(todo))
      callback()
    })
    .catch(() => {
      console.error('Error adding todo item')
    })
}

const handleRemoveTodoAction = todo => dispatch => {
  dispatch(removeTodoAction(todo.id))
  removeTodoAPI(todo.id)
    .then(() => console.log('Todo removed: ', todo))
    .catch(() => {
      dispatch(addTodoAction(todo))
      console.error('Error removing todo item')
    })
}

const handleToggleTodoAction = id => dispatch => {
  dispatch(toggleTodoAction(id))
  toggleTodoAPI(id)
    .then(() => console.log('Todo toggled'))
    .catch(() => {
      dispatch(toggleTodoAction(id))
      console.error('Error toggling the todo')
    })
}

// action creators for goal actions
const handleAddGoalAction = (value, callback) => dispatch => {
  addGoalAPI(value)
    .then(goal => {
      dispatch(addGoalAction(goal))
      callback()
    })
    .catch(() => console.error('Error occured while adding goal!!!'))
}

const handleRemoveGoalAction = goal => dispatch => {
  dispatch(removeGoalAction(goal.id))
  removeGoalAPI(goal.id)
    .then(() => console.log('Goal removed'))
    .catch(() => {
      dispatch(addGoalAction(goal))
      console.error('Error removing goal')
    })
}

const handleToggleGoalAction = id => dispatch => {
  dispatch(toggleGoalAction(id))
  toggleGoalAPI(id)
    .then(() => console.log('Goal toggled successfully'))
    .catch(() => {
      dispatch(toggleGoalAction(id))
      console.error('Error toggling goal')
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
