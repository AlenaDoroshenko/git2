import React from 'react'

const Input = (props) => {
    const { inputValue, onChange } = props

    return (
        <div className='p-20'>
            <input
                name='calc-input'
                value={inputValue}
                onChange={event => onChange(event.target.value)}
                onFocus={event => event.target.select()}
            />
        </div>

    )
}

export default Input
