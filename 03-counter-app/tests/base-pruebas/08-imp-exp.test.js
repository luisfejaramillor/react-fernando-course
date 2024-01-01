import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"
import { heroes } from "../../src/data/heroes"

describe('Test on file 08-imp-exp', () => { {
    test('Func getHeroeById should return a valid hero or undefined', () => { 
        const id = 1
        const {name, owner} = getHeroeById(id)
    
        expect(name).toEqual(expect.any(String))
        expect(owner).toEqual(expect.any(String))
    
    })

    test('Func getHeroeById should return undefined if could not found by id', () => { 
        const id = 100
        const hero = getHeroeById(id)
    
        expect(hero).toBeFalsy()
    
    })

    test('Func getHeroesByOwner should return an array with DCs heroes', () => { 
        const owner = 'DC'
        const heroesArr = getHeroesByOwner(owner)
    
        expect(heroesArr.length).toBe(3)
        expect(heroesArr).toEqual(heroes.filter( hero => hero.owner === owner))
    })

    test('Func getHeroesByOwner should return an array with MARVELs heroes', () => { 
        const owner = 'Marvel'
        const heroesArr = getHeroesByOwner(owner)
    
        expect(heroesArr.length).toBe(2)
        expect(heroesArr).toEqual(heroes.filter( hero => hero.owner === owner))
    })
}})