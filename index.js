const { createStore } = require("./redux");
const { rootReducer } = require("./reducer");
const { addTodo, removeTodo, toggleTodo } = require("./actionCreators");
const { ADD_GOAL, REMOVE_GOAL } = require("./actionTypes");

const store = createStore(rootReducer);

// this subscription will help us log the state of the store when ever it updates due to a dispatched action
store.subscribe(() => console.log(store.getState()));

// test code to check if todosReducer works
store.dispatch(addTodo("Learn Redux"));
store.dispatch(addTodo("Implement Redux"));

store.dispatch({
  type: ADD_GOAL,
  goal: {
    name: "Join Tradeling",
    id: 0
  }
});

store.dispatch({
  type: REMOVE_GOAL,
  id: 0
});
