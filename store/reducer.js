const {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  ADD_GOAL,
  REMOVE_GOAL
} = require("./actionTypes");

// root reducer
const rootReducer = (state = {}, action) => {
  return {
    todos: todosReducer(state.todos, action),
    goals: goalsReducer(state.goals, action)
  };
};

// reducer for TODO actions
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

// reducer for GOAL actions
const goalsReducer = (state = [], action) => {
  if (action.type === ADD_GOAL) {
    return state.concat([action.goal]);
  } else if (action.type === REMOVE_GOAL) {
    return state.filter(goal => goal.id !== action.id);
  } else {
    return state;
  }
};

module.exports = {
  rootReducer,
  todosReducer,
  goalsReducer
};
