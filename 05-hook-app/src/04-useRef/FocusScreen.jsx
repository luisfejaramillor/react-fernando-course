import { useRef } from "react"

export const FocusScreen = () => {
    const inputRef = useRef()
    const handleClick = ()=> {
        console.log(inputRef)
    }
    return (
    <>
        <h1>Focus screen</h1>
        <hr />

        <input type="text" 
        placeholder="Ingrese su nombre"
        className="form-control" 
        ref={inputRef}
        />

        <button  onClick={handleClick} className="btn btn-primary mt-2">Set focus</button>
    </>
    )
}
