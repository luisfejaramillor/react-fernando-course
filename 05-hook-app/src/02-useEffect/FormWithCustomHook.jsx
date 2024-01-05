import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

    const initialForm = {
        username: '',
        email: '',
        password: ''
    }

    const {handleInputChange, handleResetForm, formState} = useForm(initialForm)
    
    const {username, email, password} = formState
    return (
        <>
            <h1>Formulario con Custom hook</h1>
            <hr />
            <input type="text" 
                className="form-control"
                placeholder="Luis Jaramillo..."
                name="username"
                value={username}
                onChange={handleInputChange}
            />
            <input type="email" 
                className="form-control mt-2"
                placeholder="luisfejaramillor@gmail.com..."
                name="email"
                value={email}
                onChange={handleInputChange}
            />

            <input type="password" 
                className="form-control mt-2"
                placeholder="Password..."
                name="password"
                value={password}
                onChange={handleInputChange}
            />

            <button onClick={handleResetForm} className="btn btn-primary mt-2" >Borrar</button>         
        </>
    )
}
