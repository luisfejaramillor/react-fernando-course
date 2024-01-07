import { TodoItem } from './TodoItem'
import PropTypes from 'prop-types'

export const TodoList = ({todos, handleRemoveTodo}) => {
  return (
    <ul className="list-group" >
        {
            todos.map( ({id, description, done}) => (
                <TodoItem key={id} description={description} done={done} handleRemoveTodo={handleRemoveTodo} id={id} />
            ))
        }
    </ul>
  )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    handleRemoveTodo: PropTypes.func
}

