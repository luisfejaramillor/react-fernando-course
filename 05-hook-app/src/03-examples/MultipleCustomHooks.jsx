import { useCounter, useFetch } from "../hooks"
import { LoadingQuote, Quote, ErrorComponent } from "../03-examples"

export const MultipleCustomHooks = () => {
    const  {counter, increment, decrement, reset} = useCounter(1)
    const url = `https://api.quotable.io/quotes?page=1&limit=${counter}`
    const {fetchState} = useFetch(url)

    const {data, isLoading, hasError} = fetchState
    const {results} = !!data && data

    return (
    <>
        <h1>Breaking bad quotes</h1>
        <hr />
        {
            isLoading && <LoadingQuote/>
        }
        {
            hasError && <ErrorComponent/>
        }
        {
            results?.map( ({author, content,_id}) => (
                <Quote key={_id} quote={content} author={author} />
            ))
        }

        <button disabled={isLoading} onClick={increment} >Get quote</button>
        <button disabled={isLoading} onClick={decrement} >Reduce list</button>
        <button disabled={isLoading} onClick={reset} >Reset list</button> 
    </>
  )
}
