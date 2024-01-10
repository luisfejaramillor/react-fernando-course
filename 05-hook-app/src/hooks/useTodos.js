import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const initialState = JSON.parse(localStorage.getItem('todos')) || []


export const useTodos = () => {
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

    return {
        todos,
        handleNewTodo,
        handleRemoveTodo,
        handleUpdateStatusTodo,
        pendingTodosCount : todos?.filter( todo => !todo.done).length,
        todosCount: todos.length
    }
}
