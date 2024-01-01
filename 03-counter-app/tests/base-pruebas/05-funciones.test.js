import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas del archivo 05-funciones", () => {
    test("getUser debe retornar un objeto", () => {
        const userObj = {
            uid: "ABC123",
            username: "El_Papi1502",
        };
        const user = getUser()

        expect(user).toEqual(userObj)
    });

    test('getUsuarioActivo debe retonar un obj con el parametro pasado', () => { 
        const user = getUsuarioActivo('luis')
        const expected = {
            uid: 'ABC567',
            username: user.username
        }
        expect(user).toEqual(expected)
    })
});