import React, {useState} from 'react'

function Counter(){
    const [count, setCounter] = useState(0);

    const increament = () => {
        setCounter(count + 1);
    }

    const decreament = () => {
        setCounter(count - 1);
    }

    const reset = () => {
        setCounter(0);
    }

    return(
    <>
        <div>
            <p>number: {count}</p>
            <button onClick={increament}>+</button>
            <button onClick={decreament}>-</button>
            <button onClick={reset}>reset</button>
        </div>
    </>
    );
}
export default Counter;