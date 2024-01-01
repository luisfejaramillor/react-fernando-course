import { randomUrl } from "./constants/apiKey"

export const getRandomGif = async ()=> {
    try {
        const result = await fetch(`${randomUrl}`)

        if(!result.ok){
            throw new Error(`Failed to fetch: ${result.status}`);
        }

        const obj = await result.json();
        console.log(obj)

    } catch (error) {
        console.error('Error fetching BREAKING BAD QUOTES:', error);
    }


}