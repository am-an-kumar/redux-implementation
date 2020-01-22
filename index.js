/*
    What we are creating?
    A store, which will have state and and an api to interact with it. So, the parts of store to implement are:-
    1. state
    2. a way to get the state
    3. a way to get notified when the state of the store changes    
    4. a way to update the state of the store

*/

// creates store and returns api to interact with it
const createStore = () => {
  // state of the store
  let state;

  // returns the state of the store
  const getState = () => {
    return state;
  };

  return {
    getState
  };
};

const store = createStore();

console.log(typeof store); // object
console.log(store.getState()); // undefined
