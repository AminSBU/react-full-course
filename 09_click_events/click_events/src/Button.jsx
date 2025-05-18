
function Button(){
    let counter = 0;

    const handleClick = (e) => e.target.textContent = "Clicked";

    return(
            <button onClick={(e) => handleClick(e)}>Click Me</button>
    );
}
export default Button;