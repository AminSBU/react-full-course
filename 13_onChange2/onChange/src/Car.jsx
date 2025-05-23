import React, {useState} from "react";

function Car(){
    const [car, setCar] = useState({year: 2025,
                                    model: "AMG",
                                    name: "Mercedes-Benz"});

    function onCarYearHandler(event){
        setCar({...car, year: event.target.value});
    }

    function onCarModelHandler(event){
        setCar({...car, model: event.target.value});
    }

    function onCarNameHandler(event){
        setCar({...car, name: event.target.value});
    }

    return(
        <>
            <div>
                <p>Your favorite car is {car.name}, {car.year}, {car.model}</p>

                <input type="number" value={car.year} onChange={onCarYearHandler}></input>
                <input type="text"   value={car.model}onChange={onCarModelHandler}></input>
                <input type="text"   value={car.name}onChange={onCarNameHandler}></input>
            </div>
        </>
    );
}
export default Car;