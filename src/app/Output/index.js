import React from 'react'

const Output = (props) => {
    const { total } = props

    return (
        <div className='output p-20'>{total}</div>
    )
}

export default Output