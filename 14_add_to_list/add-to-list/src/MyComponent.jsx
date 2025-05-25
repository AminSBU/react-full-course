import React, {useState} from "react";

function MyComponent(){
    const [food, setFood] = useState(["apple", "orange", "strawberry"]);

    function AddToListHandler(){

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
            </div>
        </>
    );
}
export default MyComponent;