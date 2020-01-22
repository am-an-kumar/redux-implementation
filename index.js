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

  // listeners(callback ()s) to invoke on state change
  let listeners = [];

  // returns the state of the store
  const getState = () => {
    return state;
  };

  // subsribes a callback for state change
  const subscribe = listener => {
    listeners.push(listener);

    // for testing purposes only
    console.log(listeners.length);

    // api to unsubscribe from store
    return () => {
      listeners = listeners.filter(l => l !== listener);
      console.log(listeners.length);
    };
  };

  return {
    getState,
    subscribe
  };
};

const store = createStore();

unsubsribe_1 = store.subscribe(() =>
  console.log("Store state changed: ", store.getState)
); // 1

unsubsribe_2 = store.subscribe(() =>
  console.log(`Store state changed: ${store.getState()}`)
); // 2

unsubsribe_1(); // 1
unsubsribe_2(); // 0
