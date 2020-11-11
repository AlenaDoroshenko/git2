import React from 'react'
import './index.css'

import Input from "./Input";
import Output from "./Output";
import Actions from "./Actions";

const App = () => (
        <>
            <header>Калькулятор</header>
            <main className='app'>
                <Output />
                <Input />
                <Actions />
            </main>
            <footer>Футер</footer>
        </>
    )

export default App