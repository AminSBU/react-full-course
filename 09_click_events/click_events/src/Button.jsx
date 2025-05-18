
function Button(){
    const handleClick = (e) => console.log(e);
    
    return(
            <button onClick={(e) => handleClick(e)}>Click Me</button>
    );
}
export default Button;