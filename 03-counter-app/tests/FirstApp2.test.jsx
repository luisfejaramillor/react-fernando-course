import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Test FirstApp component', () => { 
    const title = 'Soy un titulo'
    const subTitle = 'Soy un SUbtitulo'
    test('Should match the snapshot', () => { 

        const {container} = render(<FirstApp title={title} subTitle={subTitle} />)
        expect(container).toMatchSnapshot()
    })

    test('Must have the message of title', () => {  
        render( <FirstApp title={title} subTitle={subTitle} /> )
        expect(screen.getByText(title)).toBeTruthy()
    })

    test('Must show title in a h1 tag', () => {  
        render( <FirstApp  title={title} subTitle={subTitle} /> )
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title)
    })

    test('Debe enviar el subtitulo enviado por props', () => { 
        render( <FirstApp title="" subTitle={subTitle} /> )
        expect(screen.getByText(subTitle)).toBeTruthy()
    })
})