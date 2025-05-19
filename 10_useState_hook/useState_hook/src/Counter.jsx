import React, {useState} from 'react'

function Counter(){
    const [count, setCounter] = useState();

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

        </div>
    </>
    );
}
export default Counter;