import { heroes } from "../data"

export const getHeroById = (id) => {
    if(!id) return
    return heroes.find(hero => hero.id === id)
}
