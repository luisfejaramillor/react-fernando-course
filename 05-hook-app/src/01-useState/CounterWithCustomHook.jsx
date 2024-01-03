import { useCounter } from "../hooks/useCounter"



export const CounterWithCustomHook = () => {
    const {counter, increment, reset, decrement} = useCounter(0)
    return (
    <>
        <h1>Counter with a custom hook {counter}</h1>

        <hr />

        <button className="btn btn-primary" onClick={ ()=> increment(10)} >+1</button>
        <button className="btn btn-primary" onClick={reset}>reset</button>
        <button className="btn btn-primary" onClick={decrement}>-1</button>

    </>
    )
}
