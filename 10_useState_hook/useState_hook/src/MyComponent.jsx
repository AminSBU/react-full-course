import React, {useState} from 'react'
function MyComponent(){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [count, setCounter] = useState(0);

    const updateParameters = () => {
        setName("Amin");
        setAge(34);
    }

    const updateCounter = () => {
        setCounter(count + 1);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <button onClick={updateParameters}>Set Name</button>

            <p>Counter: {count}</p>
            <button onClick={updateCounter}>Set Name</button>
        </div>
    );
}
export default MyComponent;