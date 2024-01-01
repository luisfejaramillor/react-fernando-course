import PropTypes from 'prop-types'

export const FirstApp = ({title, subTitle})=> {
    return(
        <>
            <h1 data-testid="test-title" >{title}</h1>
            <p>Primer componente</p>
            <p>{subTitle}</p>
        </>

    )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    subTitle: 'No hay subtitulo'
}