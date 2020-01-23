const {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  ADD_GOAL,
  REMOVE_GOAL
} = require("./actionTypes");
const { generateId } = require("../util/library");

// action creators for todo actions
const addTodo = name => ({
  type: ADD_TODO,
  todo: {
    id: generateId(),
    name,
    completed: false
  }
});

const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});

const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

// action creators for goal actions
const addGoal = name => ({
  type: ADD_GOAL,
  goal: {
    id: generateId(),
    name
  }
});

const removeGoal = id => ({
  type: REMOVE_GOAL,
  id
});

module.exports = {
  addTodo,
  removeTodo,
  toggleTodo,
  addGoal,
  removeGoal
};
