import { useEffect, useState } from "react"

export const useFetch = (url) => {    
    const [fetchState, setFetchState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const handleFetchApi = async ()=> {

        setFetchState({
            ...fetchState,
            isLoading: true,
        })

        try {

            const result = await fetch(url)

            if (!result.ok) {
                console.log('halllo')
                setFetchState({
                    ...fetchState,
                    isLoading: false,
                    hasError: true,
                })
                throw new Error(`Failed to fetch: ${result.status}`);
            }

            const data = await result.json()
            setFetchState({
                data,
                isLoading: false,
                hasError: null
            })
            
        } catch (error) {
            setFetchState({
                ...fetchState,
                hasError: true,
                isLoading: false
            })
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
