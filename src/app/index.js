import React, { useState } from 'react'
import './index.css'

import Input from "./Input";
import Output from "./Output";
import Actions from "./Actions";

const sum = (a, b) => Number(a) + Number(b)
const subtract = (a, b) => Number(a) - Number(b)
const multiply = (a, b) => Number(a) * Number(b)
const divide = (a, b) => Number(a) / Number(b)

const App = () => {
    const [total, setTotal] = useState(0)
    const [inputValue, setInputValue] = useState(0)

    const handleAction = (action) => {
        switch (action) {
            case 'sum': setTotal(sum(total, inputValue)); break
            case 'sub': setTotal(subtract(total, inputValue)); break
            case 'mul': setTotal(multiply(total, inputValue)); break
            case 'div': setTotal(divide(total, inputValue)); break
            default: { }
        }

        setInputValue(0)
    }

    const handleClearOutput = () => setTotal(0)
    const handleChangeValue = value => setInputValue(value)

    return (
        <>
            <header>Калькулятор</header>
            <main className='app'>
                <Output total={total} />
                <Input inputValue={inputValue} onChange={handleChangeValue} />
                <Actions
                    handleAction={handleAction}
                    clearOutput={handleClearOutput}
                />
            </main>
            <footer>Футер</footer>
        </>
    )
}

export default App
