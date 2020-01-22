const { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } = require("./actionTypes");

const todosReducer = (state = [], action) => {
  if (action.type === ADD_TODO) {
    return state.concat([action.todo]);
  } else if (action.type === REMOVE_TODO) {
    return state.filter(todo => todo.id !== action.id);
  } else if (action.type === TOGGLE_TODO) {
    return state.map(todo =>
      todo.id === action.id
        ? Object.assign(todo, { completed: !todo.completed })
        : todo
    );
  } else {
    return state;
  }
};

module.exports = {
  todosReducer
};
