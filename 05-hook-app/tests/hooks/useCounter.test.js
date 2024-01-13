import { renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"
import { act } from "react-dom/test-utils"

describe('Pruebas sobre el useCounter', () => { 
    const initialValue = 100

    test('Debe retornar los valores por defecto', () => {  

        const {result} = renderHook(useCounter)
        const {counter, decrement, increment, reset} = result.current
        expect(counter).toBe(10)
        expect(decrement).toEqual(expect.any(Function))
        expect(increment).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))

    })

    test('El counter debe de generar el valor de 100', () => { {
        const {result} = renderHook(()=>useCounter(initialValue))
        const {counter} = result.current
        expect(counter).toBe(100)
    }})

    test('El increment debe aumentar el contador', () => { {
        const {result} = renderHook(()=>useCounter(initialValue))
        const {increment} = result.current

        act(()=> {
            increment()
            increment(2)
        })
        expect(result.current.counter).toBe(initialValue + 3)
    }})

    test('El decrement debe disminuir el contador', () => { {
        const {result} = renderHook(()=>useCounter(initialValue))
        const {counter ,decrement} = result.current
        act(()=> {
            decrement()
            decrement(2)
        })
        expect(result.current.counter).toBe(initialValue - 3)
    }})

    test('El reset debe resetear el contador', () => { {
        const {result} = renderHook(()=>useCounter(initialValue))
        const {reset, decrement} = result.current
        act(()=> {
            decrement()
            reset()
        })
        expect(result.current.counter).toBe(initialValue)
    }})
})