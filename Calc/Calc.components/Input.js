import React from 'react'
import PropTypes from 'prop-types'


const Input = (props) => {

    const { handleSum } = props

    const handleOnChange = (event) => {

        const myValue = event.target.value

        handleSum(myValue)
    }

    return (
        <input onChange={handleOnChange} />
    )
}
Input.propTypes = {
    myValue: PropTypes.number
}

export default Input;

