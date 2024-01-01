import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Test FirstApp component', () => { 

    // test('Must match with the snapshot', () => { 
    //     const title = 'Hola, soy luis test'
    //     const {container} = render(<FirstApp title={title} />)
    //     expect(container).toMatchSnapshot();
    // })
    test('Must show title in a h1 tag', () => { 
        const title = 'Hola, soy luis test'
        const {container, getByText, getByTestId} = render(<FirstApp title={title} />)
        expect(getByText(title)).toBeTruthy()
        expect(getByTestId('test-title').innerHTML).toBe(title)
        // const h1 = document.querySelector("h1")
        // expect(h1.innerHTML).toContain('Primer componente')
        
    })

    test('Debe enviar el subtitulo enviado por props', () => { 
        const title = 'Hola, soy luis test'
        const subTitle = 'Soy un subtitulo'
        const {getByText} = render( <FirstApp title="" subTitle={subTitle} /> )
        expect(getByText(subTitle)).toBeTruthy()
    })

})