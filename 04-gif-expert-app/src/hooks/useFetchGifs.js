import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
    
    const [gifs, setGifs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const handleFetchGifs = async ()=> {
        setGifs(await getGifs(category))
        setIsLoading(false)
    }

    useEffect(() => {
        handleFetchGifs()
    }, [])
    
    return {gifs, isLoading}

}
