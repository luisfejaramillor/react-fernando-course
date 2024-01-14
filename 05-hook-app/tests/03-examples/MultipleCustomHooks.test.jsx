import { render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples"
import { useFetch } from "../../src/hooks/useFetch"

jest.mock("../../src/hooks/useFetch")

describe('Pruebas en MultipleCustomHooks', () => { 
    test('De de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            fetchState: {
                data: null,
                isLoading: true,
                hasError: null,
            }
        })

        render( <MultipleCustomHooks/> )
        expect(screen.getByText('Loading...'))
        expect(screen.getByText('Breaking bad quotes'))
        
        const nextButton = screen.getByRole('button', {name: 'Get quote'})

        expect(nextButton.disabled).toBeTruthy()
    })

    test('Debe de mostrar un quote', () => {

        useFetch.mockReturnValue({
            fetchState: {
                data: [{author:'luis ajramillo', content:'trabaja coño',_id:1}],
                isLoading: false,
                hasError: null
            }
        })

        render( <MultipleCustomHooks/> )
        screen.debug()

    })
})