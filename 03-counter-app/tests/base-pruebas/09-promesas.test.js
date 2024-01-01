import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"
import { heroes } from "../../src/data/heroes"


describe('Tests on file 09-promesas', () => {{

    test('Func getHeroeByIdAsync should return a heroe', (done) => { 
        const id = 1
        getHeroeByIdAsync(id)
        .then( hero => {
            expect(hero).toEqual(heroes.find(hero => hero.id === id))
            done()
        })
    })


    test('Func getHeroeByIdAsync should return an error if hero does not exist', (done) => { 
        const id = 100
        getHeroeByIdAsync(id)
        .catch( error => {
            expect(error).toBe(`No se pudo encontrar el héroe ${id}`)
            done()
        })
    })

}})