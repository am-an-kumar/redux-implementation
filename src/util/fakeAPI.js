// generate random id to be used with todo and goal items
const generateId = () =>
  Math.random()
    .toString(36)
    .substring(2) + new Date().getTime().toString(36)

const fail = () => Math.floor(Math.random() * 100) < 30

// default goals
let goals = [
  {
    id: generateId(),
    name: 'Learn Typescript',
    completed: false,
  },
  {
    id: generateId(),
    name: 'Read JS Design Patterns book by Addy Osmani',
    completed: false,
  },
  {
    id: generateId(),
    name: 'Learn React Native',
    completed: false,
  },
]

// default todos
let todos = [
  {
    id: generateId(),
    name: 'Implement redux',
    completed: true,
  },
  {
    id: generateId(),
    name: 'Implement redux-logger',
    completed: true,
  },
  {
    id: generateId(),
    name: 'Implement redux-thunk',
    completed: true,
  },
  {
    id: generateId(),
    name: 'Implement react-redux',
    completed: false,
  },
]

// fetches all todos
const fetchTodos = () =>
  // eslint-disable-next-line no-unused-vars
  new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(todos)
    }, 1500)
  })

// fetches all goals
const fetchGoals = () =>
  // eslint-disable-next-line no-unused-vars
  new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(goals)
    }, 1500)
  })

const saveTodo = name =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const todo = {
        id: generateId(),
        name: name,
        completed: false,
      }

      if (fail()) {
        reject(todo)
      } else {
        todos.concat([todo])
        resolve(todo)
      }
    }, 500)
  })

const saveGoal = name =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const goal = {
        id: generateId(),
        name: name,
        completed: false,
      }

      if (fail()) {
        reject(goal)
      } else {
        todos.concat([goal])
        resolve(goal)
      }
    }, 500)
  })

const deleteTodo = id =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail()) {
        reject()
      } else {
        todos = todos.filter(todo => todo.id !== id)
        resolve(todos)
      }
    }, 500)
  })

const deleteGoal = id =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail()) {
        reject()
      } else {
        goals = goals.filter(goal => goal.id !== id)
        resolve(goals)
      }
    }, 500)
  })

const toggleSaveTodo = id =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail()) {
        reject()
      } else {
        todos = todos.map(todo =>
          todo.id === id
            ? Object.assign(todo, { completed: !todo.completed })
            : todo,
        )
        resolve(todos)
      }
    }, 500)
  })

const toggleSaveGoal = id =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail()) {
        reject()
      } else {
        goals = goals.map(goal =>
          goal.id === id
            ? Object.assign(goal, { completed: !goal.completed })
            : goal,
        )
        resolve(goals)
      }
    }, 500)
  })

export {
  fetchTodos,
  fetchGoals,
  saveTodo,
  saveGoal,
  deleteTodo,
  deleteGoal,
  toggleSaveTodo,
  toggleSaveGoal,
}
