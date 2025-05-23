import React, {useState} from "react";

function Car(){
    const [car, setCar] = useState({year: 2025,
                                    model: "AMG",
                                    name: "Mercedes-Benz"});

    return(
        <>
            <div>
                <p>Your favorite car is {car.name}, {car.year}, {car.model}</p>


            </div>
        </>
    );
}
export default Car;