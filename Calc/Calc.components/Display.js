import React from 'react'
import PropTypes from 'prop-types'


const Display = (props) => {

  return (
    <div>
      <h1> Результат: {props.total}</h1>
    </div>
  )
}

Display.propTypes = {
  total: PropTypes.number
}

export default Display;

