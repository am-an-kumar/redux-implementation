const { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } = require("./actionTypes");
const { generateId } = require("./library");

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

module.exports = {
  addTodo,
  removeTodo,
  toggleTodo
};
