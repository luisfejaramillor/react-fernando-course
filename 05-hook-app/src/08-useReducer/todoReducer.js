
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

        default:
            return initialState
    }
}
