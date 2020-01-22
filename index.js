const { createStore } = require("./redux");
const { todosReducer } = require("./reducer");
const { addTodo, removeTodo, toggleTodo } = require("./actionCreators");

const store = createStore(todosReducer);

// this subscription will help us log the state of the store when ever it updates due to a dispatched action
store.subscribe(() => console.log(store.getState()));

// test code to check if todosReducer works
store.dispatch(addTodo("Learn Redux"));
store.dispatch(addTodo("Implement Redux"));
