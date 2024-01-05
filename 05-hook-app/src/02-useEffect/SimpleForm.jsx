import { useEffect, useState } from "react"
import { Messages } from "./Messages"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: ''
    })

    const {username, email} = formState

    const handleInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]:  value
        })
    }

    useEffect(() => {
    }, [username, email])
    

    return (
        <>
            <h1>Simple form</h1>
            <hr />
            <input type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleInputChange}
            />
            <input type="email" 
                className="form-control mt-2"
                placeholder="email"
                name="email"
                value={email}
                onChange={handleInputChange}
            />
            {
                username === 'luis' && (<Messages/>)
            }
            
            
        </>
    )
}
