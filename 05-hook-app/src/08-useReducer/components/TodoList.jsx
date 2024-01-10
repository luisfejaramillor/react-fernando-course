import { TodoItem } from './TodoItem'
import PropTypes from 'prop-types'

export const TodoList = ({todos, handleRemoveTodo, handleUpdateStatusTodo}) => {
  return (
    <ul className="list-group" >
        {
            todos.map( ({id, description, done}) => (
                <TodoItem key={id} description={description} done={done} handleRemoveTodo={handleRemoveTodo} handleUpdateStatusTodo={handleUpdateStatusTodo} id={id} />
            ))
        }
    </ul>
  )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    handleRemoveTodo: PropTypes.func,
    handleUpdateStatusTodo: PropTypes.func,
}

