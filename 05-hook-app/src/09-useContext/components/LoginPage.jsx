import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const LoginPage = () => {
  const {user, handleSetUser} = useContext(UserContext)

  return (
    <>
      <h1>Login page</h1>
      <hr />

      <pre>
        {user ? JSON.stringify(user, null ,3) : 'There are not users to show'}
      </pre>

      <hr />
      <button 
        className="btn btn-primary" 
        onClick={()=>handleSetUser({id:1, userName: 'Luis', email: 'luisfejaramillor@gmail.com'})} 
      >
        Establecer usuario
      </button>
    </>
  )
}
