
function Button(){
    let counter = 0;

    const handleClick = (name) => {
        if(counter < 3){
            counter++;
            console.log(`${name} click me on Button ${counter} times`);
        }
        else{
            console.log(`${name} please dont click on button bro`);
        }
    }

    return(
            <button onClick={() => handleClick("Amin")}>Click Me</button>
    );
}
export default Button;