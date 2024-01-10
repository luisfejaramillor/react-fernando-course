import PropTypes from 'prop-types'

export const TodoItem = ({...todo}) => {
  const {description, handleRemoveTodo, handleUpdateStatusTodo, done, id} = todo

  return (
    <li 
      className="list-group-item d-flex justify-content-between"
      onClick={()=> handleUpdateStatusTodo({id, done, description})}
    >
      <span 
        // onDoubleClick={()=> handleUpdateStatusTodo({id, done, description})}
        className= {`align-self-center pe-auto ${done ? 'text-decoration-line-through' : ''}`} 
        >
          {description} 
      </span>
      <button onClick={()=> handleRemoveTodo({id, done, description})} className="btn btn-danger" > Remove </button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object
}