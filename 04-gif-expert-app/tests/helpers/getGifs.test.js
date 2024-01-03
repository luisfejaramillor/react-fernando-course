import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas sobre getGifs helper', () => { 

    test('Debe retornar un arreglo de gifs', async () => { 
        const result = await getGifs('peaky')
        expect(result.length).toBeGreaterThan(0)
        expect(result[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            img: expect.any(String)
        })
     })

 })