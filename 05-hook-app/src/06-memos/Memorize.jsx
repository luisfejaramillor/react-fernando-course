import { useState } from "react"
import { useCounter } from "../hooks"
import { Small } from "./Small"

export const Memorize = () => {

    const {counter, increment } = useCounter(0)
    const [isTrue, setIsTrue] = useState(false)

    const handleClick = ()=> {
        setIsTrue(!isTrue)
    }
    console.log('cambie')
    return (
        <>
            <h1>Countert: <Small value={counter} /> </h1>
            <hr />
            <button onClick={increment} className="btn btn-primary" >+1</button>
            <button onClick={handleClick} className="btn btn-primary" > { JSON.stringify(isTrue)} </button>
        </>
    )
}
