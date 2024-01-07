import { useMemo, useState } from "react"
import { useCounter } from "../hooks"

const heavyFunc = (iterator = 100) => {
    for(let i =0; i<iterator; i++){
        console.log(i)
    }
    return `${iterator} iteraciones hechas`
}

export const MemoHook = () => {

    const {counter, increment } = useCounter(4000)
    const [isTrue, setIsTrue] = useState(false)

    const memorizedValue = useMemo(() => heavyFunc(counter), [counter])
    console.log(memorizedValue)

    const handleClick = ()=> {
        setIsTrue(!isTrue)
    }

    return (
        <>
            <h1>Counter:  <small> {counter} </small> </h1>
            <hr />

            <h4> {memorizedValue} </h4>

            <button onClick={increment} className="btn btn-primary" >+1</button>
            <button onClick={handleClick} className="btn btn-primary" > { JSON.stringify(isTrue)} </button>
        </>
    )
}
