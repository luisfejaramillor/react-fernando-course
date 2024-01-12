import { useTodos } from "../../hooks"
import { TodosContext } from "./TodosContext"
import PropTypes from 'prop-types'




export const TodosProvider = ({children}) => {

    const todosContext =  useTodos()
    
    return (
        <TodosContext.Provider value={todosContext} >
            {children}
        </TodosContext.Provider>
    )
}


TodosProvider.propTypes = {
    children: PropTypes.array
}