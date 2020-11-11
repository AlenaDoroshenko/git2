import React from 'react'

const Actions = (props) => {
    const { handleSum } = props

    return (
        <div className='p-20'>
            <div className='d-flex justify-content-space-between'>
                <button className='btn' onClick={handleSum}>+</button>
                <button className='btn'>-</button>
            </div>
            <div className='d-flex justify-content-space-between'>
                <button className='btn'>*</button>
                <button className='btn'> /</button>
            </div>
            <div><button className='btn btn-result'>=</button></div>
        </div>
    )
}

export default Actions