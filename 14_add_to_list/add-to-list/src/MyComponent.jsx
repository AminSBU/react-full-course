import React, {useState} from "react";

function MyComponent(){
    const [food, setFood] = useState(["apple", "orange", "strawberry"]);

    function AddToListHandler(){
        const newFood = document.getElementById(getFood).value;
        document.getElementById(getFood).value = "";

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

                <input type="text" id="getFood" placeholder="type your food ..."/>
                <button onClick={AddToListHandler}>Add food</button>
            </div>
        </>
    );
}
export default MyComponent;