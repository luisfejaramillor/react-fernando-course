import { getImagen } from "../../src/base-pruebas/11-async-await";



describe('Test on file 11-async-await', () => {

    test('Func getImagen should return gifs url', async () => { 
        const url = await getImagen()
        expect(typeof url).toBe("string")
    })
})