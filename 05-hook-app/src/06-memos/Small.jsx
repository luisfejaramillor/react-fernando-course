import PropTypes from 'prop-types'
import React from 'react'
// import { memo } from 'react'
//La forma actualo es la más comun

export const Small = React.memo(({value = 0}) => {

    console.log('first')
    return (
        <small>{value}</small>
    )
})

Small.propTypes = {
    value: PropTypes.number
}