import { getHeroesByPublisher } from "../helpers"
import PropTypes from 'prop-types'

export const HeroesList = ({publisher}) => {
    const heroes = getHeroesByPublisher(publisher)

    return (
        <>
            <ul>
                {
                    heroes?.map( ({id, alter_ego, superhero}) => (
                    <li key={id} > {superhero} </li>
                    ))
                }
            </ul>
        </>
    )
}

HeroesList.propTypes = {
    publisher: PropTypes.string
}
