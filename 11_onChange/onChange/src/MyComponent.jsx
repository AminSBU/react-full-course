import React, {useState} from "react";

function MyComponent(){
    const [name, setName] = useState("");

    const onChangeHandler = (event) => {
        setName(event.target.value);
    }

    return(
        <>
            <div>
                <input value={name} onChange={onChangeHandler}></input>
                <p>name: {name}</p>
            </div>
        </>
    );
}
export default MyComponent;