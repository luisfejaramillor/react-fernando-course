import { useEffect, useState } from "react"

export const useFetch = (url) => {    
    const [fetchState, setFetchState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const handleFetchApi = async ()=> {

        setFetchState(prevState => ({
            ...prevState,
            isLoading: true,
        }))

        try {

            const result = await fetch(url)
            console.log(result)
            if (!result.ok) {
                throw new Error(`Failed to fetch: ${result.status}`);
            }

            const data = await result.json()
            setFetchState({
                data,
                isLoading: false,
                hasError: null
            })
            
        } catch (error) {
            setFetchState(prevState => ({
                ...prevState,
                hasError: error.message,
                isLoading: false
            }))
        }
    }

    useEffect(() => {
        handleFetchApi()
    }, [url])
    


    return{
        handleFetchApi,
        fetchState
    }
}