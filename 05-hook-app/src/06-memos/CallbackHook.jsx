import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

    const [counter, setCounter] = useState(0)

    const increment = useCallback(
      (userValue) => {
        setCounter((value)=> value + userValue)
      },
      [],
    )
    
      console.log('holi')
    return (
        <>
            <h1>useCallback hook: {counter} </h1>
            <hr />

            <ShowIncrement increment={increment} />
        </>
    )
}
