import { heroes } from "../data/heroes"

export const getHeroBySearchName = (name = '') => {
    name = name.toLocaleLowerCase().trim()
    if(name.length === 0) return []
    return heroes.filter( hero => hero.superhero.toLowerCase().trim().includes(name))
}
