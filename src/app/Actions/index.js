import React from 'react'

const Actions = (props) => {
    const { handleAction, clearOutput } = props

    return (
        <div className='p-20'>
            <div className='d-flex justify-content-space-between'>
                <button className='btn' onClick={() => handleAction('sum')}>+</button>
                <button className='btn' onClick={() => handleAction('sub')}>-</button>
            </div>
            <div className='d-flex justify-content-space-between'>
                <button className='btn' onClick={() => handleAction('mul')}>*</button>
                <button className='btn' onClick={() => handleAction('div')}>/</button>
            </div>
            <div><button className='btn btn-clear' onClick={clearOutput}>clear</button></div>
        </div>
    )
}

export default Actions
