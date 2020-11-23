import React, { useState } from 'react'
import Buttons from './Calc.components/Buttons'
import Display from './Calc.components/Display';
import Input from './Calc.components/Input';
import PropTypes from 'prop-types'


const Calc = () => {
    const [total, setTotal] = useState(0)
    const [result1, setResult] = useState(0)
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)


    const handleSum = (value) => setTotal(total + value)


    /*sumAction =()=>{
        this.setState({result: this.state.num1+this.state.num2})
     }

    minAction =()=>{
        this.setState({result: this.state.num1-this.state.num2})
     }

     resultAction =()=>{
        this.setState({result: this.state.num1+this.state.num2})
     }
     */

    const numChange = (event) => {
        console.log(num1)

    }
    const num2Change = (event) => {
        setNum2(event.target.value)
        console.log(num2)
        
    }
    const numResult = (value) => {
        setResult(num1 + num2)
        console.log(result1)
    }

    return (
        <div>

            <input onChange={numChange} />
            <input onChange={num2Change} />
            <button onClick={numResult} />

            <Input handleSum={handleSum} />

            <Display total={total} />

            <div>
                <Buttons handleSum={handleSum} />

            </div>

        </div>
    )
}

Calc.propTypes = {
    total: PropTypes.number,
    value: PropTypes.number,
    setTotal: PropTypes.number
}

export default Calc;

