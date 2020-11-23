import React from 'react'
import s from '../Calc.module.css'

const Buttons = (props) => {
    const { handleSum } = props

    return (

        <button className={s.button} onClick={handleSum}>+</button>
    )
}


export default Buttons;


/*{()=>props.click(props.num)}*/