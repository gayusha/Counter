import React, {useState} from 'react';

function App() {

    const [count, setCount] = useState(7);
    const [count10, setCount10] = useState(7);
    const [random, setRandom] = useState(7);


    const add = () => {
        setCount(count + 1);
    }
    const add10 = () => {
        setCount10(count10 + 10);
    }
    const randomAdd = () => {
        setRandom(random + Math.trunc(Math.random() * 10));
    }
    const minus = () => {
        setCount(count - 1);
    }
    const minus10 = () => {
        setCount10(count10 - 10);
    }
    const randomMinus = () => {
        setRandom(random - Math.trunc(Math.random() * 10));
    }
    const resetAll = () => {
        setCount(0);
        setCount10(0);
        setRandom(0);
    }
    return (

        <div>
            <hr/>

            <div>
                <button onClick={minus}>MINUS 1</button>
                <strong>{count}</strong>
                <button onClick={add}>PLUS 1</button>
            </div>
            <br/>
            <hr/>

            <div>
                <button onClick={minus10}>MINUS 10</button>
                <strong>{count10}</strong>
                <button onClick={add10}>PLUS 10</button>
            </div>
            <br/>
            <hr/>

            <div>
                <button onClick={randomMinus}>RANDOM MINUS</button>
                <strong>{random}</strong>
                <button onClick={randomAdd}>RANDOM PLUS</button>
            </div>
            <br/>
            <hr/>
            <div>
                <button onClick={resetAll}>RESET</button>
            </div>

            <br/>
            <hr/>
        </div>
    );
}

export default App;
