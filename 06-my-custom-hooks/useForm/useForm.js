import { useState } from "react"

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm)
    console.log(formState)
    const handleInputChange = ({target})=> {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]:  value
        })
    }

    const handleResetForm = ()=>{
       setFormState(initialForm)
    }


    return{
        formState,
        handleInputChange,
        handleResetForm
    }
}
