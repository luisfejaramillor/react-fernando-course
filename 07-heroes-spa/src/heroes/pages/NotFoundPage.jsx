import PropTypes from 'prop-types'

export const NotFoundPage = ({id}) => {
    return (
        <h3>Could not found id hero: {`"${id}"`}  </h3>
    )
}


NotFoundPage.propTypes = {
    id: PropTypes.string
}
