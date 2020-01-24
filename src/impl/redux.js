/*
    What we are creating?
    A store, which will have state and and an api to interact with it. So, the parts of store to implement are:-
    1. state
    2. a way to get the state
    3. a way to get notified when the state of the store changes    
    4. a way to update the state of the store

    implement combineReducers() and applyMiddlewares()
*/

// creates store and returns api to interact with it
const createStore = reducer => {
  // state of the store
  let state

  // listeners(callback ()s) to invoke on state change
  let listeners = []

  // returns the state of the store
  const getState = () => {
    return state
  }

  // subsribes a callback for state change
  const subscribe = listener => {
    listeners.push(listener)
    // api to unsubscribe from store
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }

  // dispatches an action to the reducer which return the new state
  const dispatch = action => {
    state = reducer(state, action)

    // now that the state is updated, we need to invoke all callbacks
    listeners.forEach(listener => listener())
  }

  return {
    getState,
    subscribe,
    dispatch,
  }
}

// returns a root reducer function by combining multiple reducers
const combineReducers = reducersObject => {
  return (state = {}, action) => {
    const newState = {}
    for (const key in reducersObject) {
      newState[key] = reducersObject[key](state[key], action)
    }

    return newState
  }
}

module.exports = {
  createStore,
  combineReducers,
}
