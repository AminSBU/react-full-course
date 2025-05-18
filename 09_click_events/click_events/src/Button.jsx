
function Button(){
    const handleClick = () => console.log("click");

    return(
        <button onClick={handleClick}>Click Me</button>
    );
}
export default Button;