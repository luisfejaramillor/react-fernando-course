import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoAdd, TodoList } from "./components"

export const TodoApp = () => {
    const initialState = JSON.parse(localStorage.getItem('todos')) || []
    const [todos, dispatch] = useReducer(todoReducer, initialState)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || [])
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: 'add',
            payload: todo
        }
        dispatch(action)
    }

    const handleRemoveTodo = (todo) => {
        const action = {
            type: 'remove',
            payload: todo
        }
        dispatch(action)
    }

    const handleUpdateStatusTodo = (todo) => {
        const action = {
            type: 'update status',
            payload: todo
        }
        dispatch(action)
    }


    return (
    <>
        <h1>Todo App: 10, <small>Pending: 5</small> </h1>
        <hr />
        {
            todos.length === 0 && (<p>There are not TODOS to make</p> )
        }
        <div className="row">
            <div className="col-7">
                <TodoList todos={todos} handleRemoveTodo={handleRemoveTodo} handleUpdateStatusTodo={handleUpdateStatusTodo}/>
            </div>
            <div className="col-5">
                <h4>Add TODO</h4>
                <hr />
                <TodoAdd handleNewTodo={handleNewTodo} />
            </div>
        </div>
    </>
    )
}
