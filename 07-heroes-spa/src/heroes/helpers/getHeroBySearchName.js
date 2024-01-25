import { heroes } from "../data/heroes"

export const getHeroBySearchName = (name) => {
    const hero = heroes.find( hero => hero.superhero.toLowerCase().includes(name.toLowerCase()))
    return hero ? hero.id : ''
}
