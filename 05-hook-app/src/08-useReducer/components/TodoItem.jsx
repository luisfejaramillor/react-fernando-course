import PropTypes from 'prop-types'

export const TodoItem = ({...todo}) => {
  const {description, handleRemoveTodo, done, id} = todo
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center" > {description} </span>
      <button onClick={()=> handleRemoveTodo({id, done, description})} className="btn btn-danger" > Remove </button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object
}