/*
    Middleware for logging. It does the following:-
    1. Creates a group with title being action.type
    2. Logs state prior to action being dispatched
    3. Calls the next middleware in chain by passing it the action, i.e. next(action). Generally logging is the last middleware in a chain, so it will mostly be dispatch(action)
    4. Logs state after the state gets updated due to action

*/

const logger = store => next => action => {
  console.groupCollapsed(action.type)

  // logging state prior to update
  console.groupCollapsed('%c Previous State', 'background: white; color: red')
  console.dir(store.getState())
  console.groupEnd()

  //   forwarding action to next middleware in chain
  next(action)

  // logging state after update
  console.groupCollapsed(
    '%c Current State',
    'background: white; color: seagreen',
  )
  console.dir(store.getState())
  console.groupEnd()

  console.groupEnd()
}

export default logger
