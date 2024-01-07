import PropTypes from 'prop-types'
import { useForm } from "../../hooks/useForm"


export const TodoAdd = ({handleNewTodo}) => {

  const initialForm = {
    description: ''
  }

  const {formState, handleInputChange, handleResetForm} = useForm(initialForm)
  const {description} = formState
  const handleSubmit = (e)=> {
    e.preventDefault()
    if(description.length <= 1)  return
    const todo = {
      id: new Date().getTime(),
      description,
      done: false,
    }
    handleNewTodo(todo)
    handleResetForm()
  }



  return (
    <form type="text" onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder="¿What to do?"
            className="form-control"
            value={description}
            onChange={handleInputChange}
            name='description'
        />
        <button 
            type="submit" 
            className="btn btn-outline-primary mt-1"
        >
            Add
        </button>
    </form>
  )
}

TodoAdd.propTypes = {
  handleNewTodo: PropTypes.func
}


