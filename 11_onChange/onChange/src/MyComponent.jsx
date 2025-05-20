import React, {useState} from "react";

function MyComponent(){
    const [name, setName] = useState("");
    const [inputValue, setInputValue] = useState("");

    const onChangeHandler = (event) => {
        setInputValue(event.target.value);
    }

    const onClickHandler = () => {
        setName(inputValue);
    }

    return(
        <>
            <div>
                <input value={inputValue} onChange={onChangeHandler} type="text"></input>
                <button onClick={onClickHandler}>SHOW</button>
                <p>Your name: {name}</p>
            </div>
        </>
    );
}
export default MyComponent;