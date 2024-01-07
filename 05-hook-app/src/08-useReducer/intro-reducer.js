

const initialState = [{
  id:1,
  todo: 'APrender react',
  done: false,
}]

export const todoReducer = (state = initialState, action = {}) => {
  if(action.type === 'add'){
    return [
      ...state,
      action.payload
    ]
  }
  return state
}

let todos = todoReducer()

const newTodo = {
  id:2,
  todo: 'APrender tailwind',
  done: false
}




const addTodoAction = {
  type: 'add',
  payload: newTodo
}

todos = todoReducer(todos, addTodoAction)

const newTodo3 = {
  id: 3,
  todo: 'aprender typescript',
  done: false
}

const addTodoAction3 = {
  type: 'add',
  payload: newTodo3
}


todos = todoReducer(todos, addTodoAction3)


console.log(todos)
