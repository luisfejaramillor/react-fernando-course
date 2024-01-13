import { renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"
import { act } from "react-dom/test-utils"

describe('Pruebas de useForm', () => { 
    const initialForm = {
        username: 'Luis jaramillo',
        email: 'luis@gmail.com'
    }
    test('Debe de regresar los valores el formulario', () => { 
        const {result} = renderHook(()=>useForm(initialForm))
        const {username, email} = result.current.formState
        expect(result.current).toEqual({
            formState: {username, email},
            handleInputChange: expect.any(Function),
            handleResetForm: expect.any(Function),
        })
    })

    test('handleInputChange debe cambiar el valor del formulario', () => {
        const newUser = 'Juan jose'
        const {result} = renderHook(()=>useForm(initialForm))
        const {handleInputChange} = result.current
        const target = {name: 'username', value: newUser}

        act(()=> {
            handleInputChange({target})
        })
        expect(result.current.formState.username).toBe(newUser)

    })

    test('reset debe resetar los valores del formulario', () => {
        const newUser = 'Juan jose'
        const {result} = renderHook(()=>useForm(initialForm))
        const {handleResetForm, handleInputChange} = result.current
        const target = {name: 'username', value: newUser}

        act(()=> {
            handleInputChange({target})
            handleResetForm()
        })

        expect(result.current).toEqual({
            formState: initialForm,
            handleInputChange: expect.any(Function),
            handleResetForm: expect.any(Function),
        })

    })
})