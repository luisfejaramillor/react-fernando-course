   
   
describe('Pruebas de Demo file', () => { 
    test('Prueba de espacios', ()=> {
        const message1 = 'hola'
        const message2 = message1.trim()
        expect(message1).toBe(message2)
    })
 })
