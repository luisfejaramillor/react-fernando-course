import { heroes } from "../data"




export const getHeroesByPublisher = (publisher) => {
    
    const publishers = ['DC Comics', 'Marvel Comics']

    if(!publishers.includes(publisher)){
        throw new Error(`${publisher} it not a valid publisher`);
    }

    return heroes.filter( hero => hero.publisher === publisher)
}
