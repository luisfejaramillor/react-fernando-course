import { getSaludo } from "../../src/base-pruebas/02-template-string";


describe('Pruebas de template strings file', () => { 

    test('getSaludo debe retornar "Hola Luis"', () => { 
        const name = 'Pedro'
        const message = getSaludo(name)
        expect(message).toBe(`Hola ${name}`)
     })
})