const { createStore } = require("./redux");
const { todosReducer } = require("./reducer");

const store = createStore(todosReducer);

// this subscription will help us log the state of the store when ever it updates due to a dispatched action
store.subscribe(() => console.log(store.getState()));

// test code to check if todosReducer works
store.dispatch({
  type: "ADD_TODO",
  todo: {
    id: 0,
    name: "Learn Redux",
    completed: false
  }
});

store.dispatch({
  type: "ADD_TODO",
  todo: {
    id: 1,
    name: "Implement Redux",
    completed: false
  }
});

store.dispatch({
  type: "TOGGLE_TODO",
  id: 0
});

store.dispatch({
  type: "TOGGLE_TODO",
  id: 1
});

store.dispatch({
  type: "REMOVE_TODO",
  id: 0
});

store.dispatch({
  type: "REMOVE_TODO",
  id: 1
});
