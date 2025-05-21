import React, {useState} from "react";

function ColorPicker(){
    const [color, setColor] = useState();

    function onColorHandler(event){
        setColor(event.target.value);
    }

    return(
        <>
            <div className="color-picker-container">
                <h2>Color Picker</h2>
                <div className="color-picker_show">
                    <p>color selected: {color}</p>
                </div>

                <label>select a color:</label>
                <input type="color" value={color} onChange={onColorHandler} />
            </div>
        </>
    );
}
export default ColorPicker;