import React, {useState} from 'react'
function MyComponent(){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);

    const updateParameters = () => {
        setName("Amin");
        setAge(34);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <button onClick={updateParameters}>Set Name</button>
        </div>
    );
}
export default MyComponent;