const { createStore } = require("./redux");
const { todosReducer } = require("./reducer");

const store = createStore(todosReducer);

console.log(store.getState()); // state
store.dispatch({
  type: "ADD_TODO",
  todo: {
    id: 1,
    name: "Implement Redux",
    complete: "false"
  }
});
console.log(store.getState());
store.dispatch({
  type: "ADD_TODO",
  todo: {
    id: 1,
    name: "Implement Redux",
    complete: "false"
  }
});
console.log(store.getState());
