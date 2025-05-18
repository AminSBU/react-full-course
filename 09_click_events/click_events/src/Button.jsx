
function Button(){
    const handleClick = () => console.log("click");
    const handleClick2 = (name) => console.log(`${name} Click on me`);

    return(
        <>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClick2("Amin")}>Click Me</button>
        </>
    );
}
export default Button;