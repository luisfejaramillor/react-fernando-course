
export const todoReducer = (initialState = [], action) => {
    const {type, payload} = action

    switch (type) {
        case 'add':
            return[
                ...initialState,
                payload
            ]
        case 'remove':
            return initialState.filter( todo => todo.id !== payload.id)
        
        case 'update status':
            return initialState.map( (todo) => {

                if(todo.id === payload.id){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            })
        default:
            return initialState
    }
}
