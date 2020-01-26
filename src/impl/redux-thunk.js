/*
    Since it is a middleware, it has access to dispatch. There are 2 possibilites here: -
    1. If action received is an object =>  We invoke next middleware in chain and pass it the action. It might be the last middleware in chain, in which case, the reducer is invoked by passing in the action.
    2. If action received is a function => This will happen when we are trying to use the pattern where we put all the data fetching logic in our action creator and the component just renders the UI. So, we need to invoke this function by passing it dispatch.

*/

const thunk = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch)
  }
  return next(action)
}

export default thunk
