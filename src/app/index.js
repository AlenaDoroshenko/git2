import React, { useState } from 'react'
import './index.css'

import Input from "./Input";
import Output from "./Output";
import Actions from "./Actions";

const App = () => {
    const [total, setTotal] = useState(0)

    const handleSum = (value) => setTotal(total + value)

    return (
        <>
            <header>Калькулятор</header>
            <main className='app'>
                <Output total={total} />
                <Input/>
                <Actions handleSum={handleSum} />
            </main>
            <footer>Футер</footer>
        </>
    )
}

export default App