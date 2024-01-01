import { render, screen, fireEvent, getByText } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Test on CounterApp', () => {
    
    const initialValue = 10

    test('Must match the snapshot', () => { 
        const {container} = render(
            <CounterApp value={initialValue} />
        )

        expect(container).toMatchSnapshot()

    })

    test('Must show value of var initialValue', () => { 
        render( <CounterApp value={100} /> )
        expect(screen.getByText('100')).toBeTruthy()
    })

    test('Must increse by 1 when clicking button "+"', () => { 
        render( <CounterApp value={initialValue} /> )
        fireEvent.click(screen.getByText('+'))
        expect(screen.getByText(initialValue + 1)).toBeTruthy()
    })

    test('Must decrese by 1 when clicking button "-"', () => { 
        render( <CounterApp value={initialValue} /> )
        fireEvent.click(screen.getByText('-'))
        expect(screen.getByText(initialValue - 1)).toBeTruthy()
    })

    test('Must reset counetr value to the initial when clicking reset button', () => { 
        render( <CounterApp value={initialValue} /> )
        fireEvent.click(screen.getByText('+'))
        screen.debug()
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))
        screen.debug()

        expect(screen.getByText(initialValue)).toBeTruthy()
    })
})