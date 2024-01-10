import { useTodos } from "../hooks"
import { TodoAdd, TodoList } from "./components"

export const TodoApp = () => {

    const {todos, todosCount, pendingTodosCount, handleNewTodo, handleRemoveTodo, handleUpdateStatusTodo} =  useTodos()
    
    return (
    <>
        <h1>Todo App: {todosCount}, <small>Pending: {pendingTodosCount}</small> </h1>
        <hr />
        {
            todosCount === 0 && (<p>There are not TODOS to make</p> )
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
