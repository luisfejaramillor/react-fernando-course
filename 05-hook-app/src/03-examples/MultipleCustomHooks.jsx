import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {
    const url = 'https://api.quotable.io/qotes/random'
    const {fetchState, handleFetchApi} = useFetch(url)
    const {data, isLoading, hasError} = fetchState
    console.log(hasError)
    return (
    <>
        <h1>Breaking bad quotes</h1>
        <hr />
        {
            isLoading && <h3>Loading...</h3>
        }
        {
            hasError && <h3>Falló</h3>
        }
        <p> {data && data} </p>
        <button onClick={handleFetchApi} >Get quote</button>
    </>
  )
}
