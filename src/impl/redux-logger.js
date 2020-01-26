// middleware like redux-logger. It is much simpler and will always log the state prior to and post state update. There is no configuration to modify what is logged. It is just a POC. Can implement all the redux-logger features, but it is better to use a well tested library like redux-logger.

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
