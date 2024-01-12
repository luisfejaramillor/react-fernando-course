import { useState } from "react"
import { UserContext } from "./UserContext"
import PropTypes from 'prop-types'

export const UserProvider = ({children}) => {
    const [user, setUser] = useState()

    const handleSetUser = (user)=> {
        setUser(user)
    }

    return (
        <UserContext.Provider value={{user, handleSetUser}} >
            {children}
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.array
}

