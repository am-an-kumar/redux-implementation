const { createStore } = require("./impl/redux");
const { rootReducer } = require("./store/reducer");
const {
  addTodo,
  removeTodo,
  toggleTodo,
  addGoal,
  removeGoal
} = require("./store/actionCreators");

const store = createStore(rootReducer);

// this subscription will help us log the state of the store when ever it updates due to a dispatched action
store.subscribe(() => console.log(store.getState()));

// test code to check if todosReducer works
// store.dispatch(addTodo("Learn Redux"));
// store.dispatch(addTodo("Implement Redux"));

store.dispatch(addGoal("Join Tradeling"));
store.dispatch(addGoal("Complete react nanodegree"));
