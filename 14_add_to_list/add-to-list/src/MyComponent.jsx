import React, { useState, useRef } from "react";

function MyComponent() {
  const [food, setFood] = useState(["apple", "orange", "strawberry"]);
  const inputRef = useRef(null);

    function AddToListHandler() {
        const newFood = inputRef.current.value;

        console.log(newFood);

        // Clear the input after adding
        inputRef.current.value = "";

        setFood([...food, newFood]);
    }

    function RemoveFromListHandler(){

    }

    return(
        <>
            <div>
                <ul>
                    <h2>Foods List</h2>
                    {food.map((food, index) => <li key={index}>{food}</li>)}
                </ul>

                <input ref={inputRef} type="text" placeholder="type your food ..." />
                <button onClick={AddToListHandler}>Add food</button>
            </div>
        </>
    );
}
export default MyComponent;