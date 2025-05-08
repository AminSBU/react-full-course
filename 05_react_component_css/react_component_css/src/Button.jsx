// Button.jsx
function Button({ onClick }){
  return (
    <button className='btn' onClick={onClick}>
      Click
    </button>
  );
}

export default Button