const todosReducer = (state = [], action) => {
  if (action.type === "ADD_TODO") {
    return state.concat([action.todo]);
  }
  return state;
};

module.exports = {
  todosReducer
};
